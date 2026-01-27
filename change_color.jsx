import React, { useState } from 'react';

function ColorSwitcher() {
  // State to track the text color and background color
  const [textColor, setTextColor] = useState('black');
  const [bgColor, setBgColor] = useState('transparent');

  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  // Inline styles for the display box
  const textStyle = {
    color: textColor,
    backgroundColor: bgColor,
    padding: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: '1px solid #ccc',
    display: 'inline-block',
    marginTop: '20px'
  };

  const buttonStyle = {
    margin: '5px',
    padding: '10px 15px',
    cursor: 'pointer'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Color Switcher</h2>

      {/* Row 1: Changes Text Color */}
      <div style={{ marginBottom: '10px' }}>
        {colors.map((color) => (
          <button 
            key={color} 
            style={buttonStyle} 
            onClick={() => setTextColor(color.toLowerCase())}
          >
            {color}
          </button>
        ))}
      </div>

      {/* Row 2: Changes Background Color */}
      <div>
        {colors.map((color) => (
          <button 
            key={color} 
            style={buttonStyle} 
            onClick={() => setBgColor(color.toLowerCase())}
          >
            {color}
          </button>
        ))}
      </div>

      {/* The Resulting Text */}
      <div style={textStyle}>
        Nikhil Seladiya
      </div>
    </div>
  );
}

export default ColorSwitcher;
