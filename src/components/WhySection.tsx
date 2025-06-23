
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WhySection = () => {
  const features = [
    {
      title: 'Trusted Partnerships',
      description: 'Building lasting relationships with global brands and local communities through reliability and excellence.',
      icon: '🤝'
    },
    {
      title: 'Global Distribution Experience',
      description: 'Leveraging years of expertise in international trade and logistics across multiple African markets.',
      icon: '🌍'
    },
    {
      title: 'Efficient Supply Chain',
      description: 'Streamlined operations ensuring products reach their destination on time, every time.',
      icon: '🚚'
    },
    {
      title: 'Commitment to Quality',
      description: 'Maintaining the highest standards in product selection, handling, and customer service.',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
            Why Trillioni Chad
          </h2>
          <p className="font-dm-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what sets us apart in the regional logistics and distribution landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-l-4 border-l-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white font-dm-sans font-semibold px-8 py-3 rounded-lg transition-all duration-300">
              Start Your Partnership
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
