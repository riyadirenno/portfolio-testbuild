const locations = document.querySelectorAll("div.navigation-timezones div ul");

const updateTimes = function () {
  locations.forEach((location) => {
    const output = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");

    const now = luxon.DateTime.now().setZone(timezone);

    output.innerHTML = now.toFormat("HH:mm");

    const hour = parseInt(now.toFormat("H"));

    if (hour >= 9 && hour < 17) {
      location.classList.add("its-sunrise");
    }
  });
};

updateTimes();

setInterval(function () {
  updateTimes();
}, 1000);
