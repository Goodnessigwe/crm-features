# Landing Page with Countdown Timer & Interactive Navigation

A modern landing page built with **HTML, CSS, and JavaScript** featuring:
- Countdown timer for events/webinars
- Interactive dropdown menus (Product & Resources)
- Floating **"I want a demo"** button
- Responsive design with hero, features, video, and footer sections

## 🚀 Live Demo
🔗 [View Project](goodnessigwe.github.io/crm-features/)  


## 🚀 Features

### 🔽 Navigation Bar
- **Dropdown menus** for Product and Resources (multi-column layout).
- **Language dropdown** separated to avoid conflicts.
- Sticky top navigation for easy access.

### ⏳ Countdown Timer
- Displays days, hours, minutes, and seconds until a set date.
- Updates in real-time.
- Integrated into the webinar banner.

### 🖱️ Floating Demo Button
- **"I want a demo"** button fixed at the bottom.
- Auto-hides when scrolling near the demo section.
- Smooth transition using JavaScript.

### 🎨 Sections
- **Hero Section**: Headline and illustration.
- **Popular Features**: Highlighted feature list in a centered card.
- **Other Features**: Alternating layout (icon + text).
- **Video Section**: Embedded video in a styled container.
- **Demo Section**: Call-to-action with demo text and image.
- **Footer**: Links, social icons, and dynamic copyright.

### 📱 Responsive Design
- Works across desktops, tablets, and mobile screens.
- Flexbox-based layout for dropdowns and content sections.

---

## 📂 Project Structure

project-folder/
│
├── index.html # Main HTML file
├── styles.css # CSS styles
└── script.js # JavaScript for countdown & floating button


---

## ⚡ How It Works

1. **Countdown Timer**
   - Set target date in `script.js`.
   - Timer auto-calculates remaining time.
   - Updates DOM every second.

2. **Dropdown Menus**
   - Hidden by default.
   - Appear on hover using CSS (`:hover` + `display: flex`).
   - Product and Resources use multi-column layouts.

3. **Floating Demo Button**
   - Visible at the bottom of the screen.
   - Hidden automatically when scrolling near the demo section to avoid overlap.

---

## 🛠️ Technologies Used
- **HTML5** – structure
- **CSS3 (Flexbox)** – styling & layout
- **Vanilla JavaScript** – countdown timer & floating button behavior



## 🔧 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/Goodnessigwe/crm-features.git

2. Open the project folder:
   cd crm-features

3. Open index.html in your browser.

Future Improvements

1. Add animations (fade-in for dropdowns, smooth transitions).

2. Mobile menu toggle for smaller screens.

3. API integration for demo scheduling.
