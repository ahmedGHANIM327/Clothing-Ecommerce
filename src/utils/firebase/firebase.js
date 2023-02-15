import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaMAxJZaFgp-H4O8tHGg6juFOaYTPLqzw",
    authDomain: "clothing-ecommerce-db-d0bf9.firebaseapp.com",
    projectId: "clothing-ecommerce-db-d0bf9",
    storageBucket: "clothing-ecommerce-db-d0bf9.appspot.com",
    messagingSenderId: "322846113124",
    appId: "1:322846113124:web:00c1efb88e87140e938e71"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);

// Firestore
export const db = getFirestore();

// Add users to collection
export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {
    if (!userAuth) return;
  
    // point to user in db in 'users' collection
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    // gat user from db -> collection
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
  
    return userDocRef;
}

// Sign up using email and password form
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  };

// Sign In with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
};

