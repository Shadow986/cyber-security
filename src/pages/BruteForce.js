import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../components/Navbar';
export default function BruteForce() {
    const [isRunning, setIsRunning] = useState(false);
    const [targetPassword, setTargetPassword] = useState('');
    const [wordlist, setWordlist] = useState('');
    const [output, setOutput] = useState('');
    const startBruteForce = async () => {
        if (!targetPassword || !wordlist)
            return;
        setIsRunning(true);
        setOutput('Starting brute force attack...\n');
        const passwords = wordlist.split('\n').filter(p => p.trim());
        for (const password of passwords) {
            if (password.trim() === targetPassword) {
                setOutput(prev => prev + `✅ Password found: ${password}\n`);
                setIsRunning(false);
                return;
            }
            setOutput(prev => prev + `❌ Trying: ${password}\n`);
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        setOutput(prev => prev + '❌ Password not found in wordlist\n');
        setIsRunning(false);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-900 text-white", children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8 text-center", children: "Brute Force Simulator" }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Target Password:" }), _jsx("input", { type: "text", value: targetPassword, onChange: (e) => setTargetPassword(e.target.value), className: "w-full p-3 bg-gray-800 border border-gray-700 rounded-lg", placeholder: "Enter target password" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Wordlist (one per line):" }), _jsx("textarea", { value: wordlist, onChange: (e) => setWordlist(e.target.value), className: "w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32", placeholder: "password\n123456\nadmin\nqwerty" })] }), _jsx("button", { onClick: startBruteForce, disabled: isRunning, className: "w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg", children: isRunning ? 'Running...' : 'Start Brute Force' }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-2", children: "Output:" }), _jsx("pre", { className: "bg-black p-4 rounded-lg h-64 overflow-y-auto text-green-400 font-mono text-sm", children: output })] })] })] })] }));
}
