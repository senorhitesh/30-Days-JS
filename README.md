# 30 Days of JavaScript: Architecture & Logic 🚀

> **Author:** Hitesh Suthar
> **Status:** Active (Day 1 of 30)
> **Goal:** transitioning from "coding" to "software engineering" before college.

## 🎯 The Mission
I am challenging myself to solve 30 real-world logic problems in 30 days. The goal is not just to write code that works, but to write code that is:
1.  **Modular:** Separating Logic from UI.
2.  **Pure:** Using functional programming concepts (Immutability, Pure Functions).
3.  **Scalable:** Simulating professional environments.

## 🛠️ Tech Stack
-   **Core:** Vanilla JavaScript (ES6+)
-   **Architecture:** Module Pattern (ES Modules)
-   **Styling:** CSS3 (BEM naming convention)
-   **Tools:** VS Code, Git

## 📅 Daily Progress Log

| Day | Project Name | Key Concepts Learned | Status |
| :--- | :--- | :--- | :--- |
| **01** | [Inventory Analyzer](../src/day01-inventory_analyser/)| `.filter()`, `.map()`, Pure Functions | ✅ Completed |
| **02** | [Shopping Cart Logic](../src/day02-cart/) | State Management, Immutability | ✅ Completed |
| **03** | [Data Sanitizer](../src/day03-DataSanatizer/) | String Manipulation, Regex | ✅ Completed |
| **04** | [Managment System](../src/day04-Libra_ Managment-System/) | ES6+ Modules, Import & Export| ✅ Completed |
| **05** | [Notes App](../src/day05-Notes_app/) | Local Stroage | ✅ Completed |
| **06** | [Gitprofile founder](../src/day06-Gitprofile_Maker/) | API call, try & catch method | ✅ Completed |
| **07** | [Debounce](../src/day07-Debouncer/) | Debounce & Optimization | ✅ Completed |
| **08** | [Parallel-API](../src/day08-Parallel-API-Calls/) | Promise.allSettled(), Speed  | ✅ Completed |
| **09** | [Infinite_Image_Gallery](../src/Infinite_Image_Gallery/) | Pagination | ✅ Completed |
| **10** | [Weather App](../src/day10-Weather-App/) | Api Call  | ✅ Completed |
| **11** | [Local Stroage App](../src/day11-LocalStroage-Manager/) | LocalStroage| ✅ Completed |
| **12** | [Draggble Kanban](../src/day12-Draggble-Kanban/) | DOM Manupulation  | ✅ Completed |
| **13** | [Pomodoro Timer](../src/day13-Pomodoro-Timer/) | Time intervals, State Management, and Audio feedback.    | ✅ Completed |
| **14** | [Wpm Calculator](../src/day14-Wpm-Calculator/) | DOM Events (input), String Matching, and calculating WPM | 🐛 WIP |
| **15** | [Voice Notes](../src/day15-Voice-Notes/) | SpeechRecognition Api | ✅ Completed  |
| **16** | [Scroll Animation](../src/day16-Scroll-Animation/) | IntersectionObserver Api | ✅ Completed  |
| **17** | [Drawing App](../src/day17-Drawing-App/) | Canvas Api | ✅ Completed  |
| **18** | [Webcam Photobooth](../src/day18-Webcam-Photobooth/) | navigator.mediaDevices.getUserMedia | 🐛 WIP |
| **19** | [Virtual Data Grid](../src/day19-Virtual-Data-Grid/) |DOM Virtualization (Windowing), Efficient Algorithms, and Large Dataset Management| ✅ Completed  |
| **20** | [Data sanatizer](../src/20-data-sanatizer/) | Object Manupulation, Classes | ✅ Completed  |
| **21** | [ Student Manager](../src/21-StudentManager/) | Array Manupulation | ✅ Completed  |
| **22** | [Coffee POS](../src/22-Coffee-POS/) | DOM Events (click), calcualtion | ✅ Completed  |
| **22** | [Movie App](../src/23-Movie-App/) | DOM Events (click), calcualtion | ✅ Completed  |
| **23** | [Chart App](../src/24-Chart-Maker/) | CRUD | ✅ Completed  |




## 📂 Project Structure
I am using a Modular Monorepo approach to keep concerns separated:

```text
/src
  /day01-inventory
    ├── logic.js  (Pure Business Logic)
    ├── main.js   (DOM Interaction)
    └── index.html
