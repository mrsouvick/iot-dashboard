const tempCtx = document.getElementById('tempChart').getContext('2d');
const humCtx = document.getElementById('humChart').getContext('2d');

const tempChart = new Chart(tempCtx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{ label: 'Temperature (\u00b0C)', data: [], borderColor: '#f72585', fill: false }]
  }
});

const humChart = new Chart(humCtx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{ label: 'Humidity (%)', data: [], borderColor: '#4895ef', fill: false }]
  }
});