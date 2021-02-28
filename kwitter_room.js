var firebaseConfig = {
      apiKey: "AIzaSyBy3MlpfTe5_ygNdIVCBZL_MnUAZQw8mHQ",
      authDomain: "kwitter-4604b.firebaseapp.com",
      databaseURL: "https://kwitter-4604b-default-rtdb.firebaseio.com",
      projectId: "kwitter-4604b",
      storageBucket: "kwitter-4604b.appspot.com",
      messagingSenderId: "600747187732",
      appId: "1:600747187732:web:d17fea16a2b9ed49a91101"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

    function addroom()
    {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"adding_room_name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("roomname = " + Room_names);
       row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
      
}