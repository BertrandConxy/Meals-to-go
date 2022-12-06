// Optionally import the services that you want to use
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJJqiI4jiIwCwe4bFEiF3-eDFrUgRUMkc',
  authDomain: 'mealstogo-a470b.firebaseapp.com',
  projectId: 'mealstogo-a470b',
  storageBucket: 'mealstogo-a470b.appspot.com',
  messagingSenderId: '789379158100',
  appId: '1:789379158100:web:fe2d3eab21ed425ae9ddc1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
