import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <div className="grid grid-rows-layout min-h-screen overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
