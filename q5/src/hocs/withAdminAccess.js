import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const withAdminAccess = (WrappedComponent) => {
  const WithAdminAccessComponent = (props) => {
    const { userRole } = useContext(UserContext);

    const accessDeniedContainerStyle = {
      padding: '20px',
      margin: '20px auto',
      maxWidth: '500px',
      backgroundColor: '#ffe0e0',
      border: '1px solid #ff9999',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    };

    const accessDeniedTitleStyle = {
      color: '#cc0000',
      fontSize: '1.8rem',
      marginBottom: '10px',
      fontWeight: 'bold',
    };

    const accessDeniedMessageStyle = {
      color: '#660000',
      fontSize: '1rem',
    };

    if (userRole === 'admin') {
      return <WrappedComponent {...props} />;
    } else {
      return (
        <div style={accessDeniedContainerStyle}>
          <h2 style={accessDeniedTitleStyle}>Access Denied!</h2>
          <p style={accessDeniedMessageStyle}>
            You must be an administrator to view this content. Your current role is: <strong>{userRole}</strong>
          </p>
        </div>
      );
    }
  };

  WithAdminAccessComponent.displayName = `withAdminAccess(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAdminAccessComponent;
};

export default withAdminAccess;
