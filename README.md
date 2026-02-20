# AI Creative Studio 🎨💬🔊

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
- **Build Tool**: [Vite](https://vitejs.dev/) – A lightning-fast frontend toolchain.
- **AI Integration**: [OpenAI Node.js SDK](https://github.com/openai/openai-node) – Seamless client-side communication with OpenAI.
- **Styling**: **Vanilla CSS** – Clean, lightweight, and custom-tailored styles for a premium look and feel.

---

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- An **OpenAI API Key** (Get one at [platform.openai.com](https://platform.openai.com/)).

### Installation Steps

1. **Clone the project** (or download the files).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a file named `.env` in the root directory and add your OpenAI API key:
   ```env
   VITE_OPENAI_API_KEY=your_api_key_here
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and navigate to the local URL (usually `http://localhost:5173`).

---

## 🛡️ Security Note

> [!WARNING]
> This project is currently configured as a **Client-Side Only** application for demonstration purposes. 
> 
> *   **Risk**: Your `VITE_OPENAI_API_KEY` is exposed in the browser's memory and can be seen in the Network tab.
> *   **Production Recommendation**: For a public application, it is highly recommended to set up a **Backend Proxy Server** (Node.js/Express, Python, etc.) to handle API requests and keep your secret key hidden from the client.

---

## 📂 Project Structure

*   `src/components/`: UI logic for [ImageGenerator](src/components/ImageGenerator.jsx), [ChatBot](src/components/ChatBot.jsx), and [TextToSpeech](src/components/TextToSpeech.jsx).
*   `src/services/openai.js`: Centralized service for OpenAI API interaction.
*   `App.jsx`: The main dashboard layout and entry point.
*   `index.css`: Global design system and premium styling tokens.

---

*Enjoy your creative journey with the AI Creative Studio!*
