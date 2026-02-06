import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../components/Navbar';
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
export default function VulnScanner() {
    const [target, setTarget] = useState('');
    const [scanType, setScanType] = useState('quick');
    const [output, setOutput] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const startVulnScan = async () => {
        if (!target)
            return;
        const count = scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8;
        setIsScanning(true);
        setOutput(`🛡️ Scanning ${target}...\n\n`);
        for (let i = 0; i < count; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            const vuln = vulnerabilities[i];
            setOutput(prev => prev + `[${vuln.severity.toUpperCase()}] ${vuln.desc}\n${vuln.cve ? vuln.cve + '\n' : ''}\n`);
        }
        setOutput(prev => prev + `Scan complete: ${count} vulnerabilities found`);
        setIsScanning(false);
    };
    const getSeverityColor = (severity) => {
        switch (severity) {
            case 'critical': return 'border-red-500 text-red-500';
            case 'high': return 'border-red-400 text-red-400';
            case 'medium': return 'border-orange-400 text-orange-400';
            case 'low': return 'border-yellow-400 text-yellow-400';
            default: return 'border-gray-400 text-gray-400';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-[#0a1f1a] text-white", children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 text-center text-[#00ff41]", children: "Vulnerability Scanner" }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Target:" }), _jsx("input", { type: "text", value: target, onChange: (e) => setTarget(e.target.value), className: "w-full p-3 bg-[#10362c] border border-[#134235] rounded-lg text-white placeholder-gray-400 focus:border-[#00ff41] transition-colors", placeholder: "https://example.com" })] }), _jsxs("div", { className: "backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Scan Type:" }), _jsxs("select", { value: scanType, onChange: (e) => setScanType(e.target.value), className: "w-full p-3 bg-[#10362c] border border-[#134235] rounded-lg text-white focus:border-[#00ff41] transition-colors", children: [_jsx("option", { value: "quick", children: "Quick Scan" }), _jsx("option", { value: "full", children: "Full Scan" }), _jsx("option", { value: "comprehensive", children: "Comprehensive Scan" })] })] }), _jsx("button", { onClick: startVulnScan, disabled: isScanning || !target, className: "w-full bg-[#00ff41] hover:bg-[#00ff41]/80 disabled:bg-[#134235] text-[#0a1f1a] font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#00ff41]/20", children: isScanning ? 'Scanning...' : 'Start Vulnerability Scan' }), _jsxs("div", { className: "backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Output:" }), _jsx("pre", { className: "bg-[#0a1f1a] p-4 rounded-lg h-64 overflow-y-auto text-[#00ff41] font-mono text-sm border border-[#134235]", children: output })] }), !isScanning && output && (_jsxs("div", { className: "backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]", children: [_jsx("h3", { className: "text-lg font-semibold mb-4 text-[#00ff41]", children: "Vulnerability Summary:" }), _jsx("div", { className: "space-y-2", children: vulnerabilities.slice(0, scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8).map((vuln, index) => (_jsxs("div", { className: `border-l-4 pl-4 py-2 rounded-r-lg bg-[#10362c]/30 ${getSeverityColor(vuln.severity)}`, children: [_jsxs("div", { className: "font-semibold", children: ["[", vuln.severity.toUpperCase(), "] ", vuln.desc] }), vuln.cve && _jsx("div", { className: "text-gray-400 text-sm", children: vuln.cve })] }, index))) })] }))] })] })] }));
}
