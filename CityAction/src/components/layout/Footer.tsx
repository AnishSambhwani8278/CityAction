import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, PhoneCall, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-100 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-primary-500" />
              <span className="font-bold text-lg text-white">CityAction</span>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering communities to collaborate on sustainability initiatives and build a better future for our cities.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/map" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Interactive Map</Link>
              </li>
              <li>
                <Link to="/initiatives" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Initiatives</Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/community" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Community</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Sustainability Blog</Link>
              </li>
              <li>
                <Link to="/impact" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Impact Reports</Link>
              </li>
              <li>
                <Link to="/guides" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Action Guides</Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                <span className="text-sm">123 Green Street, Metro City, MC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <a href="mailto:contact@cityaction.org" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">contact@cityaction.org</a>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-primary-500" />
                <a href="tel:+15551234567" className="text-sm text-secondary-300 hover:text-primary-500 transition-colors">(555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-secondary-400">
              &copy; {new Date().getFullYear()} CityAction. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-xs text-secondary-400 hover:text-primary-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-xs text-secondary-400 hover:text-primary-500 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-xs text-secondary-400 hover:text-primary-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;