import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (_jsx("nav", { className: "bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-8 py-4", children: _jsxs("div", { className: "flex justify-between items-center max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex items-center gap-2 text-2xl font-bold", children: [_jsx("span", { children: "\uD83D\uDEE1\uFE0F" }), _jsx("span", { children: "CyberSec Toolkit" })] }), _jsxs("div", { className: "flex items-center gap-8", children: [_jsx(Link, { to: "/", className: "hover:text-green-400 transition", children: "\uD83C\uDFE0 Home" }), _jsx(Link, { to: "/tools", className: "hover:text-green-400 transition", children: "\uD83D\uDD27 Tools" })] })] }) }));
}
