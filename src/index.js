function getLostclick() {
  let cityName = prompt("What city would you like to visit?");
  cityName = cityName.toLowerCase().trim();
  cityName = cityName[0].toUpperCase() + cityName.substring(1);
  let h3 = document.querySelector("h3");
  if (cityName === "Lisboa") {
    h3.innerHTML = "'bora lá perdermo-nos por Lisboa!👀";
  } else {
    h3.innerHTML = "Let's get lost in " + cityName + "! 👀";
  }
}
let clickButton = document.querySelector("#button");
clickButton.addEventListener("click", getLostclick);
