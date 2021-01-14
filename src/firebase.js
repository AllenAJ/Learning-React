import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ngqbtIwxhfZ_lHrxs0pJNcPfANEMheg",
  authDomain: "react-slack-clone-acfe2.firebaseapp.com",
  projectId: "react-slack-clone-acfe2",
  storageBucket: "react-slack-clone-acfe2.appspot.com",
  messagingSenderId: "515865215323",
  appId: "1:515865215323:web:8a60ceb1cd1a1f0f395a7e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  // Initialize googleProvider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  // Ask user to choose gmail account
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {
      displayName,
      email,
      photoURL
    } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }
  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error in getUserDocument',error.message)
  }
}
