import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tools from './pages/Tools';
import BruteForce from './pages/BruteForce';
import SQLInjection from './pages/SQLInjection';
import XSS from './pages/XSS';
import PortScanner from './pages/PortScanner';
import VulnScanner from './pages/VulnScanner';
import NetworkMapper from './pages/NetworkMapper';
import HashAnalyzer from './pages/HashAnalyzer';
import Prevention from './pages/Prevention';
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/tools", element: _jsx(Tools, {}) }), _jsx(Route, { path: "/bruteforce", element: _jsx(BruteForce, {}) }), _jsx(Route, { path: "/sqlinjection", element: _jsx(SQLInjection, {}) }), _jsx(Route, { path: "/xss", element: _jsx(XSS, {}) }), _jsx(Route, { path: "/portscanner", element: _jsx(PortScanner, {}) }), _jsx(Route, { path: "/vulnscanner", element: _jsx(VulnScanner, {}) }), _jsx(Route, { path: "/networkmapper", element: _jsx(NetworkMapper, {}) }), _jsx(Route, { path: "/hashanalyzer", element: _jsx(HashAnalyzer, {}) }), _jsx(Route, { path: "/prevention", element: _jsx(Prevention, {}) })] }) }));
}
