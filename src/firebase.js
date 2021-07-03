import * as firebase from 'firebase/app'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBSVgAObkdDn0OIK_qRiZDmLyfPqq6_P6U",
    authDomain: "file-upload-f832d.firebaseapp.com",
    projectId: "file-upload-f832d",
    storageBucket: "file-upload-f832d.appspot.com",
    messagingSenderId: "771727632719",
    appId: "1:771727632719:web:4d3627fdb72cab8d5d3d3a"
  };
  // Initialize Firebase
  export const app=firebase.initializeApp(firebaseConfig);