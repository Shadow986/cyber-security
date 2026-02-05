let commentId = 1;

(window as any).submitComment = () => {
    const input = (document.getElementById('xssInput') as HTMLTextAreaElement).value;
    const output = document.getElementById('xssOutput')!;
    
    if (!input.trim()) {
        output.innerHTML = '<span style="color: #ff6b6b;">❌ Please enter a comment</span>';
        return;
    }
    
    // Intentionally vulnerable - directly inserting HTML
    const commentDiv = document.createElement('div');
    commentDiv.style.cssText = 'background: #1a1a2e; padding: 1rem; margin: 1rem 0; border-left: 3px solid #00ff88;';
    commentDiv.innerHTML = `
        <div style="color: #00ff88; margin-bottom: 0.5rem;">Comment #${commentId++}</div>
        <div>${input}</div>
    `;
    
    output.appendChild(commentDiv);
    
    // Check if XSS payload was used
    if (input.includes('<script>') || input.includes('onerror=') || input.includes('onload=')) {
        const alert = document.createElement('div');
        alert.style.cssText = 'background: #ff6b6b; color: white; padding: 1rem; margin: 1rem 0; border-radius: 5px;';
        alert.innerHTML = '⚠️ XSS Payload Detected! In a real scenario, this could execute malicious code.';
        output.appendChild(alert);
    }
    
    (document.getElementById('xssInput') as HTMLTextAreaElement).value = '';
    output.scrollTop = output.scrollHeight;
};

(window as any).setXSSPayload = (payload: string) => {
    (document.getElementById('xssInput') as HTMLTextAreaElement).value = payload;
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
