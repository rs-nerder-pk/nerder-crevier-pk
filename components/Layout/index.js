import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen">
      <header>
        <div className="container mx-auto">Header</div>
      </header>
      {children}
      <footer>
        <div className="container mx-auto">Footer</div>
      </footer>
    </div>
  );
}
