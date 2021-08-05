import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  projectId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  storageBucket: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  messagingSenderId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  appId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
