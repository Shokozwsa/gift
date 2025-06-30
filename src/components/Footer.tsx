import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getTranslation } from '../utils/translations';

export default function Footer() {
  const { state } = useApp();
  const t = (key: string) => getTranslation(key, state.language);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive discounts, new product updates, and gifting ideas delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    GiftCraft
                  </h1>
                  <p className="text-xs text-gray-400">Personalized with Love</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's leading platform for personalized gifts. We help you create memorable moments with our premium quality customized products and fast delivery across the country.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {['About Us', 'How It Works', 'Size Guide', 'Quality Promise', 'Bulk Orders', 'Careers'].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <div className="space-y-3">
                {['Photo Gifts', 'Personalized Jewelry', 'Custom Clothing', 'Festive Gifts', 'Corporate Gifts', 'Home Decor'].map((category) => (
                  <a key={category} href="#" className="block text-gray-400 hover:text-orange-400 transition-colors">
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>123 Business Park,</p>
                    <p>Sector 18, Gurgaon,</p>
                    <p>Haryana 122015, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>+91 1800-123-4567</p>
                    <p className="text-sm">Mon-Sat: 9AM-8PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>support@giftcraft.in</p>
                    <p className="text-sm">24/7 Email Support</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold mb-3">We Accept</h4>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">UPI</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">Cards</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">Net Banking</div>
                  <div className="bg-gray-800 px-3 py-1 rounded text-xs">COD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 GiftCraft. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-orange-400 transition-colors">Refund Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}