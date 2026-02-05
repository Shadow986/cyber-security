import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      <Navbar />
      <main className="flex items-center justify-center min-h-[80vh] px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6">
            Securing Your <span className="text-green-400">Network</span>,<br />
            Protecting Your <span className="text-green-400">Future</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ethical hacking toolkit for penetration testing and security assessment.
            Identify vulnerabilities before malicious actors do.
          </p>
          <Link to="/tools" className="inline-block bg-green-400 text-black px-8 py-4 rounded-lg font-bold hover:bg-green-500 transition transform hover:-translate-y-1">
            View Tools →
          </Link>
        </div>
      </main>
    </div>
  )
}
