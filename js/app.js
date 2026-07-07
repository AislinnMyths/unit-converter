//* --------------------- IMPORTS ---------------------

import { converters } from "./data.js";

//* --------------------- DOM REFS ---------------------

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const fromValue = document.getElementById("fromValue");
const toValue = document.getElementById("toValue");
const convTitle = document.getElementById("convTitle");
const navMenu = document.querySelector("nav");
const swapBtn = document.getElementById("swapBtn");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");

//* --------------------- STATE ---------------------

let currentConverter = converters.length;
let lastValidValue = "";
let exchangeRates = null;

//* --------------------- FUNCTIONS ---------------------

//Fill units selects with options from the current converter
function fillUnitSelects() {
  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";
  currentConverter.units.forEach((unit) => {
    const optionFrom = document.createElement("option");
    const optionTo = document.createElement("option");
    optionFrom.value = unit.id;
    optionFrom.textContent = unit.name;
    optionTo.value = unit.id;
    optionTo.textContent = unit.name;
    fromUnit.appendChild(optionFrom);
    toUnit.appendChild(optionTo);
  });
  toUnit.selectedIndex = 1;
}

//Updates the active converter, reset inputs and refreshes the UI
function updateConverter(converter) {
  currentConverter = converter;
  convTitle.textContent = converter.name;
  fillUnitSelects();
  fromValue.value = "";
  toValue.textContent = "";
  if (currentConverter === converters.currency) {
    fetchRates();
  }
  document.documentElement.style.setProperty("--accent", converter.color);
}

//Check that the input contains only valid characters
function validateInput() {
  const regex = /^[0-9]*[.,]?[0-9]*$/;
  if (regex.test(fromValue.value)) {
    lastValidValue = fromValue.value;
    calculus();
  } else {
    fromValue.value = lastValidValue;
  }
}

// Routes conversion to the appropriate function based on the active converter
function calculus() {
  if (!fromValue.value) {
    return;
  }

  if (currentConverter === converters.temperature) {
    convertTemperature();
  } else if (currentConverter === converters.currency) {
    convertCurrency();
  } else {
    const fromUnitData = currentConverter.units.find(
      (unit) => unit.id === fromUnit.value,
    );
    const toUnitData = currentConverter.units.find(
      (unit) => unit.id === toUnit.value,
    );

    const result =
      parseInput(fromValue.value) * (fromUnitData.factor / toUnitData.factor);
    const rounded = Number(result.toFixed(4));
    toValue.textContent = rounded;
  }
}

// Parses input string to number, replacing comma with dot for decimal compatibility
function parseInput(value) {
  return Number(value.replace(",", "."));
}

//calculations for temperature conversions
function convertTemperature() {
  const value = parseInput(fromValue.value);
  switch (`${fromUnit.value}-${toUnit.value}`) {
    case "c-f":
      toValue.textContent = (value * 9) / 5 + 32;
      break;
    case "c-k":
      toValue.textContent = value + 273.15;
      break;
    case "f-c":
      toValue.textContent = ((value - 32) * 5) / 9;
      break;
    case "f-k":
      toValue.textContent = ((value - 32) * 5) / 9 + 273.15;
      break;
    case "k-c":
      toValue.textContent = value - 273.15;
      break;
    case "k-f":
      toValue.textContent = ((value - 273.15) * 9) / 5 + 32;
      break;
    default:
      toValue.textContent = value;
  }
}

//swap the units from ‘from’ to ‘to’ and vice versa
function swapUnits() {
  const temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
  calculus();
}

//switches between the dark theme and the normal theme
function toggleTheme() {
  if (document.documentElement.hasAttribute("data-theme")) {
    document.documentElement.removeAttribute("data-theme");
    themeBtn.innerHTML = '<i data-lucide="sun"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.innerHTML = '<i data-lucide="moon"></i>';
  }
  lucide.createIcons();
}

// Fetches live exchange rates from the Frankfurter API (base: USD)
async function fetchRates() {
  try {
    const response = await fetch(
      "https://api.frankfurter.dev/v1/latest?base=USD",
    );
    const data = await response.json();
    exchangeRates = data.rates;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//calculations for currency conversions
function convertCurrency() {
  if (!exchangeRates) return;
  const amount = parseInput(fromValue.value);
  const fromRate = fromUnit.value === "USD" ? 1 : exchangeRates[fromUnit.value];
  const toRate = toUnit.value === "USD" ? 1 : exchangeRates[toUnit.value];
  toValue.textContent = (amount / fromRate) * toRate;
}

// Toggles the mobile navigation menu open and closed
function toggleMenu() {
  navMenu.classList.toggle("open");
}
//* --------------------- LISTENERS ---------------------

navMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const activeBtn = document.querySelector(".active");
  if (activeBtn) {
    activeBtn.classList.remove("active");
  }
  button.classList.add("active");
  updateConverter(converters[button.dataset.convName]);
});

menuBtn.addEventListener("click", toggleMenu);
fromValue.addEventListener("input", validateInput);
fromUnit.addEventListener("change", calculus);
toUnit.addEventListener("change", calculus);
swapBtn.addEventListener("click", swapUnits);
themeBtn.addEventListener("click", toggleTheme);

//* --------------------- INIT ---------------------

updateConverter(converters.length);
