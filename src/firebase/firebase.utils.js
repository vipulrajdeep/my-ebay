import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCex5qiJNRxESFg0HFPvFes3-K3zZdROMA",
  authDomain: "my-ebay-db.firebaseapp.com",
  databaseURL: "https://my-ebay-db.firebaseio.com",
  projectId: "my-ebay-db",
  storageBucket: "my-ebay-db.appspot.com",
  messagingSenderId: "185304772013",
  appId: "1:185304772013:web:d179fdd652d1031108c524",
  measurementId: "G-1J87ED3RDP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
