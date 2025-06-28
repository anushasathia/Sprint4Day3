import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Dashboard from './components/Dashboard'; 
import './App.css'; 

function App() {
  const { user, isLoggedIn, login, logout } = useContext(UserContext);

  const headerStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '16px'
  };

  const buttonStyle = (bgColor, hoverColor) => ({
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: bgColor,
  });

  const mainContainerStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    padding: '24px',
  };

  const centerTextStyle = {
    textAlign: 'center',
    color: '#4A5568',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F7FAFC', padding: '32px', fontFamily: 'sans-serif' }}>
      <header style={headerStyle}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2D3748' }}>React RBAC Dashboard</h1>
        <div style={buttonContainerStyle}>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => login('admin')}
                style={buttonStyle('#3B82F6', '#2563EB')}
              >
                Login as Admin
              </button>
              <button
                onClick={() => login('editor')}
                style={buttonStyle('#22C55E', '#16A34A')}
              >
                Login as Editor
              </button>
              <button
                onClick={() => login('viewer')}
                style={buttonStyle('#8B5CF6', '#7C3AED')}
              >
                Login as Viewer
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              style={buttonStyle('#EF4444', '#DC2626')}
            >
              Logout ({user?.name})
            </button>
          )}
        </div>
      </header>

      <main style={mainContainerStyle}>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <div style={centerTextStyle}>
            <p style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Please log in to view the dashboard.</p>
            <p>Use the buttons above to log in with different roles.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;