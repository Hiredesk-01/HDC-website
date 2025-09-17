import React from 'react';
import { Truck, Users, Camera, Wrench, BarChart3, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: 'Fleet Management',
      description: 'AI-powered fleet optimization with real-time tracking, predictive maintenance, and intelligent route planning.',
      features: ['Real-time GPS tracking', 'Predictive maintenance alerts', 'Fuel optimization', 'Driver behavior analytics']
    },
    {
      icon: Wrench,
      title: 'Equipment Rental',
      description: 'Comprehensive rental management platform with AI-driven demand forecasting and automated scheduling.',
      features: ['Inventory management', 'Demand forecasting', 'Automated billing', 'Maintenance scheduling']
    },
    {
      icon: Users,
      title: 'Manpower Hiring',
      description: 'Smart recruitment solutions leveraging AI for candidate screening, matching, and performance prediction.',
      features: ['AI candidate screening', 'Skill matching', 'Performance analytics', 'Automated onboarding']
    },
    {
      icon: Camera,
      title: 'Dashcam Systems',
      description: 'Advanced dashcam solutions with AI-powered incident detection, driver coaching, and safety analytics.',
      features: ['Incident detection', 'Driver behavior analysis', 'Video analytics', 'Safety scoring']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced AI algorithms providing actionable insights for operational optimization and decision making.',
      features: ['Predictive modeling', 'Performance forecasting', 'Risk assessment', 'ROI optimization']
    },
    {
      icon: Shield,
      title: 'Real-time Monitoring',
      description: '24/7 AI-driven monitoring systems ensuring operational resilience and immediate anomaly detection.',
      features: ['24/7 monitoring', 'Anomaly detection', 'Alert management', 'System health tracking']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Driven SaaS Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming industries with intelligent platforms that embed artificial intelligence 
            at the core of business operations for unprecedented efficiency and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group">
                  Learn More 
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;