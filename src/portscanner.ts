const commonPorts = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995, 3306, 3389, 5432, 8080];
const services: { [key: number]: string } = {
    21: 'FTP', 22: 'SSH', 23: 'Telnet', 25: 'SMTP', 53: 'DNS', 80: 'HTTP',
    110: 'POP3', 143: 'IMAP', 443: 'HTTPS', 993: 'IMAPS', 995: 'POP3S',
    3306: 'MySQL', 3389: 'RDP', 5432: 'PostgreSQL', 8080: 'HTTP-Alt'
};

let isScanning = false;

(window as any).startPortScan = async () => {
    const target = (document.getElementById('target') as HTMLInputElement).value;
    const range = (document.getElementById('portRange') as HTMLSelectElement).value;
    const output = document.getElementById('portOutput')!;
    
    let ports: number[] = [];
    if (range === 'common') {
        ports = commonPorts;
    } else if (range === 'well-known') {
        ports = Array.from({length: 1024}, (_, i) => i + 1);
    } else {
        const start = parseInt((document.getElementById('startPort') as HTMLInputElement).value);
        const end = parseInt((document.getElementById('endPort') as HTMLInputElement).value);
        ports = Array.from({length: end - start + 1}, (_, i) => start + i);
    }
    
    isScanning = true;
    output.innerHTML = `<span style="color: #00ff88;">🔍 Scanning ${target}...</span><br><br>`;
    
    let openPorts = 0;
    for (let i = 0; i < ports.length && isScanning; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        const port = ports[i];
        const isOpen = Math.random() > 0.8;
        const service = services[port] || 'Unknown';
        
        if (isOpen) {
            openPorts++;
            output.innerHTML += `<div style="color: #00ff88;">Port ${port}: OPEN (${service})</div>`;
        } else {
            output.innerHTML += `<div style="color: #666;">Port ${port}: CLOSED</div>`;
        }
        output.scrollTop = output.scrollHeight;
    }
    
    if (isScanning) {
        output.innerHTML += `<br><span style="color: #00ff88; font-weight: bold;">Scan complete: ${openPorts} open ports found</span>`;
    }
    isScanning = false;
};

(window as any).stopPortScan = () => {
    isScanning = false;
};

document.getElementById('portRange')?.addEventListener('change', (e) => {
    const custom = document.getElementById('customRange')!;
    custom.style.display = (e.target as HTMLSelectElement).value === 'custom' ? 'block' : 'none';
});

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
