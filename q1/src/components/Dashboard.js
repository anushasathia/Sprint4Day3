import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import AddProduct from './AddProduct'; 
const Dashboard = () => {
  const { user } = useContext(UserContext);

  const sectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '16px'
  };

  const listItemStyle = {
    listStyleType: 'disc',
    marginLeft: '20px',
    color: '#4B5563',
    marginBottom: '8px'
  };

  const adminAccessStyle = {
    fontWeight: '600',
    color: '#4F46E5'
  };

  const accessDeniedStyle = {
    backgroundColor: '#FFFBEB',
    border: '1px solid #FCD34D',
    color: '#B45309',
    padding: '16px',
    borderRadius: '8px'
  };

  if (!user) {
    return <div style={{ textAlign: 'center', color: '#EF4444' }}>User data not found. Please log in.</div>;
  }

  return (
    <div style={{ padding: '16px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#374151', marginBottom: '16px' }}>Welcome, {user.name}!</h2>
      <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '24px' }}>Your Role: <span style={{ fontWeight: '600', color: '#2563EB' }}>{user.role}</span></p>

      <section style={{ marginTop: '32px' }}>
        <h3 style={sectionTitleStyle}>Dashboard Features:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={listItemStyle}>View all products (Accessible to all roles)</li>
          <li style={listItemStyle}>Manage orders (Accessible to Admin, Editor)</li>
    
          {user.role === 'admin' && (
            <li style={listItemStyle}>
              <span style={adminAccessStyle}>Add new products (Admin Only)</span>
            </li>
          )}
        </ul>
      </section>

      <section style={{ marginTop: '32px', borderTop: '1px solid #E5E7EB', paddingTop: '32px' }}>
        {user.role === 'admin' ? (
          <AddProduct />
        ) : (
          <div style={accessDeniedStyle}>
            <p style={{ fontWeight: '600' }}>Access Denied:</p>
            <p>You do not have permission to add products. This feature is for Admin users only.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;