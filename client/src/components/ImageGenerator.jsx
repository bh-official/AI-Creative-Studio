import React, { useState } from 'react';
import { generateImage } from '../services/openai';

const ImageGenerator = () => {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt) return;

        setLoading(true);
        setError('');
        setImageUrl('');

        try {
            const url = await generateImage(prompt);
            setImageUrl(url);
        } catch (err) {
            setError('Failed to generate image. Please checking your API key and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="component-card generator-card">
            <h2>🎨 Image Generation</h2>
            <div className="generator-container">
                <div className="input-group">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the image you want to create..."
                        className="prompt-input"
                        disabled={loading}
                    />
                    <button
                        onClick={handleGenerate}
                        disabled={loading || !prompt}
                        className="generate-btn"
                    >
                        {loading ? 'Generating...' : 'Generate Art'}
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="image-display">
                    {loading && (
                        <div className="loader">
                            <div className="spinner"></div>
                            <span>Creating your masterpiece...</span>
                        </div>
                    )}
                    {!loading && !imageUrl && (
                        <div className="loader">
                            <span style={{ opacity: 0.3 }}>Your art will appear here</span>
                        </div>
                    )}
                    {imageUrl && (
                        <div className="result-container">
                            <img src={imageUrl} alt={prompt} className="generated-image" />
                            <a href={imageUrl} download="generated-image.png" target="_blank" rel="noreferrer" className="download-link">
                                Download High Res
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;
