import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Globe } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Header() {
  const { state, dispatch } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const t = (key: string) => getTranslation(key, state.language);

  const toggleLanguage = () => {
    dispatch({ type: 'SET_LANGUAGE', payload: state.language === 'en' ? 'hi' : 'en' });
    setIsLanguageOpen(false);
  };

  const cartItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  GiftCraft
                </h1>
                <p className="text-xs text-gray-500">Personalized with Love</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder={t('search')}
                value={state.searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {t('home')}
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {t('categories')}
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {t('aboutUs')}
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                {t('contact')}
              </a>
            </nav>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="hidden sm:block">{state.language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* User Account */}
            <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
              <User className="h-6 w-6" />
              <span className="hidden md:block">{state.user ? state.user.name : t('login')}</span>
            </button>

            {/* Cart */}
            <button className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t('search')}
              value={state.searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t('categories')}
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t('aboutUs')}
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              {t('contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}