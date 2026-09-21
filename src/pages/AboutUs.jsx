import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Eye, Target, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="space-y-20 pb-20 bg-[#082f49] text-slate-100">
      {/* High Visibility Hero Header Banner with Bright Background Image */}
      <section className="relative border-b-4 border-[#0284c7] py-20 sm:py-28 overflow-hidden">
        {/* Bright Forensic Image (Opacity 90%) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        {/* Hospital Light Blue Overlay */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-brightness-75 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-[#082f49]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#082f49]/95 border-2 border-sky-300 text-sky-200 text-xs font-black uppercase tracking-wider shadow-2xl">
            <ShieldCheck size={18} /> About Selvas Forensic Medical Centre
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Pioneering Medico-Legal & Forensic Excellence
          </h1>
          <p className="text-white text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#082f49]/70 p-4 rounded-2xl border border-sky-300/30">
            Delivering nation-wide online confidential consultations, independent medical evidence reconstruction, and expert opinion across complex legal and clinical cases.
          </p>
        </div>
      </section>

      {/* Main Content & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
              Bridging Medicine, Forensic Science & The Judicial System
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              At <strong>Selvas Forensic Medical Centre</strong>, we specialize in reviewing complex medico-legal cases where medical records, post-mortem findings, and toxicology data form the bedrock of legal decisions.
            </p>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              When sudden death, critical illness claims, or alleged medical negligence occur, interpretation of medical records is paramount. Our objective forensic reconstruction clarifies what happened medically, what was documented, what is legally defensible, and what remains unexplained.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0c4a6e] border border-[#0284c7]/40 flex items-start gap-3 shadow-md">
                <Target className="text-sky-300 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white text-sm font-bold font-heading">Our Mission</h4>
                  <p className="text-slate-100 text-xs mt-1">To provide unbiased, evidence-based forensic opinions that withstand legal scrutiny.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-[#0c4a6e] border border-[#0284c7]/40 flex items-start gap-3 shadow-md">
                <Eye className="text-sky-300 shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-white text-sm font-bold font-heading">Our Vision</h4>
                  <p className="text-slate-100 text-xs mt-1">To be India's premier online forensic consultation centre for families, lawyers, and insurers.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Forensic Image Gallery Column with Unique Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#0284c7] shadow-xl h-52">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="Medical Chart Forensic Review"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#0284c7] shadow-xl h-44">
                <img
                  src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80"
                  alt="Toxicology Laboratory Microscope"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 sm:pt-8">
              <div className="rounded-2xl overflow-hidden border border-[#0284c7] shadow-xl h-44">
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80"
                  alt="Legal Case Evidence Gavel"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#0284c7] shadow-xl h-52">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                  alt="Forensic DNA Analysis"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-[#0c4a6e]/70 py-16 border-y-4 border-[#0284c7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-300">Our Core Pillars</h2>
            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">Why Stakeholders Rely On Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#082f49] border border-[#0284c7]/40 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#0c4a6e] text-sky-300 flex items-center justify-center font-black">1</div>
              <h4 className="text-lg font-bold text-white font-heading">Strict Confidentiality</h4>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                All case files, digital records, and consultations are maintained under high security and client confidentiality standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#082f49] border border-[#0284c7]/40 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#0c4a6e] text-sky-300 flex items-center justify-center font-bold">2</div>
              <h4 className="text-lg font-bold text-white font-heading">Independent Peer Review</h4>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                We independently analyze inconsistencies between clinical records, scene information, toxicology, and autopsy findings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#082f49] border border-[#0284c7]/40 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-[#0c4a6e] text-sky-300 flex items-center justify-center font-bold">3</div>
              <h4 className="text-lg font-bold text-white font-heading">Trial & Case Readiness</h4>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                Our opinions empower lawyers with effective cross-examination strategies, expert briefings, and rebuttal documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-[#082f49] via-[#0284c7] to-[#0ea5e9] p-10 rounded-3xl border border-sky-300/40 space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Need Expert Opinion on a Disputed Medico-Legal Case?
          </h3>
          <p className="text-sky-100 text-sm max-w-2xl mx-auto font-medium">
            Get nationwide online consultation and case evaluation. We review records from anywhere in India.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-sky-50 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl transition-all"
            >
              <span>Consult Confidential Case</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
