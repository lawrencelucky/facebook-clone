import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAy7ayaIpcg0xzV_IdcnhYbn-S0f0wXnfA',
  authDomain: 'facebook-clone-c9c00.firebaseapp.com',
  projectId: 'facebook-clone-c9c00',
  storageBucket: 'facebook-clone-c9c00.appspot.com',
  messagingSenderId: '655273155219',
  appId: '1:655273155219:web:35b19aeb86cf2ab6ca4b66',
  measurementId: 'G-DZTKWSVH73',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
