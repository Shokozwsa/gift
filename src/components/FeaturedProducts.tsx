import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('featuredProducts')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked premium personalized gifts that our customers love the most
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 mx-auto">
            <span>View All Products</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}