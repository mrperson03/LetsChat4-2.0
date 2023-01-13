var firebaseConfig = {
    apiKey: "AIzaSyDBqPDiDGAAPd7-y2l886deIOZKVFYAawE",
    authDomain: "letschat-1f8ed.firebaseapp.com",
    databaseURL: "https://letschat-1f8ed-default-rtdb.firebaseio.com",
    projectId: "letschat-1f8ed",
    storageBucket: "letschat-1f8ed.appspot.com",
    messagingSenderId: "537264670561",
    appId: "1:537264670561:web:e08171d6fe954f0ebf2720"
  };
   firebase.initializeApp(firebaseConfig);

function logout() {
    window.location.replace("kwitter.html");
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
}

user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
    }