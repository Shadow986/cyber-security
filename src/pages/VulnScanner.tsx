import { useState } from 'react';
import Navbar from '../components/Navbar';

const vulnerabilities = [
  { severity: 'critical', desc: 'SQL Injection vulnerability detected', cve: 'CVE-2023-1234' },
  { severity: 'high', desc: 'Outdated SSL/TLS configuration', cve: 'CVE-2021-44228' },
  { severity: 'high', desc: 'Cross-Site Scripting (XSS) vulnerability', cve: 'CVE-2023-5678' },
  { severity: 'medium', desc: 'Weak password policy detected', cve: null },
  { severity: 'medium', desc: 'Missing security headers (CSP, HSTS)', cve: null },
  { severity: 'low', desc: 'Directory listing enabled', cve: null },
  { severity: 'low', desc: 'Server version disclosure', cve: null },
  { severity: 'critical', desc: 'Remote Code Execution possible', cve: 'CVE-2023-9999' }
];

export default function VulnScanner() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('quick');
  const [output, setOutput] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const startVulnScan = async () => {
    if (!target) return;
    
    const count = scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8;
    
    setIsScanning(true);
    setOutput(`🛡️ Scanning ${target}...\n\n`);
    
    for (let i = 0; i < count; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const vuln = vulnerabilities[i];
      const severityColor = vuln.severity === 'critical' ? 'text-red-500' : 
                           vuln.severity === 'high' ? 'text-red-400' :
                           vuln.severity === 'medium' ? 'text-orange-400' : 'text-yellow-400';
      
      setOutput(prev => prev + `[${vuln.severity.toUpperCase()}] ${vuln.desc}\n${vuln.cve ? vuln.cve + '\n' : ''}\n`);
    }
    
    setOutput(prev => prev + `Scan complete: ${count} vulnerabilities found`);
    setIsScanning(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 text-red-500';
      case 'high': return 'border-red-400 text-red-400';
      case 'medium': return 'border-orange-400 text-orange-400';
      case 'low': return 'border-yellow-400 text-yellow-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Vulnerability Scanner</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Target:</label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Scan Type:</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            >
              <option value="quick">Quick Scan</option>
              <option value="full">Full Scan</option>
              <option value="comprehensive">Comprehensive Scan</option>
            </select>
          </div>

          <button
            onClick={startVulnScan}
            disabled={isScanning || !target}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            {isScanning ? 'Scanning...' : 'Start Vulnerability Scan'}
          </button>

          <div>
            <label className="block text-sm font-medium mb-2">Output:</label>
            <pre className="bg-black p-4 rounded-lg h-64 overflow-y-auto text-green-400 font-mono text-sm">
              {output}
            </pre>
          </div>

          {!isScanning && output && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Vulnerability Summary:</h3>
              <div className="space-y-2">
                {vulnerabilities.slice(0, scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8).map((vuln, index) => (
                  <div key={index} className={`border-l-4 pl-4 py-2 ${getSeverityColor(vuln.severity)}`}>
                    <div className="font-semibold">[{vuln.severity.toUpperCase()}] {vuln.desc}</div>
                    {vuln.cve && <div className="text-gray-400 text-sm">{vuln.cve}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}