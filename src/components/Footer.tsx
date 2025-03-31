
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import Newsletter from '../components/Newsletter';

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
              <li><Link to="https://www.linkedin.com/in/rahul-jilowa-b8b79a290/" className="text-socio-gray hover:text-socio-accent transition-colors">Rahul Jilowa</Link></li>
              <li><Link to="https://www.linkedin.com/in/shresth-kasyap-735a84270/" className="text-socio-gray hover:text-socio-accent transition-colors">Shresth Kasyap</Link></li>
              <li><Link to="https://www.linkedin.com/in/harsh-raj-b5a261320/" className="text-socio-gray hover:text-socio-accent transition-colors">Harsh Raj</Link></li>
              <li><Link to="https://www.linkedin.com/in/bibhuti-jha-045195253/" className="text-socio-gray hover:text-socio-accent transition-colors">Bibhuti Jha</Link></li>
              
            </ul>
          </div>
                      <aside className="w-auto space-y-8">
                        {/* Categories */}
                      
                        
                        {/* Newsletter */}
                        <Newsletter />
                      </aside>


        </div>

        <div className="border-t border-gray-200 pt-6 text-sm text-socio-gray">
        ©Group-B HS2205 IIT-P . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
