import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Card from './components/Card';
import Section from './components/Section';
function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appContainerStyle = {
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    transition: 'background-color 0.3s, color 0.3s',
    color: theme === 'light' ? '#333' : '#f0f2f5',
    backgroundColor: theme === 'light' ? '#f0f2f5' : '#333',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '30px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: theme === 'light' ? '#fff' : '#444',
    color: theme === 'light' ? '#333' : '#f0f2f5',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    border: theme === 'light' ? '1px solid #ccc' : '1px solid #777',
    backgroundColor: theme === 'light' ? '#eee' : '#555',
    color: theme === 'light' ? '#333' : '#f0f2f5',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const contentAreaStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  };

  return (
    <div style={appContainerStyle}>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>Theme Switcher App</h1>
        <button onClick={toggleTheme} style={buttonStyle}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>

      <main style={contentAreaStyle}>
        <Card />
        <Section />
      </main>
    </div>
  );
}

export default App;