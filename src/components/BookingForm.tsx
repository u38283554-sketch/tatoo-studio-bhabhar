import React, { useState, useEffect } from 'react';
import { STUDIO_CONFIG } from '../config';
import { MessageSquare, Calendar, User, Phone, CheckCircle, Sparkles, Send } from 'lucide-react';

interface BookingFormProps {
  language: 'en' | 'gu';
  prefilledIdea?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ language, prefilledIdea = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tattooIdea: prefilledIdea,
    bodyPart: 'Forearm',
    sizeEstimate: 'Medium (3-5 inches)',
    preferredDate: '',
    preferredTime: 'Afternoon (2 PM - 6 PM)',
    customNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledIdea) {
      setFormData((prev) => ({ ...prev, tattooIdea: prefilledIdea }));
    }
  }, [prefilledIdea]);

  const bodyParts = [
    { value: 'Forearm', labelEn: 'Forearm / હાથની કલાઈ', labelGu: 'કાંડું / હાથ' },
    { value: 'Wrist', labelEn: 'Wrist / કાંડું', labelGu: 'કાંડું' },
    { value: 'Bicep / Arm', labelEn: 'Bicep / Arm / બાવડું', labelGu: 'બાવડું / આર્મ' },
    { value: 'Chest', labelEn: 'Chest / છાતી', labelGu: 'છાતી' },
    { value: 'Neck / Collarbone', labelEn: 'Neck / Collarbone', labelGu: 'ગરદન / કૉલરબોન' },
    { value: 'Back / Shoulder', labelEn: 'Back / Shoulder', labelGu: 'પીઠ / ખભો' },
    { value: 'Ankle / Leg', labelEn: 'Ankle / Leg', labelGu: 'પગની ઘૂંટી / પગ' },
    { value: 'Other Placement', labelEn: 'Other / અન્ય ભાગ', labelGu: 'અન્ય જગ્યા' },
  ];

  const sizeOptions = [
    { value: 'Small (Up to 2 inches)', labelEn: 'Small (Up to 2 inches) · from ₹500', labelGu: 'નાનું (૨ ઇંચ સુધી) · ₹૫૦૦ થી' },
    { value: 'Medium (3 to 5 inches)', labelEn: 'Medium (3 to 5 inches) · from ₹1,800', labelGu: 'મધ્યમ (૩ થી ૫ ઇંચ) · ₹૧,૮૦૦ થી' },
    { value: 'Large / Sleeve (6+ inches)', labelEn: 'Large / Sleeve (6+ inches) · from ₹4,500+', labelGu: 'મોટું / સ્લીવ (૬+ ઇંચ) · ₹૪,૫૦૦+' },
  ];

  // Construct structured WhatsApp message
  const generateWhatsAppMessage = () => {
    const greeting = language === 'en'
      ? `*NEW TATTOO APPOINTMENT INQUIRY*\nStudio: Tattoo Studio Bhabhar (Vav Road)`
      : `*નવી ટેટૂ પૂછપરછ અને બુકિંગ*\nસ્ટુડિયો: ટેટૂ સ્ટુડિયો ભાભર (વાવ રોડ)`;

    const lines = [
      greeting,
      `---------------------------------`,
      `👤 *Name / નામ:* ${formData.name || 'Not provided'}`,
      `📞 *Phone / ફોન:* ${formData.phone || 'Not provided'}`,
      `🎨 *Tattoo Idea / ડિઝાઇન:* ${formData.tattooIdea || 'Custom Discussion'}`,
      `📍 *Placement / સ્થાન:* ${formData.bodyPart}`,
      `📏 *Size / સાઇઝ:* ${formData.sizeEstimate}`,
      `📅 *Preferred Date / તારીખ:* ${formData.preferredDate || 'Earliest available'}`,
      `⏰ *Time Slot:* ${formData.preferredTime}`,
    ];

    if (formData.customNotes) {
      lines.push(`📝 *Note:* ${formData.customNotes}`);
    }

    lines.push(`---------------------------------`);
    lines.push(
      language === 'en'
        ? `Please let me know your availability and estimated quote. Thank you!`
        : `કૃપા કરીને સમય અને અંદાજિત કિંમત જણાવશો. આભાર!`
    );

    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-24 bg-[#0d0d0d] relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#b11226] font-semibold mb-2">
            {language === 'en' ? 'Direct Studio Booking' : 'સરળ ઓનલાઇન બુકિંગ'}
          </p>
          <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white tracking-wide uppercase">
            {language === 'en' ? 'Book Your Tattoo Session' : 'તમારું સેશન બુક કરો'}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            {language === 'en'
              ? 'Fill out the form below to initiate an instant WhatsApp consultation directly with our lead artist in Bhabhar.'
              : 'નીચેની વિગતો ભરો અને સીધા અમારા આર્ટિસ્ટ સાથે વોટ્સએપ પર કન્સલ્ટેશન શરૂ કરો.'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Form (8 Cols) */}
          <div className="lg:col-span-7 bg-zinc-900/60 p-6 sm:p-8 rounded-2xl border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {language === 'en' ? 'Your Full Name *' : 'તમારું પૂરું નામ *'}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'en' ? 'e.g. Rahul Patel' : 'દા.ત. રાહુલ પટેલ'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b11226] transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {language === 'en' ? 'Phone / WhatsApp Number *' : 'મોબાઇલ / વોટ્સએપ નંબર *'}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={language === 'en' ? '+91 98765 43210' : '+૯૧ ૯૮૭૬૫ ૪૩૨૧૦'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b11226] transition-colors"
                  />
                </div>
              </div>

              {/* Tattoo Idea / Script */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  {language === 'en' ? 'Tattoo Idea / Name / Text *' : 'ટેટૂ ડિઝાઇન / નામ / વિચાર *'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.tattooIdea}
                  onChange={(e) => setFormData({ ...formData, tattooIdea: e.target.value })}
                  placeholder={
                    language === 'en'
                      ? 'e.g. Mom-Dad in Gujarati calligraphy with heartbeat, or Mahadev Trishul on forearm...'
                      : 'દા.ત. કાંડા પર ગુજરાતીમાં મમ્મી-પપ્પા કેલિગ્રાફી અથવા મહાદેવ ત્રિશૂળ...'
                  }
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#b11226] transition-colors resize-none"
                />
              </div>

              {/* Placement & Size Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {language === 'en' ? 'Body Placement' : 'શરીરનો ભાગ'}
                  </label>
                  <select
                    value={formData.bodyPart}
                    onChange={(e) => setFormData({ ...formData, bodyPart: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#b11226] transition-colors"
                  >
                    {bodyParts.map((bp) => (
                      <option key={bp.value} value={bp.value}>
                        {language === 'en' ? bp.labelEn : bp.labelGu}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {language === 'en' ? 'Size Estimate' : 'અંદાજિત સાઇઝ'}
                  </label>
                  <select
                    value={formData.sizeEstimate}
                    onChange={(e) => setFormData({ ...formData, sizeEstimate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#b11226] transition-colors"
                  >
                    {sizeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {language === 'en' ? opt.labelEn : opt.labelGu}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {language === 'en' ? 'Preferred Date' : 'પસંદગીની તારીખ'}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#b11226] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                    {language === 'en' ? 'Preferred Time' : 'પસંદગીનો સમય'}
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#b11226] transition-colors"
                  >
                    <option value="Morning (11 AM - 2 PM)">Morning (11 AM - 2 PM)</option>
                    <option value="Afternoon (2 PM - 6 PM)">Afternoon (2 PM - 6 PM)</option>
                    <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-lg font-bold text-sm uppercase tracking-wider text-white bg-[#b11226] hover:bg-[#cf142f] transition-all flex items-center justify-center gap-2 red-glow shadow-lg cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>
                  {language === 'en'
                    ? 'Submit & Open WhatsApp Chat'
                    : 'વોટ્સએપ પર વિગત મોકલો'}
                </span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {language === 'en'
                      ? 'WhatsApp chat opened! Send the generated message to confirm your appointment.'
                      : 'વોટ્સએપ ખુલી ગયું છે! કન્ફર્મ કરવા માટે મેસેજ સેન્ડ કરો.'}
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Live Message Preview Card (5 Cols) */}
          <div className="lg:col-span-5 bg-zinc-950 p-6 sm:p-7 rounded-2xl border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 uppercase mb-4">
                <MessageSquare className="w-4 h-4 text-green-500" />
                <span>{language === 'en' ? 'Live WhatsApp Preview' : 'વોટ્સએપ મેસેજ પ્રિવ્યુ'}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0c1317] border border-zinc-800 text-xs font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed shadow-inner">
                {generateWhatsAppMessage()}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-zinc-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#b11226]" />
                <span>
                  {language === 'en' ? 'Why book on WhatsApp?' : 'વોટ્સએપ પર બુકિંગના ફાયદા:'}
                </span>
              </div>
              <p className="leading-relaxed">
                {language === 'en'
                  ? 'Get quick responses within minutes, share your own reference photos, and lock your slot directly with Chetan.'
                  : 'ઝડપી જવાબ, મનપસંદ ફોટો શેર કરવાની સુવિધા અને સીધા આર્ટિસ્ટ સાથે વાતચીત.'}
              </p>
              <div className="pt-2 text-[11px] text-zinc-500">
                <span>Studio Direct: +91 96380 12558</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
