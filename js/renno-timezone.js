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

document.getElementById("case-studies-gridlines").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("case-studies-card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};
