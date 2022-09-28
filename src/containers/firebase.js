import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPc73i7qV3ae1enWv7CiwyMTVPkof2ErI",
    authDomain: "dashboard-64ae7.firebaseapp.com",
    projectId: "dashboard-64ae7",
    storageBucket: "dashboard-64ae7.appspot.com",
    messagingSenderId: "952003519053",
    appId: "1:952003519053:web:82910b2eae5f73a5e37204",
    measurementId: "G-LTP1RY140L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db,  auth} 