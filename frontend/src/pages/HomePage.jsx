import React, { useEffect, useState } from 'react';
import { Phone, MapPin, Clock, Star, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export const HomePage = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: 'Hari M.J',
      time: 'a year ago',
      rating: 5,
      text: 'Amazing root canal work done by the doctor. Would recommend to anyone. Expert work.'
    },
    {
      name: 'Santha Kumari',
      time: '7 months ago',
      rating: 5,
      text: 'Trusted dentist in the city. Dr Subhash I S and his team is excellent. Highly recommended. Thank you for the great work on teeth.'
    },
    {
      name: 'Leenu Prakash',
      time: 'a year ago',
      rating: 5,
      text: 'I recently visited Cosmic Multispeciality Dental Clinic in Poovar, and I must say it was a fantastic experience. The staff was incredibly friendly and professional, making me feel comfortable throughout my treatment. The clinic was clean and well-maintained, and the dentist was very knowledgeable and gentle. I highly recommend Cosmic Multispeciality Dental Clinic for anyone looking for top-quality dental care in the area. 🌟🦷'
    },
    {
      name: 'Heleena Prakash',
      time: 'a year ago',
      rating: 5,
      text: 'I first went to this clinic in the year of 2011 for an orthodontic procedure. I was glad that I chose this clinic. Very good service by Dr. Subhash and other staff. I will strongly recommend this place'
    },
    {
      name: 'Baby Prakash',
      time: '8 months ago',
      rating: 5,
      text: 'I recently visited the hospital. I am impressed by the treatment. Very knowledgeable doctor and staffs. I am very happy'
    },
    {
      name: 'Arya s Babu',
      time: 'a year ago',
      rating: 5,
      text: 'Best treatment in a clean environment and has good interaction. A caring and helpful dental clinic. Very professional and patient friendly experience'
    }
  ];

  const services = [
    { name: 'Root Canal Treatments', nameML: 'റൂട്ട് കനാൽ ചികിത്സ' },
    { name: 'Crown & Bridges', nameML: 'ക്രൗൺ & ബ്രിഡ്ജുകൾ' },
    { name: 'Teeth Scaling & Polishing', nameML: 'പല്ല് സ്കെയിലിംഗും പോളിഷിംഗും' },
    { name: 'Orthodontic Correction', nameML: 'ഓർത്തോഡോണ്ടിക് തിരുത്തൽ' },
    { name: 'Teeth Whitening', nameML: 'പല്ല് വെളുപ്പിക്കൽ' },
    { name: 'Dental Implants', nameML: 'ഡെന്റൽ ഇംപ്ലാന്റുകൾ' },
    { name: 'Tooth Coloured Fillings', nameML: 'പല്ല് നിറമുള്ള ഫില്ലിംഗുകൾ' },
    { name: 'Replacement of Missing Teeth', nameML: 'നഷ്ടപ്പെട്ട പല്ലുകൾ മാറ്റിസ്ഥാപിക്കൽ' }
  ];

  const galleryImages = [
    'https://customer-assets.emergentagent.com/job_cosmic-dental/artifacts/dmcqun8v_Screenshot_20251211-000223.png',
    'https://customer-assets.emergentagent.com/job_cosmic-dental/artifacts/b3i4jbcf_Screenshot_20251211-000141.png',
    'https://customer-assets.emergentagent.com/job_cosmic-dental/artifacts/sa29908g_Screenshot_20251211-000027%20%281%29.png',
    'https://customer-assets.emergentagent.com/job_cosmic-dental/artifacts/nbek809k_Screenshot_20251211-000203.png',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09'
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919447892635';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919447892635', '_blank');
  };

  return (
    <div className="cosmic-dental">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="cosmic-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="url(#gradient)" />
                <path d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10ZM20 26C16.7 26 14 23.3 14 20C14 16.7 16.7 14 20 14C23.3 14 26 16.7 26 20C26 23.3 23.3 26 20 26Z" fill="white"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">COSMIC</h1>
              <p className="text-xs text-cyan-600">Multispeciality Dental Clinic</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleCall} variant="outline" size="sm" className="hover:bg-cyan-50 hover:border-cyan-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Call
            </Button>
            <Button onClick={handleWhatsApp} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-animate id="hero-text">
              <div className={`transition-all duration-1000 ${isVisible['hero-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-cyan-200 mb-4">
                  <span className="text-cyan-600 font-semibold text-sm">Since 2005 • 19+ Years of Excellence</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Smile,
                  <br />
                  <span className="cosmic-gradient-text">Our Passion</span>
                </h1>
                <p className="text-xl text-gray-600 font-medium">
                  നിങ്ങളുടെ പുഞ്ചിരി, ഞങ്ങളുടെ ആവേശം
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience world-class dental care with cutting-edge technology and personalized treatment at Poovar's most trusted dental clinic.
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">4.8</span>
                  <span className="text-gray-500">(26 Google Reviews)</span>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button onClick={handleCall} size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg transition-all hover:scale-105">
                    <Phone className="w-5 h-5 mr-2" />
                    +91 9447892635
                  </Button>
                  <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg transition-all hover:scale-105">
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative" data-animate id="hero-image">
              <div className={`transition-all duration-1000 delay-300 ${isVisible['hero-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1643660526741-094639fbe53a"
                    alt="Modern Dental Clinic"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white fill-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">1000+</p>
                        <p className="text-sm text-gray-600">Happy Patients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-white" data-animate id="doctor-section">
        <div className="container mx-auto px-4">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible['doctor-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_cosmic-dental/artifacts/zxc10fp2_Screenshot_20251211-114738.png"
                alt="Dr. Subhash I S"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
                <span className="text-cyan-600 font-semibold text-sm">Meet Our Chief Dental Surgeon</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Dr. Subhash I S
                <br />
                <span className="text-cyan-600">ഡോ. സുഭാഷ് ഐ എസ്</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BDS, Dph (Chief Dental Surgeon)
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over 19 years of excellence in dentistry, Dr. Subhash I S leads our team of expert dental professionals. Specializing in advanced dental procedures, he has transformed thousands of smiles with his expertise in root canal treatments, cosmetic dentistry, and comprehensive oral care.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card className="p-4 border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
                  <p className="text-3xl font-bold text-cyan-600">19+</p>
                  <p className="text-gray-600">Years Experience</p>
                </Card>
                <Card className="p-4 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                  <p className="text-3xl font-bold text-blue-600">1000+</p>
                  <p className="text-gray-600">Successful Treatments</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50" data-animate id="services-section">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['services-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white rounded-full border border-cyan-200 mb-4">
              <span className="text-cyan-600 font-semibold text-sm">Our Specialities</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dental Services
              <br />
              <span className="text-cyan-600">സമഗ്ര ദന്ത സേവനങ്ങൾ</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine check-ups to advanced procedures, we offer complete dental care under one roof.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-cyan-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-sm text-cyan-600">{service.nameML}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white" data-animate id="reviews-section">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['reviews-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-4">
              <span className="text-cyan-600 font-semibold text-sm">Patient Testimonials</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
              <br />
              <span className="text-cyan-600">ഞങ്ങളുടെ രോഗികൾ പറയുന്നത്</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <Card className="p-8 md:p-12 shadow-xl bg-gradient-to-br from-white to-cyan-50">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                "{reviews[activeReview].text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{reviews[activeReview].name}</p>
                  <p className="text-sm text-gray-500">{reviews[activeReview].time}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={prevReview}
                    variant="outline"
                    size="icon"
                    className="hover:bg-cyan-50 hover:border-cyan-400 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={nextReview}
                    variant="outline"
                    size="icon"
                    className="hover:bg-cyan-50 hover:border-cyan-400 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
            <div className="text-center mt-6">
              <div className="flex justify-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeReview ? 'bg-cyan-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50" data-animate id="gallery-section">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['gallery-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-4 py-2 bg-white rounded-full border border-cyan-200 mb-4">
              <span className="text-cyan-600 font-semibold text-sm">Our Clinic</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              State-of-the-Art Facility
              <br />
              <span className="text-cyan-600">അത്യാധുനിക സൗകര്യങ്ങൾ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Clinic ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div data-animate id="hours-section">
              <Card className={`p-8 shadow-xl h-full transition-all duration-1000 ${isVisible['hours-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                    <p className="text-cyan-600">പ്രവൃത്തി സമയം</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { day: 'Monday', dayML: 'തിങ്കൾ', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Tuesday', dayML: 'ചൊവ്വ', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Wednesday', dayML: 'ബുധൻ', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Thursday', dayML: 'വ്യാഴം', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Friday', dayML: 'വെള്ളി', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', dayML: 'ശനി', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Sunday', dayML: 'ഞായർ', hours: 'Closed', closed: true }
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${schedule.closed ? 'bg-gray-100' : 'bg-cyan-50'}`}
                    >
                      <div>
                        <span className="font-semibold text-gray-900">{schedule.day}</span>
                        <span className="text-sm text-gray-600 ml-2">({schedule.dayML})</span>
                      </div>
                      <span className={`font-medium ${schedule.closed ? 'text-gray-500' : 'text-cyan-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Location */}
            <div data-animate id="location-section">
              <Card className={`p-8 shadow-xl h-full transition-all duration-1000 ${isVisible['location-section'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Visit Us</h3>
                    <p className="text-cyan-600">ഞങ്ങളെ സന്ദർശിക്കൂ</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Near Anithara Hospital, Poovar,<br />
                    Kerala 695525<br />
                    839C+G6 Poovar, Kerala
                  </p>
                  <div className="rounded-xl overflow-hidden h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8567!2d77.07089!3d8.31876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTknMDcuNSJOIDc3wrAwNCcxNS4yIkU!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cosmic Dental Clinic Location"
                    ></iframe>
                  </div>
                  <Button
                    onClick={() => window.open('https://maps.app.goo.gl/m3JkCgkEWrA0se9cc', '_blank')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for a Brighter Smile?
          </h2>
          <p className="text-xl text-white/90 mb-4">
            ശോഭയുള്ള പുഞ്ചിരിക്ക് തയ്യാറാണോ?
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience world-class dental care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={handleCall} size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg transition-all hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button onClick={handleWhatsApp} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg transition-all hover:scale-105">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">COSMIC Multispeciality Dental Clinic</h3>
              <p className="text-gray-400 mb-4">കോസ്മിക് മൾട്ടിസ്‌പെഷ്യാലിറ്റി ഡെൻ്റൽ ക്ലിനിക്</p>
              <p className="text-gray-400">Your trusted dental care partner since 2005</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 9447892635
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Near Anithara Hospital, Poovar, Kerala 695525
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-cyan-400 cursor-pointer transition-colors">Services</p>
                <p className="hover:text-cyan-400 cursor-pointer transition-colors">About Us</p>
                <p className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 COSMIC Multispeciality Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};