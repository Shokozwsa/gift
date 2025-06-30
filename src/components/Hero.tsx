import React from 'react';
import { ArrowRight, Sparkles, Gift, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Hero() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>Premium Quality Guaranteed</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
              {t('heroSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>{t('shopNow')}</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>{t('exploreCategories')}</span>
                <Gift className="h-5 w-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gray-900">4.8★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Personalized Gifts"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                <Heart className="h-8 w-8 text-pink-500" />
                <div className="text-sm font-medium text-gray-900 mt-1">Made with Love</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-pulse">
                <Gift className="h-8 w-8 text-orange-500" />
                <div className="text-sm font-medium text-gray-900 mt-1">Free Shipping</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}