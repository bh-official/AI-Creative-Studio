import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/openai';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I am your AI assistant. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            const response = await generateChatResponse(newMessages);
            setMessages([...newMessages, response]);
        } catch (error) {
            setMessages([...newMessages, { role: 'assistant', content: 'Sorry, I encountered an error.' }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="component-card chat-card">
            <h2>💬 AI Chat Assistant</h2>
            <div className="chat-history">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <div className="message-content">{msg.content}</div>
                    </div>
                ))}
                {loading && <div className="message assistant"><div className="message-content">Typing...</div></div>}
                <div ref={messagesEndRef} />
            </div>
            <div className="chat-input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    disabled={loading}
                />
                <button onClick={handleSend} disabled={loading || !input.trim()}>Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
