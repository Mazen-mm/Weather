let weather = []
let data = ""
// let search = document.getElementById("search")
async function getData() {
  let myReq = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=302bb31a9f69421188d172253241501&days=7&q=egypt`).catch()
  let data = await myReq.json()
  weather.push(data)
  display()
  console.log(weather);
}
getData()
function display(){
  document.getElementById('cardGroup').innerHTML = `<div class="card">
  <div class="card-body">
    <p>${weather[0].forecast.forecastday[0].date}</p>
    <h4>${weather[0].location.name}</h4>
    <h2>${weather[0].current.temp_c} ْC</h2>
    <span>${weather[0].current.condition.text}</span>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <p>${weather[0].forecast.forecastday[1].date}</p>
    <h2>${weather[0].forecast.forecastday[1].day.avgtemp_c} ْC</h2>
    <span>${weather[0].forecast.forecastday[1].day.condition.text}</span>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <p>${weather[0].forecast.forecastday[2].date}</p>
    <h2>${weather[0].forecast.forecastday[2].day.avgtemp_c} ْC</h2>
    <span>${weather[0].forecast.forecastday[2].day.condition.text}</span>
  </div>
</div>`
}
