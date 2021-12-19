var firebaseConfig = {
    apiKey: "AIzaSyATW9KjKNI5ufuBSLTKgl_7x1fPLuNdQvw",
    authDomain: "kwitter-52e0a.firebaseapp.com",
    databaseURL: "https://kwitter-52e0a-default-rtdb.firebaseio.com",
    projectId: "kwitter-52e0a",
    storageBucket: "kwitter-52e0a.appspot.com",
    messagingSenderId: "1032151572016",
    appId: "1:1032151572016:web:0a316cbeffb4b50154d7f5",
    measurementId: "G-L0BJK0JX5H"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose  : "adding user"
    });
}