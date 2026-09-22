import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, FileSearch, Scale, FileText, Skull, Activity, 
  HeartPulse, UserCheck, Building2, Gavel, CheckCircle2, ArrowRight,
  PhoneCall, ShieldAlert, Award
} from 'lucide-react';

const Home = () => {
  const coreServices = [
    {
      num: "01",
      title: "Consultation on Medico-Legal Matters",
      desc: "Expert guidance across all complex medico-legal situations, injury analysis, and legal medical documentation.",
      icon: Scale,
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "02",
      title: "Expert Opinion / Second Opinion",
      desc: "Independent, objective second opinion on all critical medico-legal issues and medical reports.",
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "03",
      title: "Medical Negligence Review & Screening",
      desc: "Thorough review of clinical charts and hospital protocols to establish or counter medical malpractice claims.",
      icon: HeartPulse,
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "04",
      title: "Forensic Death Investigation (Confidential)",
      desc: "Comprehensive online death investigation analyzing medical records to confirm cause & manner of death.",
      icon: Skull,
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "05",
      title: "Post-Mortem Report Analysis",
      desc: "In-depth scientific review of autopsy papers, inquest reports, and histopathology findings.",
      icon: FileSearch,
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "06",
      title: "Toxicology Opinion",
      desc: "Expert analysis of chemical, poison, drug overdose, and viscera toxicology laboratory findings.",
      icon: Activity,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "07",
      title: "Sexual Offence Forensic Consultation",
      desc: "Sensitive, confidential forensic evaluation of medical records and evidence in sexual assault cases.",
      icon: ShieldAlert,
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "08",
      title: "Medical Negligence & Record Analysis",
      desc: "Detailed forensic auditing of hospital charts, treatment logs, and medical records.",
      icon: FileText,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "09",
      title: "Insurance Claims Medical Opinion",
      desc: "Medical foundation evaluation for disputed life, accidental, and suspicious death insurance claims.",
      icon: Award,
      img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
    },
    {
      num: "10",
      title: "Case Related Expert Consultation",
      desc: "Expert assistance for legal trials, case strategy, cross-examination prep, and expert testimony rebuttal.",
      icon: Gavel,
      img: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const targetAudiences = [
    { title: "Forensic Death Review", desc: "Clarity on sudden death, cause/manner of death, and independent reconstruction.", icon: UserCheck, link: "/services/death-review", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80" },
    { title: "Insurance Companies", desc: "Independent medical evidence reconstruction for high-value & suspicious claims.", icon: ShieldCheck, link: "/services/insurance", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" },
    { title: "Medical & Forensic Lab Reports", desc: "Toxicology, viscera, DNA, histopathology and radiology report reviews.", icon: Activity, link: "/services/lab-reports", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80" },
    { title: "Doctors & Hospitals", desc: "MLC procedures, RTA, poisoning, injury documentation and negligence defense.", icon: Building2, link: "/services/hospitals", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80" },
    { title: "Lawyers", desc: "Scientific evidence analysis, cross-examination prep, trial assistance & expert rebuttal.", icon: Gavel, link: "/services/lawyers", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=600&q=80" },
    { title: "Corporates", desc: "Workplace fatalities, serious injuries, and workplace safety compliance.", icon: HeartPulse, link: "/services/corporates", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="space-y-24 pb-20 bg-[#082f49] text-slate-100">
      {/* HERO BANNER SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b-4 border-[#0284c7]">
        {/* Bright Forensic Science Background Image (High Visibility) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 opacity-90 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        {/* Hospital Light Blue Subtle Overlay (Reduced Opacity for High Visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082f49]/60 via-[#0c4a6e]/40 to-[#0284c7]/40 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-[#082f49]/30 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-6">
          
          {/* BADGE ABOVE LOGO AS REQUESTED */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c4a6e]/95 border-2 border-sky-300 text-sky-100 text-xs sm:text-sm font-black tracking-wider uppercase shadow-2xl backdrop-blur-md">
            <ShieldCheck size={18} className="text-sky-300" />
            <span>Online Forensic Medical Consultation and Expert Opinion Across India</span>
          </div>

          {/* Prominent Circular Emblem Logo */}
          <div className="flex justify-center my-2">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white p-3 border-4 border-[#0284c7] shadow-2xl shadow-black/80 transform hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img src="/logo.jpg" alt="Selvas Forensic Medical Centre Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>

          {/* BRAND TITLE WITH FORENSIC ON SECOND LINE & SLIGHTLY SMALLER SIZE */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight font-heading leading-tight max-w-5xl mx-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            SELVAS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-300 text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
              FORENSIC MEDICAL CENTRE
            </span>
          </h1>

          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#082f49]/70 p-4 rounded-2xl border border-sky-300/30 backdrop-blur-sm">
            Independent, authoritative, scientific reconstruction of medical evidence, post-mortem reviews, medical negligence screening, and medico-legal case consultations across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-black text-base shadow-2xl shadow-black/80 border border-sky-300/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <PhoneCall size={20} />
              Book Confidential Consultation
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#0c4a6e]/90 hover:bg-[#0284c7] text-white font-extrabold text-base border-2 border-sky-300 transition-all duration-200 shadow-2xl"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10 border-t-2 border-[#0284c7]">
            <div className="p-4 rounded-xl bg-[#082f49]/95 border-2 border-sky-300/30 text-center shadow-2xl">
              <div className="text-sky-300 text-2xl font-black font-heading">100%</div>
              <div className="text-white text-xs font-black mt-1">Confidential & Online</div>
            </div>
            <div className="p-4 rounded-xl bg-[#082f49]/95 border-2 border-sky-300/30 text-center shadow-2xl">
              <div className="text-sky-300 text-2xl font-black font-heading">All India</div>
              <div className="text-white text-xs font-black mt-1">Coverage & Online Review</div>
            </div>
            <div className="p-4 rounded-xl bg-[#082f49]/95 border-2 border-sky-300/30 text-center shadow-2xl">
              <div className="text-sky-300 text-2xl font-black font-heading">Scientific</div>
              <div className="text-white text-xs font-black mt-1">Autopsy & Record Reconstruction</div>
            </div>
            <div className="p-4 rounded-xl bg-[#082f49]/95 border-2 border-sky-300/30 text-center shadow-2xl">
              <div className="text-sky-300 text-2xl font-black font-heading">Case Ready</div>
              <div className="text-white text-xs font-black mt-1">Expert Medico-Legal Strategy</div>
            </div>
          </div>
        </div>
      </section>



      {/* Target Audiences Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c4a6e] border border-sky-300/40 text-sky-300 text-xs font-black uppercase tracking-wider">
            Tailored Forensic Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Who We Serve Across India
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Objective, scientific medico-legal consulting tailored to the specific evidentiary needs of each stakeholder group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudiences.map((aud, idx) => {
            const IconComponent = aud.icon;
            return (
              <div key={idx} className="group rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 overflow-hidden shadow-xl hover:border-sky-400 transition-all duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={aud.img} alt={aud.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shadow-lg">
                    <IconComponent size={24} />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
                      {aud.title}
                    </h3>
                    <p className="text-slate-100 text-xs sm:text-sm leading-relaxed font-medium">
                      {aud.desc}
                    </p>
                  </div>
                  <Link
                    to={aud.link}
                    className="inline-flex items-center gap-2 text-sky-300 font-extrabold text-xs sm:text-sm group-hover:gap-3 transition-all pt-2"
                  >
                    <span>View Specialized Services</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CORE SERVICES 10 GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c4a6e] border border-sky-300/40 text-sky-300 text-xs font-black uppercase tracking-wider">
            10 Practice Areas
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-heading">
            Our Medico-Legal Services
          </h2>
          <p className="text-slate-100 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Comprehensive expert opinion, report review, and trial assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-[#0c4a6e]/90 border border-[#0284c7]/40 space-y-4 shadow-lg hover:border-sky-300 transition-all group">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#082f49] border border-sky-300/30 flex items-center justify-center text-sky-300 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <IconComp size={24} />
                  </div>
                  <span className="text-2xl font-black text-sky-300/40 font-heading">{service.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-heading leading-snug">{service.title}</h3>
                <p className="text-slate-100 text-xs leading-relaxed font-medium">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Home;
