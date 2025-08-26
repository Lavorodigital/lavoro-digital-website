import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Check, Star, Zap, Crown, Music, Headphones, Radio } from 'lucide-react';

interface PricingPageProps {
  onPageChange: (page: string) => void;
}

const pricingPlans = [
  {
    name: 'Starter',
    price: '$899',
    duration: 'per project',
    description: 'Perfect for small businesses looking to establish their digital presence',
    icon: Zap,
    color: 'border-gray-200',
    buttonColor: 'bg-gray-900 hover:bg-gray-800 text-white',
    features: [
      'Custom Website Design (up to 5 pages)',
      'Mobile Responsive Layout',
      'Basic SEO Optimization',
      'Contact Form Integration',
      '30 Days of Support',
      'Basic Analytics Setup',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$1,899',
    duration: 'per project',
    description: 'Ideal for growing businesses that need a comprehensive digital solution',
    icon: Star,
    color: 'border-teal-500 ring-2 ring-teal-500/20',
    buttonColor: 'bg-teal-600 hover:bg-teal-700 text-white',
    features: [
      'Custom Website Design (up to 10 pages)',
      'Logo Design & Brand Guidelines',
      'Advanced SEO Optimization',
      'E-commerce Integration',
      '90 Days of Support',
      'Advanced Analytics & Reporting',
      'Social Media Integration',
      'Content Management System',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$3,299',
    duration: 'per project',
    description: 'For enterprises requiring a complete digital transformation',
    icon: Crown,
    color: 'border-orange-200',
    buttonColor: 'bg-orange-600 hover:bg-orange-700 text-white',
    features: [
      'Custom Website Design (unlimited pages)',
      'Complete Brand Identity Package',
      'Digital Marketing Strategy',
      'Custom Web Applications',
      '6 Months of Support',
      'Priority Support & Maintenance',
      'Advanced Integrations',
      'Performance Optimization',
      'Monthly Strategy Consultations',
    ],
    popular: false,
  },
];

const musicPlans = [
  {
    name: 'Basic Music Pack',
    price: '$199',
    duration: 'per project',
    description: 'Ideal for reels, podcast intros, or short ads',
    icon: Music,
    color: 'border-pink-200',
    buttonColor: 'bg-pink-600 hover:bg-pink-700 text-white',
    features: [
      'One short track (up to 1 minute)',
      'Perfect for social media reels',
      'Podcast intro/outro music',
      'Short advertisement background',
      'MP3 and WAV formats included',
      '2 rounds of revisions',
      'Commercial licensing available',
    ],
    popular: false,
  },
  {
    name: 'Professional Music Pack',
    price: '$499',
    duration: 'per project',
    description: 'Up to three original tracks with jingles and sound effects',
    icon: Headphones,
    color: 'border-purple-500 ring-2 ring-purple-500/20',
    buttonColor: 'bg-purple-600 hover:bg-purple-700 text-white',
    features: [
      'Up to three original tracks (2–3 minutes each)',
      'Custom jingles for branding',
      'Sound effects for campaigns',
      'Multiple format delivery',
      'Brand-specific audio identity',
      '3 rounds of revisions',
      'Full commercial usage rights',
      'Priority support included',
    ],
    popular: true,
  },
  {
    name: 'Premium Soundtrack Pack',
    price: '$999',
    duration: 'per project',
    description: 'Complete music suite with cinematic sound design',
    icon: Radio,
    color: 'border-indigo-200',
    buttonColor: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    features: [
      'Long-form tracks (up to 10 minutes)',
      'Cinematic sound design',
      'Ambient music collections',
      'Exclusive audio for marketing',
      'Game/app background music',
      'Unlimited revisions',
      'Full commercial licensing',
      'Priority delivery (48-72 hours)',
      'Dedicated sound designer',
    ],
    popular: false,
  },
];

export function PricingPage({ onPageChange }: PricingPageProps) {
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
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Transparent Pricing</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Perfect Plan</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options designed to fit businesses of all sizes. No hidden fees, no surprises – just honest value for exceptional digital solutions.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-teal-600 text-white px-4 py-1 rounded-full shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`group h-full ${plan.color} hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'hover:-translate-y-3 lg:scale-105' : 'hover:-translate-y-2'} bg-white overflow-hidden`}>
                    <CardHeader className="text-center space-y-4 pb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-teal-50' : 'bg-gray-50'}`}>
                        <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-teal-600' : 'text-gray-600'}`} />
                      </div>
                      
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center space-x-1">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600">{plan.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-teal-600' : 'text-gray-400'}`} />
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <Button
                          onClick={() => onPageChange('contact')}
                          className={`w-full ${plan.buttonColor} py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Music & Sound Design Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full"
            >
              <Music className="w-4 h-4" />
              <span className="text-sm font-medium">Music & Sound Design</span>
            </motion.div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Original Music That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Moves Emotions</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From short jingles to cinematic soundscapes, our AI-powered music creation delivers professional-quality audio that connects with your audience on a deeper level.
            </p>
          </motion.div>

          {/* Music Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {musicPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-purple-600 text-white px-4 py-1 rounded-full shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`group h-full ${plan.color} hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'hover:-translate-y-3 lg:scale-105' : 'hover:-translate-y-2'} bg-white overflow-hidden`}>
                    <CardHeader className="text-center space-y-4 pb-6">
                      <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-purple-50' : 'bg-gray-50'}`}>
                        <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-purple-600' : 'text-gray-600'}`} />
                      </div>
                      
                      <div>
                        <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                        <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-baseline justify-center space-x-1">
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                          <span className="text-gray-600">{plan.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-purple-600' : 'text-gray-400'}`} />
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6">
                        <Button
                          onClick={() => onPageChange('contact')}
                          className={`w-full ${plan.buttonColor} py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Music & Sound Design Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto">
                <Music className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Professional Audio Creation</h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                All music is created with a blend of AI-powered tools and professional editing for fast, high-quality results. 
                Commercial licensing available upon request.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: "What's included in the project timeline?",
                answer: "Most projects are completed within 2-6 weeks depending on complexity. We provide regular updates and involve you throughout the process to ensure the final result exceeds your expectations."
              },
              {
                question: "Can I customize a package to fit my needs?",
                answer: "Absolutely! Our packages are starting points. We're happy to customize any plan to match your specific requirements and budget."
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer: "Yes, we provide ongoing maintenance and support packages. This includes security updates, content updates, and technical support to keep your digital presence running smoothly."
              },
              {
                question: "What if I need revisions?",
                answer: "All packages include revision rounds to ensure you're completely satisfied. We work closely with you to refine the design until it perfectly represents your brand."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-teal-100">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <Button
            onClick={() => onPageChange('contact')}
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us Today
          </Button>
        </div>
      </motion.section>
    </div>
  );
}