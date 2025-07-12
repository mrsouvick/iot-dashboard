const dbRef = firebase.database().ref("/sensorData");
dbRef.limitToLast(10).on("child_added", (snapshot) => {
  const data = snapshot.val();
  const time = new Date().toLocaleTimeString();
  document.getElementById("tempValue").innerText = `${data.temperature} °C`;
  document.getElementById("humValue").innerText = `${data.humidity} %`;
  document.getElementById("lastUpdate").innerText = time;

  tempChart.data.labels.push(time);
  tempChart.data.datasets[0].data.push(data.temperature);
  humChart.data.labels.push(time);
  humChart.data.datasets[0].data.push(data.humidity);

  if (tempChart.data.labels.length > 10) {
    tempChart.data.labels.shift();
    tempChart.data.datasets[0].data.shift();
    humChart.data.labels.shift();
    humChart.data.datasets[0].data.shift();
  }

  tempChart.update();
  humChart.update();

  // Add to table
  const row = document.createElement("tr");
  row.innerHTML = `<td>${time}</td><td>${data.temperature}</td><td>${data.humidity}</td>`;
  document.querySelector("#sensorData tbody").prepend(row);
});

// Footer Year
document.getElementById("year").innerText = new Date().getFullYear();