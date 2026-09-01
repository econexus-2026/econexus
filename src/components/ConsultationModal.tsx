import React, { useState } from 'react';
import { X, CheckCircle, Send, ShieldCheck, Phone, Mail, Building } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyHns2iiso1mVK5w-8rgewvLKLXoYLm8N5mSXZADP9BI3HKBmCx_MU226guYvjqD9TW/exec';

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Sustainability Assessment & Gap Analysis',
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new URLSearchParams();

    formData.append('type', 'Consultation Request');
    formData.append('name', name);
    formData.append('company', company);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('service', service);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

  } catch (error) {
    console.error('Consultation submission error:', error);

    setIsSubmitting(false);

    alert(
      'Unable to submit your consultation request. Please try again or contact us directly.'
    );
  }
};

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-[#d1fae5] relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f8f9fa] border border-[#e2e8f0] flex items-center justify-center text-[#404944] hover:text-[#003527] hover:bg-[#ecfdf5] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#064e3b] mb-1">
              <ShieldCheck className="w-5 h-5 text-[#10b981]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#10b981]">
                Direct Advisory Booking
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#003527] mb-2">
              Book an Industrial ESG Audit
            </h3>
            <p className="text-xs md:text-sm text-[#404944] mb-6">
              Connect with our Kangeyam & Tirupur lead auditors for a confidential assessment scoping.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1">
                  Full Name & Designation *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. S. Murugesan (Managing Director)"
                  className="w-full bg-[#f8f9fa] border border-[#d1fae5] rounded-xl p-2.5 text-xs md:text-sm focus:border-[#10b981] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1">
                  Company / Mill / Factory Name *
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Spinning & Weaving Mills"
                  className="w-full bg-[#f8f9fa] border border-[#d1fae5] rounded-xl p-2.5 text-xs md:text-sm focus:border-[#10b981] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 90257 25668"
                    className="w-full bg-[#f8f9fa] border border-[#d1fae5] rounded-xl p-2.5 text-xs md:text-sm focus:border-[#10b981] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="s.murugesan@apexmills.com"
                    className="w-full bg-[#f8f9fa] border border-[#d1fae5] rounded-xl p-2.5 text-xs md:text-sm focus:border-[#10b981] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1">
                  Target Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#f8f9fa] border border-[#d1fae5] rounded-xl p-2.5 text-xs md:text-sm focus:border-[#10b981] outline-none font-medium"
                >
                  <option>Sustainability Assessment & Gap Analysis</option>
                  <option>Higg FEM 4.0 Consulting & Verification</option>
                  <option>Social & Labor Compliance (SLCP / SMETA)</option>
                  <option>Carbon Footprint & Scope 1-2-3 Decarbonization</option>
                  <option>ZDHC Chemical Safety & Wastewater Testing</option>
                  <option>EU CBAM & Global ESG Regulatory Readiness</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#064e3b] text-white hover:bg-[#053e2f] font-bold py-3 px-4 rounded-xl text-xs md:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Scheduling Consultation...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Confirm Consultation Request
                  </>
                )}
              </button>

              <div className="pt-2 text-center">
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="text-xs font-semibold text-[#064e3b] hover:text-[#10b981] inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" /> Or call our emergency helpline: {COMPANY_CONTACT.phone}
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-[#ecfdf5] text-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-3 border border-[#d1fae5]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#003527] mb-1">
              Consultation Scheduled!
            </h4>
            <p className="text-xs md:text-sm text-[#404944] mb-6">
              Our lead auditor will contact <strong>{name}</strong> ({company}) at <strong>{phone}</strong> to confirm the technical scope.
            </p>
            <button
              onClick={handleClose}
              className="bg-[#064e3b] text-white font-bold py-2.5 px-6 rounded-xl text-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
