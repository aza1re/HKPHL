import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// TODO replace with your Firebase project config
const firebaseConfig = {
  apiKey: "...",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "...",
  appId: "...",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const tournamentsCol = collection(db, 'tournaments')
export const gamesCol       = collection(db, 'games')
export const standingsCol   = collection(db, 'standings')
export const playersCol     = collection(db, 'players')
export const teamsCol       = collection(db, 'teams')

// add addDoc to the list of exports:
export { query, where, onSnapshot, orderBy, getDocs, addDoc }