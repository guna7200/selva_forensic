import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#082f49] border-t border-[#0ea5e9]/30 text-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white p-1 border-2 border-[#0284c7] shrink-0 flex items-center justify-center shadow-md">
                <img src="/logo.jpg" alt="SFMC Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <span className="font-heading text-xl font-black text-white tracking-wider block">SELVAS</span>
                <span className="text-[10px] text-sky-300 font-extrabold tracking-widest uppercase block">Forensic Medical Centre</span>
              </div>
            </div>
            <p className="text-xs text-sky-100 leading-relaxed font-medium">
              Online Confidential Consultation & Expert Opinion on all Medico-Legal matters, forensic death investigations, medical negligence screening, and post-mortem report reviews across India.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-200 bg-[#0c4a6e]/70 p-2.5 rounded-xl border border-sky-400/30 font-semibold">
              <ShieldCheck size={16} className="shrink-0 text-sky-300" />
              <span>100% Confidential & Independent Legal Analysis</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-heading tracking-wide border-b border-[#0ea5e9]/30 pb-2">Quick Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <Link to="/" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} className="text-sky-400" /> Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} className="text-sky-400" /> About Selvas Forensic
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} className="text-sky-400" /> All Services Offered
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} className="text-sky-400" /> Founder's Profile
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-300 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} className="text-sky-400" /> Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Client Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-heading tracking-wide border-b border-[#0ea5e9]/30 pb-2">Client Services</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link to="/services/death-review" className="hover:text-sky-300 transition-colors">• Independent Death Review</Link></li>
              <li><Link to="/services/insurance" className="hover:text-sky-300 transition-colors">• Insurance Claims Investigation</Link></li>
              <li><Link to="/services/lab-reports" className="hover:text-sky-300 transition-colors">• Medical & Forensic Lab Reports</Link></li>
              <li><Link to="/services/hospitals" className="hover:text-sky-300 transition-colors">• Hospitals & MLC Assistance</Link></li>
              <li><Link to="/services/lawyers" className="hover:text-sky-300 transition-colors">• Services to Lawyers</Link></li>
              <li><Link to="/services/corporates" className="hover:text-sky-300 transition-colors">• Services to Corporates</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 font-heading tracking-wide border-b border-[#0ea5e9]/30 pb-2">Reach Us</h4>
            <ul className="space-y-3 text-xs font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <span>Selvas Forensic Medical Centre, Online Case Review & Consultation Hub, Available Across India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-sky-400 shrink-0" />
                <a href="tel:+918122526282" className="hover:text-sky-300 transition-colors">+91 81225 26282</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-[#0ea5e9]/30 text-[11px] text-sky-100 leading-relaxed font-medium">
          <p className="mb-2">
            <span className="font-bold text-white">LEGAL DISCLAIMER:</span> Information provided by Selvas Forensic Medical Centre is intended strictly for expert opinion, case reconstruction, and medico-legal consultation purposes. Online consultations are conducted securely with strict confidentiality standards across India.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 text-sky-200">
            <div>
              © {new Date().getFullYear()} SELVAS FORENSIC MEDICAL CENTRE. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
