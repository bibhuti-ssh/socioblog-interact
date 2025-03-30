
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-socio-light-gray pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Parallel Inventions
</h3>
            <p className="text-socio-gray mb-4">
              A Comprehensive Analysis of Independent Technological Developments Across
Civilizations

            </p>
            
          </div>



          <div>
            <h4 className="font-semibold mb-4">Team Members</h4>
            <ul className="space-y-2">
              <li><Link to="/rahul" className="text-socio-gray hover:text-socio-accent transition-colors">Rahul Jilowa</Link></li>
              <li><Link to="/shersth" className="text-socio-gray hover:text-socio-accent transition-colors">Shresth Kasyap</Link></li>
              <li><Link to="/harsh" className="text-socio-gray hover:text-socio-accent transition-colors">Harsh Raj</Link></li>
              <li><Link to="/bibhuti" className="text-socio-gray hover:text-socio-accent transition-colors">Bibhuti Jha</Link></li>
              
            </ul>
          </div>


        </div>

        <div className="border-t border-gray-200 pt-6 text-sm text-socio-gray">
          <div className="flex flex-col md:flex-row justify-between items-center">
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
