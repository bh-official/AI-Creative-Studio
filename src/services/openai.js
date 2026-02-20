import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Valid for client-side demo; separate backend recommended for production
});

export const generateImage = async (prompt) => {
    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });
        return response.data[0].url;
    } catch (error) {
        console.error("Error generating image:", error);
        throw error;
    }
};

export const generateChatResponse = async (messages) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages,
        });
        return response.choices[0].message;
    } catch (error) {
        console.error("Error generating chat response:", error);
        throw error;
    }
};

export const generateSpeech = async (text) => {
    try {
        const response = await openai.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: text,
        });
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("Error generating speech:", error);
        throw error;
    }
};
