const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const generateImage = async (prompt) => {
    try {
        const response = await fetch(`${API_URL}/generate-image`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
        if (!response.ok) throw new Error('Failed to generate image');
        const data = await response.json();
        return data.url;
    } catch (error) {
        console.error("Error generating image:", error);
        throw error;
    }
};

export const generateChatResponse = async (messages) => {
    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages }),
        });
        if (!response.ok) throw new Error('Failed to generate chat response');
        const data = await response.json();
        return data; // returns the message object { role, content }
    } catch (error) {
        console.error("Error generating chat response:", error);
        throw error;
    }
};

export const generateSpeech = async (text) => {
    try {
        const response = await fetch(`${API_URL}/tts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });
        if (!response.ok) throw new Error('Failed to generate speech');
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Error generating speech:", error);
        throw error;
    }
};
