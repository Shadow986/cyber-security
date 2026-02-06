import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Tools() {
    const tools = [
        { path: '/bruteforce', icon: '🔨', title: 'Brute Force', desc: 'Password attack simulation' },
        { path: '/sqlinjection', icon: '💉', title: 'SQL Injection', desc: 'Database attack demo' },
        { path: '/xss', icon: '⚡', title: 'XSS Attack', desc: 'Cross-site scripting demo' },
        { path: '/portscanner', icon: '🔍', title: 'Port Scanner', desc: 'Scan network ports' },
        { path: '/vulnscanner', icon: '🛡️', title: 'Vulnerability Scanner', desc: 'Detect security weaknesses' },
        { path: '/networkmapper', icon: '🗺️', title: 'Network Mapper', desc: 'Discover network topology' },
        { path: '/hashanalyzer', icon: '🔓', title: 'Hash Analyzer', desc: 'Analyze password hashes' },
        { path: '/prevention', icon: '🛡️', title: 'Prevention Guide', desc: 'Security best practices' }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900", children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-7xl mx-auto px-6 py-16", children: [_jsxs("h1", { className: "text-5xl font-bold mb-4", children: ["Security ", _jsx("span", { className: "text-cyber-yellow", children: "Tools" })] }), _jsx("p", { className: "text-gray-400 mb-12 text-lg", children: "Professional penetration testing toolkit" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: tools.map(tool => (_jsxs(Link, { to: tool.path, className: "bg-forest-800/50 backdrop-blur border border-forest-600 p-8 rounded-xl hover:border-cyber-green hover:bg-forest-700/50 transition group", children: [_jsx("div", { className: "text-5xl mb-4 group-hover:scale-110 transition", children: tool.icon }), _jsx("h2", { className: "text-2xl font-semibold mb-2 text-cyber-green", children: tool.title }), _jsx("p", { className: "text-gray-400", children: tool.desc })] }, tool.path))) })] })] }));
}
