import React from 'react';
import { Target, Award, Users2, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Target,
      title: 'Global Market Leader',
      description: 'Positioned at the vanguard of AI-driven SaaS solutions across multiple industries worldwide'
    },
    {
      icon: Award,
      title: 'Innovation Excellence',
      description: 'Pioneering technology company embedding AI at the core of development processes'
    },
    {
      icon: Users2,
      title: 'SME Empowerment',
      description: 'Dedicated to empowering small and medium enterprises with enterprise-grade AI solutions'
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Driving operational resilience and unprecedented efficiency for businesses globally'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of 
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> AI Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Azeeza Innovations is a pioneering technology company at the vanguard of AI-driven SaaS solutions, 
                specializing in versatile platforms that transform operations across industries like equipment rental, 
                fleet management, manpower hiring, dashcam systems, and more.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We position ourselves as a leader in global markets by embedding artificial intelligence at the core 
                of our development process, enabling predictive analytics, automation, and intelligent decision-making. 
                Our commitment to innovation ensures that AI is not just an add-on but the foundational element driving 
                sustainable growth and operational resilience worldwide.
              </p>
            </div>            
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To revolutionize global business operations through AI-integrated telematics and real-time monitoring, 
              capitalizing on the SaaS market's growth amid rising AI adoption. We envision a world where every 
              business, regardless of size, has access to enterprise-grade AI solutions that drive efficiency, 
              optimize performance, and maximize ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;