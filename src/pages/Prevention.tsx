export default function Prevention() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Security Prevention Guide</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Strong Passwords</h3>
          <p>Use complex passwords with 12+ characters, numbers, and symbols.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">SQL Injection</h3>
          <p>Use parameterized queries and input validation.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">XSS Prevention</h3>
          <p>Sanitize user input and use Content Security Policy.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Network Security</h3>
          <p>Use firewalls and close unnecessary ports.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
          <p>Keep systems and software updated with security patches.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-3">Access Control</h3>
          <p>Implement least privilege and multi-factor authentication.</p>
        </div>
      </div>
    </div>
  );
}