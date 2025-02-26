import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  );
};

// Default props
Header.defaultProps = {
  title: 'React Assignment'
};

export default Header;