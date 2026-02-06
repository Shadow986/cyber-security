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
    <div className="min-h-screen bg-[#0a1f1a] text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#00ff41]">Vulnerability Scanner</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Target:</label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-3 bg-[#10362c] border border-[#134235] rounded-lg text-white placeholder-gray-400 focus:border-[#00ff41] transition-colors"
              placeholder="https://example.com"
            />
          </div>

          <div className="backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Scan Type:</label>
            <select
              value={scanType}
              onChange={(e) => setScanType(e.target.value)}
              className="w-full p-3 bg-[#10362c] border border-[#134235] rounded-lg text-white focus:border-[#00ff41] transition-colors"
            >
              <option value="quick">Quick Scan</option>
              <option value="full">Full Scan</option>
              <option value="comprehensive">Comprehensive Scan</option>
            </select>
          </div>

          <button
            onClick={startVulnScan}
            disabled={isScanning || !target}
            className="w-full bg-[#00ff41] hover:bg-[#00ff41]/80 disabled:bg-[#134235] text-[#0a1f1a] font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#00ff41]/20"
          >
            {isScanning ? 'Scanning...' : 'Start Vulnerability Scan'}
          </button>

          <div className="backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]">
            <label className="block text-sm font-medium mb-2 text-[#00ff41]">Output:</label>
            <pre className="bg-[#0a1f1a] p-4 rounded-lg h-64 overflow-y-auto text-[#00ff41] font-mono text-sm border border-[#134235]">
              {output}
            </pre>
          </div>

          {!isScanning && output && (
            <div className="backdrop-blur-sm bg-[#0d2b23]/50 p-6 rounded-xl border border-[#134235]">
              <h3 className="text-lg font-semibold mb-4 text-[#00ff41]">Vulnerability Summary:</h3>
              <div className="space-y-2">
                {vulnerabilities.slice(0, scanType === 'quick' ? 3 : scanType === 'full' ? 5 : 8).map((vuln, index) => (
                  <div key={index} className={`border-l-4 pl-4 py-2 rounded-r-lg bg-[#10362c]/30 ${getSeverityColor(vuln.severity)}`}>
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