
function addUser()
{
   user_name = document.getElementById("user_name").value;
   
   localStorage.setItem("user_name" , user_name);

   window.location = "page.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyC0gZWwpg4VVi4SIIrB0xJUF_hKzuS9d3g",
    authDomain: "kwitter-f9785.firebaseapp.com",
    databaseURL: "https://kwitter-f9785-default-rtdb.firebaseio.com",
    projectId: "kwitter-f9785",
    storageBucket: "kwitter-f9785.appspot.com",
    messagingSenderId: "431046908261",
    appId: "1:431046908261:web:b659e3ee7857d41f7e298c"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById()

function addRoom()
    {
        user_name = document.getElementById("user_name").value;
        firebase.database().ref("/").child(user_name).update({
            purpose: "adding User"
        });
    }