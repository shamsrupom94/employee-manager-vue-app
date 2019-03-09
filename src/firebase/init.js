import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBWbDxl_aDk7uKrvF9SzdMx20y8aijORG8",
    authDomain: "vue-crud-employee-manager.firebaseapp.com",
    databaseURL: "https://vue-crud-employee-manager.firebaseio.com",
    projectId: "vue-crud-employee-manager",
    storageBucket: "vue-crud-employee-manager.appspot.com",
    messagingSenderId: "480003567630"
  };

 const firebaseApp= firebase.initializeApp(config);
 export default firebaseApp.firestore()