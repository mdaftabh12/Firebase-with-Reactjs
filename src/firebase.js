import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCl3h5UeudZxrxPLgNLh8iEy3G29xHFe4A",
    authDomain: "app-80f5b.firebaseapp.com",
    projectId: "app-80f5b",
    storageBucket: "app-80f5b.appspot.com",
    messagingSenderId: "543616493714",
    appId: "1:543616493714:web:fd9942eddd4fbb35289e4b",
    databaseURL: "https://app-80f5b-default-rtdb.firebaseio.com",
  };

  
  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);