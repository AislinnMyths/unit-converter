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

//* --------------------- STATE ---------------------

let currentConverter = converters.length;
let lastValidValue = "";

//* --------------------- FUNTCIONS ---------------------

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

function updateConverter(converter) {
  currentConverter = converter;
  convTitle.textContent = converter.name;
  fillUnitSelects();
  fromValue.value = "";
  toValue.textContent = "";
}

function validateInput() {
  const regex = /^[0-9]*[.,]?[0-9]*$/;
  if (regex.test(fromValue.value)) {
    lastValidValue = fromValue.value;
    calculus();
  } else {
    fromValue.value = lastValidValue;
  }
}

function calculus() {
  if (currentConverter === converters.temperature) {
    convertTemperature();
  } else {
    if (!fromValue.value) {
      return;
    }
    const fromUnitData = currentConverter.units.find(
      (unit) => unit.id === fromUnit.value,
    );
    const toUnitData = currentConverter.units.find(
      (unit) => unit.id === toUnit.value,
    );

    const result =
      Number(fromValue.value.replace(",", ".")) *
      (fromUnitData.factor / toUnitData.factor);
    const rounded = Number(result.toFixed(4));
    toValue.textContent = rounded;
  }
}

function convertTemperature() {
  const value = Number(fromValue.value.replace(",", "."));
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

function swapUnits() {
  const temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
  calculus();
}

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

//* --------------------- LISTENERS ---------------------

navMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  updateConverter(converters[button.dataset.convName]);
});

fromValue.addEventListener("input", validateInput);
fromUnit.addEventListener("change", calculus);
toUnit.addEventListener("change", calculus);
swapBtn.addEventListener("click", swapUnits);
themeBtn.addEventListener("click", toggleTheme);

//* --------------------- INIT ---------------------

updateConverter(converters.length);
