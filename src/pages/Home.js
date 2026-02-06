import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
export default function Home() {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex items-center justify-center min-h-[80vh] px-8", children: _jsxs("div", { className: "text-center max-w-4xl", children: [_jsxs("h1", { className: "text-6xl font-bold mb-6", children: ["Securing Your ", _jsx("span", { className: "text-green-400", children: "Network" }), ",", _jsx("br", {}), "Protecting Your ", _jsx("span", { className: "text-green-400", children: "Future" })] }), _jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Professional ethical hacking toolkit for penetration testing and security assessment. Identify vulnerabilities before malicious actors do." }), _jsx(Link, { to: "/tools", className: "inline-block bg-green-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-green-500 transition transform hover:-translate-y-1", children: "View Tools \u2192" })] }) })] }));
}
