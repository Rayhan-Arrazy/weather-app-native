<div align="center">
  
# 🌤️ Atmosphere: Dynamic Weather Engine

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](#)
<br>
![GitHub last commit](https://img.shields.io/github/last-commit/Rayhan-Arrazy/weather-app-native?style=flat-square&color=56ab2f)
![GitHub repo size](https://img.shields.io/github/repo-size/Rayhan-Arrazy/weather-app-native?style=flat-square&color=2a5298)

> **A portfolio project built entirely in Native JavaScript, demonstrating deep mastery of the DOM, Asynchronous API integration, and modern CSS Keyframe animations.**

</div>

---

## 🚀 The Development Journey (Click to Expand)

To build a solid foundation before transitioning to React/Next.js, I built this application iteratively. This repository contains the two major phases of the project.

<details>
<summary><b>🔵 Phase 1: Base Application (Glassmorphism & UX)</b> - <code>index-base.html</code></summary>
<br>
<b>Focus:</b> Logic, Networking, and Modern UI trends.
<ul>
<li>Implemented the <code>fetch()</code> API with <code>async/await</code> to reliably pull data from OpenWeatherMap.</li>
<li>Engineered a "Frosted Glass" interface using <code>backdrop-filter: blur()</code>.</li>
<li>Introduced the <b>Atmospheric Context Engine</b>: Instead of forcing the user to calculate if 12°C is cold, the app parses the weather condition and temperature to provide actionable advice (e.g., <i>"It's freezing. Dress warm! ⛄"</i>).</li>
</ul>
</details>

<details open>
<summary><b>🟣 Phase 2: Fluid Dynamics (The Soul)</b> - <code>index-new.html</code></summary>
<br>
<b>Focus:</b> High-Performance CSS Animations and Async UI Transitions.
<ul>
<li>Replaced static backgrounds with layered, CSS-only organic blob animations using <code>@keyframes</code> and <code>mix-blend-mode</code>.</li>
<li>Created a Theme-Shifting algorithm: The JavaScript reads the temperature and dynamically injects new CSS variables smoothly morphing the entire app's color palette.</li>
<li>Built async UI transitions to smoothly fade data in and out during network requests.</li>
</ul>
</details>

---

## 🧠 Core Technical Achievements

- ⚡ **Zero Dependencies:** Built without React, Tailwind, or external libraries to prove a deep understanding of core Web APIs.
- 📐 **Fluid Typography:** Uses CSS `clamp()` to ensure text scales perfectly on any device without relying on brittle media queries.
- ⏳ **Asynchronous State Management:** Handles the delay between a user clicking "Search" and the data arriving, ensuring the UI doesn't break or flash abruptly.
- 🎨 **Data-Driven Styling:** The DOM actively reacts to JSON payloads, changing its physical appearance based on API conditions.

---

## 🛠️ How to Run Locally

```bash
# 1. Clone the repository
git clone [https://github.com/Rayhan-Arrazy/weather-app-native.git](https://github.com/Rayhan-Arrazy/weather-app-native.git)

# 2. Navigate to the directory
cd weather-app-native
