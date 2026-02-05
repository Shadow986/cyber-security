let isRunning = false;

(window as any).startBruteForce = async () => {
    const target = (document.getElementById('targetPassword') as HTMLInputElement).value;
    const wordlist = (document.getElementById('wordlist') as HTMLTextAreaElement).value.split('\n').filter(w => w.trim());
    const output = document.getElementById('bruteOutput')!;
    
    if (!target) {
        output.innerHTML = '<span style="color: #ff6b6b;">❌ Please enter a target password</span>';
        return;
    }
    
    isRunning = true;
    output.innerHTML = '<span style="color: #00ff88;">🔨 Starting brute force attack...</span><br><br>';
    
    for (let i = 0; i < wordlist.length && isRunning; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const attempt = wordlist[i].trim();
        const success = attempt === target;
        
        output.innerHTML += `<div>Attempt ${i + 1}: Testing "${attempt}" ${success ? '<span style="color: #00ff88;">✓ SUCCESS!</span>' : '<span style="color: #ff6b6b;">✗ Failed</span>'}</div>`;
        output.scrollTop = output.scrollHeight;
        
        if (success) {
            output.innerHTML += `<br><span style="color: #00ff88; font-weight: bold;">⚠️ Password cracked: "${attempt}"</span>`;
            isRunning = false;
            break;
        }
    }
    
    if (isRunning) {
        output.innerHTML += '<br><span style="color: #ff6b6b;">❌ Password not found in wordlist</span>';
    }
    isRunning = false;
};

(window as any).stopBruteForce = () => {
    isRunning = false;
    const output = document.getElementById('bruteOutput')!;
    output.innerHTML += '<br><span style="color: #ffa500;">⏸️ Attack stopped</span>';
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
