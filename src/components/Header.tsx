
import React, { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-socio-dark-blue">
              Parallel Inventions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            
            
          </nav>

          {/* Action Buttons */}
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-medium hover:text-socio-accent transition-colors">
                Home
              </Link>
              
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-md animate-fade-in">
            <div className="container mx-auto flex items-center">
              <Search size={20} className="text-socio-gray mr-2" />
              <input
                type="text"
                placeholder="Search for articles, topics, or authors..."
                className="flex-1 bg-transparent focus:outline-none"
                autoFocus
              />
              <button onClick={toggleSearch} className="text-socio-gray hover:text-socio-dark-blue transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
