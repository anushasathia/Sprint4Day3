// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/user/userSlice';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const { currentUser, isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const appContainerStyle = {
    padding: '20px',
    minHeight: '100vh',
    backgroundColor: '#eceff1',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  };

  const authSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease-in-out',
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white',
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white',
  };

  const mainContentStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '20px',
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>E-commerce Store</h1>
        <div style={authSectionStyle}>
          {isLoggedIn ? (
            <>
              <span style={{ fontSize: '1.1rem', color: '#555' }}>Welcome, {currentUser?.username}!</span>
              <button onClick={() => dispatch(logout())} style={logoutButtonStyle}>
                Logout
              </button>
            </>
          ) : (
            <button onClick={() => dispatch(login())} style={loginButtonStyle}>
              Login
            </button>
          )}
        </div>
      </header>

      <main style={mainContentStyle}>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
