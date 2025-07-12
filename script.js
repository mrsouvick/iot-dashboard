// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN1uveGFgEm8z15OjvqeNy9achvhZvEJ8",
  authDomain: "smart-climate-monitor.firebaseapp.com",
  databaseURL: "https://smart-climate-monitor-default-rtdb.firebaseio.com/",
  projectId: "smart-climate-monitor"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Real-time Listener
const tempElement = document.getElementById("temp");
const humElement = document.getElementById("hum");

db.ref("sensor/temperature").on("value", (snapshot) => {
  const val = snapshot.val();
  tempElement.innerText = val !== null ? val.toFixed(2) : "--";
});

db.ref("sensor/humidity").on("value", (snapshot) => {
  const val = snapshot.val();
  humElement.innerText = val !== null ? val.toFixed(2) : "--";
});
