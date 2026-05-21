# NutriVision 🧬

> AI-Powered Nutrition Intelligence — Know exactly what you eat.

A premium, production-ready nutrition analysis web app built with React + Vite + Tailwind CSS + Framer Motion.

## ✨ Features

- **AI Nutrition Analyzer** — Text, OCR, voice, or food photo
- **Gemini AI Integration** — Real nutritional insights and food image detection
- **OCR Label Scanner** — Tesseract.js powered label reading
- **Voice Input** — Web Speech API
- **Nutrition Dashboard** — Calories, macros, water tracker, weekly charts
- **BMI Calculator** — With personalized insights
- **Exercise Recommendations** — Calorie burn by activity
- **Health Score** — 0-100 score with AI guidance
- **Auth Pages** — Login & Signup (frontend only, no backend)
- **3D Animations** — Three.js/R3F hero sphere
- **Framer Motion** — Smooth page/element animations

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔑 Gemini API Key (Optional)

For AI features (food image detection, enhanced nutrition analysis):

1. Get a free API key at [aistudio.google.com](https://aistudio.google.com)
2. Create a `.env` file:
```
VITE_GEMINI_API_KEY=your_key_here
```
3. Or paste it directly in the app's API key field

Without a key, smart local estimation is used automatically.

## 🌐 Deploy to Netlify

```bash
npm run build
# Upload the `dist` folder to Netlify
```

Or connect your GitHub repo to Netlify — it auto-detects Vite projects.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Floating animated navbar
│   ├── AnalyzerSection.jsx # Full AI nutrition analyzer
│   ├── HeroSphere.jsx      # 3D Three.js sphere
│   └── Toast.jsx           # Toast notifications
├── hooks/
│   └── useToast.js
├── pages/
│   ├── HomePage.jsx        # All landing page sections
│   ├── LoginPage.jsx       # Premium auth page
│   └── SignupPage.jsx      # Premium signup page
├── utils/
│   └── nutrition.js        # AI/nutrition logic
└── styles/
    └── index.css           # Tailwind + custom styles
```

## 🛠 Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router v6
- Three.js + @react-three/fiber
- Lucide React
- Tesseract.js (OCR, loaded on demand)

## 📄 License

MIT
