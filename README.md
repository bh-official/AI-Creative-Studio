# AI Creative Studio 🎨💬🔊

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/bh-official/AI-Creative-Studio)
[![Live App](https://img.shields.io/badge/Live-Application-green?logo=vercel)](https://ai-creative-studio-1.onrender.com)
[![Backend API](https://img.shields.io/badge/Backend-API-orange?logo=render)](https://ai-creative-studio-jn08.onrender.com)

**AI Creative Studio** is a modern, all-in-one web dashboard that brings the power of OpenAI's cutting-edge models directly to your fingertips. 

---

## 🚀 The MVP (Minimum Viable Product)

The core mission of this studio is to provide a clean, secure, and unified interface for the most popular AI creative tasks. The current MVP includes:

### 🎨 1. AI Image Generator
Transform text into high-quality visual art.
- **Model**: `dall-e-3`
- **Output**: 1024x1024 high-definition images.
- **Goal**: Rapid prototyping and visual brainstorming.

### 💬 2. AI Chat Assistant
A smart, context-aware conversational interface.
- **Model**: `gpt-4o-mini`
- **Features**: Lightweight, fast response times, and optimized for creative brainstorming.
- **Goal**: To act as a "creative companion" during the design process.

### 🔊 3. Text to Speech (TTS)
Convert written words into natural spoken audio.
- **Model**: `tts-1` with "Alloy" voice.
- **Features**: Near-instant conversion with built-in audio playback.
- **Goal**: To test scripts, content accessibility, and voice-over vibes.

### 🛡️ 4. Security First
Unlike basic tutorials, this MVP includes a **production-ready security architecture**.
- **Hidden Keys**: Using a Node.js backend proxy to ensure your API Key never reaches the browser.
- **Separation of Concerns**: Clean `client/server` split for easier deployment and maintenance.

---

## ️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) (located in `/client`)
- **Backend**: [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) (located in `/server`)
- **AI Integration**: OpenAI SDK (Server-side)

---

## ⚙️ Local Setup

1. **Clone the project**:
   ```bash
   git clone https://github.com/bh-official/AI-Creative-Studio.git
   cd AI-Creative-Studio
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the **root** folder:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

3. **Install & Run Backend**:
   ```bash
   cd server
   npm install
   npm start
   ```

4. **Install & Run Frontend**:
   In a new terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## 🚀 Deployment Guide

### 1. Backend (Server)
Deploy the `/server` directory to a Node.js hosting provider like **Render**, **Railway**, or **Fly.io**.
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variable**: Add `OPENAI_API_KEY`.

### 2. Frontend (Client)
Deploy the `/client` directory to **Vercel**, **Netlify**, or **GitHub Pages**.
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variable**: Add `VITE_API_URL` pointing to your deployed backend URL (e.g., `https://your-api.onrender.com/api`).

---

## 🛡️ Security
This app uses a backend proxy to keep your API key hidden from the browser. All OpenAI calls are handled securely on the server.

---

*Enjoy your creative journey with the AI Creative Studio!*
