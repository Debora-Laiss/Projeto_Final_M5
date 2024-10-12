import React from 'react';

const DarkMode = ({ handleToggleDarkMode }) => {
  return (
    <button
      onClick={handleToggleDarkMode}
      className='toggle-mode-button'
    >
      <img src="../src/assets/dia-e-noite.png" alt="Toggle Mode" style={{ width: '20px', height: '20px' }} />
      
    </button>
  );
};

export default DarkMode;
