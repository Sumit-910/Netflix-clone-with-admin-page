import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC_Bj9nkvBI1d87m0Wv5Wx9SvySAUCwkDw",
  authDomain: "netflix-clone-e4720.firebaseapp.com",
  projectId: "netflix-clone-e4720",
  storageBucket: "netflix-clone-e4720.appspot.com",
  messagingSenderId: "289706158301",
  appId: "1:289706158301:web:588a3a5ef5bce570b2d334",
  measurementId: "G-11V6V47MG6"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
