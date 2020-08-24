import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCCWETmxwlbM_2EgK4ps1pC_Bll81iG7do",
  authDomain: "monica-blog.firebaseapp.com",
  databaseURL: "https://monica-blog.firebaseio.com",
  projectId: "monica-blog",
  storageBucket: "monica-blog.appspot.com",
  messagingSenderId: "210933191578",
  appId: "1:210933191578:web:35f385a9553bf92869e023",
  measurementId: "G-V3RJDKECN2"
};
// Initialize Firebase
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
