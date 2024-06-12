// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCknQtWGq_M1WKEZ91sJ4k2-0f_d3JMFnQ",
  authDomain: "detection-2de0e.firebaseapp.com",
  projectId: "detection-2de0e",
  storageBucket: "detection-2de0e.appspot.com",
  messagingSenderId: "726952764140",
  appId: "1:726952764140:web:943326300f22d182893bc9",
  measurementId: "G-XPF08BTHZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)