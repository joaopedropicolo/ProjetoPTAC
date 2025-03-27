import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWO7iDQKzj60dlv9kn19vB56tXr9vA0Hk",
  authDomain: "react-login-df39d.firebaseapp.com",
  projectId: "react-login-df39d",
  storageBucket: "react-login-df39d.firebasestorage.app",
  messagingSenderId: "308662685876",
  appId: "1:308662685876:web:9a7072cbef76375facc7e1",
  measurementId: "G-9JHTN6YKYK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };