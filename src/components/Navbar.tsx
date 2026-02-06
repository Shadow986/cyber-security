import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-forest-800/80 backdrop-blur-sm border-b border-forest-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <span className="text-xl font-bold text-cyber-green">CyberSec Toolkit</span>
          </Link>
          <div className="flex gap-8 items-center">
            <Link to="/" className="text-gray-300 hover:text-cyber-green transition">Home</Link>
            <Link to="/tools" className="text-gray-300 hover:text-cyber-green transition">Tools</Link>
            <Link to="/prevention" className="text-gray-300 hover:text-cyber-green transition">Prevention</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
