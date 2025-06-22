import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXYi7MCm-aMBeh3bEjs0eJ5eHcGjf9-bw",
  authDomain: "achieve-cb085.firebaseapp.com",
  databaseURL:
    "https://achieve-cb085-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "achieve-cb085",
  storageBucket: "achieve-cb085.appspot.com",
  messagingSenderId: "260668035138",
  appId: "1:260668035138:web:ba67a28ffd83d01b279ddb",
  measurementId: "G-JWFXTNTCGZ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tournamentsCol = collection(db, "tournaments");
export const gamesCol = collection(db, "games");
export const standingsCol = collection(db, "standings");
export const playersCol = collection(db, "players");
export const teamsCol = collection(db, "teams");

export { query, where, onSnapshot, orderBy, getDocs, addDoc };
