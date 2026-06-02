// src/data/pricingData.ts

export const categories = [
  { id: 'full-detail', label: 'Interior & Exterior' },
  { id: 'interior-only', label: 'Interior Packages' },
  { id: 'exterior-only', label: 'Exterior Packages' },
  { id: 'specialty', label: 'Specialty & Add-ons' },
];

export const pricingData = {
  'full-detail': {
    title: 'Interior & Exterior',
    description: 'The ultimate inside-out transformation for your vehicle.',
    isGrid: false,
    packages: [
      {
        name: 'Signature Package',
        price: '250',
        popular: false,
        features: [
          'Wheel & Tire Cleaning / Shine', 'Pre-Wash & Bug Removal', 'Snow Foam Hand Wash', 
          'Light Door Jam Wipe Down', 'Exterior Window Cleaning', 'Glossy Finish', 
          'Full Interior Vacuum', 'All Hard Surfaces Scrubbed', 'Seat Cleaning (Wipe down)', 'Light Crevice Cleaning'
        ]
      },
      {
        name: 'Premium Package',
        price: '340',
        popular: true,
        features: [
          'Everything in Signature', 'Clay Mitt Decontamination', 'Protective Wax (1-2 Months)', 
          'Heavy Carpet Shampoo', 'Steam Cleaning (Vents/Surfaces)', 'Seat Deep Cleaning & Conditioning', 
          'Medium Crevice Cleaning', 'All Crevices Blown Out With Air'
        ]
      },
      {
        name: 'Elite Package',
        price: '500',
        popular: false,
        features: [
          'Everything in Premium', 'Iron Decontamination', 'Ceramic Wax Protection', 
          'Engine Bay Detailing', 'Underneath Car Cleaning', 'Stain Extraction', 
          'Console & Glovebox Deep Clean', 'Salt Stain & Headliner Cleaning', 'Tornador Carpet Deep Clean'
        ]
      }
    ]
  },
  'interior-only': {
    title: 'Interior Only',
    description: 'Breathe new life into your cabin. Perfect for post-winter cleanups or family vehicles.',
    isGrid: false,
    packages: [
      {
        name: 'Signature Interior',
        price: '170',
        popular: false,
        features: ['Full Vacuum (Cracks & Crevices)', 'Interior Window Cleaning', 'All Hard Surfaces Scrubbed', 'Seat Cleaning Wipe Down', 'Trunk & Cargo Area Cleaning']
      },
      {
        name: 'Premium Interior',
        price: '320',
        popular: true,
        features: ['Everything in Signature', 'Light Carpet Shampoo', 'Steam Cleaning (Vents/Surfaces)', 'Seat Deep Cleaning', 'All Crevices Blown Out With Air', 'Door Jam Wipe Down']
      },
      {
        name: 'Elite Interior',
        price: '400',
        popular: false,
        features: ['Everything in Premium', 'Heavy Carpet & Upholstery Shampoo', 'Stain Extraction', 'Console/Glovebox Deep Clean', 'Heavy Crevice Cleaning', 'Leather/Plastic Ceramic Protection']
      }
    ]
  },
  'exterior-only': {
    title: 'Exterior Only',
    description: 'Restore the shine and protect your paint from the harsh Canadian elements.',
    isGrid: false,
    packages: [
      {
        name: 'Signature Exterior',
        price: '100',
        popular: false,
        features: ['Wheel & Tire Cleaning', 'Snow Foam Hand Wash', 'Bug Removal', 'Exterior Windows', 'Glossy Finish']
      },
      {
        name: 'Premium Exterior',
        price: '130',
        popular: true,
        features: ['Everything in Signature', 'Wheel Well Cleaning', 'Clay Mitt Decontamination', '3-6 Month Spray Sealant']
      },
      {
        name: 'Elite Exterior',
        price: '200',
        popular: false,
        features: ['Everything in Premium', 'Ceramic Tire Shine', 'Deep Wheel Well & Door Jam Clean', 'Iron Removal (Decontamination)', 'Machine Wax Protection', 'Exhaust Tip Cleaning']
      }
    ]
  },
  'specialty': {
    title: 'Specialty & Add-ons',
    description: 'Targeted services to handle specific issues or provide long-term ceramic protection.',
    isGrid: true, 
    packages: [
      { name: 'Ceramic Coating (No Correction)', price: '650', popular: false, features: ['Ideal for new cars', 'Full decontamination', 'Years of protection'] },
      { name: 'Paint Correction + Ceramic', price: '1,200', popular: false, features: ['Removes swirls & scratches', 'Flawless finish', '1-6 years protection'] },
      { name: 'Full Paint Correction', price: '600', popular: false, features: ['Removes 85%+ defects', 'Two-stage process', 'Mirror-like finish'] },
      { name: 'Wheel Restoration & Coating', price: '250', popular: false, features: ['Curb rash repair', 'Repels brake dust', 'Extreme gloss'] },
      { name: 'Headlight Restoration', price: '80', popular: false, features: ['Removes yellowing & haze', 'Improves night safety', 'UV sealant included'] },
      { name: 'Engine Bay Cleaning', price: '45', popular: false, features: ['Thorough degreasing', 'Safe for all components'] },
      { name: 'Salt Stain Removal', price: '40', popular: false, features: ['Neutralizes winter salt', 'Protects against corrosion'] },
      { name: 'Pet Hair Removal', price: '40', popular: false, features: ['Thorough removal', 'Specialized tools used'] },
    ]
  }
};