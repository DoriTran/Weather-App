# Weather Forecast App ☀️🌦️

## ⚠️ Setup Notice

Before running the app, **please make sure to place the provided `.env` file at the root level (same level as the `src` folder, _not_ inside it)**.

> This is important because the `.env` file contains a **secure API key** that should not be exposed publicly. As a result, it has not been pushed to GitHub and was shared via email instead.

---

## ✅ Feature Progress Report

### • Current Weather Summary
- ✅ Display current date
- ✅ Show weather icon and description
- ✅ Show temperature, humidity, wind speed with arrow direction, and visibility  
**Progress:** 100% Complete

### • 5-day Forecast (Every 3 Hours)
- ✅ Display forecast in 24-hour format with date, icon, min/max temperature, and description
- ✅ Filter and group forecast data into "Today" and following days  
**Progress:** 100% Complete

### • Search & History
- ✅ Search input with real-time search capability
- ✅ Navigate to Home and update weather if valid
- ✅ Show error message if the search is invalid
- ✅ Save search history in local storage
- ✅ Navigate to weather from history item
- ✅ Allow deleting search history items  
**Progress:** 100% Complete

---

## 📊 Evaluation Report

### ✔ Feature Completeness
- All requested features fully implemented and functional

### 🧱 Code Structure & Reusability
- Componentized and modular using `module.scss`
- Types are defined in separate reusable files
- Shared components are cleanly abstracted

### 🎨 Consistent Styling
- Layout and UI styling follow the mockup closely
- Consistent font sizing, spacing, and reused color palette

### 📁 Folder Structure
- Follows a clean, scalable TypeScript + React project layout

### 🧼 Code Readability & Quality
- Clean code practices: naming, structure, simplicity
- Integrated ESLint and Prettier for consistent formatting

### 🚀 Performance & Optimization
- Minimized unnecessary re-renders
- Optimized array iteration and filtering

### 🌐 Web Standards
- **Secure API key**: not exposed publicly (via `.env`)
- **Local Storage**: safely stores history using browser-native encryption
- **Error Handling**: graceful failures via `try/catch` where needed

### 📱 Responsive Design
- Supports various screen sizes (mobile, tablet, small laptop)
- Layout adapts while maintaining design fidelity to the mockup

---

For questions or feedback, feel free to reach out. Thank you for reviewing the project!
