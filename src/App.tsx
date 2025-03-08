import React from 'react';
import { Menu, X, Moon, Sun, ChevronDown, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Muniba Mazari
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="nav-link">About</a>
              <a href="#portfolio" className="nav-link">Portfolio</a>
              <a href="#speaking" className="nav-link">Speaking</a>
              <a href="#contact" className="nav-link">Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              <a href="#about" className="mobile-nav-link">About</a>
              <a href="#portfolio" className="mobile-nav-link">Portfolio</a>
              <a href="#speaking" className="mobile-nav-link">Speaking</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full text-left px-3 py-2 mobile-nav-link"
              >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
            Artist. Speaker.{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Inspiration.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            "You are the hero of your own life story."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://collectivespeakers.com/wp-content/uploads/2023/09/Muniba-Mazari-3.jpg"
                alt="Muniba Portrait"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                As an artist and motivational speaker, I've dedicated my life to inspiring others through creativity and resilience. My journey has taught me that our greatest challenges often become our most powerful sources of strength.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Through my art and speeches, I share stories of hope, courage, and transformation. I believe in the power of authenticity and the importance of embracing our unique journeys.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">100+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Speeches Delivered</p>
                </div>
                <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">50+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Art Exhibitions</p>
                </div>
                <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">1M+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Lives Touched</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <img
                  src={`https://cdn.artcld.com/img/w_640,c_fit/ru9yx05zam7os9keoiju.jpg`}
                  alt={`Artwork ${item}`}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">Artwork Title {item}</h3>
                    <p className="text-gray-300">Mixed Media on Canvas</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Speaking Engagements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "TEDx Talk: The Power of Resilience",
                date: "March 2024",
                location: "New York City",
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
              },
              {
                title: "Global Leadership Summit",
                date: "April 2024",
                location: "London",
                image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
              },
              {
                title: "Women in Arts Conference",
                date: "May 2024",
                location: "Paris",
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              }
            ].map((event, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{event.date}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{event.location}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-red-500 hover:text-red-600"
                  >
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-red-500" />
                  <span>contact@muniba.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-red-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-red-500" />
                  <span>New York, NY, United States</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-red-500">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Muniba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;