import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Globe, Palette, Target, BarChart3, ArrowRight, Music } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Modern, responsive websites that captivate your audience and drive conversions.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'User-Friendly'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Palette,
    title: 'Logo Creation',
    description: 'Distinctive logos that embody your brand identity and leave lasting impressions.',
    features: ['Unique Concepts', 'Vector Files', 'Multiple Variations', 'Brand Guidelines'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: Target,
    title: 'Branding',
    description: 'Complete brand identity solutions that set you apart from the competition.',
    features: ['Brand Strategy', 'Visual Identity', 'Color Palette', 'Typography'],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Music,
    title: 'Music & Sound Design',
    description: 'From original jingles to cinematic soundtracks, our sound design creates emotional impact that resonates with your audience. Explore our flexible packages starting at $199.',
    color: 'border-pink-500',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    hoverBg: 'hover:bg-pink-50',
    features: [
      'Original music composition',
      'Podcast intro/outro creation',
      'Jingles and sound effects',
      'Cinematic soundscapes',
      'AI-powered music generation',
      'Commercial licensing available',
    ],
    cta: 'View Music Packages',
    ctaAction: () => onPageChange('pricing'),
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that maximize your digital presence and ROI.',
    features: ['Market Analysis', 'Content Strategy', 'Growth Planning', 'Performance Tracking'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
];

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full"
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Services</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Digital Solutions That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Drive Results</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive digital services designed to elevate your brand and accelerate your business growth. Each solution is crafted with precision and tailored to your unique needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden">
                    <CardHeader className="space-y-4">
                      <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-base leading-relaxed mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="pt-4"
                      >
                        <Button
                          onClick={service.ctaAction || (() => onPageChange('contact'))}
                          variant="ghost"
                          className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto group/btn"
                        >
                          <span>{service.cta || 'Learn More'}</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach that ensures quality results and client satisfaction at every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', description: 'We dive deep into your business goals and target audience' },
              { step: '02', title: 'Design', description: 'Create compelling designs that align with your brand vision' },
              { step: '03', title: 'Develop', description: 'Build robust solutions using cutting-edge technologies' },
              { step: '04', title: 'Deliver', description: 'Launch your project and provide ongoing support' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-teal-600 to-teal-800"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-teal-100">
            Let's discuss your project and create something extraordinary together.
          </p>
          <Button
            onClick={() => onPageChange('contact')}
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </motion.section>
    </div>
  );
}