export const BRAND_LOGO = 'https://ik.imagekit.io/ntmixl0bm/1002418972-removebg-preview.png?updatedAt=1790315669134';

/**
 * Studio media captured at Mission StayFit. Files live in `public/media/`
 * so large video assets stay out of the JS bundle and stream on demand.
 */
export const PHOTOS = {
  independenceDay: '/media/photos/studio-independence-day.jpg',
  communityHall: '/media/photos/studio-community-hall.jpg',
  flagTeam: '/media/photos/studio-flag-team.jpg',
  stabilityBall: '/media/photos/tabata-stability-ball.jpg',
  classYoga: '/media/photos/yoga-batch.jpeg',
  classTabata: '/media/photos/tabata batch.jpeg',
  
  classZumba: '/media/photos/zumba-batch.jpeg'
};

export const VIDEOS = {
  yogaBatch: {
    src: 'https://ik.imagekit.io/ntmixl0bm/yoga/VID-20260908-WA0007.mp4',
    poster: 'https://ik.imagekit.io/ntmixl0bm/yoga%20batch.jpeg'
  },
  zumbaBatch: {
    src: 'https://ik.imagekit.io/ntmixl0bm/VID_20260813_221157_356_bsl.mp4',
    poster: 'https://ik.imagekit.io/ntmixl0bm/zumba%20batch.jpeg'
  },
  tabataBatch: {
    src: 'https://ik.imagekit.io/ntmixl0bm/tabata/WhatsApp%20Video%202026-09-24%20at%2011.51.34%20PM.mp4',
    poster: 'https://ik.imagekit.io/ntmixl0bm/tabata%20batch.jpeg'
  }
};

export const HERO_BACKGROUND = PHOTOS.independenceDay;

export const HERO_DATA = {
  badge: "BOUTIQUE WELLNESS & FITNESS STUDIO",
  headline: "MOVE BETTER. FEEL STRONGER. LIVE FULLY.",
  tagline: "MOVE. BREATHE. BECOME.",
  subtext: "Your space to move, sweat, breathe, and become the strongest version of yourself.",
  stats: [
    { value: "4.9★", label: "Member Satisfaction" },
    { value: "3", label: "Signature Batches" },
    { value: "100%", label: "Certified Instructors" },
    { value: "1000+", label: "Lives Transformed" }
  ]
};

export const CLASS_OPTIONS = [
  { id: 'yoga', name: 'Yoga & Breath', icon: '🧘', desc: 'Flow & Balance' },
  { id: 'tabata', name: 'Tabata HIIT', icon: '🔥', desc: 'High Intensity' },
  { id: 'zumba', name: 'Zumba Party', icon: '💃', desc: 'Cardio Dance' },
  { id: 'garba', name: 'Garba Workshop', icon: '✨', desc: 'Navratri Special' },
];

export const ABOUT_DATA = {
  headline: "Wellness Is Not a Destination. It's a Lifestyle.",
  subtitle: "AN ELEVATED BOUTIQUE EXPERIENCE",
  description: "Mission StayFit was founded on a simple truth: fitness should energize your soul, not drain it. We created a welcoming, high-end sanctuary where movement becomes art, strength is built with precision, and every breath brings clarity.",
  highlights: [
    {
      title: "Mindful Architecture",
      desc: "Designed with generous whitespace, soothing tones, and natural sunlight for optimal mental clarity."
    },
    {
      title: "Curated Group Energy",
      desc: "Intimate batch sizes ensuring personal instruction and a tight-knit supportive community."
    },
    {
      title: "Holistic Progression",
      desc: "Combining high-intensity conditioning, rhythmic dance cardio, and restorative breathwork."
    }
  ],
  images: {
    main: PHOTOS.communityHall,
    secondary: 'https://ik.imagekit.io/ntmixl0bm/WhatsApp%20Image%202026-09-25%20at%2011.22.45%20AM.jpeg',
    tertiary: 'https://ik.imagekit.io/ntmixl0bm/VID_20260923_032239_690_bsl.mp4'
  }
};

export const CLASSES_DATA = [
  {
    id: "yoga",
    tag: "🧘 YOGA",
    title: "Yoga & Breathwork",
    tagline: "Find your balance. Build flexibility. Breathe deeper.",
    description: "Immerse yourself in fluid Vinyasa flows, alignment-focused Hatha sessions, and deeply restorative Yin yoga paired with conscious pranayama breathwork.",
    intensity: "All Levels • Low to Medium",
    duration: "60 Mins",
    calories: "250 - 350 kcal",
    instructor: "Elena Rostova",
    accentColor: "#3E4D40",
    bgGradient: "from-[#3E4D40]/10 via-transparent to-transparent",
    image: PHOTOS.classYoga,
    features: [
      "Improve spinal flexibility & core stability",
      "De-stress nervous system through Pranayama",
      "Build lean muscle strength & balance",
      "Suitable for beginners to advanced practitioners"
    ]
  },
  {
    id: "tabata",
    tag: "🔥 TABATA",
    title: "Tabata High Energy",
    tagline: "High intensity. Maximum energy. Powerful results.",
    description: "A fast-paced 20-seconds-on, 10-seconds-off high-intensity protocol designed to scorch calories, boost cardiovascular stamina, and tone total body strength.",
    intensity: "Intermediate to Advanced • High",
    duration: "60 Mins",
    calories: "450 - 650 kcal",
    instructor: "Marcus Vance",
    accentColor: "#C26D53",
    bgGradient: "from-[#C26D53]/10 via-transparent to-transparent",
    image: PHOTOS.classTabata,
    features: [
      "Maximum fat burn in short interval bursts",
      "Boost metabolic rate for up to 24h post-workout",
      "Full-body conditioning without bulky equipment",
      "High-tempo soundtrack to keep energy peak"
    ]
  },
  {
    id: "zumba",
    tag: "💃 ZUMBA",
    title: "Zumba Dance Fitness",
    tagline: "Workout? Yes. Party? Also yes.",
    description: "An exhilarating, high-vibe dance party combining Latin rhythms, hip-hop grooves, and cardio conditioning. Release stress, smile, and sweat to the rhythm.",
    intensity: "All Levels • High Fun",
    duration: "60 Mins",
    calories: "400 - 550 kcal",
    instructor: "Sophia & Team",
    accentColor: "#D47A60",
    bgGradient: "from-[#D47A60]/10 via-transparent to-transparent",
    image: PHOTOS.classZumba,
    features: [
      "High-energy cardio disguised as pure dance",
      "Easy-to-follow choreography for everyone",
      "Endorphin boost & mental stress relief",
      "Electric, supportive community atmosphere"
    ]
  },
  {
    id: "garba",
    tag: "✨ GARBA",
    title: "Navratri Garba Workshop",
    tagline: "नवरात्रि की रौनक, गरबा के संग!",
    description: "Join our 10-days intensive Garba Workshop (28th Sept - 10th Oct). Beginner to advanced training, step-by-step learning, and special Navratri performance preparation. Kids, teens, and ladies all welcome!",
    intensity: "All Levels • High Energy",
    duration: "60 Mins",
    calories: "300 - 500 kcal",
    instructor: "Kanchan Pawar",
    accentColor: "#E31837",
    bgGradient: "from-[#E31837]/10 via-transparent to-transparent",
    image: PHOTOS.independenceDay,
    features: [
      "Beginner से Advanced तक Training",
      "Easy & Fun Step-by-Step Learning",
      "Special Navratri Performance Preparation",
      "Only ₹800/person (₹600/person for group of 5)"
    ]
  }
];

export const WHY_US_DATA = [
  {
    id: "purpose",
    number: "01",
    headline: "MOVE WITH PURPOSE",
    subtext: "Every session is meticulously programmed to elevate strength, endurance, and mental clarity without burnout."
  },
  {
    id: "everybody",
    number: "02",
    headline: "FOR EVERY BODY",
    subtext: "Whether you are taking your first step into fitness or refining your practice, our expert instructors adapt movements to your level."
  },
  {
    id: "community",
    number: "03",
    headline: "ENERGY. COMMUNITY. PROGRESS.",
    subtext: "More than just a workout studio — a warm, welcoming community of like-minded individuals cheering each other on."
  },
  {
    id: "sanctuary",
    number: "04",
    headline: "LUXURY AMBIENCE",
    subtext: "State-of-the-art acoustics, purified air, premium mat equipment, and high-standard hygiene for your peace of mind."
  }
];

/**
 * A fixed three-row mosaic: each row pairs a different rectangle shape
 * (2:1 wide, 1:2 portrait reel, 1:1 square, 4:1 banner) so the grid reads
 * as a composition rather than a uniform thumbnail wall.
 */
export const GALLERY_DATA = [
  {
    id: "independence-day",
    type: "image",
    title: "Independence Day Celebration",
    category: "Studio",
    image: PHOTOS.independenceDay,
    span: "col-span-1 sm:col-span-2 row-span-1"
  },
  {
    id: "yoga-reel",
    type: "video",
    title: "Power Yoga Batch",
    category: "Yoga",
    video: VIDEOS.yogaBatch.src,
    image: VIDEOS.yogaBatch.poster,
    span: "col-span-1 row-span-2"
  },
  {
    id: "zumba-reel",
    type: "video",
    title: "Zumba Batch",
    category: "Zumba",
    video: VIDEOS.zumbaBatch.src,
    image: VIDEOS.zumbaBatch.poster,
    span: "col-span-1 row-span-2"
  },
  {
    id: "tabata-reel",
    type: "video",
    title: "Tabata Batch",
    category: "Tabata",
    video: VIDEOS.tabataBatch.src,
    image: VIDEOS.tabataBatch.poster,
    span: "col-span-1 sm:col-span-2 row-span-1"
  },
  {
    id: "community-hall",
    type: "image",
    title: "Inside Mission StayFit",
    category: "Studio",
    image: PHOTOS.communityHall,
    span: "col-span-1 sm:col-span-2 md:col-span-4 row-span-2"
  }
];

export const SCHEDULE_DATA = [
  {
    id: "sch-yoga",
    className: "Yoga & Breath Flow",
    type: "Yoga",
    time: "06:00 AM - 07:00 AM",
    days: "Mon - Sat",
    session: "Morning Batch",
    instructor: "Elena Rostova",
    spotsLeft: 4,
    status: "Open"
  },
  {
    id: "sch-tabata",
    className: "Tabata HIIT Conditioning",
    type: "Tabata",
    time: "07:15 AM - 08:15 AM",
    days: "Mon - Sat",
    session: "Morning Batch",
    instructor: "Marcus Vance",
    spotsLeft: 3,
    status: "Filling Fast"
  },
  {
    id: "sch-zumba",
    className: "Zumba Dance Fitness",
    type: "Zumba",
    time: "05:30 PM - 06:30 PM",
    days: "Mon - Sat",
    session: "Evening Batch",
    instructor: "Sophia & Team",
    spotsLeft: 5,
    status: "Open"
  },
  {
    id: "sch-garba-m",
    className: "Garba Workshop",
    type: "Garba",
    time: "11:00 AM - 1:00 PM (Hourly Batches)",
    days: "28th Sept - 10th Oct",
    session: "Morning Batches",
    instructor: "Kanchan Pawar",
    spotsLeft: 10,
    status: "Filling Fast"
  },
  {
    id: "sch-garba-e",
    className: "Garba Workshop",
    type: "Garba",
    time: "4:00 PM - 7:00 PM (Hourly Batches)",
    days: "28th Sept - 10th Oct",
    session: "Evening Batches",
    instructor: "Kanchan Pawar",
    spotsLeft: 8,
    status: "Filling Fast"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "I’ve been part of the Zumba batch for the past few months, and it’s been an amazing experience. The energetic sessions, trending reels, and positive environment make every class fun and refreshing. That one hour is great for both my body and happiness, and I always look forward to every session. Thank you, Sir, for the amazing energy, and Ma’am, for always keeping up with the latest trends!",
    name: "Ranjana Chavan",
    role: "Member",
    batch: "Zumba Batch",
    initials: "RC"
  },
  {
    id: 2,
    quote: "आजच्या योगाभ्यास मध्ये जी Activity मॅडमने घेतली त्यामुळे खूप छान आणि रिलॅक्स वाटले. 😊 असेच मॅडम रोज आमच्यासाठी नवीन Activities घेऊन येतात त्यामुळे 😊 फ्रेश तर वाटतेच आणि आमचा उत्साह वाढतो. Thanku Madam 🙏❤️",
    name: "Sheela Pawar",
    role: "Member",
    batch: "Yoga Batch",
    initials: "SP"
  },
  {
    id: 3,
    quote: "I’ve been part of the High-Intensity Workout batch for the past six months, and the transformation has been truly amazing. What I love most is that Sir brings a new workout every day using dumbbells, bands, steppers, and more, which keeps every session fresh and exciting. There’s always a new challenge to look forward to, and my six-month transformation has been unbelievable. Thank you so much, Sir, for the constant motivation and amazing workouts!",
    name: "Bhumi Waikos",
    role: "Member",
    batch: "High-Intensity Workout Batch",
    initials: "BW"
  }
];

export const FOOTER_DATA = {
  address: "Mission Stay Fit Wellness Studio, Beside Balaji Towers, near old Gokul sweets, N4, CIDCO.",
  phone: "8208536490 / 8329283681",
  email: "hello@missionstayfit.com",
  instagram: "@missionstayfit",
  instagramUrl: "https://www.instagram.com/missionstayfit/",
  timing: "Mon - Sat: 6:00 AM - 9:00 PM | Sun: 7:00 AM - 1:00 PM"
};
