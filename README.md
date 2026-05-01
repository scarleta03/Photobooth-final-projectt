# 📸 Selfie Generator — Photobooth App

A fun, interactive web app that lets you take a selfie using your webcam and pairs it with randomly generated content — a meme, a color palette, and an HTTP cat image — all assembled into a photo strip.

🔗 **Live Demo:** [photobooth-final-projectt.vercel.app](https://photobooth-final-projectt.vercel.app)

---

## 🧐 What Is It?

Selfie Generator is a browser-based photobooth application built as a final project. It uses your device's webcam to snap a photo, then automatically fetches:

- 🖼️ **A random meme** — pulled from an online meme API
- 🎨 **A random color** — generating a fun color swatch with its hex/name
- 🐱 **A random HTTP cat** — an image from [http.cat](https://http.cat) based on a random HTTP status code

All four elements (your selfie + meme + color + cat) are combined into a **photo strip** that you can view directly in the app.

---

## ✨ Features

- **Live Webcam Feed** — Uses your browser's camera in real time
- **One-Click Photo Capture** — Snap your selfie with a single button press
- **Retake Option** — Not happy with the shot? Retake it instantly
- **Random Meme Generator** — Fetches a fresh meme every time you take a photo
- **Random Color Generator** — Displays a randomly selected color
- **Random HTTP Cat** — Shows a cat image themed around a random HTTP status code
- **Photo Strip Assembly** — Combines all four results into a single visual strip using html2canvas
- **Responsive Design** — Layout adapts for smaller screens and mobile devices

---

## 🚀 How to Use

### Option 1: Use the Live App

Visit the deployed app at **[photobooth-final-projectt.vercel.app](https://photobooth-final-projectt.vercel.app)** — no installation needed!

1. Allow camera access when prompted by your browser
2. Click **"Snap A Pic"** to take your selfie
3. Wait a moment as your random meme, color, and HTTP cat are generated
4. View your assembled **photo strip** at the bottom of the page
5. Click **"Retake"** if you want to start over with a new photo

### Option 2: Run Locally

**Prerequisites:** Node.js (v18 or higher) and npm

```bash
# Clone the repository
git clone https://github.com/scarleta03/Photobooth-final-projectt.git
cd Photobooth-final-projectt/photobooth-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

**Other available scripts:**

| Script | Description |
|---|---|
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the codebase |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Type-safe JavaScript |
| **Vite** | Build tool and dev server |
| **styled-components** | Component-level CSS styling |
| **react-webcam** | Webcam access and photo capture |
| **html2canvas** | Renders the photo strip to a canvas/image |
| **react-router-dom** | Client-side routing |

---

## 📁 Project Structure

```
photobooth-app/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── Webcam.tsx        # Webcam feed and capture logic
│   │   ├── RandomMeme.tsx    # Fetches and displays a random meme
│   │   ├── RandomColor.tsx   # Generates and displays a random color
│   │   ├── RandomAnimal.tsx  # Fetches a random HTTP cat image
│   │   └── Photostrip.tsx    # Assembles all elements into a strip
│   ├── interfaces/           # TypeScript interfaces/types
│   ├── assets/               # Images and static resources
│   ├── fonts/                # Custom fonts (Reem Kufi)
│   ├── App.tsx               # Root app component
│   └── main.tsx              # Entry point
├── index.html
├── package.json
└── vite.config.ts
```

---

## 👥 Contributors

This project was built by a team of four as a final project:

| Name | GitHub |
|---|---|
| **Serenity Williams** | [@swilliams98](https://github.com/swilliams98) |
| **Scarlet Alvarez Marte** | [@scarleta03](https://github.com/scarleta03) |
| **Faria Zaman** | — |
| **Lingyin Li** | — |

> This repository is forked from the original at [swilliams98/Photobooth-final-project](https://github.com/swilliams98/Photobooth-final-project).

---

Made with 💜 as a final project.
