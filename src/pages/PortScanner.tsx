import { useState } from 'react';
import Navbar from '../components/Navbar';

const commonPorts = [21, 22, 23, 25, 53, 80, 110, 143, 443, 993, 995, 3306, 3389, 5432, 8080];
const services: { [key: number]: string } = {
  21: 'FTP', 22: 'SSH', 23: 'Telnet', 25: 'SMTP', 53: 'DNS', 80: 'HTTP',
  110: 'POP3', 143: 'IMAP', 443: 'HTTPS', 993: 'IMAPS', 995: 'POP3S',
  3306: 'MySQL', 3389: 'RDP', 5432: 'PostgreSQL', 8080: 'HTTP-Alt'
};

export default function PortScanner() {
  const [target, setTarget] = useState('');
  const [portRange, setPortRange] = useState('common');
  const [startPort, setStartPort] = useState('1');
  const [endPort, setEndPort] = useState('1000');
  const [output, setOutput] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const startPortScan = async () => {
    if (!target) return;
    
    let ports: number[] = [];
    if (portRange === 'common') {
      ports = commonPorts;
    } else if (portRange === 'well-known') {
      ports = Array.from({length: 1024}, (_, i) => i + 1);
    } else {
      const start = parseInt(startPort);
      const end = parseInt(endPort);
      ports = Array.from({length: end - start + 1}, (_, i) => start + i);
    }
    
    setIsScanning(true);
    setOutput(`🔍 Scanning ${target}...\n\n`);
    
    let openPorts = 0;
    for (let i = 0; i < ports.length && isScanning; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      const port = ports[i];
      const isOpen = Math.random() > 0.8;
      const service = services[port] || 'Unknown';
      
      if (isOpen) {
        openPorts++;
        setOutput(prev => prev + `Port ${port}: OPEN (${service})\n`);
      } else {
        setOutput(prev => prev + `Port ${port}: CLOSED\n`);
      }
    }
    
    if (isScanning) {
      setOutput(prev => prev + `\nScan complete: ${openPorts} open ports found`);
    }
    setIsScanning(false);
  };

  const stopPortScan = () => {
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Port Scanner</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Target:</label>
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
              placeholder="192.168.1.1 or example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Port Range:</label>
            <select
              value={portRange}
              onChange={(e) => setPortRange(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
            >
              <option value="common">Common Ports</option>
              <option value="well-known">Well-known Ports (1-1024)</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {portRange === 'custom' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Start Port:</label>
                <input
                  type="number"
                  value={startPort}
                  onChange={(e) => setStartPort(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">End Port:</label>
                <input
                  type="number"
                  value={endPort}
                  onChange={(e) => setEndPort(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg"
                />
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <button
              onClick={startPortScan}
              disabled={isScanning || !target}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              {isScanning ? 'Scanning...' : 'Start Scan'}
            </button>
            {isScanning && (
              <button
                onClick={stopPortScan}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Stop
              </button>
            )}
          </div>

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