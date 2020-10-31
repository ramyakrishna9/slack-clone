import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAa3P1icpLA1tI-5AouSEyIUSldo10383c",
    authDomain: "slack-clone-ad202.firebaseapp.com",
    databaseURL: "https://slack-clone-ad202.firebaseio.com",
    projectId: "slack-clone-ad202",
    storageBucket: "slack-clone-ad202.appspot.com",
    messagingSenderId: "493962881344",
    appId: "1:493962881344:web:34efe37bb56be42f5032a5",
    measurementId: "G-DVX0RSZ6RD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;