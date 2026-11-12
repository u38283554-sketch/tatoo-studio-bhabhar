/**
 * TATTOO STUDIO BHABHAR - MASTER BUSINESS CONFIGURATION
 * Edit any business details, pricing, timings, or social links below.
 */

export interface Artist {
  id: string;
  name: string;
  roleEn: string;
  roleGu: string;
  specialityEn: string;
  specialityGu: string;
  experienceEn: string;
  experienceGu: string;
  instagram?: string;
  photo: string;
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleGu: string;
  descriptionEn: string;
  descriptionGu: string;
  tagEn: string;
  tagGu: string;
  startingPrice: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleGu: string;
  category: 'lettering' | 'realism' | 'minimal' | 'memorial' | 'coverup' | 'custom';
  categoryLabelEn: string;
  categoryLabelGu: string;
  imageUrl: string;
  descriptionEn: string;
  descriptionGu: string;
  sizeEstimate?: string;
}

export interface TestimonialItem {
  id: string;
  nameEn: string;
  nameGu: string;
  locationEn: string;
  locationGu: string;
  tattooTypeEn: string;
  tattooTypeGu: string;
  quoteEn: string;
  quoteGu: string;
  rating: number;
}

export interface FaqItem {
  questionEn: string;
  questionGu: string;
  answerEn: string;
  answerGu: string;
}

export const STUDIO_CONFIG = {
  // Brand & Business Details
  name: 'Tattoo Studio Bhabhar',
  taglineEn: 'Your Story. Inked Forever.',
  taglineGu: 'તમારી વાર્તા. કાયમ માટે અંકિત.',
  sublineEn: 'Premier custom tattoo studio in Bhabhar, North Gujarat. Specializing in artistic lettering, portraits, devotional art, and sterile fine-line tattoos.',
  sublineGu: 'ભાભરમાં પ્રીમિયમ કસ્ટમ ટેટૂ સ્ટુડિયો. અક્ષરલેખન, પોટ્રેટ, ભક્તિમય કળા અને ૧૦૦% સુરક્ષિત હાઇજીનિક ટેટૂિંગ.',
  
  // Location & Contact
  location: {
    city: 'Bhabhar',
    state: 'Gujarat, India',
    addressEn: 'Vav Road, Near Labh Multi Hospital & Bharat Tools, Bhabhar, Gujarat 385320',
    addressGu: 'વાવ રોડ, લાભ મલ્ટી હોસ્પિટલ અને ભારત ટૂલ્સ પાસે, ભાભર, ગુજરાત ૩૮૫૩૨૦',
    landmarksEn: 'Near Labh Multi Hospital and Bharat Tools',
    landmarksGu: 'લાભ મલ્ટી હોસ્પિટલ અને ભારત ટૂલ્સ નજીક',
    googleMapsUrl: 'https://maps.app.goo.gl/iMTnuNMJDN4VX2wv7',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14552.179357424687!2d71.597723!3d24.103233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b058c4d293f0b%3A0x6bcfad449ff08ca3!2sBhabhar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    pincode: '385320',
  },

  contact: {
    phone: '+91 96380 12558',
    phoneRaw: '919638012558',
    whatsappUrl: 'https://wa.me/919638012558',
    instagramHandle: '@tattoo_studio_bhabhar',
    instagramUrl: 'https://www.instagram.com/tattoo_studio_bhabhar',
    instagramFollowers: '2.6K+',
    instagramPosts: '229+',
    ownerName: 'Chetan',
    ownerInstagramHandle: '@mr_chetan_5557',
    ownerInstagramUrl: 'https://www.instagram.com/mr_chetan_5557',
  },

  timings: {
    en: '11:00 AM – 9:00 PM (Monday – Sunday)',
    gu: 'સવારે ૧૧:૦૦ થી રાત્રે ૯:૦૦ (સોમવાર થી રવિવાર)',
    daysEn: 'Open All 7 Days',
    daysGu: 'અઠવાડિયાના સાતેય દિવસ ખુલ્લું',
  },

  pricing: {
    startingPriceNumber: 500,
    startingPriceText: '₹500',
    depositNoticeEn: 'Consultation & custom sketch preview included.',
    depositNoticeGu: 'કન્સલ્ટેશન અને કસ્ટમ સ્કેચ પ્રિવ્યુ શામેલ છે.',
  },

  trustBadges: [
    { value: '2.6K+', labelEn: 'Instagram Family', labelGu: 'ઇન્સ્ટાગ્રામ ફોલોઅર્સ' },
    { value: '229+', labelEn: 'Original Works Done', labelGu: 'ઓરિજિનલ ટેટૂ વર્ક્સ' },
    { value: '100%', labelEn: 'Sterilized Needles & Fresh Ink', labelGu: '૧૦૦% સ્ટેરિલાઇઝ્ડ અને સુરક્ષિત' },
    { value: '₹500', labelEn: 'Starting Price', labelGu: 'શરૂઆતી કિંમત' },
  ],

  // Artists Roster
  artists: [
    {
      id: 'chetan-patel',
      name: 'Chetan',
      roleEn: 'Founder & Lead Tattoo Artist',
      roleGu: 'સ્થાપક અને મુખ્ય ટેટૂ આર્ટિસ્ટ',
      specialityEn: 'Photorealism, Custom Mythology, Cover-ups & Portrait Ink',
      specialityGu: 'રિયાલિઝમ પોટ્રેટ, કસ્ટમ દેવી-દેવતા આર્ટ અને કવર-અપ',
      experienceEn: '7+ Years Crafting Inks',
      experienceGu: '૭+ વર્ષનો અનુભવ',
      instagram: 'https://www.instagram.com/mr_chetan_5557',
      // High-res studio portrait generated for Chetan
      photo: '/src/assets/images/artist_chetan_1794472559994.jpg',
    },
    {
      id: 'aryan-artist',
      name: 'Aryan',
      roleEn: 'Specialist Artist',
      roleGu: 'સ્પેશિયાલિસ્ટ ટેટૂ આર્ટિસ્ટ',
      specialityEn: 'Calligraphy Lettering, Minimal Geometry & Fine-Line Tattoos',
      specialityGu: 'કેલિગ્રાફી અક્ષરલેખન, મિનિમલ આર્ટ અને ફાઇન-લાઇન ટેટૂ',
      experienceEn: '4+ Years Crafting Inks',
      experienceGu: '૪+ વર્ષનો અનુભવ',
      instagram: 'https://www.instagram.com/tattoo_studio_bhabhar',
      // High-res studio portrait generated for Aryan
      photo: '/src/assets/images/artist_aryan_1794472561391.jpg',
    },
  ] as Artist[],

  // Studio Services
  services: [
    {
      id: 'lettering',
      titleEn: 'Name & Lettering Tattoos',
      titleGu: 'નામ અને અક્ષરલેખન ટેટૂ',
      descriptionEn: 'Crisp, enduring calligraphy in English, Hindi, and Gujarati scripts. Perfect for your name, children’s initials, or meaningful mantras.',
      descriptionGu: 'ગુજરાતી, હિન્દી અને અંગ્રેજી ભાષામાં આકર્ષક કેલિગ્રાફી ફોન્ટ્સ. તમારા નામ, મંત્ર કે સંતાનોના નામના સુંદર ટેટૂ.',
      tagEn: 'English · Hindi · Gujarati',
      tagGu: 'અંગ્રેજી · હિન્દી · ગુજરાતી',
      startingPrice: '₹500',
      iconName: 'PenTool',
    },
    {
      id: 'memorial',
      titleEn: 'Memorial & Mom-Dad Tributes',
      titleGu: 'માતૃ-પિતૃ વંદના & સ્મૃતિ ટેટૂ',
      descriptionEn: 'Heartfelt homage tattoos honoring parents, family heritage, guardian angels, or eternal life milestones.',
      descriptionGu: 'માતા-પિતાના આશીર્વાદ, કુળદેવતા પ્રતીકો અને પરિવાજનોની વહાલભરી યાદોને કાયમી સાચવતા વિશિષ્ટ ટેટૂ.',
      tagEn: 'Mom-Dad · Family · Legacy',
      tagGu: 'મમ્મી-પપ્પા · પરિવાર · વારસો',
      startingPrice: '₹800',
      iconName: 'HeartHandshake',
    },
    {
      id: 'couple',
      titleEn: 'Couple & Matching Tattoos',
      titleGu: 'કપલ & મેચિંગ ટેટૂ',
      descriptionEn: 'Complementary fine-line motifs, anniversary coordinates, lock-and-key symbols, and minimalist matching memories.',
      descriptionGu: 'જીવનસાથી માટે સુંદર મેચિંગ પ્રતીકો, એનિવર્સરી તારીખો અને બંનેના વ્યક્તિત્વને જોડતી સુંદર ડિઝાઇન.',
      tagEn: 'Matching · Fine-Line · Bond',
      tagGu: 'મેચિંગ · ફાઇન લાઇન · પ્રેમ',
      startingPrice: '₹1,200',
      iconName: 'Sparkles',
    },
    {
      id: 'minimal',
      titleEn: 'Minimal & Fine-Line Ink',
      titleGu: 'મિનિમલ અને ફાઇન-લાઇન ટેટૂ',
      descriptionEn: 'Delicate single-needle lines, micro geometric symbols, celestial moons, floral sprigs, and understated modern elegance.',
      descriptionGu: 'સૂક્ષ્મ બારીકાઈ ભરેલા સિંગલ-નીડલ ટેટૂ, નાના પ્રતીકો, ફૂલો અને આધુનિક મિનિમલ ડિઝાઇન્સ.',
      tagEn: 'Subtle · Micro · Aesthetic',
      tagGu: 'નાજુક · સૂક્ષ્મ · સુંદર',
      startingPrice: '₹600',
      iconName: 'Compass',
    },
    {
      id: 'portrait',
      titleEn: 'Portrait & Realistic Tattoos',
      titleGu: 'પોટ્રેટ અને રિયાલિસ્ટિક આર્ટ',
      descriptionEn: 'High-contrast realism featuring photographic likenesses, majestic lions, religious deities (Shiva, Krishna, Hanuman), and wildlife.',
      descriptionGu: 'જીવંત ફોટોગ્રાફિક પોટ્રેટ, સિંહ, શિવજી, મહાદેવ, હનુમાનજી અને દેવ-દેવીઓની અદ્ભુત રિયાલિઝમ કળા.',
      tagEn: 'Photo-Real · 3D Shading · Mythological',
      tagGu: 'રિયાલિસ્ટિક · 3D શેડિંગ · ભક્તિમય',
      startingPrice: '₹2,500',
      iconName: 'Shield',
    },
    {
      id: 'coverup',
      titleEn: 'Cover-Up & Reworks',
      titleGu: 'કવર-અપ અને જૂના ટેટૂ રિપેર',
      descriptionEn: 'Breathe new life into old, faded, or unwanted ink with clever dark shading, dark-work patterns, or rich color layering.',
      descriptionGu: 'જૂના, ઝાંખા કે અણગમતા ટેટૂ પર નવો કલાત્મક આકાર આપી તેને એક ભવ્ય માસ્ટરપીસમાં ફેરવો.',
      tagEn: 'Restoration · Conceal · Redesign',
      tagGu: 'રિપેર · નવો લુક · કલાત્મક',
      startingPrice: '₹1,800',
      iconName: 'RefreshCw',
    },
    {
      id: 'custom',
      titleEn: 'Bespoke Custom Concept Design',
      titleGu: 'કસ્ટમ પર્સનલાઇઝ્ડ ડિઝાઇન',
      descriptionEn: 'One-of-a-kind art drawn specifically for your body anatomy and personal story. Free digital sketch before inking.',
      descriptionGu: 'તમારા પોતાના વિચાર અને કલ્પના મુજબ ખાસ બનાવેલ કસ્ટમ આર્ટ. ટેટૂ કરતાં પહેલાં સ્કેચ પ્રિવ્યુ.',
      tagEn: '100% Unique · Digital Draft · Tailored',
      tagGu: 'અનોખી ડિઝાઇન · ડિજિટલ સ્કેચ',
      startingPrice: '₹1,500',
      iconName: 'Flame',
    },
  ] as ServiceItem[],

  // Gallery Showcase (12 curated pieces with categories and clear replacement comments)
  gallery: [
    {
      id: 'g1',
      titleEn: 'Calligraphy Name Resilience',
      titleGu: 'કેલિગ્રાફી અક્ષરલેખન',
      category: 'lettering',
      categoryLabelEn: 'Lettering',
      categoryLabelGu: 'અક્ષરલેખન',
      // Studio showcase photo generated
      imageUrl: '/src/assets/images/tattoo_lettering_showcase_1794472561283.jpg',
      descriptionEn: 'Clean script lettering with flowing flourishes on inner forearm.',
      descriptionGu: 'કાંડા પર સુંદર અને આકર્ષક કેલિગ્રાફી લખાણ.',
      sizeEstimate: '4 x 1.5 inches',
    },
    {
      id: 'g2',
      titleEn: 'Majestic Lion & Pocket Watch',
      titleGu: 'સિંહ અને પોકેટ ઘડિયાળ પોટ્રેટ',
      category: 'realism',
      categoryLabelEn: 'Realism',
      categoryLabelGu: 'રિયાલિઝમ',
      // Studio showcase photo generated
      imageUrl: '/src/assets/images/tattoo_portrait_realism_1794472562330.jpg',
      descriptionEn: 'Micro-shaded realism portraying courage, nobility, and the value of time.',
      descriptionGu: 'ખભા પર બારીક શેડિંગ સાથે સાવજ અને સમય દર્શાવતી સુંદર કળા.',
      sizeEstimate: '7 x 5 inches',
    },
    {
      id: 'g3',
      titleEn: 'Minimal Couple Botanical Diamonds',
      titleGu: 'કપલ મેચિંગ બોટનિકલ ટેટૂ',
      category: 'minimal',
      categoryLabelEn: 'Minimal / Couple',
      categoryLabelGu: 'મિનિમલ / કપલ',
      // Studio showcase photo generated
      imageUrl: '/src/assets/images/tattoo_minimal_couple_1794472563943.jpg',
      descriptionEn: 'Symmetrical fine-line matching botanicals on both wrists.',
      descriptionGu: 'હાથના કાંડા પર બંને જીવનસાથી માટે મેચિંગ પ્રતીક.',
      sizeEstimate: '2 x 1 inches',
    },
    {
      id: 'g4',
      titleEn: 'Lord Shiva Mahadev Trishul & Damru',
      titleGu: 'ભગવાન શિવ ત્રિશૂળ અને ડમરુ',
      category: 'memorial',
      categoryLabelEn: 'Devotional',
      categoryLabelGu: 'ભક્તિમય',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Devotional Mahadev Trishul with Rudraksha bead detailing and Om mantra.',
      descriptionGu: 'ઓમ અને રુદ્રાક્ષ સાથે ભવ્ય ત્રિશૂળ ટેટૂ.',
      sizeEstimate: '6 x 2.5 inches',
    },
    {
      id: 'g5',
      titleEn: 'Mom-Dad Heartbeat Infinity Script',
      titleGu: 'માતા-પિતા હાર્ટબીટ ઇન્ફિનિટી',
      category: 'memorial',
      categoryLabelEn: 'Memorial',
      categoryLabelGu: 'સ્મૃતિ / આશીર્વાદ',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Emotional mom-dad lettering woven into an endless pulse line.',
      descriptionGu: 'માતા-પિતાના પ્રેમ અને હાર્ટબીટનું ભાવસભર ટેટૂ.',
      sizeEstimate: '4 x 1.5 inches',
    },
    {
      id: 'g6',
      titleEn: 'Geometric Wolf & Forest Moon',
      titleGu: 'જ્યોમેટ્રિક વુલ્ફ અને ચાંદ',
      category: 'custom',
      categoryLabelEn: 'Custom Art',
      categoryLabelGu: 'કસ્ટમ આર્ટ',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Split half-realistic, half-sacred-geometry wolf forearm sleeve.',
      descriptionGu: 'આધુનિક જ્યોમેટ્રી અને વુલ્ફનું યુનિક કસ્ટમ ટેટૂ.',
      sizeEstimate: '6 x 3.5 inches',
    },
    {
      id: 'g7',
      titleEn: 'Dark Mandala Cover-Up',
      titleGu: 'મંડલા કવર-અપ ટેટૂ',
      category: 'coverup',
      categoryLabelEn: 'Cover-Up',
      categoryLabelGu: 'કવર-અપ',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Intricate deep-black mandala flawlessly concealing an older faded mark.',
      descriptionGu: 'જૂના નિશાનને સંપૂર્ણપણે ઢાંકી દેતી સુંદર બ્લેકવર્ક મંડલા પેટર્ન.',
      sizeEstimate: '5 x 5 inches',
    },
    {
      id: 'g8',
      titleEn: 'Delicate Fine-Line Rose',
      titleGu: 'ફાઇન-લાઇન ગુલાબ ટેટૂ',
      category: 'minimal',
      categoryLabelEn: 'Minimal',
      categoryLabelGu: 'મિનિમલ',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1590246814883-578336ffb186?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Single needle precision rose on the side of the wrist with stem leaf.',
      descriptionGu: 'હાથના કાંડા પર સુંદર નાજુક ગુલાબની ડિઝાઇન.',
      sizeEstimate: '3 x 1 inches',
    },
    {
      id: 'g9',
      titleEn: 'Sanskrit Maha Mrityunjaya Shloka',
      titleGu: 'સંસ્કૃત મહામૃત્યુંજય મંત્ર',
      category: 'lettering',
      categoryLabelEn: 'Lettering',
      categoryLabelGu: 'અક્ષરલેખન',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Devanagari script circling the forearm in sacred geometric symmetry.',
      descriptionGu: 'પવિત્ર મંત્રનું હાથ પર સુંદર દેવનાગરી અક્ષરલેખન.',
      sizeEstimate: '5 x 2 inches',
    },
    {
      id: 'g10',
      titleEn: 'Warrior Feather & Arrow Compass',
      titleGu: 'તીર-કમાન અને કંપાસ ટેટૂ',
      category: 'custom',
      categoryLabelEn: 'Custom',
      categoryLabelGu: 'કસ્ટમ',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'A symbol of direction, focus, and unwavering ambition on the bicep.',
      descriptionGu: 'લક્ષ્ય અને દિશા દર્શાવતું પાવરફુલ કસ્ટમ ટેટૂ.',
      sizeEstimate: '5 x 2 inches',
    },
    {
      id: 'g11',
      titleEn: 'Lord Ganesha Line Art & Om',
      titleGu: 'શ્રી ગણેશજી અને ઓમ આર્ટ',
      category: 'memorial',
      categoryLabelEn: 'Devotional',
      categoryLabelGu: 'ભક્તિમય',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Modern single-stroke Ganesha silhouette with subtle gold accent ink.',
      descriptionGu: 'નવા શુભારંભ અને રક્ષણ માટે ગણેશજીનું પવિત્ર લાઇન આર્ટ.',
      sizeEstimate: '3.5 x 2.5 inches',
    },
    {
      id: 'g12',
      titleEn: 'King Crown & Personal Monogram',
      titleGu: 'રોયલ ક્રાઉન & મોનોગ્રામ',
      category: 'lettering',
      categoryLabelEn: 'Lettering',
      categoryLabelGu: 'અક્ષરલેખન',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=800&q=80',
      descriptionEn: 'Imperial crown with gothic initial letter for timeless individuality.',
      descriptionGu: 'શાહી તાજ અને પોતાના આદ્યાક્ષરનું રોયલ ટેટૂ.',
      sizeEstimate: '3 x 2 inches',
    },
  ] as GalleryItem[],

  // 4-Step Process
  processSteps: [
    {
      step: '01',
      titleEn: 'Design Concept & Vision',
      titleGu: 'ડિઝાઇન અને વિચાર પસંદગી',
      descriptionEn: 'Browse our extensive catalog or share your reference photos. We discuss meaning, placement, and visual balance.',
      descriptionGu: 'તમારો વિચાર અથવા મનપસંદ ફોટો લાવો. અમે તમારા શરીરના ભાગ અને સાઇઝ મુજબ યોગ્ય સૂચન કરીશું.',
    },
    {
      step: '02',
      titleEn: 'Consultation & Custom Sizing',
      titleGu: 'કન્સલ્ટેશન અને સ્કેચ પ્રિવ્યુ',
      descriptionEn: 'We prepare a digital or stencil blueprint and test exact sizing on your skin so you see the finished look before inking.',
      descriptionGu: 'ડિઝાઇનને સ્ટેન્સિલ દ્વારા તમારી સ્કીન પર મૂકીને ચેક કરવામાં આવે છે જેથી તમને ફાઇનલ લુકનો અંદાજ આવે.',
    },
    {
      step: '03',
      titleEn: 'Precision Sterile Tattooing',
      titleGu: 'સ્ટેરિલાઇઝ્ડ અને સુરક્ષિત ટેટૂઇંગ',
      descriptionEn: 'Performed with fresh, single-use sealed needles opened right before your eyes, top-tier organic pigments, and gentle hands.',
      descriptionGu: 'તમારી નજર સામે ખોલાતી ૧૦૦% સીલબંધ નવી સોય, સર્વોત્તમ ઓર્ગેનિક ઇન્ક અને હાઇજીનિક સાધનો સાથે ટેટૂ.',
    },
    {
      step: '04',
      titleEn: 'Aftercare & Healing Kit',
      titleGu: 'આફ્ટરકેર અને સંપૂર્ણ સાચવણી',
      descriptionEn: 'We bandage the tattoo with medical wrap and provide detailed wash and balm instructions for long-lasting, vibrant healing.',
      descriptionGu: 'ટેટૂ પછી સાવચેતીની સંપૂર્ણ સમજણ અને ઓઇન્ટમેન્ટ માર્ગદર્શન, જેથી તમારો ટેટૂ કાયમ ચમકતો રહે.',
    },
  ],

  // Pricing Tiers
  pricingTiers: [
    {
      nameEn: 'Small / Minimalist',
      nameGu: 'સ્મોલ / મિનિમલ',
      sizeEn: 'Up to 2 inches',
      sizeGu: '૨ ઇંચ સુધી',
      startingAt: '₹500',
      descriptionEn: 'Ideal for initials, wrist mantras, subtle symbols, or minimal finger tattoos.',
      descriptionGu: 'નામનું પહેલું અક્ષર, કાંડા પર ઓમ, તીર કે નાનું પ્રતીક.',
      featuresEn: [
        'Single-use sterile needle',
        'Quick 15–30 min session',
        'Organic jet black pigment',
        'Basic aftercare balm wrap',
      ],
      featuresGu: [
        '૧૦૦% નવી સીલપેક સોય',
        '૧૫ થી ૩૦ મિનિટનો સમય',
        'શુદ્ધ બ્લેક ઓર્ગેનિક ઇન્ક',
        'આફ્ટરકેર માર્ગદર્શન',
      ],
      popular: false,
    },
    {
      nameEn: 'Medium / Script & Tribute',
      nameGu: 'મીડિયમ / નામ & સ્મૃતિ',
      sizeEn: '3 to 5 inches',
      sizeGu: '૩ થી ૫ ઇંચ',
      startingAt: '₹1,800',
      descriptionEn: 'Our most popular choice for Mom-Dad tributes, detailed calligraphy, and forearm bands.',
      descriptionGu: 'મમ્મી-પપ્પાનું ટેટૂ, આકર્ષક કેલિગ્રાફી લખાણ અને ત્રિશૂળ ડિઝાઇન્સ માટે શ્રેષ્ઠ.',
      featuresEn: [
        'Custom calligraphy typography',
        'Detailed line & shadow shading',
        'Free digital sizing preview',
        'Complete healing care kit',
        '1 complimentary touch-up',
      ],
      featuresGu: [
        'કસ્ટમ કેલિગ્રાફી ડિઝાઇન',
        'બારીક લાઇન અને શેડિંગ',
        'ફ્રી સાઇઝ પ્રિવ્યુ',
        'આફ્ટરકેર કિટ શામેલ',
        '૧ ફ્રી ટચ-અપ ગેરંટી',
      ],
      popular: true,
    },
    {
      nameEn: 'Large / Realism & Sleeve',
      nameGu: 'લાર્જ / રિયાલિઝમ & સ્લીવ',
      sizeEn: '6+ inches / Full area',
      sizeGu: '૬+ ઇંચ / મોટું ટેટૂ',
      startingAt: '₹4,500+',
      descriptionEn: 'Masterpiece portraits, photorealistic animals, cover-up overhauls, and sleeve compositions.',
      descriptionGu: 'જીવંત પોટ્રેટ, સિંહ, માયથોલોજીકલ આર્ટ, આખો હાથ કવર કે જૂના ટેટૂનું નવું રૂપ.',
      featuresEn: [
        'Full custom anatomical blueprint',
        'Multi-layer 3D micro-shading',
        'Dedicated extended studio session',
        'Premium protective second-skin wrap',
        'Lifetime pigment vitality guarantee',
      ],
      featuresGu: [
        'સંપૂર્ણ કસ્ટમ કલાત્મક સ્કેચ',
        '3D માઇક્રો શેડિંગ અને રિયાલિઝમ',
        'સ્પેશિયલ પ્રાઇવેટ સેશન',
        'પ્રીમિયમ સેકન્ડ-સ્કીન પાટો',
        'આજીવન ચમકની ગેરંટી',
      ],
      popular: false,
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 't1',
      nameEn: 'Hardik Chaudhari',
      nameGu: 'હાર્દિક ચૌધરી',
      locationEn: 'Bhabhar, Gujarat',
      locationGu: 'ભાભર, ગુજરાત',
      tattooTypeEn: 'Mom-Dad Calligraphy with Heartbeat',
      tattooTypeGu: 'મમ્મી-પપ્પા કેલિગ્રાફી ટેટૂ',
      quoteEn: 'Got my first tattoo here for my parents. Chetan bhai was extremely patient and showed me 5 different fonts before starting. Completely painless and 100% sterile needles opened right in front of me!',
      quoteGu: 'મેં મારું પહેલું ટેટૂ અહીં કરાવ્યું. ચેતનભાઈએ ખૂબ શાંતિથી ૫ અલગ અલગ ફોન્ટ બતાવ્યા. કોઈ દુખાવો નહિ અને મારી નજર સામે નવી સોય ખોલી. ભાભરમાં બેસ્ટ ટેટૂ સ્ટુડિયો છે!',
      rating: 5,
    },
    {
      id: 't2',
      nameEn: 'Pravin Solanki',
      nameGu: 'પ્રવિણ સોલંકી',
      locationEn: 'Vav, Gujarat',
      locationGu: 'વાવ, ગુજરાત',
      tattooTypeEn: 'Mahadev Trishul & Damru Realism',
      tattooTypeGu: 'મહાદેવ ત્રિશૂળ રિયાલિઝમ',
      quoteEn: 'Travelled from Vav just for Tattoo Studio Bhabhar after seeing their Instagram works. The finishing and deep black pigment quality is unmatched in our region. Highly recommend!',
      quoteGu: 'ઇન્સ્ટાગ્રામ પર એમનું કામ જોઈને ખાસ વાવથી આવ્યો હતો. ફિનિશિંગ અને ડીપ બ્લેક ઇન્ક ક્વાલિટી અદ્ભુત છે. સમગ્ર બનાસકાંઠામાં આટલું સરસ કામ ક્યાંય નથી!',
      rating: 5,
    },
    {
      id: 't3',
      nameEn: 'Meera & Rahul',
      nameGu: 'મીરા અને રાહુલ',
      locationEn: 'Deodar / Bhabhar',
      locationGu: 'દિયોદર / ભાભર',
      tattooTypeEn: 'Minimal Couple Anniversary Initials',
      tattooTypeGu: 'કપલ એનિવર્સરી મિનિમલ ટેટૂ',
      quoteEn: 'We wanted delicate fine-line matching tattoos for our first anniversary. They made sure the lines were razor-sharp and thin. The studio vibe is super clean and comfortable for everyone.',
      quoteGu: 'અમારી એનિવર્સરી પર અમે મેચિંગ ટેટૂ કરાવ્યું. બારીક લાઇન અને ફિનિશિંગ બહુ જ સુંદર આવ્યું. સ્ટુડિયોનું વાતાવરણ એકદમ હાઇજીનિક અને સેફ છે.',
      rating: 5,
    },
  ] as TestimonialItem[],

  // Instagram showcase tiles
  instagramShowcase: [
    {
      id: 'ig1',
      imageUrl: '/src/assets/images/tattoo_lettering_showcase_1794472561283.jpg',
      caption: 'Fresh custom script lettering session 🔥 #tattoostudiobhabhar #letteringtattoo',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
    {
      id: 'ig2',
      imageUrl: '/src/assets/images/tattoo_portrait_realism_1794472562330.jpg',
      caption: 'Realistic lion and clock forearm piece for our client 🦁 #bhabhar #tattooguajarat',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
    {
      id: 'ig3',
      imageUrl: '/src/assets/images/tattoo_minimal_couple_1794472563943.jpg',
      caption: 'Clean matching couple fine-line art 🖤 #coupletattoo #minimalist',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
    {
      id: 'ig4',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
      caption: 'Har Har Mahadev! Devotional ink with Trishul & Rudraksha 🙏 #mahadev #bhabhar',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
    {
      id: 'ig5',
      // Placeholder: replace with local client photo if available
      imageUrl: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
      caption: 'Forever gratitude to parents. Mom Dad script tribute ❤️ #momdadtattoo',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
    {
      id: 'ig6',
      imageUrl: '/src/assets/images/hero_tattoo_studio_1794472559662.jpg',
      caption: 'Late evening studio sessions at Vav Road, Bhabhar ✨ Walk-ins & bookings open!',
      link: 'https://www.instagram.com/tattoo_studio_bhabhar',
    },
  ],

  // Hygiene & Safety Promise
  hygieneCommitments: [
    {
      titleEn: '100% Single-Use Needles',
      titleGu: '૧૦૦% નવી સીલપેક સોય',
      descEn: 'Every needle cartridge is opened fresh from gamma-sterilized packaging directly before your session and safely disposed of immediately.',
      descGu: 'દરેક સેશન વખતે તમારી નજર સામે સીલબંધ નવી સોય ખોલવામાં આવે છે અને એક જ વાર ઉપયોગ થાય છે.',
    },
    {
      titleEn: 'Medical-Grade Organic Inks',
      titleGu: 'પ્રમાણિત ઓર્ગેનિક ઇન્ક',
      descEn: 'Only certified, vegan, non-toxic, skin-friendly pigments that preserve their deep luster for years without fading to green.',
      descGu: 'વિશ્વસ્તરીય, ત્વચા માટે સુરક્ષિત અને કાયમી કાળી ચમક જાળવી રાખતી પ્રીમિયમ ઇન્ક.',
    },
    {
      titleEn: 'Hospital-Grade Sterilization',
      titleGu: 'સંપૂર્ણ સેનિટાઈઝ્ડ વાતાવરણ',
      descEn: 'All grip handles, workstations, armrests, and surfaces are disinfected with medical bactericidal sanitizers between every single client.',
      descGu: 'દરેક ગ્રાહક પછી બેઠક, મશીન અને વર્કસ્પેસને તબીબી ધોરણે સંપૂર્ણ સેનિટાઇઝ કરવામાં આવે છે.',
    },
    {
      titleEn: 'Complimentary Aftercare Kit',
      titleGu: 'આફ્ટરકેર માર્ગદર્શન અને સપોર્ટ',
      descEn: 'You receive personalized step-by-step healing instructions and ongoing WhatsApp support until your skin is 100% recovered.',
      descGu: 'ટેટૂ પછીની સંભાળ માટે વિગતવાર સૂચના અને વોટ્સએપ પર ૨૪ કલાક માર્ગદર્શન સહાય.',
    },
  ],

  // FAQs
  faqs: [
    {
      questionEn: 'Does getting a tattoo hurt?',
      questionGu: 'શું ટેટૂ કરાવતી વખતે દુખાવો થાય છે?',
      answerEn: 'Most clients describe it as a minor vibration or cat scratch sensation. Outer arms and forearms are very gentle. Our artists work gently with high-speed rotary machines to minimize any discomfort.',
      answerGu: 'મોટાભાગના લોકોને ફક્ત હળવી ઝણઝણાટી જેવું લાગે છે. હાથ અને કાંડા પર બહુ ઓછો દુખાવો થાય છે. અમારા અનુભવી આર્ટિસ્ટ્સ બહુ હળવા હાથે કામ કરે છે.',
    },
    {
      questionEn: 'What is the starting price for a tattoo?',
      questionGu: 'ટેટૂની શરૂઆતી કિંમત કેટલી છે?',
      answerEn: 'Our basic minimal tattoos and single-word initials start from just ₹500. Medium designs usually range from ₹1,500 to ₹3,500 depending on complexity, size, and body placement.',
      answerGu: 'નાના અક્ષરો અને મિનિમલ ટેટૂ માત્ર ₹૫૦૦ થી શરૂ થાય છે. મધ્યમ અને મોટા ટેટૂની સાઇઝ અને ડિઝાઇન મુજબ વ્યાજબી ભાવ નક્કી થાય છે.',
    },
    {
      questionEn: 'Can you cover up or fix my old tattoo?',
      questionGu: 'શું મારો જૂનો કે ખરાબ થયેલો ટેટૂ સુધારી શકાય?',
      answerEn: 'Yes! We specialize in clever cover-ups and re-shading. Send us a clear photo of your existing tattoo on WhatsApp (+91 96380 12558) and we will suggest custom cover-up ideas.',
      answerGu: 'હા, ચોક્કસ! અમે જૂના કે બગડેલા ટેટૂ પર સુંદર નવી ડિઝાઇન બનાવી શકીએ છીએ. તમારા જૂના ટેટૂનો ફોટો વોટ્સએપ પર મોકલી ફ્રી સલાહ મેળવો.',
    },
    {
      questionEn: 'Do I need an appointment or can I walk in?',
      questionGu: 'શું અગાઉથી એપોઇન્ટમેન્ટ લેવી જરૂરી છે?',
      answerEn: 'Walk-ins are always welcome during our open hours (11 AM to 9 PM). However, for custom drawings or large portrait tattoos, booking on WhatsApp ensures no waiting time.',
      answerGu: 'તમે કોઈપણ સમયે સીધા સ્ટુડિયો પર આવી શકો છો (સવારે ૧૧ થી રાત્રે ૯). પરંતુ કસ્ટમ ડિઝાઇન માટે અગાઉથી વોટ્સએપ પર મેસેજ કરવો સારો રહે છે.',
    },
  ],
};
