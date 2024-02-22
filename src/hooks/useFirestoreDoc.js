import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '../database/firebase';

// Custom hook to fetch data from Firestore
const useFirestoreData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const collectionRef = collection(db, collectionName);
        const querySnapshot = await getDocs(collectionRef);
        const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(newData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (unsubscribe)
    return () => {};
  }, [collectionName]);

  return { data, loading, error };
};

export default useFirestoreData;






  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const db = getFirestore(app);
  //       const userCollectionRef = collection(db, 'product');
  //       const querySnapshot = await getDocs(userCollectionRef);
  //       const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //       setUsers(userData);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []); // Dependency array to ensure useEffect runs only once on component mount
