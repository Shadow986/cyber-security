import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../components/Navbar';
const devices = [
    { ip: '192.168.1.1', mac: '00:11:22:33:44:55', type: 'Router', os: 'Linux', vendor: 'TP-Link' },
    { ip: '192.168.1.10', mac: 'AA:BB:CC:DD:EE:FF', type: 'Workstation', os: 'Windows 11', vendor: 'Dell' },
    { ip: '192.168.1.15', mac: '11:22:33:44:55:66', type: 'Server', os: 'Ubuntu 22.04', vendor: 'HP' },
    { ip: '192.168.1.20', mac: '77:88:99:AA:BB:CC', type: 'Printer', os: 'Embedded', vendor: 'Canon' },
    { ip: '192.168.1.25', mac: 'DD:EE:FF:00:11:22', type: 'Smartphone', os: 'Android 13', vendor: 'Samsung' },
    { ip: '192.168.1.30', mac: '33:44:55:66:77:88', type: 'Smart TV', os: 'webOS', vendor: 'LG' }
];
export default function NetworkMapper() {
    const [range, setRange] = useState('192.168.1.0/24');
    const [output, setOutput] = useState('');
    const [scanning, setScanning] = useState(false);
    const startNetworkMap = async () => {
        setScanning(true);
        setOutput(`🗺️ Discovering devices on ${range}...\n\n`);
        for (let i = 0; i < devices.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 800));
            const device = devices[i];
            setOutput(prev => prev + `${device.ip} - ${device.type}\nMAC: ${device.mac}\nOS: ${device.os}\nVendor: ${device.vendor}\n\n`);
        }
        setOutput(prev => prev + `Discovery complete: ${devices.length} devices found`);
        setScanning(false);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900", children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [_jsxs("h1", { className: "text-5xl font-bold mb-4", children: ["\uD83D\uDDFA\uFE0F Network ", _jsx("span", { className: "text-cyber-yellow", children: "Mapper" })] }), _jsx("p", { className: "text-gray-400 mb-12 text-lg", children: "Discover network topology and devices" }), _jsxs("div", { className: "bg-forest-800/50 backdrop-blur border border-forest-600 rounded-xl p-8", children: [_jsx("input", { type: "text", value: range, onChange: (e) => setRange(e.target.value), placeholder: "Network Range", className: "w-full p-4 bg-forest-900 border border-forest-600 rounded-lg mb-4 text-white focus:border-cyber-green focus:outline-none" }), _jsx("button", { onClick: startNetworkMap, disabled: scanning, className: "bg-cyber-yellow text-forest-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 disabled:bg-gray-600 disabled:text-gray-400 transition", children: scanning ? 'Scanning...' : 'Start Discovery' }), _jsx("pre", { className: "mt-6 p-6 bg-black/80 rounded-lg text-cyber-green h-96 overflow-auto font-mono text-sm border border-forest-600", children: output || 'Enter network range and click "Start Discovery"' })] })] })] }));
}
