import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'; // Import getFirestore to access Firestore instance
import app from "../database/firebase";
import useFirestoreData from "../hooks/useFirestoreDoc";
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, uploadBytes, getDownloadURL } from "@firebase/storage";


const ProductUpload = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { data } = useFirestoreData("category");
 
  // Getting Data form inputs
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  // category select tag onchange
  const handleChange = (e) => {
    const { id, name } = JSON.parse(e.target.value);
    setCategoryId(id);
    setCategory(name);
  };
// image upload
const handleImageUpload = async (file) => {
  try {
    const storage = getStorage(app)
    const storageRef = ref(storage, 'images/' + file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setImageUrl(url);
    console.log("File uploaded successfully!");

  } catch (error) {
    console.error("Error uploading file: ", error);
  }
};
// image upload onchange
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  // on submit form
  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Access Firestore instance
    const firestore = getFirestore(app);

    // Construct data object
    const productData = {
      title: title,
      description: des,
      price: price,
      imageUrl: imageUrl,
      category: category,
      categoryId: categoryId,
      userId: currentUser ? currentUser.uid : null  
    };

    // Choose collection where you want to store the document
    const collectionRef = collection(firestore, "product");

    // Upload data to Firestore
    addDoc(collectionRef, productData)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        navigate('/profile');
         // Redirect to '/profile' after successful upload
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  // markup
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <form className="newsletter-bg p-5" onSubmit={onSubmit}>
        <h1 className="text-center font-xl font-bolt py-5">
          Market<span className="prime-color">Spere</span>
        </h1>
        <div className="mb-4">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label font-bolt prime-color"
          >
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label font-bolt prime-color"
          >
            Description
          </label>
          <input
            value={des}
            onChange={(e) => setDes(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-5"> 
      <input type="file" onChange={handleFileInputChange} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label font-bolt prime-color"
          >
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Dollars"
          />
        </div>
        <select
          value={category.name} // Changed from category.name
          onChange={handleChange}
          className="form-select"
          aria-label="Default select example"
        >
          <option>Choose your category</option>
          {data.map((item) => (
            <option
              key={item.id}
              value={JSON.stringify({ id: item.id, name: item.category })}
            >
              {item.category}
            </option>
          ))}
        </select>
        <button type="submit" className="mt-4 login-btn">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
