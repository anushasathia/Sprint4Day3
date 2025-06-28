import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Card = () => {
  const { theme } = useContext(ThemeContext);

  const cardStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: theme === 'light' ? '0 4px 8px rgba(0,0,0,0.1)' : '0 4px 8px rgba(255,255,255,0.1)',
    backgroundColor: theme === 'light' ? '#fff' : '#555',
    color: theme === 'light' ? '#333' : '#f0f2f5',
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>Themed Card Component</h3>
      <p style={paragraphStyle}>
        This is an example card made by me. Its background, text color, and shadow adapt based on the current theme provided by React Context.
      </p>
    </div>
  );
};

export default Card;