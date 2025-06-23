
import React, { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counters, setCounters] = useState({
    countries: 0,
    partners: 0,
    products: 0,
    tons: 0,
    units: 0,
    liters: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalValues = {
    countries: 10,
    partners: 15,
    products: 24,
    tons: 40000,
    units: 1000000,
    liters: 250000
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          countries: Math.floor(finalValues.countries * progress),
          partners: Math.floor(finalValues.partners * progress),
          products: Math.floor(finalValues.products * progress),
          tons: Math.floor(finalValues.tons * progress),
          units: Math.floor(finalValues.units * progress),
          liters: Math.floor(finalValues.liters * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
          setHasAnimated(true); // Set hasAnimated only after animation completes
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasAnimated]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const stats = [
    { label: 'Countries', value: counters.countries, suffix: '+' },
    { label: 'Partners', value: counters.partners, suffix: '+' },
    { label: 'Products', value: counters.products, suffix: '+' },
    { label: 'Tons', value: counters.tons, suffix: '+' },
    { label: 'Units', value: counters.units, suffix: '+' },
    { label: 'Liters', value: counters.liters, suffix: '+' }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
            Powering Growth
          </h2>
          <p className="font-dm-sans text-lg opacity-90">
            Our impact in numbers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center transform transition-all duration-300 hover:scale-105 px-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-2 text-accent break-words">
                {formatNumber(stat.value)}{stat.suffix}
              </div>
              <div className="font-dm-sans text-xs sm:text-sm lg:text-base opacity-90 break-words">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
