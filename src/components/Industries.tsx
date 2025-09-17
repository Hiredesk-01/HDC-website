import React from 'react';
import { Building2, Truck, HardHat, MapPin } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Optimize equipment utilization, manage workforce efficiently, and ensure safety compliance with AI-powered construction management solutions.',
      benefits: ['Equipment tracking', 'Safety monitoring', 'Project optimization', 'Resource planning'],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'Streamline supply chain operations with intelligent route optimization, predictive maintenance, and real-time cargo tracking.',
      benefits: ['Route optimization', 'Cargo tracking', 'Delivery scheduling', 'Cost reduction'],
      image: 'https://images.pexels.com/photos/1408303/pexels-photo-1408303.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: MapPin,
      title: 'Transportation',
      description: 'Enhance fleet performance with AI-driven analytics, driver behavior monitoring, and predictive vehicle maintenance.',
      benefits: ['Fleet optimization', 'Driver safety', 'Fuel efficiency', 'Maintenance prediction'],
      image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Manufacturing',
      description: 'Maximize operational efficiency with intelligent equipment monitoring, workforce management, and quality assurance systems.',
      benefits: ['Production optimization', 'Quality control', 'Equipment monitoring', 'Workforce analytics'],
      image: 'https://images.pexels.com/photos/1267324/pexels-photo-1267324.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Transform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering SMEs across diverse sectors with AI-integrated solutions that drive 
            operational efficiency and sustainable growth in global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/60 group-hover:from-blue-900/90 group-hover:to-cyan-900/70 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>

                  <p className="text-white/90 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-6 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 flex items-center group">
                    Explore Solutions
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;