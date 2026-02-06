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
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white", children: [_jsx(Navbar, {}), _jsxs("section", { className: "max-w-7xl mx-auto px-8 py-12", children: [_jsx("h1", { className: "text-5xl font-bold text-center mb-12 text-green-400", children: "Security Tools" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: tools.map(tool => (_jsxs(Link, { to: tool.path, className: "bg-gray-800/60 p-6 rounded-lg border border-green-400/30 hover:border-green-400 transition transform hover:-translate-y-2", children: [_jsxs("h3", { className: "text-2xl font-bold mb-2", children: [tool.icon, " ", tool.title] }), _jsx("p", { className: "text-gray-400", children: tool.desc })] }, tool.path))) })] })] }));
}
