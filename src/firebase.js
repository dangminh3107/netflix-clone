import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLC6HuenkkM4HhsfE2EzyzJAIaeJuEPaA",
  authDomain: "netflix-clone-524e7.firebaseapp.com",
  projectId: "netflix-clone-524e7",
  storageBucket: "netflix-clone-524e7.appspot.com",
  messagingSenderId: "947988192779",
  appId: "1:947988192779:web:50e4ca0ab7beff21ecf10e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;