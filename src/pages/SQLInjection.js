import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'user', password: 'password', role: 'user' },
    { id: 3, username: 'john', password: 'john123', role: 'user' }
];
const SQLInjection = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [output, setOutput] = useState('');
    const attemptLogin = () => {
        const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
        let result = `<div style="color: #00ff88;">📝 Executing Query:</div>
<div style="background: #1a1a2e; padding: 1rem; margin: 1rem 0; border-left: 3px solid #00ff88;">
<code>${query}</code>
</div>`;
        // Check for SQL injection
        if (username.includes("'") || password.includes("'")) {
            if (username.includes("OR") || password.includes("OR") || username.includes("--") || password.includes("--")) {
                result += `<div style="color: #ff6b6b; margin-top: 1rem;">⚠️ SQL Injection Detected!</div>
<div style="color: #00ff88; margin-top: 1rem;">✓ Authentication Bypassed!</div>
<div style="margin-top: 1rem;">
<strong>Returned Users:</strong><br>
${users.map(u => `ID: ${u.id} | Username: ${u.username} | Role: ${u.role}`).join('<br>')}
</div>`;
                setOutput(result);
                return;
            }
            if (username.includes("UNION") || password.includes("UNION")) {
                result += `<div style="color: #ff6b6b; margin-top: 1rem;">⚠️ UNION SQL Injection Detected!</div>
<div style="color: #00ff88; margin-top: 1rem;">✓ Data Extraction Successful!</div>
<div style="margin-top: 1rem;">
<strong>Extracted Data:</strong><br>
${users.map(u => `${u.username}:${u.password}`).join('<br>')}
</div>`;
                setOutput(result);
                return;
            }
        }
        // Normal login
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            result += `<div style="color: #00ff88; margin-top: 1rem;">✓ Login Successful!</div>
<div style="margin-top: 1rem;">Welcome, ${user.username}!</div>`;
        }
        else {
            result += `<div style="color: #ff6b6b; margin-top: 1rem;">✗ Invalid credentials</div>`;
        }
        setOutput(result);
    };
    const setPayload = (payload) => {
        setUsername(payload);
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "SQL Injection Tester" }), _jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value) }), _jsx("input", { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx("button", { onClick: attemptLogin, children: "Login" })] }), _jsxs("div", { children: [_jsx("button", { onClick: () => setPayload("admin' OR '1'='1' --"), children: "Try Bypass Payload" }), _jsx("button", { onClick: () => setPayload("admin' UNION SELECT * FROM users --"), children: "Try UNION Payload" })] }), _jsx("div", { dangerouslySetInnerHTML: { __html: output } })] }));
};
export default SQLInjection;
