import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Send, 
  ShieldCheck,
  Building,
  User,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT, SERVICES_DATA } from '../data/mockData';

interface AssessmentFormProps {
  initialService?: string;
}
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyHns2iiso1mVK5w-8rgewvLKLXoYLm8N5mSXZADP9BI3HKBmCx_MU226guYvjqD9TW/exec';

export const AssessmentForm: React.FC<AssessmentFormProps> = ({ initialService }) => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Textile & Garment');
  const [serviceRequired, setServiceRequired] = useState(initialService || 'Sustainability Assessment');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [facilityLocation, setFacilityLocation] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update if prop changes
  React.useEffect(() => {
    if (initialService) {
      setServiceRequired(initialService);
    }
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new URLSearchParams();

    formData.append('type', 'Assessment Request');
    formData.append('name', contactPerson);
    formData.append('company', companyName);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('industry', industry);
    formData.append('service', serviceRequired);
    formData.append('location', facilityLocation);
    formData.append('message', message);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    });

    const generatedRef =
      `ENA-${Math.floor(100000 + Math.random() * 900000)}`;

    setReferenceId(generatedRef);
    setIsSubmitting(false);
    setIsSuccess(true);

  } catch (error) {
    console.error('Submission error:', error);

    setIsSubmitting(false);

    alert(
      'Unable to submit your request. Please try again or contact us directly.'
    );
  }
};

  const handleReset = () => {
    setIsSuccess(false);
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setFacilityLocation('');
    setMessage('');
  };

  return (
    <section className="py-20 bg-[#f8f9fa] relative border-t border-[#e2e8f0]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information & Regional Hub (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-[#ecfdf5] px-4 py-1.5 rounded-full border border-[#d1fae5] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#064e3b]">
                Direct Advisory & Consultation
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#003527] tracking-tight mb-4">
              Initiate an Assessment
            </h2>

            <p className="text-[#404944] text-base leading-relaxed mb-8">
              Connect directly with our senior compliance engineers and lead auditors to benchmark your industrial operations against global sustainability standards.
            </p>

            {/* Direct Contact Cards matching screenshot */}
            <div className="space-y-4">
              {/* Headquarters */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#d1fae5] shadow-sm">
                <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center text-[#10b981] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#003527]">
                    Headquarters
                  </h4>
                  <p className="text-sm text-[#404944] mt-0.5">
                    {COMPANY_CONTACT.headquarters}
                  </p>
                  <span className="text-xs text-[#059669] font-medium block mt-0.5">
                    {COMPANY_CONTACT.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#d1fae5] shadow-sm">
                <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center text-[#10b981] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#003527]">
                    Phone / WhatsApp Hotline
                  </h4>
                  <a 
                    href={`tel:${COMPANY_CONTACT.phone}`} 
                    className="text-sm font-semibold text-[#064e3b] hover:text-[#10b981] transition-colors mt-0.5 block"
                  >
                    {COMPANY_CONTACT.phone}
                  </a>
                  <span className="text-xs text-[#059669]">
                    Mon – Sat: 9:00 AM – 6:30 PM IST
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#d1fae5] shadow-sm">
                <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center text-[#10b981] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#003527]">
                    Official Advisory Email
                  </h4>
                  <a 
                    href={`mailto:${COMPANY_CONTACT.email}`} 
                    className="text-sm font-semibold text-[#064e3b] hover:text-[#10b981] transition-colors mt-0.5 block break-all"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                  <span className="text-xs text-[#059669]">
                    Typical initial turnaround within 4 business hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Assessment Request Form matching mockup (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#d1fae5] shadow-ambient">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Company / Facility Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Acme Textiles Ltd."
                          className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Industry Sector *
                      </label>
                      <select
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none font-medium cursor-pointer"
                      >
                        <option value="Textile & Garment">Textile & Garment</option>
                        <option value="Leather & Footwear">Leather & Footwear</option>
                        <option value="Chemicals & Polymers">Chemicals & Polymers</option>
                        <option value="Engineering & Auto Ancillaries">Engineering & Auto Ancillaries</option>
                        <option value="Packaging & Paper">Packaging & Paper</option>
                        <option value="General Manufacturing">General Manufacturing</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none font-medium cursor-pointer"
                    >
                      <option value="Sustainability Assessment">Sustainability Assessment & Baseline</option>
                      <option value="Higg FEM Consulting">Higg FEM 4.0 Verification & Consulting</option>
                      <option value="Social Compliance">Social & Labor Compliance (SLCP / SMETA)</option>
                      <option value="Carbon Footprint & GHG">Carbon Footprint & GHG Scope 1, 2, 3</option>
                      <option value="ZDHC Chemical Management">ZDHC & Chemical Management</option>
                      <option value="Water Stewardship">Water Stewardship & ZLD Audit</option>
                      <option value="Energy Efficiency Transition">Energy Efficiency & Renewables Transition</option>
                      <option value="Global Regulatory Readiness">Global ESG Regulatory (EU CBAM, CSRD, CSDDD)</option>
                      <option value="Corporate ESG Strategy">Corporate ESG Strategy & Disclosures</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Contact Person & Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactPerson}
                        onChange={(e) => setContactPerson(e.target.value)}
                        placeholder="e.g. Rajesh Kumar (EHS Head)"
                        className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="compliance@acmetextiles.com"
                        className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none"
                      />
                    </div>

                    {/* Facility Location */}
                    <div>
                      <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                        Facility Location (City / State)
                      </label>
                      <input
                        type="text"
                        value={facilityLocation}
                        onChange={(e) => setFacilityLocation(e.target.value)}
                        placeholder="e.g. Tirupur, Tamil Nadu"
                        className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-[#003527] uppercase tracking-wider mb-1.5">
                      Specific Requirements / Audit Deadlines (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Preparing for buyer Higg FEM 4.0 verification in Q4; need preliminary mock gap assessment."
                      className="w-full bg-[#f8f9fa] border border-[#d1fae5] text-[#003527] rounded-xl p-3 text-sm focus:border-[#10b981] focus:ring-2 focus:ring-[#ecfdf5] focus:bg-white transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#064e3b] text-white hover:bg-[#053e2f] transition-all px-6 py-4 rounded-xl shadow-[0_4px_14px_0_rgba(6,78,59,0.25)] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting to Lead Auditor...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Assessment Request
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#404944]">
                    🔒 Confidentiality Assured. Non-Disclosure Agreement (NDA) applied to all facility data.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#ecfdf5] text-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#d1fae5]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <span className="inline-block bg-[#ecfdf5] text-[#064e3b] text-xs font-bold px-3 py-1 rounded-full mb-2 border border-[#d1fae5]">
                    Request Confirmed • Reference: {referenceId}
                  </span>

                  <h3 className="text-2xl font-bold text-[#003527] mb-2">
                    Assessment Request Received!
                  </h3>

                  <p className="text-sm text-[#404944] max-w-md mx-auto mb-6">
                    Thank you, <strong>{contactPerson || 'valued client'}</strong>. Our senior ESG auditor for <strong>{industry}</strong> will review your submission for <strong>{serviceRequired}</strong> and reach out within 4 business hours to coordinate the preliminary audit agenda.
                  </p>

                  <div className="bg-[#f8f9fa] p-4 rounded-2xl border border-[#e2e8f0] text-left max-w-md mx-auto mb-6 text-xs text-[#064e3b] space-y-1.5">
                    <div><strong>Facility:</strong> {companyName || 'Registered Enterprise'}</div>
                    <div><strong>Service:</strong> {serviceRequired}</div>
                    <div><strong>Assigned Regional Hub:</strong> Kangeyam / Tirupur Corridor, Tamil Nadu</div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-[#064e3b] text-white hover:bg-[#053e2f] px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Submit Another Facility Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
