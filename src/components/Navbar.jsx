import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const serviceCategories = [
    { name: 'Forensic Death Review', path: '/services/death-review', desc: 'Postmortem review, injury reconstruction & cause of death' },
    { name: 'Insurance Companies', path: '/services/insurance', desc: 'Accidental, suspicious & early policy death claims' },
    { name: 'Medical & Forensic Lab Reports', path: '/services/lab-reports', desc: 'Toxicology, viscera, DNA & histopathology reports' },
    { name: 'Hospitals & Doctors', path: '/services/hospitals', desc: 'MLC procedures, RTA, poisoning & negligence' },
    { name: 'Services to Lawyers', path: '/services/lawyers', desc: 'Criminal, writ & cross-examination prep' },
    { name: 'Services to Corporates', path: '/services/corporates', desc: 'Workplace fatalities, injuries & sexual assault' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#082f49]/95 backdrop-blur-md border-b border-[#0ea5e9]/30">
      {/* Top Bar with Hospital Blue */}
      <div className="bg-gradient-to-r from-[#0c4a6e] via-[#0284c7] to-[#0369a1] text-white text-xs py-2 px-4 border-b border-[#38bdf8]/30 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          <div className="flex items-center gap-6 font-bold">
            <a href="tel:+918122526282" className="flex items-center gap-1.5 hover:text-sky-200 transition-colors">
              <Phone size={13} className="text-sky-300" />
              <span>+91 81225 26282</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with Increased Size */}
          <Link to="/" className="flex items-center gap-4 group py-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 border-2 border-[#0284c7] shadow-lg shadow-[#0ea5e9]/30 group-hover:scale-105 transition-transform duration-300 shrink-0 flex items-center justify-center">
              <img src="/logo.jpg" alt="SELVAS Forensic Medical Centre Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <div className="font-heading text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-sky-300 transition-colors leading-tight">
                SELVAS
              </div>
              <div className="text-[11px] sm:text-xs uppercase font-extrabold tracking-widest text-sky-300">
                Forensic Medical Centre
              </div>
              <div className="text-[9px] text-sky-100 font-semibold tracking-wide">
                Online Case Consultation & Expert Opinion
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm">
            <Link
              to="/"
              className={`transition-colors relative py-1 ${
                isActive('/') ? 'text-sky-300 border-b-2 border-sky-300' : 'text-slate-100 hover:text-sky-300'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`transition-colors relative py-1 ${
                isActive('/about') ? 'text-sky-300 border-b-2 border-sky-300' : 'text-slate-100 hover:text-sky-300'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative py-4"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-sky-300 border-b-2 border-sky-300' : 'text-slate-100 hover:text-sky-300'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-84 bg-[#082f49] border-2 border-[#0284c7] rounded-2xl shadow-2xl py-3 z-50 backdrop-blur-xl">
                  <div className="px-4 py-2 border-b border-[#0284c7]/40 mb-1">
                    <span className="text-xs font-black text-sky-300 uppercase tracking-wider">Practice Areas</span>
                  </div>
                  {serviceCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={cat.path}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 hover:bg-[#0c4a6e] transition-colors group"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-sky-300">{cat.name}</div>
                      <div className="text-[10px] text-sky-100/70 font-medium truncate">{cat.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/founder"
              className={`transition-colors relative py-1 ${
                isActive('/founder') ? 'text-sky-300 border-b-2 border-sky-300' : 'text-slate-100 hover:text-sky-300'
              }`}
            >
              Founder Profile
            </Link>

            <Link
              to="/contact"
              className={`transition-colors relative py-1 ${
                isActive('/contact') ? 'text-sky-300 border-b-2 border-sky-300' : 'text-slate-100 hover:text-sky-300'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs shadow-lg shadow-[#0ea5e9]/30 transition-all border border-sky-300/30 uppercase tracking-wider"
            >
              Consult Online
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#0c4a6e] text-slate-100 hover:text-white border border-[#0284c7]/40 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#082f49] border-b border-[#0ea5e9]/30 px-4 pt-2 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-slate-100 hover:bg-[#0284c7] hover:text-sky-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-slate-100 hover:bg-[#0284c7] hover:text-sky-200"
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-slate-100 hover:bg-[#0284c7] hover:text-sky-200"
          >
            Services
          </Link>
          <div className="pl-4 space-y-1">
            {serviceCategories.map((cat, idx) => (
              <Link
                key={idx}
                to={cat.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-1.5 text-xs font-semibold text-sky-100 hover:text-white"
              >
                • {cat.name}
              </Link>
            ))}
          </div>
          <Link
            to="/founder"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-slate-100 hover:bg-[#0284c7] hover:text-sky-200"
          >
            Founder
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-bold text-slate-100 hover:bg-[#0284c7] hover:text-sky-200"
          >
            Contact
          </Link>

          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-extrabold px-4 py-3 rounded-xl text-sm shadow-md"
            >
              Book Confidential Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
