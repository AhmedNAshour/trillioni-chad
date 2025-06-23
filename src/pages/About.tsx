
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              About Trillioni Chad
            </h1>
            <p className="font-dm-sans text-xl text-gray-600 max-w-3xl mx-auto">
              The commercial arm of the Trillioni Group, driving growth and 
              delivering excellence across Africa since 2020.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 font-dm-sans text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2020 as the commercial arm of the Trillioni Group, Trillioni Chad 
                  emerged from a vision to transform the distribution landscape across Africa. 
                  What began as an ambitious initiative has evolved into a trusted partner for 
                  premium consumer goods across the continent.
                </p>
                <p>
                  From our headquarters in N'Djamena, we've built a network that spans over 10 
                  countries, connecting global brands with local markets and empowering communities 
                  through reliable access to quality products.
                </p>
                <p>
                  Our journey is one of continuous growth, driven by our commitment to excellence 
                  and our belief that every community deserves access to the essentials that 
                  improve daily life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="Trillioni Chad operations"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-lg opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-lg opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by our purpose to drive growth and deliver excellence across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">Our Vision</h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed">
                To be the leading distribution partner across Africa, creating sustainable 
                connections between global excellence and local communities while driving 
                economic growth and prosperity throughout the continent.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">Our Mission</h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed">
                To import, export, and distribute premium consumer goods with unwavering 
                commitment to quality, reliability, and community impact. We bridge markets, 
                empower partners, and deliver essentials that enhance daily life across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role in Trillioni Group */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2147&q=80"
                alt="Trillioni Group ecosystem"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-6">
                Role in Trillioni Group
              </h2>
              <div className="space-y-4 font-dm-sans text-gray-600 text-lg leading-relaxed">
                <p>
                  As the commercial arm of the Trillioni Group, Trillioni Chad serves as the 
                  bridge between our parent company's strategic vision and market execution. 
                  We translate innovation into action, bringing world-class products to 
                  communities across Africa.
                </p>
                <p>
                  Our role extends beyond traditional distribution. We are market makers, 
                  relationship builders, and growth catalysts, ensuring that the Trillioni 
                  Group's commitment to excellence reaches every corner of our operational territory.
                </p>
                <p>
                  Through our extensive network and deep market understanding, we enable the 
                  Trillioni Group to maintain its position as a trusted partner for 
                  international brands seeking African market entry and expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">Our Core Values</h2>
            <p className="font-dm-sans text-lg opacity-90 max-w-2xl mx-auto">
              The principles that guide every decision and drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Excellence</h3>
              <p className="font-dm-sans text-sm opacity-90">
                We pursue the highest standards in everything we do, from product selection to customer service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Integrity</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Honesty and transparency form the foundation of all our business relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Innovation</h3>
              <p className="font-dm-sans text-sm opacity-90">
                We embrace new ideas and technologies to improve our services and create value.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Community</h3>
              <p className="font-dm-sans text-sm opacity-90">
                We are committed to the growth and prosperity of the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a global brand looking to enter African markets or a local 
            business seeking premium products, we're here to help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partnerships">
              <Button className="bg-primary hover:bg-primary/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                Explore Partnerships
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-dm-sans font-semibold px-8 py-3 rounded-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
