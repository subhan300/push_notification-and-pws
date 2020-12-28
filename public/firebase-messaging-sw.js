
// importScripts('https://www.gstatic.com/firebasejs/8.0.2/firebase-app.js');
// // importScripts('https://www.gstatic.com/firebase/8.0.0/firebase-messaging.js');
// // importScripts('https://www.gstatic.com/firebase/init.js');

// importScripts("https://www.gstatic.com/firebasejs/8.0.2/firebase-messaging.js")




importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyCPgvtYrXxx-5yMg8fyf3E4OK_o8S6ldQc",
    authDomain: "pwa-class-2.firebaseapp.com",
    databaseURL: "https://pwa-class-2.firebaseio.com",
    projectId: "pwa-class-2",
    storageBucket: "pwa-class-2.appspot.com",
    messagingSenderId: "976800103003",
    appId: "1:976800103003:web:173453cce5acab47a25d7e",
    measurementId: "G-6NG9PK1S2S"
  };


  firebase.initializeApp(firebaseConfig);

  firebase.messaging();