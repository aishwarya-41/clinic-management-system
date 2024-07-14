import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCo6fQFnGvwFHFFfWkIrtlXdUG9POJUCWk",
  authDomain: "clinic-management-system-458c8.firebaseapp.com",
  projectId: "clinic-management-system-458c8",
  storageBucket: "clinic-management-system-458c8.appspot.com",
  messagingSenderId: "179781060032",
  appId: "1:179781060032:web:21adfac9dc738dddddf425",
  measurementId: "G-P1PWX31SWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app); 

// Export the app and db for use in other modules
export { app, db };
