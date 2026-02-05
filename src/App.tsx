import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tools from './pages/Tools'
import BruteForce from './pages/BruteForce'
import SQLInjection from './pages/SQLInjection'
import XSS from './pages/XSS'
import PortScanner from './pages/PortScanner'
import VulnScanner from './pages/VulnScanner'
import NetworkMapper from './pages/NetworkMapper'
import HashAnalyzer from './pages/HashAnalyzer'
import Prevention from './pages/Prevention'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/bruteforce" element={<BruteForce />} />
        <Route path="/sqlinjection" element={<SQLInjection />} />
        <Route path="/xss" element={<XSS />} />
        <Route path="/portscanner" element={<PortScanner />} />
        <Route path="/vulnscanner" element={<VulnScanner />} />
        <Route path="/networkmapper" element={<NetworkMapper />} />
        <Route path="/hashanalyzer" element={<HashAnalyzer />} />
        <Route path="/prevention" element={<Prevention />} />
      </Routes>
    </BrowserRouter>
  )
}
