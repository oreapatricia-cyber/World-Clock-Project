// Update homepage clocks
function updateHomepage() {
  let la = moment().tz("America/Los_Angeles");
  document.querySelector("#la-date").innerHTML = la.format("MMMM Do YYYY");
  document.querySelector("#la-time").innerHTML = la.format("h:mm:ss A");

  let tokyo = moment().tz("Asia/Tokyo");
  document.querySelector("#tokyo-date").innerHTML =
    tokyo.format("MMMM Do YYYY");
  document.querySelector("#tokyo-time").innerHTML = tokyo.format("h:mm:ss A");

  let paris = moment().tz("Europe/Paris");
  document.querySelector("#paris-date").innerHTML =
    paris.format("MMMM Do YYYY");
  document.querySelector("#paris-time").innerHTML = paris.format("h:mm:ss A");
}

setInterval(updateHomepage, 1000);
updateHomepage();

// Show selected city
function updateCity(timezone, cityName) {
  let cityTime = moment().tz(timezone);

  let selected = document.querySelector("#selected-city");
  selected.innerHTML = `
    <div class="city">
      <div class="city-info">
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss A")}</div>
    </div>
  `;
}

function startClock(timezone, cityName) {
  updateCity(timezone, cityName);
  setInterval(() => updateCity(timezone, cityName), 1000);
}

// Dropdown behavior
document.querySelector("#city").addEventListener("change", function () {
  let selected = this.value;

  if (!selected) return;

  document.querySelector("#homepage").style.display = "none";
  document.querySelector("#selected-city").style.display = "block";
  document.querySelector("#back-home").style.display = "block";

  if (selected === "current") {
    let userZone = moment.tz.guess();
    let cityName = userZone.split("/")[1].replace("_", " ");
    startClock(userZone, cityName);
    return;
  }

  let cityName = selected.split("/")[1].replace("_", " ");
  startClock(selected, cityName);
});

// Back to homepage
document.querySelector("#back-home").addEventListener("click", function () {
  document.querySelector("#homepage").style.display = "block";
  document.querySelector("#selected-city").style.display = "none";
  document.querySelector("#back-home").style.display = "none";
});
