import React from 'react';
import { Truck, Shield, Headphones, Gift, Clock, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Features() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹999 across India',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: '2-5 business days delivery with real-time tracking',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: '100% secure payments with UPI, cards & net banking',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Heart,
      title: 'Premium Quality',
      description: 'High-quality materials and printing technology',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Gift,
      title: 'Gift Wrapping',
      description: 'Beautiful gift wrapping options available',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via chat & call',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('whyChooseUs')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best personalized gifting experience in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Trusted by 50,000+ Happy Customers
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join thousands of satisfied customers who have made their special moments even more memorable with our personalized gifts. We're proud to be India's leading platform for customized gifts.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">4.8/5</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">99%</div>
                  <div className="text-sm text-gray-600">On-time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Happy Customers"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}