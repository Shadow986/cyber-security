const users = [
    { id: 1, username: 'admin', password: 'admin123', role: 'admin' },
    { id: 2, username: 'user', password: 'password', role: 'user' },
    { id: 3, username: 'john', password: 'john123', role: 'user' }
];

(window as any).attemptLogin = () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const output = document.getElementById('sqlOutput')!;
    
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    output.innerHTML = `<div style="color: #00ff88;">📝 Executing Query:</div>
<div style="background: #1a1a2e; padding: 1rem; margin: 1rem 0; border-left: 3px solid #00ff88;">
<code>${query}</code>
</div>`;
    
    // Check for SQL injection
    if (username.includes("'") || password.includes("'")) {
        if (username.includes("OR") || password.includes("OR") || username.includes("--") || password.includes("--")) {
            output.innerHTML += `<div style="color: #ff6b6b; margin-top: 1rem;">⚠️ SQL Injection Detected!</div>
<div style="color: #00ff88; margin-top: 1rem;">✓ Authentication Bypassed!</div>
<div style="margin-top: 1rem;">
<strong>Returned Users:</strong><br>
${users.map(u => `ID: ${u.id} | Username: ${u.username} | Role: ${u.role}`).join('<br>')}
</div>`;
            return;
        }
        
        if (username.includes("UNION") || password.includes("UNION")) {
            output.innerHTML += `<div style="color: #ff6b6b; margin-top: 1rem;">⚠️ UNION SQL Injection Detected!</div>
<div style="color: #00ff88; margin-top: 1rem;">✓ Data Extraction Successful!</div>
<div style="margin-top: 1rem;">
<strong>Extracted Data:</strong><br>
${users.map(u => `${u.username}:${u.password}`).join('<br>')}
</div>`;
            return;
        }
    }
    
    // Normal login
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        output.innerHTML += `<div style="color: #00ff88; margin-top: 1rem;">✓ Login Successful!</div>
<div style="margin-top: 1rem;">Welcome, ${user.username}!</div>`;
    } else {
        output.innerHTML += `<div style="color: #ff6b6b; margin-top: 1rem;">✗ Invalid credentials</div>`;
    }
};

(window as any).setPayload = (payload: string) => {
    (document.getElementById('username') as HTMLInputElement).value = payload;
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
