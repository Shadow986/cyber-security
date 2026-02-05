import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function BruteForce() {
  const [isRunning, setIsRunning] = useState(false);
  const [targetPassword, setTargetPassword] = useState('');
  const [wordlist, setWordlist] = useState('');
  const [output, setOutput] = useState('');

  const startBruteForce = async () => {
    if (!targetPassword || !wordlist) return;
    
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Brute Force Simulator</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Target Password:</label>
            <input
              type="text"
              value={targetPassword}
              onChange={(e) => setTargetPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              placeholder="Enter target password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Wordlist (one per line):</label>
            <textarea
              value={wordlist}
              onChange={(e) => setWordlist(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32"
              placeholder="password&#10;123456&#10;admin&#10;qwerty"
            />
          </div>

          <button
            onClick={startBruteForce}
            disabled={isRunning}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            {isRunning ? 'Running...' : 'Start Brute Force'}
          </button>

          <div>
            <label className="block text-sm font-medium mb-2">Output:</label>
            <pre className="bg-black p-4 rounded-lg h-64 overflow-y-auto text-green-400 font-mono text-sm">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}