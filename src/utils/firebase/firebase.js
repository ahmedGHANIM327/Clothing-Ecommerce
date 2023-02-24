import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc , 
    collection , 
    writeBatch ,
    query,
    getDocs,
    addDoc
} from 'firebase/firestore';

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


/* 
    *******************************************************************************
  -> Function for Categories and Products
    *******************************************************************************
*/

// Add products and categories to Firestore
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    // Get collection of categories
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
    })

    await batch.commit();
    console.log('batch done')

}

// Add collection of products
export const addCollectionProducts = async (collectionKey,objectsToAdd) => {
    // Get collection of categories
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,""+object.id);
        batch.set(docRef,object);
        //console.log(object);
    })

    await batch.commit();
    console.log('batch done')
}

// Add collection of categories
export const addCollectionCategories = async (collectionKey,objectsToAdd) => {
    // Get collection of categories
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,""+object.id);
        batch.set(docRef,object);
    })

    await batch.commit();
    console.log('batch done')
}

// Get Categories and Products from firebase
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories');

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
        const {title,items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc
    },{})

    return categoryMap
}

// Get Products
export const getProducts = async () => {
    const collectionRef = collection(db,'products');

    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const productsMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
        const {id,...items} = docSnapshot.data();
        acc[id] = {id,...items};
        return acc
    },{})

    return productsMap
}

/* 
    *******************************************************************************
  -> Function for Authentification and users
    *******************************************************************************
*/

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

// Sign Out User
export const signOutUser = async () => await signOut(auth)

//Observer Listener : check user authentification status
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback)


/************************************************************/
/***************** Subscription *****************************/
/************************************************************/
export const addSubscriber = async (email) => 
{
  if (!email) return;
  
  // point to user in db in 'users' collection
  const subDocRef = doc(db, 'subscribers', email);

  // gat user from db -> collection
  const subSapshot = await getDoc(subDocRef);

  if (!subSapshot.exists()) {
    const subscriptionDate = new Date()
    try {
      await setDoc(subDocRef, {
        email,
        subscriptionDate,
      });
    } catch (error) {
      console.error('can\'t add user');
    }
    return true
  }

  return false
}

/**************************************/
// Test functions 

// Add new data to existing collection with random id
export const addDocTest = async () => 
{
  const docRef = await addDoc(collection(db, "test_collection"), {
    country: "Japan",
    name:"Tokyo"
  });
  console.log("Document written with ID: ", docRef.id);
}

// Edit existing data in collection with random id
export const setDocTest = async () => 
{
  await setDoc(collection(db, "test_collection","id_number_here"), {
    country: "Japan",
    name:"Tokyo"
  });
}


