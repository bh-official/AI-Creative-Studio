import React, { useState } from 'react';
import { generateSpeech } from '../services/openai';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [audioUrl, setAudioUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSpeak = async () => {
        if (!text) return;
        setLoading(true);
        setAudioUrl('');

        try {
            const url = await generateSpeech(text);
            setAudioUrl(url);
        } catch (error) {
            console.error(error);
            alert('Failed to generate speech');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="component-card tts-card">
            <h2>🔊 Text to Speech</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to convert to speech..."
                rows="4"
                className="tts-input"
                disabled={loading}
            />
            <div className="tts-controls">
                <button
                    onClick={handleSpeak}
                    disabled={loading || !text}
                    className="action-btn"
                >
                    {loading ? 'Generating Audio...' : 'Speak'}
                </button>
            </div>
            {audioUrl && (
                <div className="audio-player-container">
                    <audio controls src={audioUrl} autoPlay className="audio-player">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default TextToSpeech;
