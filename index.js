function updateCity(timezone, cityName) {
  let cityTime = moment().tz(timezone);

  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `
    <div class="city">
      <div class="city-info">
        <div class="city-header">
          <h2>${cityName}</h2>
        </div>
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

document.querySelector("#city").addEventListener("change", function () {
  let selected = this.value;

  if (!selected) return;

  // Current Location (Miami → America/New_York)
  if (selected === "current") {
    let userZone = moment.tz.guess();
    let cityName = userZone.split("/")[1].replace("_", " ");
    startClock(userZone, cityName);
    return;
  }

  // Other cities
  let cityName = selected.split("/")[1].replace("_", " ");
  startClock(selected, cityName);
});
