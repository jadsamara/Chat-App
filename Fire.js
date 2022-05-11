import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initalizeApp({
        apiKey: "AIzaSyAVwOJkIurV47vZO7RxKVwKG76M_adqagg",
        authDomain: "chatapp-6060f.firebaseapp.com",
        projectId: "chatapp-6060f",
        storageBucket: "chatapp-6060f.appspot.com",
        messagingSenderId: "391016870626",
        appId: "1:391016870626:web:823186a02548cec3af64bb",
      });
    }
  };

  firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  db = firebaseApp.firestore();
  auth = firebase.auth();

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth(), currentUser || {}).uid;
  }
}

export default new Fire();
