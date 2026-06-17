//* --------------------- IMPORTS ---------------------

import { converters } from "./data.js";

//* --------------------- DOM REFS ---------------------

const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const convTitle = document.getElementById("convTitle");
const navMenu = document.querySelector("nav");

//* --------------------- LISTENERS ---------------------

navMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  updateConverter(converters[button.dataset.convName]);
});

//* --------------------- FUNTCIONS ---------------------

let currentConverter = converters.length;

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
}

function updateConverter(converter) {
  currentConverter = converter;
  convTitle.textContent = converter.name;
  fillUnitSelects();
}

//* --------------------- INIT ---------------------

updateConverter(converters.length);
