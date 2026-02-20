# AI Creative Studio 🎨💬🔊

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/bh-official/AI-Creative-Studio)

**AI Creative Studio** is a modern, all-in-one web dashboard that brings the power of OpenAI's cutting-edge models directly to your fingertips. 

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
