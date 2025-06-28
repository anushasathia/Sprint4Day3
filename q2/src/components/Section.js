import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Section = () => {
  const { theme } = useContext(ThemeContext);

  const sectionStyle = {
    padding: '20px',
    borderRadius: '10px',
    border: theme === 'light' ? '1px solid #ddd' : '1px solid #666',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#444',
    color: theme === 'light' ? '#333' : '#f0f2f5',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '1.4rem',
    marginBottom: '10px',
    fontWeight: 'bold',
  };

  const textStyle = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
  };

  return (
    <div style={sectionStyle}>
      <h3 style={headingStyle}>Themed Section Area</h3>
      <p style={textStyle}>
        This section also dynamically changes its appearance. Context API is fantastic for sharing global state like themes, user authentication, and language preferences.
      </p>
    </div>
  );
};

export default Section;