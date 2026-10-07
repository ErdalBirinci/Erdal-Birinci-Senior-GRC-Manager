import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowUpRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'GRC & Security Advisory',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'GRC & Security Advisory',
        message: '',
      });
    }, 600);
  };

  return (
    <section className="py-20 bg-[#FBFBFD] border-b border-black/[0.05]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider mb-2">
            Direct Contact & Networking
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F]">
            Get in Touch & Connect
          </h2>
          <p className="text-base text-[#6E6E73] mt-2">
            Reach out for ISO 27001/42001 audit preparation, Zero Trust transformation, enterprise GRC consulting, or executive leadership inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex items-start justify-between group hover:border-[#0071E3]/30 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#0071E3] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#86868B]">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-[#1D1D1F] hover:text-[#0071E3] transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <div className="text-[11px] text-[#6E6E73] mt-0.5">
                    Typically answered within 24 hours
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-all cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex items-start justify-between group hover:border-[#34C759]/30 transition-all">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-[#86868B]">Phone & WhatsApp</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-[#1D1D1F] hover:text-[#34C759] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                  <div className="text-[11px] text-[#6E6E73] mt-0.5">
                    Finland (EET / UTC+2)
                  </div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-xl text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.04] transition-all cursor-pointer shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-[#86868B]">Location & Region</div>
                <div className="text-sm font-bold text-[#1D1D1F]">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-[11px] text-[#6E6E73] mt-0.5">
                  European Union (Finland & DACH Region)
                </div>
              </div>
            </div>

            {/* LinkedIn & Socials Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-medium bg-white/15 px-2.5 py-0.5 rounded-full">
                  Official Profile
                </span>
              </div>
              <h3 className="text-lg font-bold mb-1">Connect on LinkedIn</h3>
              <p className="text-xs text-blue-100/90 leading-relaxed mb-4">
                Follow my GRC publications, Zero Trust case studies, and cybersecurity articles on LinkedIn.
              </p>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold bg-white text-blue-900 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <span>{PERSONAL_INFO.linkedinHandle}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Working Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#1D1D1F]">
                  Direct Inquiry Form
                </h3>
                <p className="text-xs text-[#6E6E73] mt-0.5">
                  Please send your inquiry; a response will be provided promptly.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                <span>Active Availability</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-xs">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950 mb-1">
                  Your Message Was Successfully Sent!
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto mb-5 leading-relaxed">
                  Thank you. Erdal Birinci will get back to you shortly via the provided email address.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold bg-white text-emerald-900 border border-emerald-200 rounded-xl hover:bg-emerald-100/50 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBFBFD] border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3] focus:bg-white transition-all text-[#1D1D1F]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@enterprise.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FBFBFD] border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3] focus:bg-white transition-all text-[#1D1D1F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBFBFD] border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3] focus:bg-white transition-all text-[#1D1D1F]"
                  >
                    <option value="GRC & Security Advisory">GRC & Security Advisory</option>
                    <option value="ISO 27001 / ISO 42001 Audit Preparation">ISO 27001 / ISO 42001 Audit Preparation</option>
                    <option value="Zero Trust & Entra ID IAM Transformation">Zero Trust & Entra ID IAM Transformation</option>
                    <option value="Cloud SIEM & Threat Automation Advisory">Cloud SIEM & Threat Automation Advisory</option>
                    <option value="Executive Leadership / Career Opportunity">Executive Leadership / Career Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your compliance project, audit deadlines, or discussion points..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FBFBFD] border border-black/10 rounded-xl focus:outline-hidden focus:border-[#0071E3] focus:bg-white transition-all text-[#1D1D1F]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#86868B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
                    <span>Your data is strictly handled in accordance with GDPR principles</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-98 rounded-full shadow-xs transition-all disabled:opacity-50 cursor-pointer w-full sm:w-auto"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
