import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

export const createAppointment = async (appointmentData) => {
  try {
    const docRef = await addDoc(collection(db, "appointments"), appointmentData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding appointment:", error);
    throw error;
  }
};

export const getAppointments = async () => {
  const querySnapshot = await getDocs(collection(db, "appointments"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
