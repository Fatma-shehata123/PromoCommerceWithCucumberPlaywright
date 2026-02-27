# PromoCommerce E2E Automation Framework using Cucumber and Playwright

End-to-End test automation framework built using **Playwright**, **Cucumber (BDD)**, and **TypeScript** to automate selected E-Commerce scenarios.

---

## 📌 Project Overview

This project demonstrates how to build a scalable **BDD automation framework**
using Playwright with Cucumber.  
It focuses on automating core user flows that are currently implemented in the repository,
with a structure that supports easy extension for future scenarios.

---

## 🧰 Tech Stack

- Playwright
- TypeScript
- Cucumber (Gherkin – BDD)
- Node.js
- npm

---

## 🗂️ Project Structure
```
│
├── cucumber/
│ ├── Pages/ # Page Object Model (POM)
│ │ ├── BasePage
│ │ ├── LoginPage
│ │ ├── HomePage
│ │ ├── CheckOutPage
│ │ └── PromoFixture
│ │
│ ├── features/
│ │ └── promocommerce.feature
│ │
│ ├── stepdefinitions/
│ │ ├── LoginPageSteps.ts
│ │ ├── HomePageSteps.ts
│ │ └── CheckoutPageSteps.ts
│ │
│ └── hooks/
│ └── hooks.ts
│
├── cucumber.json
├── playwright.config.ts
├── package.json
└── README.md
```
---

## 🧪 Implemented Test Scenarios

Based on the current implementation in the repository, the framework covers:

- User login functionality
- Home page interactions
- Basic checkout flow

> The framework structure allows easy extension to cover additional
E-Commerce scenarios such as cart management and promo/discount validation.

---

## 🧠 Testing Approach

- **Behavior Driven Development (BDD)** using Cucumber
- **Page Object Model (POM)** for better readability and maintainability
- Reusable step definitions
- Clear separation between test logic and UI interactions

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
```
### 2️⃣ Run Cucumber tests
```bash
npm run test
```
---

### 🎯 Key Highlights

- ✔ Playwright + Cucumber integration
- ✔ Clean BDD framework structure
- ✔ Page Object Model implementation
- ✔ Ready for CI/CD integration and future expansion
---
👩‍💻 Author

- Fatma Shehata
- Software Testing Engineer
