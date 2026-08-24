import React, { useState } from 'react';
import { STORE_INFO } from '../data/products';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MessageSquare, 
  Sparkles,
  Plane
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      setFormStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      setFormStatus('error');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage('Please enter a brief message or question.');
      setFormStatus('error');
      return;
    }

    setErrorMessage('');
    setFormStatus('submitting');

    // Simulate reliable dispatch
    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'general',
      message: '',
    });
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#0A0A0C] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-zinc-300 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-orange-500" />
            Get In Touch
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Contact Pack N Go
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Have a question about luggage sizing, need to hold an item before reaching SFO, or want to check in-stock availability? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121214] border border-white/5 hover:border-white/20 transition-all shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Phone / Fast Call</div>
                <a 
                  href={`tel:${STORE_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="font-heading font-extrabold text-2xl text-white hover:text-orange-500 transition-colors block mt-1"
                >
                  {STORE_INFO.phone}
                </a>
                <p className="text-xs text-zinc-400 mt-1">
                  Call for immediate airport inventory checks and gate assistance.
                </p>
              </div>
            </div>

            {/* Email Addresses Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121214] border border-white/5 hover:border-white/20 transition-all shadow-xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Direct Email Contacts</div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-[11px] text-zinc-500 block">Primary Store Inquiries:</span>
                    <a 
                      href={`mailto:${STORE_INFO.emails[0]}`}
                      className="font-semibold text-sm sm:text-base text-orange-500 hover:underline break-all"
                    >
                      {STORE_INFO.emails[0]}
                    </a>
                  </div>

                  <div className="pt-1">
                    <span className="text-[11px] text-zinc-500 block">Management &amp; Orders:</span>
                    <a 
                      href={`mailto:${STORE_INFO.emails[1]}`}
                      className="font-semibold text-sm sm:text-base text-zinc-300 hover:text-white hover:underline break-all"
                    >
                      {STORE_INFO.emails[1]}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Airport Location Info */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#121214] border border-white/5 space-y-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Airport Retail Store</div>
                <div className="font-heading font-bold text-lg text-white mt-1">
                  San Francisco International Airport (SFO)
                </div>
                <div className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  San Francisco, California • Open 7 Days a Week
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/5 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-2xl text-white">
                  Send Us a Message
                </h3>
                <p className="text-xs text-zinc-400">
                  Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              {formStatus === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received by Pack N Go. We will respond to <span className="text-emerald-400 font-semibold">{formData.email}</span> as soon as possible. If you need immediate assistance before boarding, please call us at <strong className="text-white">{STORE_INFO.phone}</strong>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-[#1C1C1F] hover:bg-[#27272A] text-white text-xs font-bold rounded-xl border border-white/10 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {formStatus === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-zinc-300 block">
                        Your Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-zinc-300 block">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Phone & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-zinc-300 block">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 510-459-7626"
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-inquiry-type" className="text-xs font-semibold text-zinc-300 block">
                        Reason for Inquiry
                      </label>
                      <select
                        id="contact-inquiry-type"
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-zinc-200 focus:outline-none focus:border-orange-500"
                      >
                        <option value="general">General Question</option>
                        <option value="hold">Hold Luggage for SFO Pickup</option>
                        <option value="broken-bag">Damaged / Broken Baggage Emergency</option>
                        <option value="airline-check">Airline Size Verification</option>
                        <option value="corporate">Corporate / Bulk Travel Bags</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-zinc-300 block">
                      Message / Flight Details <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know your requirements, travel date, or which luggage model you are interested in..."
                      className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Pack N Go</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-zinc-500 pt-1">
                    Direct inquiries are sent directly to our airport team: {STORE_INFO.emails[0]} &amp; {STORE_INFO.emails[1]}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
