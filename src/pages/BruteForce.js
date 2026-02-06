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
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2b23] to-[#10362c] text-white", children: [_jsx(Navbar, {}), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-8 text-center text-[#00ff41]", children: "Brute Force Simulator" }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Target Password:" }), _jsx("input", { type: "text", value: targetPassword, onChange: (e) => setTargetPassword(e.target.value), className: "w-full p-3 bg-[#0d2b23]/80 border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#00ff41] focus:outline-none transition-colors", placeholder: "Enter target password" })] }), _jsxs("div", { className: "bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Wordlist (one per line):" }), _jsx("textarea", { value: wordlist, onChange: (e) => setWordlist(e.target.value), className: "w-full p-3 bg-[#0d2b23]/80 border border-[#00ff41]/30 rounded-lg h-32 text-white placeholder-gray-400 focus:border-[#00ff41] focus:outline-none transition-colors resize-none", placeholder: "password\n123456\nadmin\nqwerty" })] }), _jsx("button", { onClick: startBruteForce, disabled: isRunning, className: "w-full bg-[#f4b942] hover:bg-[#f4b942]/80 disabled:bg-gray-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#f4b942]/20", children: isRunning ? 'Running...' : 'Start Brute Force' }), _jsxs("div", { className: "bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30", children: [_jsx("label", { className: "block text-sm font-medium mb-2 text-[#00ff41]", children: "Output:" }), _jsx("pre", { className: "bg-[#0a1f1a] p-4 rounded-lg h-64 overflow-y-auto text-[#00ff41] font-mono text-sm border border-[#00ff41]/20", children: output })] })] })] })] }));
}
