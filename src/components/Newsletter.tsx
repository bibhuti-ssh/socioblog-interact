
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Mail } from 'lucide-react';
import { useToast } from './ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    // Reset form
    setEmail('');
  };

  return (
    <div className="bg-socio-light-blue p-8 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <Mail size={24} className="text-socio-blue mr-2" />
        <h3 className="font-serif text-xl font-bold">Subscribe to our Newsletter</h3>
      </div>
      <p className="text-center text-socio-gray mb-6">
        Stay updated with the latest insights and articles in sociology
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-socio-accent focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="bg-socio-blue hover:bg-socio-dark-blue transition-colors">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
