import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ExternalLink, Eye, Play, Pause, Music, Globe, Palette } from 'lucide-react';

interface PortfolioPageProps {
  onPageChange: (page: string) => void;
}

const portfolioItems = [
  {
    title: "E-commerce Fashion Platform",
    category: "Websites",
    description: "Modern e-commerce platform with seamless shopping experience",
    image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MTQ3NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["E-commerce", "Responsive", "React"],
  },
  {
    title: "Tech Startup Branding",
    category: "Logos",
    description: "Complete brand identity for innovative tech startup",
    image: "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTYxNDcxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
  },
  {
    title: "Restaurant Web App",
    category: "Websites",
    description: "Interactive web application with online ordering system",
    image: "https://images.unsplash.com/photo-1753692400335-88e37779b471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzU2MTQwNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Web App", "JavaScript", "API Integration"],
  },
  {
    title: "Corporate Website Redesign",
    category: "Websites",
    description: "Professional corporate website with modern design",
    image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MTQ3NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Corporate", "CMS", "SEO"],
  },
  {
    title: "Mobile App UI Design",
    category: "Logos",
    description: "Intuitive mobile app interface for health tracking",
    image: "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTYxNDcxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile", "UI/UX", "Health"],
  },
];

const musicPortfolioItems = [
  {
    title: "Ambient Brand Soundtrack",
    description: "Original ambient music composition for luxury brand campaigns",
    image: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU2MDkyMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Ambient", "Brand Music", "Original Composition"],
    duration: "3:24",
    audioSrc: "#", // Placeholder for demo
  },
  {
    title: "Electronic Jingle Collection",
    description: "AI-generated electronic jingles for social media campaigns",
    image: "https://images.unsplash.com/photo-1745848413083-cfea604edb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzb3VuZGJvYXJkfGVufDF8fHx8MTc1NjE1MTI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Electronic", "AI Music", "Jingles"],
    duration: "0:45",
    audioSrc: "#", // Placeholder for demo
  },
  {
    title: "Cinematic Sound Design",
    description: "Epic orchestral composition for video content and advertisements",
    image: "https://images.unsplash.com/photo-1661922028028-e3c340d459d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwbXVzaWN8ZW58MXx8fHwxNzU2MTUxMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cinematic", "Orchestral", "Video Content"],
    duration: "5:12",
    audioSrc: "#", // Placeholder for demo
  },
  {
    title: "Podcast Intro Theme",
    description: "Energetic theme music for business podcast series",
    image: "https://images.unsplash.com/photo-1718217028088-a23cb3b277c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0dWRpbyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzU2MDkyMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Podcast", "Theme Music", "Energetic"],
    duration: "1:15",
    audioSrc: "#", // Placeholder for demo
  },
  {
    title: "Meditation Soundscape",
    description: "Calming ambient sounds for wellness and mindfulness apps",
    image: "https://images.unsplash.com/photo-1661922028028-e3c340d459d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMHdhdmVmb3JtJTIwbXVzaWN8ZW58MXx8fHwxNzU2MTUxMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Meditation", "Ambient", "Wellness"],
    duration: "8:30",
    audioSrc: "#", // Placeholder for demo
  },
  {
    title: "Gaming Background Score",
    description: "Dynamic instrumental music for mobile game soundtrack",
    image: "https://images.unsplash.com/photo-1745848413083-cfea604edb6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y3Rpb24lMjBzb3VuZGJvYXJkfGVufDF8fHx8MTc1NjE1MTI2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Gaming", "Instrumental", "Dynamic"],
    duration: "4:47",
    audioSrc: "#", // Placeholder for demo
  },
];

const categories = ["All", "Websites", "Logos", "Music & Sound Design"];

export function PortfolioPage({ onPageChange }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [playingTrack, setPlayingTrack] = React.useState<string | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const showMusicSection = selectedCategory === "All" || selectedCategory === "Music & Sound Design";
  const showRegularPortfolio = selectedCategory === "All" || selectedCategory !== "Music & Sound Design";

  const handlePlayPause = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
      // In a real implementation, this would control actual audio playback
      setTimeout(() => setPlayingTrack(null), 3000); // Auto-stop for demo
    }
  };

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
              <Eye className="w-4 h-4" />
              <span className="text-sm font-medium">Our Portfolio</span>
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Showcasing Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"> Best Work</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse portfolio of successful projects. From stunning websites to complete brand transformations, each project represents our commitment to excellence and innovation.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          {showRegularPortfolio && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-white/90 text-gray-900">
                              {item.category}
                            </Badge>
                            <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-200">
                              <ExternalLink className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-gray-300 text-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Music & Sound Design Section */}
      {showMusicSection && (
        <section className="py-20 bg-purple-50/30">
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
                Audio That Connects
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Hearts & Minds</span>
              </h2>

              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Sound is more than background — it's a story. Explore our demo tracks to feel how we merge technology, music, and creativity.
              </p>
            </motion.div>

            {/* Music Portfolio Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {musicPortfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="bg-white/90 text-gray-900 text-xs">
                              {item.duration}
                            </Badge>
                            <motion.button
                              onClick={() => handlePlayPause(item.title)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-lg"
                            >
                              {playingTrack === item.title ? (
                                <Pause className="w-5 h-5" />
                              ) : (
                                <Play className="w-5 h-5 ml-0.5" />
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-purple-300 text-purple-600 bg-purple-50/50"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Simple Audio Visualizer */}
                      {playingTrack === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-gray-100"
                        >
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(12)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  height: [4, 16, 8, 20, 6, 14, 10],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                                className="w-1 bg-purple-600 rounded-full"
                                style={{ height: 4 }}
                              />
                            ))}
                          </div>
                          <p className="text-center text-xs text-purple-600 mt-2">Playing demo...</p>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Want to See Detailed Case Studies?
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Get in-depth insights into our process, challenges, and solutions for each project.
            </p>
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
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-teal-100">
            Let's discuss your vision and bring it to life with our expertise.
          </p>
          <motion.button
            onClick={() => onPageChange('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-700 hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}