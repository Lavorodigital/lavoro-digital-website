import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@lavorodigital.com',
      description: 'Send us an email anytime',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      description: 'Come say hello at our office',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
  ];

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
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Let's Start a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Conversation</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project and discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="border-gray-200 focus:border-teal-500 focus:ring-teal-500 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <CardContent className="p-6 space-y-3">
                        <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{info.title}</h3>
                          <p className="text-lg text-gray-900 font-medium">{info.content}</p>
                          <p className="text-sm text-gray-600">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-semibold text-gray-900">Follow Us</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 ${social.color} transition-all duration-200`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </div>
                    <p className="text-sm text-gray-600">
                      Stay updated with our latest work and insights
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Quick Answers</h2>
            <p className="text-xl text-gray-600">
              Common questions we receive from our clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly can you start?",
                answer: "We typically begin new projects within 1-2 weeks of agreement."
              },
              {
                question: "Do you work internationally?",
                answer: "Yes! We work with clients worldwide and across all time zones."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Most projects complete within 2-8 weeks depending on scope and complexity."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Absolutely! We provide maintenance packages and ongoing support for all our clients."
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
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Promise */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-br from-teal-600 to-teal-800"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            We'll Respond Within 24 Hours
          </h2>
          <p className="text-xl text-teal-100">
            Our team reviews every message personally and responds promptly with thoughtful insights about your project.
          </p>
          <div className="text-6xl">🦊</div>
        </div>
      </motion.section>
    </div>
  );
}