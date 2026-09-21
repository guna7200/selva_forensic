import React, { useState } from 'react';
import { Phone, MapPin, ShieldCheck, Send, CheckCircle2, Clock } from 'lucide-react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'family',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 bg-[#082f49] text-slate-100">
      {/* High Visibility Hero Header Banner with Bright Background Image */}
      <section className="relative border-b-4 border-[#0284c7] py-20 sm:py-28 overflow-hidden text-center">
        {/* Bright Forensic Image (Opacity 90%) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-90 scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        {/* Hospital Light Blue Overlay */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-brightness-75 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082f49] via-transparent to-[#082f49]/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#082f49]/95 border-2 border-sky-300 text-sky-200 text-xs font-black uppercase tracking-wider shadow-2xl">
            <ShieldCheck size={18} /> 100% Confidential Consultation
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Contact & Online Case Consultation
          </h1>
          <p className="text-white text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-[#082f49]/70 p-4 rounded-2xl border border-sky-300/30">
            Reach out for nationwide online medico-legal consultations, post-mortem reviews, or case strategy briefings.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#0c4a6e]/90 p-8 sm:p-10 rounded-3xl border-2 border-[#0284c7]/40 space-y-6 shadow-2xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white font-heading">Request Confidential Case Review</h2>
              <p className="text-slate-100 text-xs sm:text-sm font-bold">
                Fill out the form below with relevant details. Our forensic medical experts will contact you securely.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#082f49] border-2 border-sky-300 text-center space-y-4 shadow-xl">
                <div className="w-14 h-14 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Consultation Request Received</h3>
                <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-bold">
                  Thank you for submitting your case details. A forensic expert will reach out to you within 24 hours for a confidential assessment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0c4a6e] text-sky-300 text-xs font-bold border border-[#0284c7]/40 hover:bg-[#0284c7]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-slate-100 font-bold">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#082f49] border border-[#0284c7]/40 text-white placeholder-slate-300 focus:outline-none focus:border-sky-300 font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-slate-100 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 81225 26282"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#082f49] border border-[#0284c7]/40 text-white placeholder-slate-300 focus:outline-none focus:border-sky-300 font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-100 font-bold">Service Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#082f49] border border-[#0284c7]/40 text-white focus:outline-none focus:border-sky-300 font-bold"
                  >
                    <option value="family">Family (Sudden Death / Claim Rejection)</option>
                    <option value="insurance">Insurance Death Investigation</option>
                    <option value="lawyers">Legal Counsel / Trial Prep</option>
                    <option value="individuals">Post Mortem Peer Review / Cold Case</option>
                    <option value="hospitals">Hospitals & Doctors (Medicolegal Audit)</option>
                    <option value="corporates">Corporate Scrutiny & Safety</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-100 font-bold">Case Summary & Key Questions *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe the medical/legal issue, available documents (Post-mortem, hospital records, etc.), and what opinion you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#082f49] border border-[#0284c7]/40 text-white placeholder-slate-300 focus:outline-none focus:border-sky-300 resize-none font-medium"
                  ></textarea>
                </div>

                <div className="p-3 rounded-xl bg-[#082f49] border border-sky-300/30 text-xs text-sky-200 font-bold flex items-center gap-2">
                  <ShieldCheck size={16} className="shrink-0 text-sky-300" />
                  <span>Your medical and personal information is strictly protected under client privilege.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0ea5e9] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-black text-sm shadow-xl flex items-center justify-center gap-2 transition-all uppercase tracking-wider border border-sky-300/30"
                >
                  <Send size={16} /> Submit Case Details
                </button>
              </form>
            )}
          </div>

          {/* Contact Cards Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            <div className="p-6 rounded-2xl bg-[#0c4a6e]/90 border border-[#0284c7]/40 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white font-heading">Consultation Hub</h3>
              <p className="text-slate-100 text-xs leading-relaxed font-bold">
                We operate on an online confidential consultation model serving clients, legal teams, and insurance organizations across India.
              </p>

              <div className="space-y-4 text-xs pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Nationwide Online Services</div>
                    <div className="text-slate-100 mt-0.5 font-semibold">Selvas Forensic Medical Centre, Online Case Consultation Available Across India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Contact Phone</div>
                    <div className="text-slate-100 mt-0.5 font-semibold">+91 81225 26282</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0284c7] text-white flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Response Turnaround</div>
                    <div className="text-slate-100 mt-0.5 font-semibold">Urgent case reviews prioritized within 24-48 hours.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#082f49] via-[#0284c7] to-[#0ea5e9] border border-sky-300/40 space-y-3 shadow-xl">
              <h4 className="text-white font-bold text-sm font-heading">Urgent Trial or Exhumation Matter?</h4>
              <p className="text-white text-xs leading-relaxed font-bold">
                If your legal team requires immediate trial assistance or case-ordered autopsy rebuttal, mark your message as urgent or call us directly.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;
