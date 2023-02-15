import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

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
export const createUserDocumentFromAuth = async (userAuth) => {
    // Here we point to a collection "users" and a document with id=uid 
    const userDocRef = doc(db,'users',userAuth.uid);

    // Here we will get data related to the user
    const userSnapshot = await getDoc(userDocRef);

    // We can check if doc (user in our case already exists in database by using "userSnapshot.exists()")
    if(!userSnapshot.exists())
    {
        // Get username and email of user to add
        const {displayName , email } = userAuth;

        // Get creation date
        const createdAt = new Date();

        try
        {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating user',error.message);
        }
    }

    return userDocRef

}

