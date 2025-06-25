import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Let's Talk Business - Get in touch for partnerships and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="+235 XX XX XX XX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry *
                      </label>
                      <Textarea
                        id="inquiry"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="Tell us about your inquiry, partnership opportunity, or how we can help you..."
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="font-dm-sans text-lg text-gray-600 mb-8">
                  Ready to explore partnership opportunities or have questions about our products? 
                  We're here to help you grow your business across Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Email</h3>
                    <p className="font-dm-sans text-gray-600">info@trillionigroup.com</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Phone</h3>
                    <p className="font-dm-sans text-gray-600">+235 66230808</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-2">Address</h3>
                    <p className="font-dm-sans text-gray-600">
                      N'Djamena, 1st Arrondissement, Farcha<br />
                      Chad
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-poppins font-semibold text-lg text-gray-900 mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 font-dm-sans text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;