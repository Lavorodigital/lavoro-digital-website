import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Left Half */}
        <div className="absolute inset-0 md:w-1/2 w-full h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1653082658341-d18280d0c149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYWJzdHJhY3QlMjBzb3VuZCUyMHdhdmVzJTIwZGlnaXRhbCUyMGNpcmN1aXRzJTIwdGVhbHxlbnwxfHx8fDE3NTYxNTc1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Abstract sound-waves and digital circuits background for Lavoro Digital"
            className="w-full h-full object-cover object-left-center"
          />
          
          {/* Horizontal Gradient Fade - Desktop/Tablet */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90" 
               style={{ 
                 background: 'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0.95) 70%, white 80%)' 
               }}>
          </div>
          
          {/* Bottom to Top Fade - Mobile */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent"></div>
          
          {/* Very Light Overlay on Far Left Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/10 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full h-full flex items-center">
            {/* Text Content - Right Side */}
            <div className="md:w-1/2 md:ml-auto w-full flex items-center justify-center md:justify-start min-h-full py-12">
              <div className="max-w-xl w-full p-12 md:p-0 md:pr-12 space-y-8 text-center md:text-left bg-white/90 md:bg-transparent rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center space-x-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">Digital Creative Studio</span>
                  </motion.div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Where Vision Meets
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800 block">
                      Digital Reality
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    We craft stunning websites, memorable brands, and original music that transform your digital presence into an unforgettable experience.
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
                  >
                    <Button
                      onClick={() => onPageChange('portfolio')}
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Our Work
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      onClick={() => onPageChange('contact')}
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-300 hover:border-teal-600 hover:text-teal-700 px-8 py-4 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    >
                      Start Your Project
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Happy Clients' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}