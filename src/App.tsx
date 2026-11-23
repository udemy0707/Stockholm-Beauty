/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Play,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  User,
  Mail,
  Clock4,
  ChevronDown,
  ChevronUp,
  MessageSquare
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: 'Colour' | 'Haircuts & Styling' | 'Treatments' | 'Extensions' | 'Beauty';
  description: string;
  image: string;
}

// 21 Strictly Unique, Perfectly Matched High-End Unsplash Images (Zero Duplicates)
const ALL_SERVICES: ServiceItem[] = [
  // Hair Colour & Techniques
  {
    id: 'hair-colouring',
    title: 'Hair Colouring',
    category: 'Colour',
    description: 'Custom professional hair colouring tailored to your skin tone and personal aesthetic with vibrant radiance.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'balayage',
    title: 'Balayage',
    category: 'Colour',
    description: 'Hand-painted dimensional highlights for a natural, sun-kissed, low-maintenance luminous finish.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gloss-glaze',
    title: 'Gloss or Glaze',
    category: 'Colour',
    description: 'Semi-permanent shine treatment to enhance tone, revive vibrancy, and add mirror-like gloss.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-glossing',
    title: 'Hair Glossing',
    category: 'Colour',
    description: 'Deep conditioning gloss treatment sealing the hair cuticle for extraordinary reflection and softness.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-highlighting',
    title: 'Hair Highlighting',
    category: 'Colour',
    description: 'Precision foils and dimensional highlights to brighten and accentuate natural movement.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ombre-hair-colour',
    title: 'Ombre Hair Colour',
    category: 'Colour',
    description: 'Graduated colour transition from rich darker roots to radiant, lighter luminous ends.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800'
  },

  // Haircuts & Styling
  {
    id: 'hairstyling',
    title: 'Hairstyling',
    category: 'Haircuts & Styling',
    description: 'Expert event styling, radiant waves, and glamorous finishes for any special celebration.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fringe-trim',
    title: 'Fringe Trim',
    category: 'Haircuts & Styling',
    description: 'Precision maintenance trim to keep your fringe perfectly framed, neat, and polished.',
    image: 'https://images.unsplash.com/photo-1562322140-6927da804820?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'haircut',
    title: 'Haircut',
    category: 'Haircuts & Styling',
    description: 'Bespoke precision haircuts designed around your facial structure and daily lifestyle.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'haircut-men-women',
    title: 'Haircut for Men and Women',
    category: 'Haircuts & Styling',
    description: 'Comprehensive styling and cutting services tailored for all hair types and lengths.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'blowdry',
    title: 'Blowdry',
    category: 'Haircuts & Styling',
    description: 'Luxurious wash, blowout, and professional styling for long-lasting volume and bounce.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'updos',
    title: 'Updos',
    category: 'Haircuts & Styling',
    description: 'Sophisticated braided and pinned upstyles crafted for weddings, galas, and celebrations.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'braids',
    title: 'Braids',
    category: 'Haircuts & Styling',
    description: 'Intricate, clean, and stylish braiding crafted with professional precision and care.',
    image: 'https://images.unsplash.com/photo-1595476108010-b9d1f67f15b2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'beard-trim',
    title: 'Beard Trim',
    category: 'Haircuts & Styling',
    description: 'Professional grooming, shaping, and conditioning for a sharp, refined, and healthy beard.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  },

  // Hair Treatments
  {
    id: 'curly-hair',
    title: 'Curly Hair',
    category: 'Treatments',
    description: 'Specialised cutting, hydration, and definition care for vibrant natural curls and coils.',
    image: 'https://images.unsplash.com/photo-1584297091926-9447ecd037cc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-hydration-treatments',
    title: 'Hair Hydration Treatments',
    category: 'Treatments',
    description: 'Intensive moisture infusion to restore vitality and silkiness to dry, stressed hair.',
    image: 'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-straightening',
    title: 'Hair Straightening',
    category: 'Treatments',
    description: 'Professional smoothing services for sleek, frizz-free, wonderfully manageable hair.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'keratin-treatments',
    title: 'Keratin Treatments',
    category: 'Treatments',
    description: 'Advanced smoothing treatment infusing natural keratin for enduring silkiness and shine.',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800'
  },

  // Extensions
  {
    id: 'hair-extensions',
    title: 'Hair Extensions',
    category: 'Extensions',
    description: 'Premium seamless hair extensions for luxurious length, volume, and natural blending.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800'
  },

  // Beauty
  {
    id: 'eyebrow-threading',
    title: 'Eyebrow Threading',
    category: 'Beauty',
    description: 'Precise hair removal and clean shaping for perfectly sculpted, symmetrical brows.',
    image: 'https://images.unsplash.com/photo-1512290900672-132d73f4e3c9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'makeup',
    title: 'Makeup',
    category: 'Beauty',
    description: 'Professional makeup application tailored to enhance your natural beauty for any event.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedImageModal, setSelectedImageModal] = useState<string | null>(null);

  // Booking Form State with Gender
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: 'Female',
    service: ALL_SERVICES[0].title,
    date: '',
    timeSlot: 'Morning',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Current opening status check
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeNum = hour + minute / 60;

  let isOpenNow = false;
  if (dayOfWeek >= 2 && dayOfWeek <= 5) {
    isOpenNow = timeNum >= 10 && timeNum < 18;
  } else if (dayOfWeek === 6) {
    isOpenNow = timeNum >= 9 && timeNum < 16;
  } else {
    isOpenNow = false;
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.date) {
      setFormError('Please fill in your full name, phone number, and preferred date.');
      return;
    }
    setFormError('');
    const whatsappMessage = encodeURIComponent(
      `Hello Stockholm Beauty! I would like to book an appointment:\n\n*Name:* ${formData.fullName}\n*Gender:* ${formData.gender}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time Slot:* ${formData.timeSlot}\n*Message:* ${formData.message || 'None'}`
    );
    const whatsappUrl = `https://wa.me/14695435506?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  const filteredServices = activeCategory === 'All'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.category === activeCategory);

  const displayedServices = showAllServices ? filteredServices : filteredServices.slice(0, 6);

  // Unique gallery images (no duplicates)
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000', title: 'Precision Hair Cut' },
    { url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1000', title: 'Luxurious Balayage' },
    { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000', title: 'Event Styling & Blowdry' },
    { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000', title: 'Hair Glossing & Care' },
    { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000', title: 'Professional Makeup' },
    { url: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1000', title: 'Brow Threading' }
  ];

  const whatsappMessage = encodeURIComponent(
    `Hello Stockholm Beauty! I would like to book an appointment:\n\n*Name:* ${formData.fullName}\n*Gender:* ${formData.gender}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time Slot:* ${formData.timeSlot}\n*Message:* ${formData.message || 'None'}`
  );
  const whatsappUrl = `https://wa.me/14695435506?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#071A29] text-white font-sans selection:bg-[#D8C3A5] selection:text-[#071A29]">
      
      {/* 07. NAVIGATION HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#071A29]/95 backdrop-blur-2xl py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Wordmark */}
          <a href="#" className="flex flex-col tracking-[0.25em] group">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-[0.3em] text-white group-hover:text-[#D8C3A5] transition-colors">STOCKHOLM</span>
            <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#A7B5C0] font-light">BEAUTY</span>
          </a>

          {/* Desktop Nav Links with smooth hover effects */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#services" className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C3A5] hover:after:w-full after:transition-all">Services</a>
            <a href="#featured" className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C3A5] hover:after:w-full after:transition-all">Our Work</a>
            <a href="#about" className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C3A5] hover:after:w-full after:transition-all">About</a>
            <a href="#hours" className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C3A5] hover:after:w-full after:transition-all">Opening Hours</a>
            <a href="#contact" className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D8C3A5] hover:after:w-full after:transition-all">Contact</a>
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="#appointment"
              className="inline-flex items-center space-x-3 bg-white text-[#071A29] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F5EFE5] transition-all duration-300 group shadow-md hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Book An Appointment</span>
              <span className="w-7 h-7 rounded-full bg-[#071A29] text-white flex items-center justify-center group-hover:bg-[#102A3B] transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#071A29]/98 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden animate-fadeIn">
          <div className="flex flex-col space-y-6 text-center text-xl font-serif">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors py-2 border-b border-white/10"
            >
              Services
            </a>
            <a
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors py-2 border-b border-white/10"
            >
              Our Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors py-2 border-b border-white/10"
            >
              About
            </a>
            <a
              href="#hours"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors py-2 border-b border-white/10"
            >
              Opening Hours
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#D5DCE2] hover:text-[#D8C3A5] transition-colors py-2 border-b border-white/10"
            >
              Contact
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-white text-[#071A29] py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl"
            >
              Book An Appointment
            </a>
          </div>
        </div>
      )}

      {/* 08. HERO SECTION (Eyebrow removed as requested) */}
      <section className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/public/assets/aistudio/Dreamy_Spa_Portrait_with_Floating_Orbs__1__b65ac10d.png"
            alt="Stockholm Beauty Luxury Salon Hero Portrait"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.90] contrast-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A29] via-[#071A29]/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A29]/80 via-transparent to-[#071A29]/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-2xl flex flex-col justify-center space-y-8 pl-0 md:pl-2">
            
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white leading-[1.05]">
              More than beautiful.{' '}
              <span className="block italic font-normal text-[#F5EFE5] mt-1">A feeling of confidence.</span>
            </h1>

            <p className="text-[#D5DCE2] text-base md:text-lg max-w-xl font-light leading-relaxed">
              Discover your signature style with personalised haircare, expert styling and beauty services at Stockholm Beauty.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-2">
              <a
                href="#appointment"
                className="inline-flex items-center justify-between bg-white text-[#071A29] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F5EFE5] transition-all duration-300 group shadow-md hover:shadow-2xl hover:-translate-y-0.5"
              >
                <span>Book An Appointment</span>
                <span className="ml-4 w-7 h-7 rounded-full bg-[#071A29] text-white flex items-center justify-center group-hover:bg-[#102A3B] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center text-white text-xs font-semibold uppercase tracking-widest py-4 px-6 border-b border-white/40 hover:border-white transition-all duration-300 group"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center space-x-4 pt-6 text-xs text-[#A7B5C0] tracking-[0.2em]">
              <span className="text-white font-bold">01</span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>02</span>
              <span className="w-8 h-[1px] bg-white/30"></span>
              <span>03</span>
            </div>
          </div>
        </div>
      </section>

      {/* 09. BRAND INTRODUCTION SECTION */}
      <section id="about" className="py-24 bg-[#0B2233] relative overflow-hidden border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-10 h-[1px] bg-[#D8C3A5]"></span>
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">
              THE STOCKHOLM BEAUTY EXPERIENCE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.15]">
                Beauty is personal.{' '}
                <span className="block italic text-[#F5EFE5] mt-1">Your style should be too.</span>
              </h2>

              <p className="text-[#D5DCE2] text-base md:text-lg font-light leading-relaxed max-w-2xl">
                At Stockholm Beauty, every style begins with understanding your individual look and preferences. Explore professional hair services designed to help you express your personality with confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="glass-panel backdrop-blur-xl bg-white/[0.06] p-6 rounded-2xl border border-white/20 shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300">
                  <h3 className="font-serif text-xl text-white mb-2 font-medium">Bespoke Haircare</h3>
                  <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                    Custom colouring, balayage, and restorative treatments tailored to your unique hair structure.
                  </p>
                </div>

                <div className="glass-panel backdrop-blur-xl bg-white/[0.06] p-6 rounded-2xl border border-white/20 shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300">
                  <h3 className="font-serif text-xl text-white mb-2 font-medium">Modern Aesthetic</h3>
                  <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                    A calm Scandinavian studio atmosphere where luxury meets contemporary salon artistry.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.06] p-2 shadow-2xl border border-white/25 hover:scale-[1.01] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000"
                  alt="Stockholm Beauty Modern Salon Interior"
                  className="w-full h-[460px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#071A29]/90 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl hidden sm:block">
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 rounded-full bg-[#D8C3A5] animate-ping"></span>
                  <span className="text-xs uppercase tracking-widest text-[#D5DCE2] font-semibold">Open for Bookings</span>
                </div>
                <p className="text-xs text-[#A7B5C0] mt-1">+1 469-543-5506</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#071A29] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-[#D8C3A5]"></span>
              <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">OUR EXPERTISE</span>
              <span className="w-8 h-[1px] bg-[#D8C3A5]"></span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">
              Discover your signature style.
            </h2>

            <p className="text-[#D5DCE2] font-light text-base md:text-lg">
              From precision haircuts to dimensional colour and beautifully finished styles, explore the complete range of services available at Stockholm Beauty.
            </p>

            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {['All', 'Colour', 'Haircuts & Styling', 'Treatments', 'Extensions', 'Beauty'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowAllServices(false);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-white text-[#071A29] shadow-xl scale-105'
                      : 'glass-panel backdrop-blur-md bg-white/[0.04] text-[#D5DCE2] hover:bg-white/10 hover:text-white border border-white/15'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service) => (
              <div
                key={service.id}
                className="glass-panel backdrop-blur-xl bg-white/[0.05] rounded-2xl overflow-hidden border border-white/20 group hover:border-white/40 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-500 flex flex-col shadow-2xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-100 saturate-110"
                  />
                  <div className="absolute top-4 right-4 bg-[#071A29]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#D8C3A5] border border-white/20">
                    {service.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-white mb-2 group-hover:text-[#D8C3A5] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#D5DCE2]">Professional Service</span>
                    <a
                      href="#appointment"
                      onClick={() => setFormData(prev => ({ ...prev, service: service.title }))}
                      className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#071A29] text-white flex items-center justify-center transition-all duration-300 shadow-md glass-panel"
                      title={`Book ${service.title}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length > 6 && (
            <div className="text-center mt-16">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center space-x-3 glass-panel backdrop-blur-xl bg-white/10 text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#071A29] transition-all duration-300 shadow-2xl border border-white/25 group hover:-translate-y-1"
              >
                <span>{showAllServices ? 'Show Less Services' : `View All Services (${filteredServices.length})`}</span>
                {showAllServices ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 11. FEATURED HAIR SERVICES */}
      <section id="featured" className="py-24 bg-[#0B2233] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">EDITORIAL HIGHLIGHTS</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">Every detail makes the difference.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-3xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.06] p-2 border border-white/20 shadow-2xl hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000"
                alt="Balayage & Hair Colouring Artistry"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6 lg:pl-8">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D8C3A5]">01 — Colour Artistry</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">Dimensional Balayage & Colouring</h3>
              <p className="text-[#D5DCE2] font-light leading-relaxed">
                Our master colorists utilize advanced balayage, glossing, and highlighting techniques to create seamless, luminous tones that catch the light and reflect your individuality.
              </p>
              <a
                href="#appointment"
                className="inline-flex items-center space-x-2 text-white text-xs uppercase tracking-widest font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors"
              >
                <span>Enquire About Colour</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:pr-8 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#D8C3A5]">02 — Precision & Care</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white">Keratin Smoothing & Haircuts</h3>
              <p className="text-[#D5DCE2] font-light leading-relaxed">
                Experience bespoke cuts paired with restorative keratin and hydration treatments designed to leave your hair remarkably silky, resilient, and beautifully polished.
              </p>
              <a
                href="#appointment"
                className="inline-flex items-center space-x-2 text-white text-xs uppercase tracking-widest font-semibold border-b border-white/40 pb-1 hover:border-white transition-colors"
              >
                <span>Book Treatment</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.06] p-2 border border-white/20 shadow-2xl order-1 lg:order-2 hover:scale-[1.01] hover:-translate-y-1 transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=1000"
                alt="Keratin Treatment & Precision Cut"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 12. SIGNATURE BEAUTY EXPERIENCE */}
      <section className="py-24 bg-[#071A29] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">THE PHILOSOPHY</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight">
                Your beauty.<br />
                <span className="italic text-[#F5EFE5]">Your individuality.</span>
              </h2>
              <p className="text-[#D5DCE2] font-light leading-relaxed">
                We believe exceptional salon care is rooted in undivided attention, professional mastery, and a welcoming Scandinavian aesthetic.
              </p>

              <div className="space-y-6 pt-4">
                <div className="glass-panel backdrop-blur-xl bg-white/[0.04] p-4 rounded-2xl border border-white/15 flex items-start space-x-4 shadow-xl hover:-translate-y-1 transition-all">
                  <span className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-xs font-bold text-[#D8C3A5] flex-shrink-0">01</span>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-white">Personal Expression</h4>
                    <p className="text-sm text-[#A7B5C0] font-light">Styles that reflect your individual preferences and daily lifestyle.</p>
                  </div>
                </div>

                <div className="glass-panel backdrop-blur-xl bg-white/[0.04] p-4 rounded-2xl border border-white/15 flex items-start space-x-4 shadow-xl hover:-translate-y-1 transition-all">
                  <span className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-xs font-bold text-[#D8C3A5] flex-shrink-0">02</span>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-white">Professional Care</h4>
                    <p className="text-sm text-[#A7B5C0] font-light">Uncompromising attention to detail throughout your entire salon visit.</p>
                  </div>
                </div>

                <div className="glass-panel backdrop-blur-xl bg-white/[0.04] p-4 rounded-2xl border border-white/15 flex items-start space-x-4 shadow-xl hover:-translate-y-1 transition-all">
                  <span className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-xs font-bold text-[#D8C3A5] flex-shrink-0">03</span>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-white">Modern Techniques</h4>
                    <p className="text-sm text-[#A7B5C0] font-light">A carefully curated selection of contemporary hair and beauty services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.06] p-2 border border-white/20 shadow-2xl hover:scale-[1.01] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1200"
                  alt="Stockholm Beauty Client Experience"
                  className="w-full h-[520px] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 13. GALLERY / OUR WORK */}
      <section className="py-24 bg-[#0B2233] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">PORTFOLIO</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">An expression of beauty.</h2>
            <p className="text-[#D5DCE2] font-light text-base">Explore highlights of our recent hair transformations, balayage, and styling work.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImageModal(img.url)}
                className="group relative h-80 rounded-2xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.05] border border-white/15 cursor-pointer shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A29]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#D8C3A5]">Stockholm Beauty</span>
                  <h4 className="font-serif text-xl text-white font-medium">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Image Modal Lightbox */}
      {selectedImageModal && (
        <div
          onClick={() => setSelectedImageModal(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div className="relative max-w-4xl w-full max-h-[90svh]">
            <button
              onClick={() => setSelectedImageModal(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#D8C3A5] p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImageModal}
              alt="Enlarged gallery view"
              className="w-full h-auto max-h-[85svh] object-contain rounded-xl border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* 14. WHY CHOOSE STOCKHOLM BEAUTY */}
      <section className="py-24 bg-[#071A29] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">THE DIFFERENCE</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">Designed around your beauty.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel backdrop-blur-xl bg-white/[0.05] p-8 rounded-2xl border border-white/15 space-y-4 hover:border-white/40 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 shadow-2xl">
              <span className="text-[#D8C3A5] font-serif text-2xl font-light">01</span>
              <h3 className="font-serif text-xl font-medium text-white">Personal Approach</h3>
              <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                Beauty services presented around your individual style, hair texture, and preferences.
              </p>
            </div>

            <div className="glass-panel backdrop-blur-xl bg-white/[0.05] p-8 rounded-2xl border border-white/15 space-y-4 hover:border-white/40 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 shadow-2xl">
              <span className="text-[#D8C3A5] font-serif text-2xl font-light">02</span>
              <h3 className="font-serif text-xl font-medium text-white">Hair & Beauty</h3>
              <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                A comprehensive selection of professional salon services delivered under one roof.
              </p>
            </div>

            <div className="glass-panel backdrop-blur-xl bg-white/[0.05] p-8 rounded-2xl border border-white/15 space-y-4 hover:border-white/40 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 shadow-2xl">
              <span className="text-[#D8C3A5] font-serif text-2xl font-light">03</span>
              <h3 className="font-serif text-xl font-medium text-white">Modern Style</h3>
              <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                Contemporary Scandinavian looks, expert colouring techniques, and styling inspiration.
              </p>
            </div>

            <div className="glass-panel backdrop-blur-xl bg-white/[0.05] p-8 rounded-2xl border border-white/15 space-y-4 hover:border-white/40 hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 shadow-2xl">
              <span className="text-[#D8C3A5] font-serif text-2xl font-light">04</span>
              <h3 className="font-serif text-xl font-medium text-white">Your Experience</h3>
              <p className="text-sm text-[#A7B5C0] font-light leading-relaxed">
                A welcoming, tranquil studio environment dedicated to your next beauty appointment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 15. INSTAGRAM SECTION */}
      <section className="py-24 bg-[#0B2233] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 text-[#D8C3A5]">
              <Instagram className="w-5 h-5" />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold">@stockholm_beauty_</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">Follow our beauty story.</h2>
            <p className="text-[#D5DCE2] font-light text-base">
              Explore inspiration, styles and beauty moments from Stockholm Beauty on Instagram.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
            ].map((src, i) => (
              <a
                key={i}
                href="https://www.instagram.com/stockholm_beauty_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-64 rounded-xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.05] border border-white/15 block shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              >
                <img src={src} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Instagram className="w-8 h-8" />
                </div>
              </a>
            ))}
          </div>

          <a
            href="https://www.instagram.com/stockholm_beauty_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-[#071A29] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F5EFE5] transition-all duration-300 shadow-2xl hover:-translate-y-0.5"
          >
            <span>Follow On Instagram</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

        </div>
      </section>

      {/* 16. OPENING HOURS */}
      <section id="hours" className="py-24 bg-[#071A29] relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">SCHEDULE</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">Find your moment.</h2>
            <p className="text-[#D5DCE2] font-light">
              We welcome clients Tuesday through Saturday by appointment or enquiry.
            </p>
            <div className="inline-flex items-center space-x-2 mt-4 px-4 py-2 rounded-full glass-panel backdrop-blur-md bg-white/10 border border-white/20 text-xs font-medium">
              <span className={`w-2.5 h-2.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`}></span>
              <span className="text-white">{isOpenNow ? 'Currently Open' : 'Currently Closed'}</span>
            </div>
          </div>

          <div className="glass-panel backdrop-blur-xl bg-white/[0.05] rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl space-y-6">
            {[
              { day: 'Monday', hours: 'CLOSED', isClosed: true },
              { day: 'Tuesday', hours: '10:00 AM – 6:00 PM', isClosed: false },
              { day: 'Wednesday', hours: '10:00 AM – 6:00 PM', isClosed: false },
              { day: 'Thursday', hours: '10:00 AM – 6:00 PM', isClosed: false },
              { day: 'Friday', hours: '10:00 AM – 6:00 PM', isClosed: false },
              { day: 'Saturday', hours: '9:00 AM – 4:00 PM', isClosed: false },
              { day: 'Sunday', hours: 'CLOSED', isClosed: true }
            ].map((sched, idx) => {
              const isToday = (dayOfWeek === 0 && sched.day === 'Sunday') ||
                              (dayOfWeek === 1 && sched.day === 'Monday') ||
                              (dayOfWeek === 2 && sched.day === 'Tuesday') ||
                              (dayOfWeek === 3 && sched.day === 'Wednesday') ||
                              (dayOfWeek === 4 && sched.day === 'Thursday') ||
                              (dayOfWeek === 5 && sched.day === 'Friday') ||
                              (dayOfWeek === 6 && sched.day === 'Saturday');

              return (
                <div
                  key={idx}
                  className={`flex items-center justify-between py-4 border-b border-white/10 last:border-0 ${isToday ? 'bg-white/10 px-4 rounded-xl border-l-4 border-l-[#D8C3A5]' : ''}`}
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-[#D8C3A5]" />
                    <span className={`font-medium ${isToday ? 'text-white font-semibold' : 'text-[#D5DCE2]'}`}>
                      {sched.day} {isToday && <span className="text-[10px] uppercase ml-2 px-2 py-0.5 rounded bg-[#D8C3A5]/20 text-[#D8C3A5]">Today</span>}
                    </span>
                  </div>
                  <span className={`text-sm ${sched.isClosed ? 'text-rose-300 font-medium' : 'text-[#A7B5C0]'}`}>
                    {sched.hours}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 17. LOCATION AND CONTACT */}
      <section id="contact" className="py-24 bg-[#0B2233] border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">GET IN TOUCH</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light text-white mt-2">
                  Let's make your next visit happen.
                </h2>
                <p className="text-[#D5DCE2] font-light mt-4 leading-relaxed">
                  Have questions about our services or need help choosing the right treatment? Reach out directly or visit our studio.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+14695435506"
                  className="glass-panel backdrop-blur-xl bg-white/[0.05] p-6 rounded-2xl border border-white/15 flex items-center space-x-4 hover:border-white/40 hover:-translate-y-1 transition-all group block shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D8C3A5] group-hover:bg-white group-hover:text-[#071A29] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#A7B5C0] block">Telephone</span>
                    <span className="text-lg font-serif text-white">+1 469-543-5506</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/stockholm_beauty_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel backdrop-blur-xl bg-white/[0.05] p-6 rounded-2xl border border-white/15 flex items-center space-x-4 hover:border-white/40 hover:-translate-y-1 transition-all group block shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D8C3A5] group-hover:bg-white group-hover:text-[#071A29] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#A7B5C0] block">Instagram</span>
                    <span className="text-lg font-serif text-white">@stockholm_beauty_</span>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/Stockholm+Beauty/@33.0994735,-96.6805402,17z/data=!3m1!4b1!4m6!3m5!1s0x864c17c901eaf55d:0xac631f5ff49f65c0!8m2!3d33.0994735!4d-96.6805402!16s%2Fg%2F11zy8c2lkw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel backdrop-blur-xl bg-white/[0.05] p-6 rounded-2xl border border-white/15 flex items-center space-x-4 hover:border-white/40 hover:-translate-y-1 transition-all group block shadow-2xl"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#D8C3A5] group-hover:bg-white group-hover:text-[#071A29] transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#A7B5C0] block">Location & Directions</span>
                    <span className="text-lg font-serif text-white">Open Google Maps Location</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden glass-panel backdrop-blur-xl bg-white/[0.05] p-2 border border-white/25 shadow-2xl h-[480px]">
                <iframe
                  title="Stockholm Beauty Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.3456789!2d-96.6805402!3d33.0994735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c17c901eaf55d%3A0xac631f5ff49f65c0!2sStockholm%20Beauty!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1.25rem' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. APPOINTMENT ENQUIRY SECTION */}
      <section id="appointment" className="py-24 bg-[#071A29] relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[#D8C3A5] font-semibold">APPOINTMENT ENQUIRY</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-white">Your next look starts here.</h2>
            <p className="text-[#D5DCE2] font-light max-w-xl mx-auto">
              Tell us about your preferred service and send your appointment details directly to our WhatsApp.
            </p>
          </div>

          <div className="glass-panel backdrop-blur-xl bg-white/[0.05] rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white">Ready to Send to WhatsApp</h3>
                <p className="text-[#D5DCE2] font-light max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.fullName}</span> ({formData.gender}). Click below to instantly send your appointment details to Stockholm Beauty via WhatsApp.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-emerald-600 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all shadow-2xl hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Appointment to WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        gender: 'Female',
                        service: ALL_SERVICES[0].title,
                        date: '',
                        timeSlot: 'Morning',
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto glass-panel px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white hover:bg-white/15 transition-all border border-white/20"
                  >
                    Edit Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {formError && (
                  <div className="bg-rose-500/20 border border-rose-500/40 text-rose-200 p-4 rounded-xl text-sm">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C0]" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Astrid Lindgren"
                        className="w-full bg-[#071A29]/60 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Gender *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A7B5C0] text-xs font-bold">⚥</span>
                      <select
                        value={formData.gender}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full bg-[#071A29] border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        <option value="Female" className="bg-[#071A29]">Female</option>
                        <option value="Male" className="bg-[#071A29]">Male</option>
                        <option value="Other / Prefer not to say" className="bg-[#071A29]">Other / Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C0]" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (469) 555-0199"
                        className="w-full bg-[#071A29]/60 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Email Address (Optional)</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C0]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="astrid@example.com"
                        className="w-full bg-[#071A29]/60 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Preferred Service *</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A7B5C0] text-xs font-bold">✦</span>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#071A29] border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        {ALL_SERVICES.map(s => (
                          <option key={s.id} value={s.title} className="bg-[#071A29] text-white">
                            {s.title} ({s.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C0]" />
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-[#071A29]/60 border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Preferred Time Slot *</label>
                    <div className="relative">
                      <Clock4 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A7B5C0]" />
                      <select
                        value={formData.timeSlot}
                        onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-[#071A29] border border-white/20 rounded-xl py-3.5 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                      >
                        <option value="Morning" className="bg-[#071A29]">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon" className="bg-[#071A29]">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Evening" className="bg-[#071A29]">Evening (4:00 PM – 6:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#D8C3A5] mb-2 font-medium">Additional Message or Requests (Optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your hair type, desired length, or special requests..."
                    className="w-full bg-[#071A29]/60 border border-white/20 rounded-xl p-4 text-white placeholder-white/30 text-sm focus:outline-none focus:border-white transition-colors"
                  ></textarea>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center space-x-3 bg-white text-[#071A29] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#F5EFE5] transition-all duration-300 shadow-2xl hover:-translate-y-0.5"
                  >
                    <span>Book Appointment</span>
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                  </button>
                  <p className="text-[11px] text-[#A7B5C0] mt-3">
                    Clicking will prepare your WhatsApp message to send directly to Stockholm Beauty (+1 469-543-5506).
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 19. FOOTER */}
      <footer className="bg-[#0B2233] border-t border-white/10 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-4">
            <a href="#" className="flex flex-col tracking-[0.25em]">
              <span className="font-serif text-2xl font-semibold tracking-[0.3em] text-white">STOCKHOLM</span>
              <span className="text-[11px] tracking-[0.4em] text-[#A7B5C0] font-light">BEAUTY</span>
            </a>
            <p className="text-[#D5DCE2] text-sm font-light italic">
              "Beauty is personal. Make it yours."
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#D8C3A5] font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#D5DCE2]">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#hours" className="hover:text-white transition-colors">Opening Hours</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#D8C3A5] font-semibold">Contact & Hours</h4>
            <p className="text-sm text-[#D5DCE2]">+1 469-543-5506</p>
            <p className="text-sm text-[#A7B5C0] font-light">
              Tue – Fri: 10 AM – 6 PM<br />
              Saturday: 9 AM – 4 PM<br />
              Mon & Sun: Closed
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-[#D8C3A5] font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/stockholm_beauty_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel backdrop-blur-md bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#071A29] transition-all shadow-lg"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="tel:+14695435506"
                className="w-10 h-10 rounded-full glass-panel backdrop-blur-md bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#071A29] transition-all shadow-lg"
                title="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Stockholm+Beauty/@33.0994735,-96.6805402,17z/data=!3m1!4b1!4m6!3m5!1s0x864c17c901eaf55d:0xac631f5ff49f65c0!8m2!3d33.0994735!4d-96.6805402!16s%2Fg%2F11zy8c2lkw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-panel backdrop-blur-md bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#071A29] transition-all shadow-lg"
                title="Google Maps"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7B5C0]">
          <p>© {new Date().getFullYear()} Stockholm Beauty. All rights reserved.</p>
          <a href="#" className="mt-4 sm:mt-0 hover:text-white transition-colors">Back to top ↑</a>
        </div>
      </footer>

    </div>
  );
}
