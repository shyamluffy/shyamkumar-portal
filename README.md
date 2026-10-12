# 🚀 Shyamkumar's Tech & Arcade Portal (Major Project)

[![Live Demo](https://img.shields.io/badge/demo-live%20preview-brightgreen.svg)](http://localhost:3000)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Markup-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern%20Design%20Tokens-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B%20SPA-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An enterprise-grade personal developer portal, interactive AI prompt sandbox, and playable 8-bit retro arcade engine.

---

## 🏛️ System Architecture

```
[Client Browser / Mobile / PWA]
        │
        ▼
[index.html: Semantic SPA Entrypoint]
        ├── [Design System: style.css (Obsidian Dark / Light Modes + Print Engine)]
        ├── [Interactive Logic: script.js]
        │     ├── [Theme & Nav Manager]
        │     ├── [Module 1: AI Prompt & Concept Lab (Streaming Engine)]
        │     ├── [Module 2: Cyber Defender 8-Bit Game Loop + Web Audio Synth]
        │     ├── [Module 3: Project Filters & Architecture Modals]
        │     ├── [Module 4: Resume & PDF Export Engine]
        │     └── [Module 5: Contact System & Input Validator]
        └── [PWA Manifest: manifest.json (Installable Desktop/Mobile App)]
```

---

## ✨ Major Features & Modules

### 1. 🧠 Module 1: Neural Prompt & Concept Lab
- **4 AI Generation Modes**: Code Assistant, Game Mechanics, UI Color Palettes, and Tech Explainer.
- **Streaming Typewriter Animation**: Mimics real-time LLM token generation with blinking cursor.
- **1-Click Clipboard Export**: Copy generated code or concepts directly to clipboard.

### 2. 🕹️ Module 2: Enhanced 8-Bit "Cyber Defender" Arcade
- **60 FPS HTML5 Canvas Engine**: Starfield parallax background, smooth ship thrusters, and bullet collision physics.
- **Boss Battles**: Spawns a multi-hit Boss Drone every 250 points with a dynamic health bar!
- **Power-Up Drops**: Collect ⚡ Triple Lasers and 🛡️ Extra Shields.
- **Pure Web Audio API Synth**: Synthesizes 8-bit lasers, explosions, and power-up sounds directly in code.
- **Arcade Features**: Retro CRT scanline toggle, sound mute toggle, and persistent high score saved to `localStorage`.

### 3. 💼 Module 3: Filterable Project Showcase & Architecture Modals
- Filter projects by category (`All`, `AI & Intelligence`, `Game Systems`, `Web Applications`, `UI/UX Systems`).
- Click any project to open an interactive modal with full system architecture ASCII diagrams and key engineering features.

### 4. 📄 Module 4: Interactive Resume & 1-Click PDF Exporter
- Interactive milestones timeline and technical skill proficiency breakdown.
- **Paper / PDF Export**: Clicking *"Print / Save as PDF"* activates dedicated `@media print` CSS rules that strip web elements and format a clean, professional 1-page paper resume.

### 5. 📬 Module 5: Real-World Contact System
- Form validation with real-time character counter (`0 / 500`).
- Ready for integration with free zero-backend form forwarders (Web3Forms / Formspree).

---

## 🛠️ Local Development & Running

### Option 1: Python Web Server (Recommended)
```powershell
cd C:\Users\Lenovo\.gemini\antigravity\scratch\my-first-website
python -m http.server 3000
```
Then visit **`http://localhost:3000`** in any browser.

### Option 2: Instant Double-Click
Simply double-click `index.html` to open directly in Chrome, Edge, or Firefox.

---

## 🌐 How to Deploy (Make It Live on the Internet)

### Method 1: Deploy to GitHub Pages (100% Free Forever)
1. **Initialize Git & Commit**:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit of Shyamkumar Tech Portal"
   ```
2. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **"New Repository"**.
   - Name it `shyamkumar-portal` (or `<your-username>.github.io`).
3. **Push Your Code**:
   ```powershell
   git branch -M main
   git remote add origin https://github.com/<your-username>/shyamkumar-portal.git
   git push -u origin main
   ```
4. **Enable Pages**:
   - In your repository, go to **Settings ➔ Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` will automatically build and publish it).
   - Your website will be live at: **`https://<your-username>.github.io/shyamkumar-portal/`**!

### Method 2: Deploy to Vercel or Netlify (1-Click Drag & Drop)
1. Go to [Netlify.com](https://www.netlify.com/) or [Vercel.com](https://vercel.com/).
2. Drag and drop the `my-first-website` folder directly into the Netlify Drop dashboard.
3. You get an instant custom HTTPS URL with free SSL in 10 seconds!

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
