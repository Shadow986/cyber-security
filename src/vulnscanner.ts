const vulnerabilities = [
    { severity: 'critical', desc: 'SQL Injection vulnerability detected', cve: 'CVE-2023-1234' },
    { severity: 'high', desc: 'Outdated SSL/TLS configuration', cve: 'CVE-2021-44228' },
    { severity: 'high', desc: 'Cross-Site Scripting (XSS) vulnerability', cve: 'CVE-2023-5678' },
    { severity: 'medium', desc: 'Weak password policy detected', cve: null },
    { severity: 'medium', desc: 'Missing security headers (CSP, HSTS)', cve: null },
    { severity: 'low', desc: 'Directory listing enabled', cve: null },
    { severity: 'low', desc: 'Server version disclosure', cve: null },
    { severity: 'critical', desc: 'Remote Code Execution possible', cve: 'CVE-2023-9999' }
];

(window as any).startVulnScan = async () => {
    const target = (document.getElementById('vulnTarget') as HTMLInputElement).value;
    const scanType = (document.getElementById('scanType') as HTMLSelectElement).value;
    const output = document.getElementById('vulnOutput')!;
    
    const count = scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8;
    
    output.innerHTML = `<span style="color: #00ff88;">🛡️ Scanning ${target}...</span><br><br>`;
    
    for (let i = 0; i < count; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const vuln = vulnerabilities[i];
        const color = vuln.severity === 'critical' ? '#ff0000' : 
                     vuln.severity === 'high' ? '#ff6b6b' :
                     vuln.severity === 'medium' ? '#ffa500' : '#ffff00';
        
        output.innerHTML += `<div style="border-left: 3px solid ${color}; padding-left: 1rem; margin: 0.5rem 0;">
            <strong style="color: ${color};">[${vuln.severity.toUpperCase()}]</strong> ${vuln.desc}
            ${vuln.cve ? `<br><span style="color: #666;">${vuln.cve}</span>` : ''}
        </div>`;
        output.scrollTop = output.scrollHeight;
    }
    
    output.innerHTML += `<br><span style="color: #00ff88; font-weight: bold;">Scan complete: ${count} vulnerabilities found</span>`;
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
