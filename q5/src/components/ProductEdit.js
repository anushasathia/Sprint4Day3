import React from 'react';

const ProductEdit = () => {
  const containerStyle = {
    padding: '30px',
    margin: '20px auto',
    maxWidth: '600px',
    backgroundColor: '#e6ffe6',
    border: '1px solidrgb(164, 64, 173)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#28a745',
    textAlign: 'center',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>Product Editor</h3>
      <p style={{ textAlign: 'center', marginBottom: '20px', color: '#555' }}>
        Only administrators can see and use this component.
      </p>
      <form>
        <div style={formGroupStyle}>
          <label htmlFor="productName" style={labelStyle}>Product Name:</label>
          <input type="text" id="productName" style={inputStyle} defaultValue="Example Gadget" />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="productPrice" style={labelStyle}>Price:</label>
          <input type="number" id="productPrice" style={inputStyle} defaultValue="99.99" />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="productDesc" style={labelStyle}>Description:</label>
          <textarea id="productDesc" style={{ ...inputStyle, minHeight: '80px' }} defaultValue="A fantastic example product."></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Update Product</button>
      </form>
    </div>
  );
};

export default ProductEdit;
