import firebase from "firebase"


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


const messaging=firebase.messaging();


export function initNotification(){
    console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      messaging.getToken().then((currentToken)=>{
          if(currentToken){
              console.log(currentToken)
          }else{
              console.log("no instance token availabe")
          }
      }).catch((error)=>{
          console.log("error",error)
      })
     
      } 
    });
    // [END request_permission]
  }


