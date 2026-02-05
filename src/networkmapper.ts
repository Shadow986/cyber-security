const devices = [
    { ip: '192.168.1.1', mac: '00:11:22:33:44:55', type: 'Router', os: 'Linux', vendor: 'TP-Link' },
    { ip: '192.168.1.10', mac: 'AA:BB:CC:DD:EE:FF', type: 'Workstation', os: 'Windows 11', vendor: 'Dell' },
    { ip: '192.168.1.15', mac: '11:22:33:44:55:66', type: 'Server', os: 'Ubuntu 22.04', vendor: 'HP' },
    { ip: '192.168.1.20', mac: '77:88:99:AA:BB:CC', type: 'Printer', os: 'Embedded', vendor: 'Canon' },
    { ip: '192.168.1.25', mac: 'DD:EE:FF:00:11:22', type: 'Smartphone', os: 'Android 13', vendor: 'Samsung' },
    { ip: '192.168.1.30', mac: '33:44:55:66:77:88', type: 'Smart TV', os: 'webOS', vendor: 'LG' }
];

(window as any).startNetworkMap = async () => {
    const range = (document.getElementById('networkRange') as HTMLInputElement).value;
    const output = document.getElementById('networkOutput')!;
    
    output.innerHTML = `<span style="color: #00ff88;">🗺️ Discovering devices on ${range}...</span><br><br>`;
    
    for (let i = 0; i < devices.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        const device = devices[i];
        
        output.innerHTML += `<div style="background: #1a1a2e; padding: 1rem; margin: 0.5rem 0; border-left: 3px solid #00ff88;">
            <div style="color: #00ff88; font-weight: bold;">${device.ip} - ${device.type}</div>
            <div style="color: #666; font-size: 0.9rem;">MAC: ${device.mac}</div>
            <div>OS: ${device.os}</div>
            <div>Vendor: ${device.vendor}</div>
        </div>`;
        output.scrollTop = output.scrollHeight;
    }
    
    output.innerHTML += `<br><span style="color: #00ff88; font-weight: bold;">Discovery complete: ${devices.length} devices found</span>`;
};

document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
