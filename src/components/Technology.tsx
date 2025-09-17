import React from 'react';
import { Brain, Zap, Eye, Gauge, Shield, Globe } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics and intelligent automation',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Real-time image and video analysis for safety and quality monitoring',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast data processing for immediate insights and responses',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Gauge,
      title: 'IoT Integration',
      description: 'Seamless connectivity with IoT devices for comprehensive monitoring',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols protecting your sensitive business data',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud architecture ensuring 99.9% uptime and global accessibility',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge AI Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI-centric approach leverages the latest technological innovations to deliver 
            intelligent solutions that adapt, learn, and evolve with your business needs.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Integration Showcase */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                AI at the Core of Everything
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Unlike traditional solutions where AI is an afterthought, our platforms are built 
                with artificial intelligence as the foundational element, ensuring every feature 
                is intelligent, adaptive, and predictive.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  <span className="text-blue-100">Predictive maintenance reduces downtime by 30-50%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  <span className="text-blue-100">Intelligent routing optimizes fuel consumption by 25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                  <span className="text-blue-100">Automated decision-making accelerates operations by 40%</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-4 text-white">AI Performance Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-100 text-sm">Prediction Accuracy</span>
                      <span className="text-white font-medium">94%</span>
                    </div>
                    <div className="w-full bg-blue-900/30 rounded-full h-2">
                      <div className="bg-cyan-300 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-100 text-sm">Processing Speed</span>
                      <span className="text-white font-medium">&lt; 100ms</span>
                    </div>
                    <div className="w-full bg-blue-900/30 rounded-full h-2">
                      <div className="bg-orange-300 h-2 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-blue-100 text-sm">System Reliability</span>
                      <span className="text-white font-medium">99.9%</span>
                    </div>
                    <div className="w-full bg-blue-900/30 rounded-full h-2">
                      <div className="bg-green-300 h-2 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;