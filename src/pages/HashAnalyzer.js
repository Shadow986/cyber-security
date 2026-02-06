import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const hashDatabase = {
    '5f4dcc3b5aa765d61d8327deb882cf99': 'password',
    'e99a18c428cb38d5f260853678922e03': 'abc123',
    '25d55ad283aa400af464c76d713c07ad': '12345678',
    '098f6bcd4621d373cade4e832627b4f6': 'test',
    '5ebe2294ecd0e0f08eab7690d2a6ee69': 'secret'
};
const commonPasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'abc123', '12345678', 'test', 'secret'];
function detectHashType(hash) {
    const len = hash.length;
    if (len === 32)
        return 'MD5';
    if (len === 40)
        return 'SHA1';
    if (len === 64)
        return 'SHA256';
    if (hash.startsWith('$2'))
        return 'bcrypt';
    return 'Unknown';
}
export default function HashAnalyzer() {
    const [hash, setHash] = useState('');
    const [hashType, setHashType] = useState('auto');
    const [output, setOutput] = useState('');
    const [cracking, setCracking] = useState(false);
    const analyzeHash = () => {
        if (!hash.trim()) {
            setOutput('❌ Please enter a hash');
            return;
        }
        const detectedType = hashType === 'auto' ? detectHashType(hash) : hashType.toUpperCase();
        const entropy = (hash.length * 4).toFixed(2);
        setOutput(`📊 Hash Analysis\n\nHash: ${hash}\nType: ${detectedType}\nLength: ${hash.length} characters\nEntropy: ${entropy} bits`);
    };
    const crackHash = async () => {
        if (!hash.trim()) {
            setOutput('❌ Please enter a hash');
            return;
        }
        setCracking(true);
        setOutput('🔓 Attempting to crack hash...\n\n');
        if (hashDatabase[hash]) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setOutput(prev => prev + `✓ Hash found in database!\nPlaintext: ${hashDatabase[hash]}`);
            setCracking(false);
            return;
        }
        for (let i = 0; i < commonPasswords.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            setOutput(prev => prev + `Trying: ${commonPasswords[i]}...\n`);
        }
        setOutput(prev => prev + '\n❌ Hash not found in database or common passwords');
        setCracking(false);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-900 text-white p-8", children: [_jsx("h1", { className: "text-3xl font-bold mb-8", children: "\uD83D\uDD0D Hash Analyzer" }), _jsxs("div", { className: "mb-6 space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-2", children: "Hash to analyze:" }), _jsx("input", { type: "text", value: hash, onChange: (e) => setHash(e.target.value), className: "bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full max-w-lg", placeholder: "Enter hash here..." })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-2", children: "Hash Type:" }), _jsxs("select", { value: hashType, onChange: (e) => setHashType(e.target.value), className: "bg-gray-800 border border-gray-600 rounded px-3 py-2", children: [_jsx("option", { value: "auto", children: "Auto-detect" }), _jsx("option", { value: "md5", children: "MD5" }), _jsx("option", { value: "sha1", children: "SHA1" }), _jsx("option", { value: "sha256", children: "SHA256" })] })] }), _jsxs("div", { className: "space-x-4", children: [_jsx("button", { onClick: analyzeHash, className: "bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded", children: "Analyze Hash" }), _jsx("button", { onClick: crackHash, disabled: cracking, className: "bg-red-600 hover:bg-red-700 px-4 py-2 rounded disabled:opacity-50", children: cracking ? 'Cracking...' : 'Crack Hash' })] })] }), _jsx("div", { className: "bg-gray-800 p-4 rounded h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm", children: output || 'Enter a hash and click "Analyze Hash" or "Crack Hash"' })] }));
}
