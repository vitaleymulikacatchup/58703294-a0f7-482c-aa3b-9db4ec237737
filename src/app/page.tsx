"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Star, ArrowRight, MessageCircle, Mail, Linkedin } from 'lucide-react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Sargas</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Support & Maintenance</a>
                </div>
              )}
            </div>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contacts</a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-900 text-white px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">C</span>
              </div>
              <div className="text-sm">
                <div className="flex items-center space-x-1">
                  <span className="font-bold">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="text-xs text-gray-300">Based on 6 Clutch reviews</div>
              </div>
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contacts</a>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full">
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Cookie Banner Component
const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50">
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-4 h-4" />
        </button>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">This site uses cookies</h3>
        <p className="text-sm text-gray-600 mb-4">
          We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
        </p>
        <div className="flex space-x-3">
          <button 
            className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Deny
          </button>
          <button 
            className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-600">AI-powered</span><br />
                <span className="text-gray-900">web and mobile</span><br />
                <span className="text-blue-600">in 12 weeks</span>
              </h1>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Start Discovery
              </button>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold flex items-center space-x-2">
                <span>Portfolio Showcase</span>
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-600">Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Whatsapp</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-30"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-40"></div>
              <div className="absolute inset-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Tech Stack Component
const TechStack = () => {
  const technologies = [
    { name: 'redis', color: 'text-red-600', bg: 'bg-red-50' },
    { name: 'typescript', color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'javascript', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { name: 'html', color: 'text-orange-600', bg: 'bg-orange-50' },
    { name: 'css', color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'nodejs', color: 'text-green-600', bg: 'bg-green-50' }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-8">We use only modern technologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`${tech.bg} ${tech.color} px-4 py-2 rounded-lg font-semibold`}>
                #{tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">92%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">30k+</div>
            <div className="text-gray-600">Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component
const ServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore our services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">MOBILE DEVELOPMENT</h3>
              <div className="w-32 h-1 bg-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="w-64 h-64 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-lg">Mobile Development Illustration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get the same high-quality service for a smaller task
          </h2>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

// Case Studies Section Component
const CaseStudiesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Case Studies</h2>
          <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Dios</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div>
                  <div className="text-2xl font-bold">$2,300</div>
                  <div className="text-blue-200 text-sm">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-blue-200 text-sm">Users</div>
                </div>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                View Case Study
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="h-32 bg-gray-100 rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-center font-semibold">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
          <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-lg">Testimonials Content</div>
        </div>
      </div>
    </section>
  );
};

// Team Section Component
const TeamSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Sargas Team</h2>
          <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2">
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="h-64 bg-white rounded-lg flex items-center justify-center shadow-sm">
          <div className="text-gray-400 text-lg">Team Content</div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          How can we help? Let's talk
        </h2>
        <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-lg">Contact Form</div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold">Sargas</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support and Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <div className="mb-6">
              <p className="text-gray-300 mb-2">Feel free to drop us a note:</p>
              <a href="mailto:contact@sargas.io" className="text-blue-400 hover:text-blue-300 transition-colors">
                contact@sargas.io
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Sargas. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TechStack />
      <ServicesSection />
      <CTASection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
}