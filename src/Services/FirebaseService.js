import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import dotenv from "dotenv";
dotenv.config();
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mansub-portfolio.firebaseapp.com",
  databaseURL: "https://mansub-portfolio.firebaseio.com",
  projectId: "mansub-portfolio",
  storageBucket: "mansub-portfolio.appspot.com",
  messagingSenderId: "13321522848",
  appId: "1:13321522848:web:ebe5e5c7f4da6619"
};

// var provider = new firebase.auth.GoogleAuthProvider();

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
      text: `안녕하세요 😊 궁금한 것이 있으시면 무엇이든 물어봐주세요.`,
      createdAt: new Date()
    });
};

// 메세지 불러오는 메소드
export const getMessages = uid => {
  const MessagesCollection = firestore
    .collection(ROOMS)
    .doc(uid)
    .collection(MESSAGES)
    .orderBy("createdAt");
  return MessagesCollection.get().then(docSnapshots => {
    return docSnapshots.docs.map(doc => {
      let data = doc.data();
      data.id = doc.id;
      return data;
    });
  });
};

export const sendQuestion = (text, uid, ts) => {
  firestore
    .collection(ROOMS)
    .doc(uid)
    .collection(MESSAGES)
    .doc(ts)
    .set({
      isQuestion: true,
      text,
      ts,
      createdAt: new Date()
    });
};

export const SearchMessageByts = async (uid, ts) => {
  const data = await firestore
    .collection(ROOMS)
    .doc(uid)
    .collection(MESSAGES)
    .where("ts", "==", ts)
    .get()
    .then(docSnapshots => {
      return docSnapshots.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
    });
  return data;
};

export const sendAnswer = async (text, uid, ts) => {
  const data = await SearchMessageByts(uid, ts);
  if (data.length === 0) {
    console.log("새로운 답장");
    firestore
      .collection(ROOMS)
      .doc(uid)
      .collection(MESSAGES)
      .doc(ts)
      .set({
        isQuestion: false,
        text,
        ts,
        createdAt: new Date()
      });
    return true;
  } else {
    return false;
  }
};

export { firestore };
