'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons

export default function ContactPage() {
  // State for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from reloading
    
    console.log('Contact form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      
      {/* --- HEADING (SOLID BLUE) --- */}
      <h1 className="text-4xl font-bold text-center mb-8 text-[rgb(59_130_246)]">
        Contact Us
      </h1>
      
      <p className="text-center text-white mb-12 font-medium">
        We'd love to hear from you. Please fill out the form below or use our contact details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Column 1: Contact Information */}
        <div className="space-y-8"> 
          
          {/* --- HEADING (SOLID BLUE) --- */}
          <h2 className="text-4xl font-bold text-[rgb(59_130_246)]">
            Contact US
          </h2>
          
          <p className="flex items-start text-white text-lg font-medium">
            <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-500" />
            <span>
              123 Crime Report St,
              <br />
              Anytown, 45678, USA
            </span>
          </p>
          <p className="flex items-center text-white text-lg font-medium">
            <Phone className="w-5 h-5 mr-3 text-blue-500" />
            <span>+1 (555) 123-4567</span>
          </p>
          <p className="flex items-center text-white text-lg font-medium">
            <Mail className="w-5 h-5 mr-3 text-blue-500" />
            <span>contact@crimereport.com</span>
          </p>
        </div>

        {/* Column 2: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white font-medium">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white font-medium">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                required
                className="text-white"
              />
            </div>

            {/* --- BUTTON (SOLID BLUE) --- */}
            <Button
              type="submit"
              className="rounded-full bg-[rgb(59_130_246)] hover:bg-[rgb(59_130_246)]/80 font-bold"
            >
              Send Message
            </Button>
            
          </form>
        </div>
      </div>
    </div>
  );
}