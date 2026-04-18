function updateTime() {
  // Los Angeles
  let laTime = moment().tz("America/Los_Angeles");
  document.querySelector("#la-date").innerHTML = laTime.format("MMMM Do YYYY");
  document.querySelector("#la-time").innerHTML = laTime.format("h:mm:ss A");

  // Sydney
  let sydneyTime = moment().tz("Australia/Sydney");
  document.querySelector("#sydney-date").innerHTML =
    sydneyTime.format("MMMM Do YYYY");
  document.querySelector("#sydney-time").innerHTML =
    sydneyTime.format("h:mm:ss A");

  // Tokyo
  let tokyoTime = moment().tz("Asia/Tokyo");
  document.querySelector("#tokyo-date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");
  document.querySelector("#tokyo-time").innerHTML =
    tokyoTime.format("h:mm:ss A");

  // Paris
  let parisTime = moment().tz("Europe/Paris");
  document.querySelector("#paris-date").innerHTML =
    parisTime.format("MMMM Do YYYY");
  document.querySelector("#paris-time").innerHTML =
    parisTime.format("h:mm:ss A");
}

// Update every second
setInterval(updateTime, 1000);
updateTime();
