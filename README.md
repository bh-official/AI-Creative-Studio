# AI Creative Studio 🎨💬🔊

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/bh-official/AI-Creative-Studio)

**AI Creative Studio** is a modern, all-in-one web dashboard that brings the power of OpenAI's cutting-edge models directly to your fingertips. Whether you want to generate stunning art, chat with an intelligent assistant, or convert text into natural-sounding speech, this studio provides a seamless, integrated experience.

---

## 🌟 Key Features

### 🎨 1. AI Image Generator
Transform your imagination into high-quality visual art.
*   **Powered by**: OpenAI `dall-e-3` model.
*   **Functionality**: Enter a text prompt, and the AI generates a unique 1024x1024 image.
*   **Bonus**: Includes a direct download link for your generated masterpieces.

### 💬 2. AI Chat Assistant
A smart, responsive companion for your daily queries and creative brainstorming.
*   **Powered by**: OpenAI `gpt-4o-mini` model.
*   **Functionality**: Real-time conversational interface with history management.
*   **Vibe**: Fast, efficient, and intelligent.

### 🔊 3. Text to Speech (TTS)
Give your written words a voice.
*   **Powered by**: OpenAI `tts-1` model with the "alloy" voice.
*   **Functionality**: Convert long-form text into spoken audio instantly.
*   **Playback**: Integrated audio player for immediate listening.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) – A declarative, efficient UI library.
- **Backend**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) – Secure proxy server for API requests.
- **Build Tool**: [Vite](https://vitejs.dev/) – A lightning-fast frontend toolchain.
- **AI Integration**: [OpenAI Node.js SDK](https://github.com/openai/openai-node) – Server-side communication with OpenAI.
- **Styling**: **Vanilla CSS** – Clean, lightweight, and custom-tailored styles for a premium look and feel.

---

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- An **OpenAI API Key** (Get one at [platform.openai.com](https://platform.openai.com/)).

### Installation Steps

1. **Clone the project**:
   ```bash
   git clone https://github.com/bh-official/AI-Creative-Studio.git
   ```
   *Or download the source code files manually.*
2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```
3. **Install Backend Dependencies**:
   ```bash
   cd server
   npm install
   cd ..
   ```
4. **Configure Environment Variables**:
   Create a file named `.env` in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_api_key_here
   ```
5. **Run the Backend Server**:
   ```bash
   cd server
   npm start
   ```
   *The backend runs on `http://localhost:3001`.*

6. **Run the Frontend Development Server**:
   In a new terminal:
   ```bash
   npm run dev
   ```
7. **Open your browser** and navigate to the local URL (usually `http://localhost:5173`).

---

## 🛡️ Security
This application is designed with security in mind. By using a **Node.js/Express Backend Proxy**, your OpenAI API key remains hidden on the server and is never exposed to the client-side browser.

---

## 📂 Project Structure

*   `server/`: Secure Node.js backend handling OpenAI API communication.
*   `src/components/`: UI logic for [ImageGenerator](src/components/ImageGenerator.jsx), [ChatBot](src/components/ChatBot.jsx), and [TextToSpeech](src/components/TextToSpeech.jsx).
*   `src/services/openai.js`: Frontend service that communicates with the local backend.
*   `App.jsx`: The main dashboard layout and entry point.
*   `index.css`: Global design system and premium styling tokens.

---

*Enjoy your creative journey with the AI Creative Studio!*
