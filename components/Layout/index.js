import React from 'react';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen overflow-hidden">
      <Header />
      {children}
      <footer>
        <div className="container mx-auto">Footer</div>
      </footer>
    </div>
  );
}
