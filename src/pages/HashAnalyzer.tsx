import { useState } from 'react';

const hashDatabase: { [key: string]: string } = {
  '5f4dcc3b5aa765d61d8327deb882cf99': 'password',
  'e99a18c428cb38d5f260853678922e03': 'abc123',
  '25d55ad283aa400af464c76d713c07ad': '12345678',
  '098f6bcd4621d373cade4e832627b4f6': 'test',
  '5ebe2294ecd0e0f08eab7690d2a6ee69': 'secret'
};

const commonPasswords = ['password', '123456', 'admin', 'letmein', 'qwerty', 'abc123', '12345678', 'test', 'secret'];

function detectHashType(hash: string): string {
  const len = hash.length;
  if (len === 32) return 'MD5';
  if (len === 40) return 'SHA1';
  if (len === 64) return 'SHA256';
  if (hash.startsWith('$2')) return 'bcrypt';
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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">🔍 Hash Analyzer</h1>
      
      <div className="mb-6 space-y-4">
        <div>
          <label className="block mb-2">Hash to analyze:</label>
          <input
            type="text"
            value={hash}
            onChange={(e) => setHash(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full max-w-lg"
            placeholder="Enter hash here..."
          />
        </div>
        
        <div>
          <label className="block mb-2">Hash Type:</label>
          <select
            value={hashType}
            onChange={(e) => setHashType(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded px-3 py-2"
          >
            <option value="auto">Auto-detect</option>
            <option value="md5">MD5</option>
            <option value="sha1">SHA1</option>
            <option value="sha256">SHA256</option>
          </select>
        </div>
        
        <div className="space-x-4">
          <button
            onClick={analyzeHash}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Analyze Hash
          </button>
          <button
            onClick={crackHash}
            disabled={cracking}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded disabled:opacity-50"
          >
            {cracking ? 'Cracking...' : 'Crack Hash'}
          </button>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded h-96 overflow-y-auto whitespace-pre-wrap font-mono text-sm">
        {output || 'Enter a hash and click "Analyze Hash" or "Crack Hash"'}
      </div>
    </div>
  );
}