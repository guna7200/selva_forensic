import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Users, Shield, Gavel, User, Hospital, Building, CheckCircle2, 
  HelpCircle, Sparkles, FileText, Activity
} from 'lucide-react';

const Services = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(category || 'death-review');

  useEffect(() => {
    const targetId = category || 'death-review';
    setActiveCategory(targetId);
    
    // Smooth scroll to the target category section without using '#' in URL
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, [category]);

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    navigate(`/services/${id}`);
  };

  const categories = [
    { id: 'hospitals', title: 'Hospitals & Doctors', icon: Hospital, badge: 'Category I' },
    { id: 'death-review', title: 'Independent Forensic Death Review & Reconstruction', icon: User, badge: 'Category II' },
    { id: 'insurance', title: 'Services to Insurance Companies', icon: Shield, badge: 'Category III' },
    { id: 'lab-reports', title: 'Medical & Forensic Lab Reports Review', icon: Activity, badge: 'Category IV' },
    { id: 'lawyers', title: 'Services to Lawyers', icon: Gavel, badge: 'Category V' },
    { id: 'corporates', title: 'Services to Corporates', icon: Building, badge: 'Category VI' },
  ];

  return (
    <div className="space-y-16 pb-20 bg-[#082f49] text-slate-100">
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#082f49]/95 border-2 border-sky-300 text-sky-200 text-sm font-black uppercase tracking-wider shadow-2xl">
            Specialized Forensic & Medico-Legal Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Comprehensive Services Offered
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#082f49]/70 p-4 rounded-2xl border border-sky-300/30">
            From independent death reconstruction and insurance claim verification to comprehensive forensic lab report reviews, legal cross-examination preparation, and hospital medicolegal documentation.
          </p>
        </div>
      </section>

      {/* Category Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky top-20 z-30 bg-[#082f49]/95 backdrop-blur-md py-3 rounded-2xl border-2 border-[#0284c7] shadow-2xl">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-lg shadow-[#0284c7]/40 border-2 border-sky-300'
                    : 'bg-[#0c4a6e] text-slate-100 hover:bg-[#0284c7] hover:text-white border border-[#0284c7]/30'
                }`}
              >
                <IconComp size={18} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Detailed Services Content Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* I - Hospitals & Doctors */}
        <div id="hospitals" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0284c7]/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <Hospital size={26} />
              </div>
              <div>
                <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category I</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Hospitals & Doctors</h2>
              </div>
            </div>
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-extrabold text-sm shadow-lg">
              Consult for Hospital/MLC
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "1. Road Traffic Accidents",
              "2. Suspected Poisoning/Drugs",
              "3. Sexual Assault",
              "4. Assault with Disputed history",
              "5. Child Abuse",
              "6. Alleged medical negligence",
              "7. Custodial injury/Death",
              "8. Death after alleged poisoning",
              "9. Death after hospital admission following trauma",
              "10. Sudden / unexplained deaths",
              "11. Brought dead patients",
              "12. Domestic / Industrial Accidents"
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Prominent Retainer Package Callout Banner */}
          <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-amber-500/20 via-[#0284c7]/30 to-amber-500/20 border-2 border-amber-400/80 shadow-2xl flex items-center justify-center gap-3 text-center">
            <Sparkles className="text-amber-300 shrink-0" size={28} />
            <h3 className="text-amber-200 font-black text-lg sm:text-2xl tracking-wide uppercase drop-shadow">
              RETAINER PACKAGES ARE AVAILABLE FOR BIG CORPORATE HOSPITALS
            </h3>
          </div>
        </div>

        {/* II - Independent Forensic Death Review and Reconstruction */}
        <div id="death-review" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0284c7]/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <User size={26} />
              </div>
              <div>
                <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category II</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Independent Forensic Death Review and Reconstruction</h2>
              </div>
            </div>
            <Link to="/contact" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white font-extrabold text-sm shadow-lg">
              Consult for Death Review
            </Link>
          </div>

          {/* Role Clarification Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#082f49]/80 border-2 border-sky-400/40 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-100 text-base font-semibold">
            <div className="p-3.5 rounded-xl bg-[#0c4a6e] border border-sky-300/30">
              <span className="text-sky-300 font-bold block text-lg mb-1">Police :-</span>
              Investigate the Death
            </div>
            <div className="p-3.5 rounded-xl bg-[#0c4a6e] border border-sky-300/30">
              <span className="text-sky-300 font-bold block text-lg mb-1">Forensic Doctor :-</span>
              Interpret the Medical Evidence
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "1. Postmortem Review",
                "2. Injury Reconstruction",
                "3. Toxicology & other Report interpretation",
                "4. Cause of death Review",
                "5. Clinical - Autopsy correlation",
                "6. Crime Scene - Autopsy Correlation",
                "7. Postmortem interval Assessment",
                "8. Identification consultation",
                "9. Complex / cold case medical review",
                "10. Independent expert opinion"
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                  <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Category Image Feature Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative h-80 lg:h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                alt="Independent Autopsy & Post-Mortem Peer Review" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#082f49]/80 p-4 rounded-xl border border-sky-300/30 backdrop-blur-sm">
                  <h4 className="text-white font-black text-sm font-heading">Scientific Death Reconstruction</h4>
                  <p className="text-sky-200 text-xs font-semibold mt-1">In-depth objective evaluation of crime scene, clinical, and post-mortem findings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* III - Services to Insurance Companies */}
        <div id="insurance" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0284c7]/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <Shield size={26} />
              </div>
              <div>
                <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category III</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Service to Insurance Companies</h2>
              </div>
            </div>
          </div>

          {/* Role Clarification Callout */}
          <div className="p-5 rounded-2xl bg-[#082f49]/80 border-2 border-sky-400/40 space-y-3 text-slate-100 text-base leading-relaxed font-semibold">
            <p className="border-b border-[#0284c7]/30 pb-2">
              <strong className="text-sky-300 font-bold">Insurance investigator –</strong> establishes the facts surrounding the claim.
            </p>
            <p>
              <strong className="text-sky-300 font-bold">Forensic Doctor –</strong> Interprets the medical and forensic evidence and answers whether the evidence supports the claimed medical circumstances.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Category Image Feature Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative h-80 lg:h-full min-h-[300px] order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                alt="Insurance Claim Medical Investigation" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#082f49]/80 p-4 rounded-xl border border-sky-300/30 backdrop-blur-sm">
                  <h4 className="text-white font-black text-sm font-heading">Insurance Claim Verification</h4>
                  <p className="text-sky-200 text-xs font-semibold mt-1">Establishing causation and medical truth in high-value disputed claims.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
              {[
                "1. Accidental death claims",
                "2. Natural death Vs Accidental death",
                "3. Suspicious death claims",
                "4. Early-policy death claims",
                "5. Toxicology / Poison related claims",
                "6. Medical Treatment and hospitalisation claims",
                "7. Pre-existing disease and causation",
                "8. Hospital Record verification",
                "9. Motor Accident claim",
                "10. Claim Fraud & Inconsistencies"
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                  <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IV - Medical & Forensic Lab Reports Review */}
        <div id="lab-reports" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0284c7]/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <Activity size={26} />
              </div>
              <div>
                <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category IV</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Medical & Forensic Lab Reports Review</h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "1. Toxicology Report Interpretation",
                "2. Correlation with Autopsy findings",
                "3. Correlation with clinical records",
                "4. Viscera Report",
                "5. Histopathology Report",
                "6. Biochemistry reports",
                "7. DNA - Report",
                "8. Radiology Reports",
                "9. Microbiology Reports",
                "10. Other FSL Reports beyond Toxicology"
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                  <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Category Image Feature Card */}
            <div className="lg:col-span-4 rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative h-80 lg:h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80" 
                alt="Toxicology & FSL Forensic Lab Analysis" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-transparent flex items-end p-6">
                <div className="bg-[#082f49]/80 p-4 rounded-xl border border-sky-300/30 backdrop-blur-sm">
                  <h4 className="text-white font-black text-sm font-heading">Forensic Lab Reports Review</h4>
                  <p className="text-sky-200 text-xs font-semibold mt-1">In-depth analysis of Toxicology, Viscera, Histopathology, and DNA findings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* V - Services to Lawyers */}
        <div id="lawyers" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#0284c7]/30 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <Gavel size={26} />
              </div>
              <div>
                <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category V</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Services to Lawyers</h2>
              </div>
            </div>
            <span className="text-sm text-sky-100 font-bold">Criminal, Writ, Human Rights & Insurance Lawyers</span>
          </div>

          <div className="space-y-6">
            <div className="p-5 rounded-xl bg-[#082f49]/60 border border-sky-300/30 text-base text-slate-100">
              <strong>How to Challenge cases Medically & Scientifically and What can be defended.</strong>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm text-slate-200">
                <div className="p-3 rounded-lg bg-[#082f49] border border-[#0284c7]/30 font-medium">• What happened medically?</div>
                <div className="p-3 rounded-lg bg-[#082f49] border border-[#0284c7]/30 font-medium">• What was documented?</div>
                <div className="p-3 rounded-lg bg-[#082f49] border border-[#0284c7]/30 font-medium">• What is defensible?</div>
                <div className="p-3 rounded-lg bg-[#082f49] border border-[#0284c7]/30 font-medium">• What remains unexplained?</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "1. Criminal Litigation",
                "2. Insurance Disputes",
                "3. Personal Injury litigation",
                "4. Motor Accident matters",
                "5. Compensation / disability disputes",
                "6. Corporate litigation",
                "7. Medical Negligence cases"
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                  <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VI - Services to Corporates */}
        <div id="corporates" className="scroll-mt-40 p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="border-b border-[#0284c7]/30 pb-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <Building size={26} />
            </div>
            <div>
              <span className="text-sm font-black text-sky-300 uppercase tracking-widest">Category VI</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">Services to Corporates</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "1. Medical disputes",
              "2. Independent medical opinions",
              "3. Workplace fatalities",
              "4. Serious workplace injuries",
              "5. Forensic Medical Consultation for Sexual Assault in workplace",
              "6. Employee death - Death Investigation"
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-base sm:text-lg font-bold text-white shadow-md hover:border-sky-400 transition-all">
                <CheckCircle2 size={20} className="text-sky-300 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Services;
