import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Building Your <span className="text-cyber-yellow">Security</span>,<br/>
            Creating Your <span className="text-cyber-green">Defense</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            CyberSec Toolkit provides exceptional ethical hacking and penetration testing tools for security professionals. Transform your security testing into reality.
          </p>
          <div className="flex gap-4">
            <Link to="/tools" className="bg-cyber-yellow text-forest-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition inline-flex items-center gap-2">
              Explore Tools →
            </Link>
            <Link to="/prevention" className="border-2 border-cyber-green text-cyber-green px-8 py-4 rounded-lg font-semibold hover:bg-cyber-green/10 transition">
              Prevention Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
