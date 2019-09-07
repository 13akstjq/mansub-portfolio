import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDnjwThO3x_a6YKmI_52jm9oUcNOOVNaPQ",
  authDomain: "mansub-portfolio.firebaseapp.com",
  databaseURL: "https://mansub-portfolio.firebaseio.com",
  projectId: "mansub-portfolio",
  storageBucket: "mansub-portfolio.appspot.com",
  messagingSenderId: "13321522848",
  appId: "1:13321522848:web:ebe5e5c7f4da6619"
};

var provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);

const firestore = new firebase.firestore();

const PROJECTS = "Projects";
const USERS = "Users";

export const getProjects = () => {
  const projectsCollection = firestore.collection(PROJECTS);
  return (
    projectsCollection
      // .orderBy("createdAt", "desc")
      .get()
      .then(docSnapshots => {
        return docSnapshots.docs.map(doc => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
      })
  );
};

// uid가 없으면 새로 만들고 있으면 안만듬.
export const signin = ({ displayName, photoURL, uid, email }) => {
  firestore
    .collection(USERS)
    .doc(uid)
    .set({
      uid,
      email,
      displayName,
      photoURL
    });
};

export { firestore };
