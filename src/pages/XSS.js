import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const XSS = () => {
    const [input, setInput] = useState('');
    const [comments, setComments] = useState([]);
    const [commentId, setCommentId] = useState(1);
    const submitComment = () => {
        if (!input.trim())
            return;
        const newComment = `<div style="color: #00ff88;">Comment #${commentId}</div><div>${input}</div>`;
        setComments(prev => [...prev, newComment]);
        setCommentId(prev => prev + 1);
        if (input.includes('<script>') || input.includes('onerror=') || input.includes('onload=')) {
            setComments(prev => [...prev, '<div style="background: #ff6b6b; color: white; padding: 1rem;">⚠️ XSS Payload Detected!</div>']);
        }
        setInput('');
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "XSS Attack Demo" }), _jsx("textarea", { value: input, onChange: (e) => setInput(e.target.value) }), _jsx("button", { onClick: submitComment, children: "Submit" }), _jsx("button", { onClick: () => setInput('<script>alert("XSS")</script>'), children: "Script Payload" }), _jsx("div", { children: comments.map((comment, i) => (_jsx("div", { style: { background: '#1a1a2e', padding: '1rem', margin: '1rem 0' }, dangerouslySetInnerHTML: { __html: comment } }, i))) })] }));
};
export default XSS;
