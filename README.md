# ⏰ Digital Clock (Circular UI)

A modern **Digital Clock Web App** with animated circular progress indicators for **hours, minutes, and seconds**, built using **HTML, CSS, and JavaScript**.

---

## 🚀 Features

* ⭕ Circular progress animation for time
* 🕐 Real-time clock (updates every second)
* 🌗 AM / PM indicator (12-hour format)
* 📅 Live date display (Day, Month, Date)
* 🎨 Clean and modern UI with gradient background
* ⚡ Smooth transitions and animations

---

## 🛠️ Technologies Used

* **HTML** → Structure of the app
* **CSS** → Styling, layout, and animations
* **JavaScript** → Time logic and dynamic updates
* **SVG** → Circular progress design

---

## 📸 Preview

<img width="600" alt="Digital Clock Preview" src="https://via.placeholder.com/600x300?text=Digital+Clock+Preview">

---

## 📂 Project Structure

```
Digital-Clock/
│── index.html
│── style.css
│── script.js
```

---

## ⚙️ How It Works

* The app uses the **JavaScript Date object** to get the current time.
* Time values (hours, minutes, seconds) are updated every second using:

  ```js
  setInterval(updateClock, 1000);
  ```
* Circular animation is achieved using **SVG stroke properties**:

  * `stroke-dasharray` → total circle length
  * `stroke-dashoffset` → controls progress
* The offset is updated dynamically to create a **loading-like animation**.

---


---

## 🌐 Live Demo

👉 [View Live Demo] https://vnanivenkatesh-012.github.io/Digital-Clock/

