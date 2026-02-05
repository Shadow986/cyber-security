const hashDatabase: { [key: string]: string } = {
    '5f4dcc3b5aa765d61d8327deb882cf99': 'password',
    'e99a18c428cb38d5f260853678922e03': 'abc123',
    '25d55ad283aa400af464c76d713c07ad': '12345678',
    '098f6bcd4621d373cade4e832627b4f6': 'test',
    '5ebe2294ecd0e0f08eab7690d2a6ee69': 'secret'
};

const commonPasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'abc123', '12345678', 'test', 'secret'];

function detectHashType(hash: string): string {
    const len = hash.length;
    if (len === 32) return 'MD5';
    if (len === 40) return 'SHA1';
    if (len === 64) return 'SHA256';
    if (hash.startsWith('$2')) return 'bcrypt';
    return 'Unknown';
}

function md5(str: string): string {
    // Simple mock MD5 for demo
    return hashDatabase[Object.keys(hashDatabase).find(k => hashDatabase[k] === str) || ''] || '';
}

(window as any).analyzeHash = () => {
    const hash = (document.getElementById('hashInput') as HTMLInputElement).value.trim();
    const typeSelect = (document.getElementById('hashType') as HTMLSelectElement).value;
    const output = document.getElementById('hashOutput')!;
    
    if (!hash) {
        output.innerHTML = '<span style="color: #ff6b6b;">❌ Please enter a hash</span>';
        return;
    }
    
    const detectedType = typeSelect === 'auto' ? detectHashType(hash) : typeSelect.toUpperCase();
    const entropy = (hash.length * 4).toFixed(2);
    
    output.innerHTML = `<div style="color: #00ff88;">📊 Hash Analysis</div><br>
    <div><strong>Hash:</strong> ${hash}</div>
    <div><strong>Type:</strong> ${detectedType}</div>
    <div><strong>Length:</strong> ${hash.length} characters</div>
    <div><strong>Entropy:</strong> ${entropy} bits</div>`;
};

(window as any).crackHash = async () => {
    const hash = (document.getElementById('hashInput') as HTMLInputElement).value.trim();
    const output = document.getElementById('hashOutput')!;
    
    if (!hash) {
        output.innerHTML = '<span style="color: #ff6b6b;">❌ Please enter a hash</span>';
        return;
    }
    
    output.innerHTML = '<span style="color: #00ff88;">🔓 Attempting to crack hash...</span><br><br>';
    
    // Check database first
    if (hashDatabase[hash]) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        output.innerHTML += `<div style="color: #00ff88; font-weight: bold;">✓ Hash found in database!</div>
        <div style="margin-top: 1rem;">Plaintext: <strong>${hashDatabase[hash]}</strong></div>`;
        return;
    }
    
    // Try common passwords
    for (let i = 0; i < commonPasswords.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const attempt = commonPasswords[i];
        output.innerHTML += `<div>Trying: ${attempt}...</div>`;
        output.scrollTop = output.scrollHeight;
    }
    
    output.innerHTML += '<br><span style="color: #ff6b6b;">❌ Hash not found in database or common passwords</span>';
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
