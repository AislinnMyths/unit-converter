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

//* --------------------- LISTENERS ---------------------

navMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  updateConverter(converters[button.dataset.convName]);
});

fromValue.addEventListener("input", calculus);
fromUnit.addEventListener("change", calculus);
toUnit.addEventListener("change", calculus);
swapBtn.addEventListener("click", swapUnits);

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
  fromValue.value = "";
  toValue.textContent = "";
}

function calculus() {
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
    Number(fromValue.value) * (fromUnitData.factor / toUnitData.factor);
  const rounded = Number(result.toFixed(4));
  toValue.textContent = rounded;
}

function swapUnits() {
  const temp = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = temp;
  calculus();
}

//* --------------------- INIT ---------------------

updateConverter(converters.length);
