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
    if (!targetPassword || !wordlist) return;
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">🔓 Brute Force <span className="text-cyber-yellow">Simulator</span></h1>
        <p className="text-gray-400 mb-8 text-lg">Test password strength against dictionary attacks</p>
        
        <div className="bg-forest-800/50 backdrop-blur border border-forest-600 rounded-xl p-8 mb-6">
          <div className="bg-cyber-yellow/10 border border-cyber-yellow/30 rounded-lg p-4 mb-6">
            <h3 className="text-cyber-yellow font-semibold mb-2">📋 Instructions:</h3>
            <ol className="text-gray-300 text-sm space-y-1 list-decimal list-inside">
              <li>Enter a target password to crack</li>
              <li>Generate a random wordlist or enter your own passwords (one per line)</li>
              <li>Click "Start Brute Force" to begin the attack simulation</li>
              <li>Watch as the tool attempts each password until a match is found</li>
            </ol>
          </div>

          <label className="block text-sm font-semibold mb-2 text-cyber-green">Target Password:</label>
          <input
            type="text"
            value={targetPassword}
            onChange={(e) => setTargetPassword(e.target.value)}
            className="w-full p-4 bg-forest-900 border border-forest-600 rounded-lg mb-6 text-white focus:border-cyber-green focus:outline-none"
            placeholder="Enter password to crack (e.g., admin123)"
          />

          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-semibold text-cyber-green">Wordlist (one per line):</label>
            <button
              onClick={generateWordlist}
              className="bg-forest-700 text-cyber-green px-4 py-2 rounded-lg text-sm hover:bg-forest-600 transition border border-forest-600"
            >
              🎲 Generate Random List
            </button>
          </div>
          <textarea
            value={wordlist}
            onChange={(e) => setWordlist(e.target.value)}
            className="w-full p-4 bg-forest-900 border border-forest-600 rounded-lg h-40 text-white focus:border-cyber-green focus:outline-none resize-none font-mono text-sm mb-6"
            placeholder="password&#10;123456&#10;admin&#10;qwerty&#10;letmein"
          />

          <button
            onClick={startBruteForce}
            disabled={isRunning || !targetPassword || !wordlist}
            className="w-full bg-cyber-yellow text-forest-900 py-4 rounded-lg font-semibold hover:bg-yellow-500 disabled:bg-gray-600 disabled:text-gray-400 transition"
          >
            {isRunning ? '⏳ Running Attack...' : '🚀 Start Brute Force'}
          </button>
        </div>

        <div className="bg-forest-800/50 backdrop-blur border border-forest-600 rounded-xl p-8">
          <label className="block text-sm font-semibold mb-4 text-cyber-green">Attack Output:</label>
          <pre className="bg-black/80 p-6 rounded-lg h-96 overflow-auto text-cyber-green font-mono text-sm border border-forest-600">
            {output || 'Waiting to start attack...'}
          </pre>
        </div>
      </div>
    </div>
  );
}