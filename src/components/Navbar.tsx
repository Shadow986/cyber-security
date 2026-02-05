import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-8 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>🛡️</span>
          <span>CyberSec Toolkit</span>
        </div>
        <div className="flex items-center gap-8">
          <Link to="/" className="hover:text-green-400 transition">🏠 Home</Link>
          <Link to="/tools" className="hover:text-green-400 transition">🔧 Tools</Link>
        </div>
      </div>
    </nav>
  )
}
