import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCX8Gy0p86gGSa72cVV4OuZdxsof7z9u28",
  authDomain: "proyectocoder45060jc.firebaseapp.com",
  projectId: "proyectocoder45060jc",
  storageBucket: "proyectocoder45060jc.appspot.com",
  messagingSenderId: "415983537170",
  appId: "1:415983537170:web:0c2cca97dea2a7845b5ccb",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, "productos")