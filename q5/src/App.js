import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import ProductEdit from './components/ProductEdit';
import withAdminAccess from './hocs/withAdminAccess';

const AdminProductEdit = withAdminAccess(ProductEdit);

function App() {
  const { userRole, loginAs } = useContext(UserContext);

  const appContainerStyle = {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '30px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = (isActive) => ({
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    backgroundColor: isActive ? '#007bff' : '#6c757d',
    color: 'white',
  });

  const roleDisplay = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#555',
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>HOC Access Control</h1>
        <div style={buttonContainerStyle}>
          <span style={roleDisplay}>Current Role: {userRole}</span>
          <button
            onClick={() => loginAs('admin')}
            style={buttonStyle(userRole === 'admin')}
          >
            Login as Admin
          </button>
          <button
            onClick={() => loginAs('viewer')}
            style={buttonStyle(userRole === 'viewer')}
          >
            Login as Viewer
          </button>
        </div>
      </header>

      <main style={{ width: '100%' }}>
        <AdminProductEdit />
      </main>
    </div>
  );
}

export default App;
