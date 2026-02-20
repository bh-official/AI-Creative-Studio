import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env from root
dotenv.config({ path: join(__dirname, '../.env') });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY,
});

// Image Generation Endpoint
app.post('/api/generate-image', async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        res.json({ url: response.data[0].url });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ error: error.message });
    }
});

// Chat Endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages,
        });
        res.json(response.choices[0].message);
    } catch (error) {
        console.error("Error generating chat response:", error);
        res.status(500).json({ error: error.message });
    }
});

// TTS Endpoint
app.post('/api/tts', async (req, res) => {
    try {
        const { text } = req.body;
        const response = await openai.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: text,
        });
        
        const buffer = Buffer.from(await response.arrayBuffer());
        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': buffer.length,
        });
        res.send(buffer);
    } catch (error) {
        console.error("Error generating speech:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
