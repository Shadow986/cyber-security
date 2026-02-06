import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-900 text-white p-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "\uD83D\uDDFA\uFE0F Network Mapper" }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block mb-2", children: "Network Range:" }), _jsx("input", { type: "text", value: range, onChange: (e) => setRange(e.target.value), className: "bg-gray-800 border border-gray-600 rounded px-3 py-2 w-64" }), _jsx("button", { onClick: startNetworkMap, disabled: scanning, className: "ml-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded disabled:opacity-50", children: scanning ? 'Scanning...' : 'Start Discovery' })] }), _jsx("div", { className: "bg-gray-800 p-4 rounded h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm", children: output || 'Enter network range and click "Start Discovery"' })] }));
}
