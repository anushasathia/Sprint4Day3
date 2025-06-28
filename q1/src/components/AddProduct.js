import React from 'react';

const AddProduct = () => {
  const containerStyle = {
    backgroundColor: '#DBEAFE',
    border: '1px solid #93C5FD',
    color: '#1E40AF',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const labelStyle = {
    display: 'block',
    color: '#374151',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  };

  const inputStyle = {
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
    appearance: 'none',
    border: '1px solid #D1D5DB',
    borderRadius: '4px',
    width: '100%',
    padding: '8px 12px',
    color: '#374151',
    lineHeight: '1.5',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#4F46E5',
    color: 'white',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px' }}>Add New Product</h4>
      <form style={formStyle}>
        <div>
          <label htmlFor="productName" style={labelStyle}>
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            style={inputStyle}
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label htmlFor="price" style={labelStyle}>
            Price:
          </label>
          <input
            type="number"
            id="price"
            style={inputStyle}
            placeholder="Enter price"
          />
        </div>
        <button
          type="submit"
          style={buttonStyle}
        >
          Submit Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;