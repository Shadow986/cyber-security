import React, { useState } from 'react';

const XSS: React.FC = () => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState<string[]>([]);
    const [commentId, setCommentId] = useState(1);

    const submitComment = () => {
        if (!input.trim()) return;
        
        const newComment = `<div style="color: #00ff88;">Comment #${commentId}</div><div>${input}</div>`;
        setComments(prev => [...prev, newComment]);
        setCommentId(prev => prev + 1);
        
        if (input.includes('<script>') || input.includes('onerror=') || input.includes('onload=')) {
            setComments(prev => [...prev, '<div style="background: #ff6b6b; color: white; padding: 1rem;">⚠️ XSS Payload Detected!</div>']);
        }
        
        setInput('');
    };

    return (
        <div>
            <h1>XSS Attack Demo</h1>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={submitComment}>Submit</button>
            <button onClick={() => setInput('<script>alert("XSS")</script>')}>Script Payload</button>
            <div>
                {comments.map((comment, i) => (
                    <div key={i} style={{background: '#1a1a2e', padding: '1rem', margin: '1rem 0'}} 
                         dangerouslySetInnerHTML={{__html: comment}} />
                ))}
            </div>
        </div>
    );
};

export default XSS;