import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Heart, Lightbulb, Zap, Eye, Palette, Music } from 'lucide-react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
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
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Lavoro Digital</span>
            </h1>
          </motion.div>

          {/* Main About Content */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8 text-center"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                At Lavoro Digital, we believe that design and sound have the power to transform perception. 
                Inspired by the wisdom and adaptability of the White Fox, our vision is to craft digital 
                experiences that connect deeply with both eyes and ears.
              </p>

              <p className="text-xl text-gray-600 leading-relaxed">
                We are a flexible creative studio led by a founder who collaborates with a trusted network 
                of designers, developers, and sound creators. This allows us to deliver professional solutions 
                with the agility of a boutique agency and the quality of a larger team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* White Fox Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                The White Fox
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Philosophy</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The White Fox represents intelligence, adaptability, and vision. These qualities guide every project we undertake, 
                ensuring we navigate challenges with wisdom and create solutions that are both beautiful and purposeful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Intelligence",
                  description: "We approach every challenge with strategic thinking and creative problem-solving, ensuring intelligent solutions that drive results."
                },
                {
                  icon: Zap,
                  title: "Adaptability",
                  description: "Like the fox, we adapt to changing landscapes, embracing new technologies and trends to keep your brand ahead of the curve."
                },
                {
                  icon: Eye,
                  title: "Vision",
                  description: "We see beyond the obvious, crafting experiences that resonate on emotional levels and create lasting connections with your audience."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-16"
          >
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Creative
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Approach</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We blend artistry with technology, creating digital experiences that not only look beautiful but sound amazing too. 
                Our multidisciplinary approach ensures every touchpoint is perfectly crafted.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Palette className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Visual Excellence</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    From websites to brand identities, we create visually stunning designs that capture attention and communicate your message effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Music className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Audio Innovation</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our sound design capabilities add another dimension to your brand, creating emotional connections through carefully crafted audio experiences.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-teal-100 via-purple-50 to-gray-100 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">🦊</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
            Let's work together to create something extraordinary that resonates with your audience.
          </p>
          <Button
            onClick={() => onPageChange('contact')}
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
          </Button>
        </div>
      </motion.section>
    </div>
  );
}