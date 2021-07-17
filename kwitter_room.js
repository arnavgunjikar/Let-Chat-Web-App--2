var firebaseConfig = {
    apiKey: "AIzaSyDdT0apEZxU_6gdhwuIFmrsr7BxXJEMgMI",
    authDomain: "let-chat-web-app-73b3a.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-73b3a-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-73b3a",
    storageBucket: "let-chat-web-app-73b3a.appspot.com",
    messagingSenderId: "131949944407",
    appId: "1:131949944407:web:cd11ae077a549e0b580d12",
    measurementId: "G-5Y1BMT13EE"
  };
  firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}