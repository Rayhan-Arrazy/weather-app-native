# Atmosphere: Dynamic Weather Engine

**A portfolio project built entirely in Native JavaScript, demonstrating deep mastery of the DOM, Asynchronous API integration, and modern CSS Keyframe animations.**

Most beginner weather apps simply display a temperature and a static icon. **Atmosphere** takes raw data from the OpenWeather API and utilizes a custom **Context Engine** to translate it into human experiences. Simultaneously, the application's user interface dynamically fluid-shifts its color palette and animations to physically match the temperature and conditions outside.

---

## The Development 

To build a solid architectural foundation before transitioning to modern frameworks like React or Next.js, this application is documented in two distinct versions within the repository.

### Version 1: Core Foundation (`-base` files)
**Focus:** Logic, Networking, and DOM Manipulation.
* Implemented the `fetch()` API with `async/await` to reliably pull live data from OpenWeatherMap.
* Built dynamic string interpolation using ES6 Template Literals.
* Designed a graceful error-handling state for "City Not Found" or network failure scenarios.
* Establishes the foundational HTML structure and basic CSS styling needed to display dynamic data.

### Version 2: Fluid Dynamics & UX (`-new` files)
**Focus:** High-Performance CSS Animations, Glassmorphism, and User Experience.
* **The Context Engine:** Parses the weather condition and temperature algorithms to provide actionable advice (e.g., *"It's freezing. Dress warm! ⛄"*).
* **Fluid UI:** Replaced static backgrounds with layered, CSS-only organic blob animations using `@keyframes` and `mix-blend-mode`.
* **Theme-Shifting Algorithm:** The JavaScript engine reads the incoming temperature data and dynamically injects new CSS variables, smoothly morphing the entire application's color palette without reloading the page.
* **Glassmorphism:** Engineered a modern "Frosted Glass" interface utilizing `backdrop-filter` CSS properties and asynchronous UI transitions to smoothly fade data in and out.

---

## Technical Achievements

- **Zero Dependencies:** Built entirely without React, Tailwind, or external libraries to prove a deep, fundamental understanding of core Web APIs.
- **Fluid Typography:** Utilizes the CSS `clamp()` function to ensure text scales perfectly and remains readable on any device without relying on brittle media queries.
- **Asynchronous State Management:** Handles the network delay between a user initiating a search and the data arriving, ensuring the UI doesn't break, jump, or flash abruptly.
- **Data-Driven Styling:** The Document Object Model (DOM) actively reacts to JSON payloads, changing its physical appearance and layout based on API conditions.

---
