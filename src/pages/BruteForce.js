import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../components/Navbar';
export default function BruteForce() {
    const [isRunning, setIsRunning] = useState(false);
    const [targetPassword, setTargetPassword] = useState('');
    const [wordlist, setWordlist] = useState('');
    const [output, setOutput] = useState('');
    const generateWordlist = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        const passwords = [];
        for (let i = 0; i < 50; i++) {
            const len = Math.floor(Math.random() * 4) + 4;
            const pass = Array(len).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
            passwords.push(pass);
        }
        setWordlist(passwords.join('\n'));
    };
    const startBruteForce = async () => {
        if (!targetPassword || !wordlist)
            return;
        setIsRunning(true);
        setOutput('🔓 Starting brute force attack...\n\n');
        const passwords = wordlist.split('\n').filter(p => p.trim());
        for (const password of passwords) {
            if (password.trim() === targetPassword) {
                setOutput(prev => prev + `\n✅ SUCCESS! Password cracked: ${password}\n`);
                setIsRunning(false);
                return;
            }
            setOutput(prev => prev + `❌ Trying: ${password}\n`);
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        setOutput(prev => prev + '\n❌ Password not found in wordlist\n');
        setIsRunning(false);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900", children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-4xl mx-auto px-6 py-16", children: [_jsxs("h1", { className: "text-5xl font-bold mb-4", children: ["\uD83D\uDD13 Brute Force ", _jsx("span", { className: "text-cyber-yellow", children: "Simulator" })] }), _jsx("p", { className: "text-gray-400 mb-8 text-lg", children: "Test password strength against dictionary attacks" }), _jsxs("div", { className: "bg-forest-800/50 backdrop-blur border border-forest-600 rounded-xl p-8 mb-6", children: [_jsxs("div", { className: "bg-cyber-yellow/10 border border-cyber-yellow/30 rounded-lg p-4 mb-6", children: [_jsx("h3", { className: "text-cyber-yellow font-semibold mb-2", children: "\uD83D\uDCCB Instructions:" }), _jsxs("ol", { className: "text-gray-300 text-sm space-y-1 list-decimal list-inside", children: [_jsx("li", { children: "Enter a target password to crack" }), _jsx("li", { children: "Generate a random wordlist or enter your own passwords (one per line)" }), _jsx("li", { children: "Click \"Start Brute Force\" to begin the attack simulation" }), _jsx("li", { children: "Watch as the tool attempts each password until a match is found" })] })] }), _jsx("label", { className: "block text-sm font-semibold mb-2 text-cyber-green", children: "Target Password:" }), _jsx("input", { type: "text", value: targetPassword, onChange: (e) => setTargetPassword(e.target.value), className: "w-full p-4 bg-forest-900 border border-forest-600 rounded-lg mb-6 text-white focus:border-cyber-green focus:outline-none", placeholder: "Enter password to crack (e.g., admin123)" }), _jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("label", { className: "text-sm font-semibold text-cyber-green", children: "Wordlist (one per line):" }), _jsx("button", { onClick: generateWordlist, className: "bg-forest-700 text-cyber-green px-4 py-2 rounded-lg text-sm hover:bg-forest-600 transition border border-forest-600", children: "\uD83C\uDFB2 Generate Random List" })] }), _jsx("textarea", { value: wordlist, onChange: (e) => setWordlist(e.target.value), className: "w-full p-4 bg-forest-900 border border-forest-600 rounded-lg h-40 text-white focus:border-cyber-green focus:outline-none resize-none font-mono text-sm mb-6", placeholder: "password\n123456\nadmin\nqwerty\nletmein" }), _jsx("button", { onClick: startBruteForce, disabled: isRunning || !targetPassword || !wordlist, className: "w-full bg-cyber-yellow text-forest-900 py-4 rounded-lg font-semibold hover:bg-yellow-500 disabled:bg-gray-600 disabled:text-gray-400 transition", children: isRunning ? '⏳ Running Attack...' : '🚀 Start Brute Force' })] }), _jsxs("div", { className: "bg-forest-800/50 backdrop-blur border border-forest-600 rounded-xl p-8", children: [_jsx("label", { className: "block text-sm font-semibold mb-4 text-cyber-green", children: "Attack Output:" }), _jsx("pre", { className: "bg-black/80 p-6 rounded-lg h-96 overflow-auto text-cyber-green font-mono text-sm border border-forest-600", children: output || 'Waiting to start attack...' })] })] })] }));
}
