# 🔄 Unit Converter

A web-based unit conversion app built as a learning project using vanilla HTML, CSS, and JavaScript.

## 📋 Description

Interactive unit converter with multiple categories, dark mode support, and automatic recalculation. No frameworks, no external dependencies (except the currency API).

## ✨ Features

- Automatic conversion when changing any value or unit
- Swap button to invert origin and destination
- Input validation (numbers, dot, and comma only)
- Light / dark mode
- Unique color per category

## 📐 Conversion Categories

| Category | Systems included |
|---|---|
| Length | Metric, Imperial, Nautical, Astronomical |
| Mass | Metric, Imperial |
| Area | Metric, Imperial |
| Volume | Metric, Imperial UK, Imperial US |
| Speed | Metric, Imperial, Nautical |
| Temperature | Celsius, Fahrenheit, Kelvin |
| Currency | Real-time exchange rates (API) |

## 🗂️ Project Structure

```
converter/
├── index.html
├── style.css        # General styles and CSS variables
└── js/
    ├── app.js           # Main logic and navigation
    └── data.js          # Units and conversion factors
```

## ⚙️ Conversion Logic

Most converters use the **base unit** method:

```
result = value × (origin_factor / destination_factor)
```

Each unit has a factor expressing its value in the category's base unit (metre, kilogram, etc.). Temperature is the exception: it uses direct formulas due to different zero points.

## 🌐 Currency API

The currency converter fetches real-time exchange rates and requires an internet connection. All other categories work offline.

## 🚀 Usage

Open `index.html` directly in a browser. No server or installation required.

## 📌 Project Status

- [x] Base HTML structure
- [x] CSS styles and dark mode
- [x] Length converter
- [x] Mass converter
- [x] Area converter
- [x] Volume converter
- [x] Speed converter
- [x] Temperature converter
- [x] Currency converter (API)