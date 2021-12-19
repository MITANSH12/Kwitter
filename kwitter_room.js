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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey; 
      //Start code
console.log("Room Name - " + Room_names);
row = "div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName (name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

function send () {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
