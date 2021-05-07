import React, { Component } from 'react';
import '../App.css';
import ThreadDisplay from '../ThreadDisplay/Components/ThreadDisplay'
import firebase from 'firebase/app';
import 'firebase/database';
//import "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.css';
/*export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }*/

class Forums extends Component {
  constructor(props) {
    super(props);

    const config = {
      apiKey: "AIzaSyC24MPtvE-CR0IqwWXQNNkMhCgWzlvPP1I",
      authDomain: "budsbeaglesbeer.firebaseapp.com",
      projectId: "budsbeaglesbeer",
      storageBucket: "budsbeaglesbeer.appspot.com",
      messagingSenderId: "678342376376",
      appId: "1:678342376376:web:0190b4b4717bea9a57ad4d",
      measurementId: "G-4TW6FW49RB"
    };
    /*if (!firebase.apps.length) {
      firebase.initializeApp({});
    }else {
      firebase.app(); // if already initialized, use that one
    } */
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(config);
      this.database = this.app.database();

    }else {
      firebase.app(); // if already initialized, use that one
      //this.app.database();
    }


    // this.app = firebase.initializeApp(config);
    // this.database = this.app.database();
  }
  render() {
    return (
      <ThreadDisplay database = { this.database } />
    );
  }
}

export default Forums;
