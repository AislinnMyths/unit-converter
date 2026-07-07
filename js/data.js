export const area = {
  name: "Area",
  color: "#e9c46a",
  units: [
    { id: "km2", name: "square kilometre", factor: 1000000 },
    { id: "m2", name: "square  metre", factor: 1 },
    { id: "dm2", name: "square decimetre", factor: 0.01 },
    { id: "cm2", name: "square centimetre", factor: 0.0001 },
    { id: "mm2", name: "square millimetre", factor: 0.000001 },
    { id: "ha", name: "hectare", factor: 10000 },
    { id: "mi2", name: "square mile", factor: 2589988.11 },
    { id: "yd2", name: "square yard", factor: 0.836127 },
    { id: "ft2", name: "square foot", factor: 0.092903 },
    { id: "in2", name: "square inch", factor: 0.00064516 },
    { id: "ac", name: "acre", factor: 4046.86 },
  ],
};

export const currency = {
  name: "Currency",
  color: "#ffb703",
  units: [
    { id: "USD", name: "us dollar" },
    { id: "EUR", name: "euro" },
    { id: "GBP", name: "british pound" },
    { id: "JPY", name: "japanese yen" },
    { id: "CHF", name: "swiss franc" },
    { id: "CAD", name: "canadian dollar" },
    { id: "AUD", name: "australian dollar" },
    { id: "CNY", name: "chinese yuan" },
    { id: "INR", name: "indian rupee" },
    { id: "MXN", name: "mexican peso" },
    { id: "BRL", name: "brazilian real" },
    { id: "KRW", name: "south korean won" },
    { id: "SGD", name: "singapore dollar" },
    { id: "NOK", name: "norwegian krone" },
    { id: "SEK", name: "swedish krona" },
    { id: "DKK", name: "danish krone" },
    { id: "PLN", name: "polish zloty" },
    { id: "CZK", name: "czech koruna" },
    { id: "HUF", name: "hungarian forint" },
    { id: "ZAR", name: "south african rand" },
    { id: "TRY", name: "turkish lira" },
  ],
};

export const length = {
  name: "Length",
  color: "#f4a261",
  units: [
    { id: "km", name: "kilometre", factor: 1000 },
    { id: "m", name: "metre", factor: 1 },
    { id: "dm", name: "decimetre", factor: 0.1 },
    { id: "cm", name: "centimetre", factor: 0.01 },
    { id: "mm", name: "millimetre", factor: 0.001 },
    { id: "mi", name: "mile", factor: 1609.344 },
    { id: "yd", name: "yard", factor: 0.9144 },
    { id: "ft", name: "foot", factor: 0.3048 },
    { id: "in", name: "inch", factor: 0.0254 },
    { id: "nmi", name: "nautical mile", factor: 1852 },
    { id: "ly", name: "light year", factor: 9.461e15 },
    { id: "au", name: "astronomical unit", factor: 1.496e11 },
    { id: "pc", name: "parsec", factor: 3.086e16 },
  ],
};

export const mass = {
  name: "Mass",
  color: "#e76f51",
  units: [
    { id: "t", name: "metric tone", factor: 1000000 },
    { id: "kg", name: "kilogram", factor: 1000 },
    { id: "g", name: "gram", factor: 1 },
    { id: "mg", name: "milligram", factor: 0.001 },
    { id: "lb", name: "pound", factor: 453.592 },
    { id: "oz", name: "ounce", factor: 28.3495 },
    { id: "st", name: "stone", factor: 6350.29 },
    { id: "cwt", name: "hundredweight", factor: 50802.3 },
  ],
};

export const speed = {
  name: "Speed",
  color: "#f8961e",
  units: [
    { id: "kmh", name: "kilometre per hour", factor: 1 },
    { id: "ms", name: "metre per second", factor: 3.6 },
    { id: "mph", name: "mile per hour", factor: 1.60934 },
    { id: "kn", name: "knot", factor: 1.852 },
    { id: "M", name: "mach", factor: 1234.8 },
  ],
};

export const temperature = {
  name: "Temperature",
  color: "#f94144",
  units: [
    { id: "c", name: "Celsius" },
    { id: "f", name: "Farenheit" },
    { id: "k", name: "Kelvin" },
  ],
};

export const volume = {
  name: "Volume",
  color: "#f3722c",
  units: [
    { id: "m3", name: "cubic metre", factor: 1000 },
    { id: "hl", name: "hectolitre", factor: 100 },
    { id: "l", name: "litre", factor: 1 },
    { id: "cl", name: "centilitre", factor: 0.01 },
    { id: "ml", name: "millilitre", factor: 0.001 },
    { id: "ft3", name: "cubic foot", factor: 28.3168 },
    { id: "in3", name: "cubic inch", factor: 0.0163871 },
    { id: "galUs", name: "US gallon", factor: 3.78541 },
    { id: "ptUs", name: "US pint", factor: 0.473176 },
    { id: "flOzUs", name: "US fluid ounce", factor: 0.0295735 },
    { id: "galUk", name: "UK gallon", factor: 4.54609 },
    { id: "ptUk", name: "UK pint", factor: 0.568261 },
    { id: "flOzUk", name: "UK fluid ounce", factor: 0.0284131 },
  ],
};

export const converters = {
  area,
  currency,
  length,
  mass,
  speed,
  temperature,
  volume,
};
