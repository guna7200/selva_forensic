import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, GraduationCap, BookOpen, Scale, ShieldCheck, 
  CheckCircle2, ArrowRight, Quote, FileText, UserCheck, Stethoscope 
} from 'lucide-react';

const Founder = () => {
  return (
    <div className="space-y-16 pb-20 bg-[#082f49] text-slate-100">
      {/* High Visibility Hero Header Banner */}
      <section className="relative border-b-4 border-[#0284c7] py-20 sm:py-28 overflow-hidden text-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/50 backdrop-brightness-75 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-[#082f49]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#082f49]/95 border-2 border-sky-300 text-sky-200 text-xs sm:text-sm font-black uppercase tracking-wider shadow-2xl">
            <UserCheck size={18} /> Founder & Senior Expert Profile
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            DR. R. SELVAKUMAR, M.D.
          </h1>
          <p className="text-sky-300 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#082f49]/80 p-3 rounded-2xl border border-sky-300/30">
            Senior Forensic Medicine & Medico-Legal Expert
          </p>
        </div>
      </section>

      {/* Main Profile Content Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Intro Card with Quote */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white p-3 border-4 border-[#0284c7] shadow-2xl flex items-center justify-center shrink-0">
                <img src="/logo.jpg" alt="DR. R. SELVAKUMAR, M.D." className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">DR. R. SELVAKUMAR</h3>
                <p className="text-sm font-bold text-sky-300">M.B.B.S., M.D. (Forensic Medicine)</p>
                <p className="text-xs text-slate-300 font-semibold mt-1">30+ Years Medico-Legal Practice</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 rounded-2xl bg-[#082f49]/80 border-2 border-sky-400/40 relative">
                <Quote className="text-sky-400/40 absolute -top-3 -left-3" size={40} />
                <p className="text-lg sm:text-xl font-black text-white italic leading-relaxed relative z-10">
                  "An expert’s responsibility is to present scientific facts objectively, clearly and without bias."
                </p>
              </div>

              <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
                Dr. Selvakumar’s professional career brings together <strong>forensic medicine, medical education, scientific investigation and the judicial process</strong>, providing an experienced and independent perspective in complex medico-legal matters.
              </p>
            </div>

          </div>
        </div>

        {/* High Quality Forensic Image Feature Banner 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative group h-64 sm:h-72">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80" 
              alt="Medicolegal Examination & Documentation" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-[#082f49]/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-black text-sky-300 uppercase tracking-widest block">Academic & Clinical Rigor</span>
                <h4 className="text-xl font-black text-white font-heading">27+ Years Academic Leadership</h4>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative group h-64 sm:h-72">
            <img 
              src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1000&q=80" 
              alt="Judicial & Legal Court Witnessing" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-[#082f49]/40 to-transparent flex items-end p-6">
              <div>
                <span className="text-xs font-black text-sky-300 uppercase tracking-widest block">Judicial Court Testimony</span>
                <h4 className="text-xl font-black text-white font-heading">Expert Witness in Hundreds of Cases</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications & Teaching Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Educational Qualifications */}
          <div className="p-8 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <GraduationCap size={26} />
              </div>
              <h2 className="text-2xl font-black text-white font-heading">Educational Qualifications</h2>
            </div>

            <ul className="space-y-4">
              <li className="p-4 rounded-xl bg-[#082f49]/70 border border-sky-300/30 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-black text-lg block">M.B.B.S.</span>
                  <span className="text-slate-200 text-sm font-semibold">Bangalore University</span>
                </div>
              </li>
              <li className="p-4 rounded-xl bg-[#082f49]/70 border border-sky-300/30 flex items-start gap-3">
                <CheckCircle2 size={20} className="text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-black text-lg block">M.D. (Forensic Medicine)</span>
                  <span className="text-slate-200 text-sm font-semibold">The Tamil Nadu Dr. M.G.R. Medical University</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Teaching & Academic Experience */}
          <div className="p-8 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
                <BookOpen size={26} />
              </div>
              <h2 className="text-2xl font-black text-white font-heading">Teaching & Academic Experience</h2>
            </div>

            <p className="text-slate-100 text-sm sm:text-base font-semibold leading-relaxed">
              Dr. R. Selvakumar has <strong>27 years of undergraduate teaching experience</strong> and <strong>20 years of postgraduate teaching experience</strong> in Forensic Medicine.
            </p>

            <div className="space-y-2">
              <span className="text-xs font-black text-sky-300 uppercase tracking-widest block">Served as Guest Faculty at:</span>
              <ul className="space-y-2 text-sm sm:text-base font-bold text-white">
                <li className="p-3 rounded-lg bg-[#082f49]/60 border border-[#0284c7]/30 flex justify-between items-center">
                  <span>Tamil Nadu Police Academy</span>
                  <span className="text-sky-300 font-extrabold">22 years</span>
                </li>
                <li className="p-3 rounded-lg bg-[#082f49]/60 border border-[#0284c7]/30 flex justify-between items-center">
                  <span>Tamil Nadu State Judicial Academy</span>
                  <span className="text-sky-300 font-extrabold">20 years</span>
                </li>
                <li className="p-3 rounded-lg bg-[#082f49]/60 border border-[#0284c7]/30 flex justify-between items-center">
                  <span>University of Madras</span>
                  <span className="text-sky-300 font-extrabold">15 years</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Academic Research & Publications */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <FileText size={26} />
            </div>
            <h2 className="text-2xl font-black text-white font-heading">Research & Academic Leadership</h2>
          </div>
          <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
            He has guided M.D. postgraduate dissertations and research, served as an <strong>External Examiner and Ph.D. Guide in Forensic Medicine</strong>, and published articles in national and international journals. He has presented lectures and scientific papers at numerous State and National conferences, CME programmes and academic meetings.
          </p>
        </div>

        {/* Medico-Legal Experience & Case Track Record */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <Scale size={26} />
            </div>
            <h2 className="text-3xl font-black text-white font-heading">Medico-Legal Experience</h2>
          </div>

          <div className="space-y-6 text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
            <div className="p-6 rounded-2xl bg-[#082f49]/70 border border-sky-300/30 space-y-3">
              <p>
                With <strong>30 years of experience in Forensic Medicine</strong>, Dr. Selvakumar has conducted <strong>more than 5,000 post-mortem examinations</strong>, covering a wide range of cases including <strong>homicides, suicides, vehicular, industrial and domestic accidents, dowry deaths and deaths involving suspected medical negligence</strong>.
              </p>
            </div>

            <p>
              He has worked extensively with investigating agencies in criminal cases, providing forensic-medical expertise from the <strong>initial investigation through the judicial process</strong>. He has appeared as an <strong>Expert Witness in hundreds of criminal cases</strong>, presenting scientific medical evidence with an emphasis on objectivity, neutrality and clarity.
            </p>

            <p>
              He has also provided expert opinions in numerous <strong>medical-negligence cases</strong> referred by Government authorities, doctors and hospitals.
            </p>
          </div>
        </div>

        {/* High Quality Forensic Lab & Autopsy Image Banner 2 */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#0284c7]/50 shadow-2xl relative h-64 sm:h-80">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80" 
            alt="Forensic Evidence Analysis & Laboratory Reconstruction" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082f49]/95 via-[#082f49]/60 to-transparent flex items-center p-8 sm:p-12">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-black text-sky-300 uppercase tracking-widest block">Scientific Excellence</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">Comprehensive Post-Mortem & Evidence Peer Review</h3>
              <p className="text-sky-100 text-xs sm:text-sm font-semibold">
                Unbiased, evidence-grounded evaluation of autopsy papers, inquest documents, histology, and toxicological findings.
              </p>
            </div>
          </div>
        </div>

        {/* Sexual-Assault Medico-Legal Expertise */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <Stethoscope size={26} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">Sexual-Assault Medico-Legal Expertise</h2>
          </div>
          <p className="text-slate-100 text-base sm:text-lg leading-relaxed font-medium">
            Dr. Selvakumar has extensive experience in sexual-assault cases and has <strong>trained Obstetricians in the medico-legal examination and documentation of sexual-assault victims</strong>, in accordance with the relevant Government of Tamil Nadu guidelines and instructions.
          </p>
        </div>

        {/* Awards & Recognitions */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <Award size={26} />
            </div>
            <h2 className="text-3xl font-black text-white font-heading">Awards & Recognitions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { year: "2018", title: "Best Performing Doctor", org: "Government of Tamil Nadu" },
              { year: "2019", title: "Lifetime Achievement Award", org: "Indian Medicolegal & Ethics Association" },
              { year: "2024", title: "Lifetime Achievement Award", org: "South Indian Medicolegal Society" },
              { year: "2025", title: "Lifetime Achievement Award", org: "Indian Academy of Forensic Medicine" },
            ].map((award, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#082f49]/80 border-2 border-amber-400/50 flex items-center gap-4 shadow-lg">
                <Award className="text-amber-300 shrink-0" size={32} />
                <div>
                  <span className="text-amber-300 text-xs font-black uppercase tracking-wider block">{award.year}</span>
                  <h4 className="text-white font-black text-base sm:text-lg">{award.title}</h4>
                  <p className="text-slate-200 text-xs font-semibold">{award.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Areas of Expert Consultation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0c4a6e]/90 border-2 border-[#0284c7]/40 space-y-8 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#0284c7]/30 pb-4">
            <div className="w-12 h-12 rounded-xl bg-[#0284c7] border border-sky-300/40 flex items-center justify-center text-white shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white font-heading">Expert Consultation Areas</h2>
              <p className="text-sky-300 text-sm font-semibold">Specialized domains of medico-legal analysis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Forensic examination and interpretation of death and injuries",
              "Post-mortem examination and review",
              "Criminal and medico-legal cases",
              "Sexual-assault cases",
              "Medical-negligence assessment",
              "Expert medical opinions and reports",
              "Court testimony and litigation support",
              "Age estimation",
              "Forensic evidence interpretation",
              "Professional training and medico-legal education"
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#082f49]/60 border border-[#0284c7]/30 flex items-center gap-3 text-sm sm:text-base font-bold text-white shadow-md hover:border-sky-400 transition-all">
                <CheckCircle2 size={18} className="text-sky-300 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#082f49] border-2 border-sky-300/40 text-center space-y-6 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Need Expert Medico-Legal Opinion or Case Review?
          </h3>
          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Consult directly with Dr. R. Selvakumar for confidential online case evaluations, expert witness support, and post-mortem report reviews across India.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 text-slate-950 font-black text-sm tracking-wider uppercase transition-colors shadow-2xl"
          >
            Request Confidential Consultation <ArrowRight size={16} />
          </Link>
        </div>

      </section>
    </div>
  );
};

export default Founder;
