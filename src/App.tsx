import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <CategoryGrid />
          <FeaturedProducts />
          <Features />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;