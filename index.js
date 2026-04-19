function updateTime() {
  let laTime = moment().tz("America/Los_Angeles");
  document.querySelector("#la-date").innerHTML = laTime.format("MMMM Do YYYY");
  document.querySelector("#la-time").innerHTML = laTime.format("h:mm:ss A");

  let sydneyTime = moment().tz("Australia/Sydney");
  document.querySelector("#sydney-date").innerHTML =
    sydneyTime.format("MMMM Do YYYY");
  document.querySelector("#sydney-time").innerHTML =
    sydneyTime.format("h:mm:ss A");

  let tokyoTime = moment().tz("Asia/Tokyo");
  document.querySelector("#tokyo-date").innerHTML =
    tokyoTime.format("MMMM Do YYYY");
  document.querySelector("#tokyo-time").innerHTML =
    tokyoTime.format("h:mm:ss A");

  let parisTime = moment().tz("Europe/Paris");
  document.querySelector("#paris-date").innerHTML =
    parisTime.format("MMMM Do YYYY");
  document.querySelector("#paris-time").innerHTML =
    parisTime.format("h:mm:ss A");
}

setInterval(updateTime, 1000);
updateTime();

document.querySelector("#city").addEventListener("change", function () {
  let selected = this.value;

  if (!selected) return;

  // If user chooses "Current Location"
  if (selected === "current") {
    let userZone = moment.tz.guess();
    let now = moment().tz(userZone);

    alert(
      `Your current timezone is: ${userZone}\n` +
        `Date: ${now.format("MMMM Do YYYY")}\n` +
        `Time: ${now.format("h:mm:ss A")}`,
    );
    return;
  }

  let cityTime = moment().tz(selected);

  alert(
    `City: ${selected}\n` +
      `Date: ${cityTime.format("MMMM Do YYYY")}\n` +
      `Time: ${cityTime.format("h:mm:ss A")}`,
  );
});
