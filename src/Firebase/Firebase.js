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
const ROOMS = "Rooms";
const MESSAGES = "Messages";

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

export const SearchUserByUid = uid => {
  const usersCollection = firestore.collection(USERS);
  return (
    usersCollection
      // .orderBy("createdAt", "desc")
      .where("uid", "==", uid)
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

// uid가 없으면 새로 만들고 있으면 안만듬.
export const createRoom = uid => {
  firestore
    .collection(ROOMS)
    .doc(uid)
    .set({
      uid
    });

  firestore
    .collection(ROOMS)
    .doc(uid)
    .collection(MESSAGES)
    .add({
      isQuestion: false,
      text: `안녕하세요 😊 　　　　　　　　　 궁금한 것이 있으시면 무엇이든 물어봐주세요.`,
      createdAt: new Date()
    });
};

// 메세지 불러오는 메소드
export const getMessages = uid => {
  const roomsCollection = firestore.collection(ROOMS);
  return roomsCollection
    .where("uid", "==", uid)
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        console.log(data);
        return data;
      });
    });
};

export { firestore };
