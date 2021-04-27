import React, { Component } from 'react';
import './App.css';
import ThreadDisplay from './ThreadDisplay/Components/ThreadDisplay'
import firebase from 'firebase/app';
import 'firebase/database';

//import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
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

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }
  render() {
    return (
      <ThreadDisplay database = { this.database } />
    );
  }
}

export default App;
