import { getApp, getApps } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APPKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MASSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  // measurementId: process.env.FIREBASE_MEASUREMENTId,
};

if (!firebase.apps.length) {
  !getApps().length ? firebase.initializeApp(firebaseConfig) : getApp();
}

const authentication = firebase.auth();

export { authentication };
