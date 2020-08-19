import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxx",
  measurementId: "xxxxx",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

(async () => {
  try {
    const collection = db.collection("sample_collection");
    const docRef = await collection.add({
      number: 12345,
      text: "Sample document",
    });
    const snapShot = await collection.doc(docRef.id).get();
    console.log("Added: ", snapShot.data());
  } catch (error) {
    console.error("Error: ", error);
  }
})();
