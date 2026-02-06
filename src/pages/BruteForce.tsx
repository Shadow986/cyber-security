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
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#0d2b23] to-[#10362c] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#00ff41]">Brute Force Simulator</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Target Password:</label>
            <input
              type="text"
              value={targetPassword}
              onChange={(e) => setTargetPassword(e.target.value)}
              className="w-full p-3 bg-[#0d2b23]/80 border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-400 focus:border-[#00ff41] focus:outline-none transition-colors"
              placeholder="Enter target password"
            />
          </div>

          <div className="bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Wordlist (one per line):</label>
            <textarea
              value={wordlist}
              onChange={(e) => setWordlist(e.target.value)}
              className="w-full p-3 bg-[#0d2b23]/80 border border-[#00ff41]/30 rounded-lg h-32 text-white placeholder-gray-400 focus:border-[#00ff41] focus:outline-none transition-colors resize-none"
              placeholder="password&#10;123456&#10;admin&#10;qwerty"
            />
          </div>

          <button
            onClick={startBruteForce}
            disabled={isRunning}
            className="w-full bg-[#f4b942] hover:bg-[#f4b942]/80 disabled:bg-gray-600 text-black font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#f4b942]/20"
          >
            {isRunning ? 'Running...' : 'Start Brute Force'}
          </button>

          <div className="bg-[#134235]/60 backdrop-blur-sm p-6 rounded-xl border border-[#00ff41]/30">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Output:</label>
            <pre className="bg-[#0a1f1a] p-4 rounded-lg h-64 overflow-y-auto text-[#00ff41] font-mono text-sm border border-[#00ff41]/20">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}