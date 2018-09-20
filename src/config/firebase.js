import firebase from 'firebase';

  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyD9AzPKH8ePhrYdOq1whGUPKK68Wi1WjA0",
      authDomain: "todo-app-1201.firebaseapp.com",
      databaseURL: "https://todo-app-1201.firebaseio.com",
      projectId: "todo-app-1201",
      storageBucket: "todo-app-1201.appspot.com",
      messagingSenderId: "617373190138"
    };
  firebase.initializeApp(config);

export default firebase;

