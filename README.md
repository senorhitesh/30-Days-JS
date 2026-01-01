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
| **01** | [Inventory Analyzer](src/day01-inventory_analyser/) | `.filter()`, `.map()`, Pure Functions | ✅ Completed |
| **02** | Shopping Cart Logic | State Management, Immutability | ⏳ Pending |
| **03** | Data Sanitizer | String Manipulation, Regex | 🔒 Locked |
| **...** | ... | ... | ... |

*(I will update this table daily with links to the specific folder)*

## 📂 Project Structure
I am using a Modular Monorepo approach to keep concerns separated:

```text
/src
  /day01-inventory
    ├── logic.js  (Pure Business Logic)
    ├── main.js   (DOM Interaction)
    └── index.html
