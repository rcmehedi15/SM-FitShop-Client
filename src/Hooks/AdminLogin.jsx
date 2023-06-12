import { useState } from 'react';

// Component for the StudentDashboard
const StudentDashboard = () => {
  return <h1>Welcome to the Student Dashboard</h1>;
};

// Component for the AdminDashboard
const AdminDashboard = () => {
  return <h1>Welcome to the Admin Dashboard</h1>;
};

// Component for the DefaultDashboard
const DefaultDashboard = () => {
  return <h1>Welcome to the Default Dashboard</h1>;
};

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login verification
    if (email === 'admin@admin.com' && password === 'admin123##') {
      setLoggedIn(true);
      setRole('admin');
    } else {
      setLoggedIn(false);
      setRole('');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            {role === 'admin' ? (
              <AdminDashboard />
            ) : role === 'student' ? (
              <StudentDashboard />
            ) : (
              <DefaultDashboard />
            )}
          </nav>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      )}
    </div>
  );
};

export default AdminLogin;
