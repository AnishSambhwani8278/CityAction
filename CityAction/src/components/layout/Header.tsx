import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu, X, User, Bell, LogOut } from 'lucide-react';
import Button from '../shared/Button';
import Badge from '../shared/Badge';
import NotificationsPopover from '../notifications/NotificationsPopover';

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: string;
  unreadNotifications?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  isLoggedIn = true, 
  userRole = 'citizen',
  unreadNotifications = 3
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Events', path: '/events' },
    { name: 'Community', path: '/community' },
  ];

  if (userRole === 'city_official' || userRole === 'organization' || userRole === 'admin') {
    navLinks.push({ name: 'Dashboard', path: '/dashboard' });
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="h-8 w-8 text-primary-600" />
            </motion.div>
            <motion.span 
              className="font-bold text-xl text-secondary-900"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              CityAction
            </motion.span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? 'text-primary-600' : 'text-secondary-700'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    className="h-0.5 bg-primary-600 mt-1"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button
                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                    className="relative"
                  >
                    <Bell className="h-5 w-5 text-secondary-700 hover:text-primary-600 transition-colors" />
                    {unreadNotifications > 0 && (
                      <Badge variant="primary" size="sm" className="absolute -top-1.5 -right-1.5">
                        {unreadNotifications}
                      </Badge>
                    )}
                  </button>
                  <NotificationsPopover
                    isOpen={notificationsOpen}
                    onClose={() => setNotificationsOpen(false)}
                  />
                </div>
                <Link to="/profile" className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-primary-700" />
                  </div>
                  <span className="text-sm font-medium text-secondary-800">Profile</span>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm">Join Now</Button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-secondary-700" />
            ) : (
              <Menu className="h-6 w-6 text-secondary-700" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-b border-secondary-100"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-2 py-1.5 rounded-md text-sm font-medium ${
                      location.pathname === link.path
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-secondary-700 hover:bg-secondary-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              {isLoggedIn ? (
                <div className="pt-2 border-t border-secondary-100 flex flex-col space-y-3">
                  <Link to="/profile" className="flex items-center space-x-2 px-2 py-1.5 text-sm text-secondary-700">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Link to="/notifications" className="flex items-center justify-between px-2 py-1.5 text-sm text-secondary-700">
                    <div className="flex items-center space-x-2">
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                    </div>
                    {unreadNotifications > 0 && (
                      <Badge variant="primary" size="sm">{unreadNotifications}</Badge>
                    )}
                  </Link>
                  <Link to="/logout" className="flex items-center space-x-2 px-2 py-1.5 text-sm text-error-700">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Link>
                </div>
              ) : (
                <div className="pt-2 border-t border-secondary-100 flex flex-col space-y-3">
                  <Link to="/login">
                    <Button variant="outline" fullWidth>Sign In</Button>
                  </Link>
                  <Link to="/register">
                    <Button fullWidth>Join Now</Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;