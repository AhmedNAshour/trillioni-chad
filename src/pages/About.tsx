import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Shield, Lightbulb, Leaf } from 'lucide-react';

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
              The commercial powerhouse of the Trillioni Group, driving growth and 
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
                  Trillioni Chad, established in 2020 as part of the Trillioni Group, is the commercial arm driving the distribution of high-quality consumer goods across Africa and beyond.
                </p>
                <p>
                  We began our journey by exporting premium sesame cultivated in Chad to international markets. As demand for high-quality food staples grew, we moved further into value-added production — processing wheat in Egypt and Turkey and introducing Trillioni Flour to meet local and regional needs.
                </p>
                <p>
                  This natural progression laid the groundwork for expanding our product line under the Trillioni brand, including Trillioni Sugar sourced from Brazil and Trillioni Automotive Oils, manufactured in the UAE to deliver performance and reliability across the region.
                </p>
                <p>
                  With a strong product base under our own brand, we then partnered with leading manufacturers to distribute globally recognized names — including beverages like Barbican, Rani Juice, and Hub, along with a growing range of essential household goods.
                </p>
                <p>
                  Our story is one of agility, purpose, and partnership — empowering communities, earning trust, and innovating to serve the daily lives of families, youth, and businesses.
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
                To be the leading distribution partner across Africa and beyond, recognized for our commitment to quality, community empowerment, and reliable supply chains that uplift societies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">Our Mission</h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed">
                To enrich the lives of Chadian communities by providing high-quality, trusted products while fostering sustainable growth, innovation, and community development across Africa and beyond.
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
                  Trillioni Chad acts as Trillioni Group's main commercial and distribution arm in Africa, serving as the bridge between our parent company's strategic vision and market execution. We facilitate both the import and export of goods to and from African markets, translating innovation into action.
                </p>
                <p>
                  From commodities, everyday essentials, and beverages to automotive oils, we lead large-scale warehousing and distribution operations with precision. Our role extends beyond traditional distribution — we are market makers, relationship builders, and growth catalysts.
                </p>
                <p>
                  As a key player in the Group's strategic expansion, Trillioni Chad operates as both a gateway into Africa for global partners and a launchpad for African products to reach international markets. Through our extensive network and deep market understanding, we set the standard for sustainable growth and meaningful social impact while ensuring that the Trillioni Group's commitment to excellence reaches every corner of our operational territory.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Community First</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Supporting education, youth development, and health initiatives to create a brighter future.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Quality Excellence</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Delivering trusted, globally recognized products that meet the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Reliability</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Ensuring consistent and dependable access to essential goods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Innovation</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Embracing progress to improve products, services, and impact.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Sustainability</h3>
              <p className="font-dm-sans text-sm opacity-90">
                Operating responsibly with practices that benefit people and the planet.
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