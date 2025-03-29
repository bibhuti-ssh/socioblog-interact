
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-socio-light-gray pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Socioblog</h3>
            <p className="text-socio-gray mb-4">
              Exploring social phenomena through rigorous analysis and engaging perspectives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-socio-gray hover:text-socio-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-socio-gray hover:text-socio-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-socio-gray hover:text-socio-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-socio-gray hover:text-socio-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="#" className="text-socio-gray hover:text-socio-accent transition-colors">Social Theory</Link></li>
              <li><Link to="#" className="text-socio-gray hover:text-socio-accent transition-colors">Research Methods</Link></li>
              <li><Link to="#" className="text-socio-gray hover:text-socio-accent transition-colors">Social Movements</Link></li>
              <li><Link to="#" className="text-socio-gray hover:text-socio-accent transition-colors">Urban Sociology</Link></li>
              <li><Link to="#" className="text-socio-gray hover:text-socio-accent transition-colors">Globalization</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-socio-gray hover:text-socio-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-socio-gray hover:text-socio-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-socio-gray hover:text-socio-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-socio-gray hover:text-socio-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-socio-gray hover:text-socio-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-socio-gray mb-4">
              Get the latest sociology insights directly to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-socio-accent focus:border-transparent flex-1"
              />
              <button
                type="submit"
                className="bg-socio-accent hover:bg-socio-dark-blue text-white px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-sm text-socio-gray">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Socioblog. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-socio-accent transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-socio-accent transition-colors">Terms</Link>
              <Link to="/cookies" className="hover:text-socio-accent transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
