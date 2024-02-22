import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from '../database/firebase';

const useImageUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    const storageRef = ref(app.storage(), `images/${file.name}`);
    
    try {
      const uploadTask = uploadBytes(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setError(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(storageRef);
          setImageUrl(downloadURL);
        }
      );
    } catch (error) {
      setError(error);
    }
  };

  return { imageUrl, uploadProgress, error, uploadImage };
};

export default useImageUpload;
