import React, { Component } from 'react';
import * as firebase from 'firebase'

export default class FirebaseC extends Component {
    // Initialize Firebase
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "xxx",
            authDomain: "xxx.firebaseapp.com",
            databaseURL: "https://xxx.firebaseio.com",
            storageBucket: "xxx.appspot.com",
        });
    }
}
