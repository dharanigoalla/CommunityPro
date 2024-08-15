const serviceCategories = [
  {
    id: 'a1b2c3d4-e5f6-11ec-82a8-0242ac130003',
    name: 'Home Services',
    description:
      'Includes house repair, plumbing, painting, and other home maintenance services.',
    service_ids: [
      '1a2b3c4d-1111-11ec-82a8-0242ac130003',
      '2b3c4d5e-2222-11ec-82a8-0242ac130003',
      '3c4d5e6f-3333-11ec-82a8-0242ac130003',
      '4d5e6f7g-4444-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/house.png',
  },
  {
    id: 'b2c3d4e5-f6a7-11ec-82a8-0242ac130003',
    name: 'Classes & Activities',
    description:
      'Various classes such as swimming, music, art, and other community activities.',
    service_ids: [
      '5e6f7g8h-5555-11ec-82a8-0242ac130003',
      '6f7g8h9i-6666-11ec-82a8-0242ac130003',
      '7g8h9i0j-7777-11ec-82a8-0242ac130003',
      '8h9i0j1k-8888-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/extracurricular-activities.png',
  },
  {
    id: 'c3d4e5f6-g7h8-11ec-82a8-0242ac130003',
    name: 'Healthcare',
    description:
      'Healthcare services including family doctors, clinics, and emergency care.',
    service_ids: [
      '9i0j1k2l-9999-11ec-82a8-0242ac130003',
      '0j1k2l3m-aaaa-11ec-82a8-0242ac130003',
      '1k2l3m4n-bbbb-11ec-82a8-0242ac130003',
      '2l3m4n5o-cccc-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/healthcare.png',
  },
  {
    id: 'd4e5f6g7-h8i9-11ec-82a8-0242ac130003',
    name: 'Emergency Services',
    description:
      'Information on emergency services like police, fire department, and ambulance.',
    service_ids: [
      '3m4n5o6p-dddd-11ec-82a8-0242ac130003',
      '4n5o6p7q-eeee-11ec-82a8-0242ac130003',
      '5o6p7q8r-ffff-11ec-82a8-0242ac130003',
      '6p7q8r9s-gggg-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/emergency-call.png',
  },
  {
    id: 'e5f6g7h8-i9j0-11ec-82a8-0242ac130003',
    name: 'Community Support',
    description:
      'Support services for housing, food, and financial assistance.',
    service_ids: [
      '7q8r9s0t-hhhh-11ec-82a8-0242ac130003',
      '8r9s0t1u-iiii-11ec-82a8-0242ac130003',
      '9s0t1u2v-jjjj-11ec-82a8-0242ac130003',
      '0t1u2v3w-kkkk-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/social-care.png',
  },
  {
    id: 'f6g7h8i9-j0k1-11ec-82a8-0242ac130003',
    name: 'Education',
    description:
      'Education services including schools, tutoring, and special education.',
    service_ids: [
      '1u2v3w4x-llll-11ec-82a8-0242ac130003',
      '2v3w4x5y-mmmm-11ec-82a8-0242ac130003',
      '3w4x5y6z-nnnn-11ec-82a8-0242ac130003',
      '4x5y6z7a-oooo-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/education.png',
  },
  {
    id: 'g7h8i9j0-k1l2-11ec-82a8-0242ac130003',
    name: 'Transportation',
    description: 'Public and private transportation options in the community.',
    service_ids: [
      '5y6z7a8b-pppp-11ec-82a8-0242ac130003',
      '6z7a8b9c-qqqq-11ec-82a8-0242ac130003',
      '7a8b9c0d-rrrr-11ec-82a8-0242ac130003',
      '8b9c0d1e-ssss-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/transportation.png',
  },
  {
    id: 'h8i9j0k1-l2m3-11ec-82a8-0242ac130003',
    name: 'Parks & Recreation',
    description:
      'Details about local parks, recreational areas, and outdoor activities.',
    service_ids: [
      '9c0d1e2f-tttt-11ec-82a8-0242ac130003',
      '0d1e2f3g-uuuu-11ec-82a8-0242ac130003',
      '1e2f3g4h-vvvv-11ec-82a8-0242ac130003',
      '2f3g4h5i-wwww-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/park.png',
  },
  {
    id: 'i9j0k1l2-m3n4-11ec-82a8-0242ac130003',
    name: 'Local Businesses',
    description:
      'Directory of local businesses, shops, and services available in the community.',
    service_ids: [
      '3g4h5i6j-xxxx-11ec-82a8-0242ac130003',
      '4h5i6j7k-yyyy-11ec-82a8-0242ac130003',
      '5i6j7k8l-zzzz-11ec-82a8-0242ac130003',
      '6j7k8l9m-aaaaa-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/shop-local.png',
  },
  {
    id: 'j0k1l2m3-n4o5-11ec-82a8-0242ac130003',
    name: 'Events & Festivals',
    description:
      'Information on upcoming events, festivals, and cultural activities.',
    service_ids: [
      '7k8l9m0n-bbbbb-11ec-82a8-0242ac130003',
      '8l9m0n1o-ccccc-11ec-82a8-0242ac130003',
      '9m0n1o2p-ddddd-11ec-82a8-0242ac130003',
      '0n1o2p3q-eeeee-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/diwali.png',
  },
  {
    id: 'k1l2m3n4-o5p6-11ec-82a8-0242ac130003',
    name: 'Volunteer Opportunities',
    description: 'List of volunteer opportunities in the community.',
    service_ids: [
      '1o2p3q4r-fffff-11ec-82a8-0242ac130003',
      '2p3q4r5s-ggggg-11ec-82a8-0242ac130003',
      '3q4r5s6t-hhhhh-11ec-82a8-0242ac130003',
      '4r5s6t7u-iiiii-11ec-82a8-0242ac130003',
    ],
    imageUrl: '/assets/icons/volunteer.png',
  },
];

const TopServiceCategories = serviceCategories.slice(0, 4);

const services = [
  {
    id: '1a2b3c4d-1111-11ec-82a8-0242ac130003',
    name: 'Plumbing',
    description: 'Professional plumbing services for residential properties.',
    imageUrl: '/assets/icons/plumber.png',
  },
  {
    id: '2b3c4d5e-2222-11ec-82a8-0242ac130003',
    name: 'Electrical Repair',
    description:
      'Licensed electricians for home electrical repairs and installations.',
    imageUrl: '/assets/icons/electrician.png',
  },
  {
    id: '3c4d5e6f-3333-11ec-82a8-0242ac130003',
    name: 'Painting Services',
    description: 'Interior and exterior painting services.',
    imageUrl: '/assets/icons/painting.png',
  },
  {
    id: '4d5e6f7g-4444-11ec-82a8-0242ac130003',
    name: 'Handyman',
    description: 'General handyman services for small repairs and maintenance.',
    imageUrl: '/assets/icons/handyMan.png',
  },
  {
    id: '5e6f7g8h-5555-11ec-82a8-0242ac130003',
    name: 'Swimming Classes',
    description: 'Swimming lessons for all ages and skill levels.',
    imageUrl: '/assets/icons/swimming.png',
  },
  {
    id: '6f7g8h9i-6666-11ec-82a8-0242ac130003',
    name: 'Music Lessons',
    description: 'Private and group music lessons for various instruments.',
    imageUrl: '/assets/icons/music.png',
  },
  {
    id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
    name: 'Art Classes',
    description: 'Art classes including painting, drawing, and sculpture.',
    imageUrl: '/assets/icons/art.png',
  },
  {
    id: '8h9i0j1k-8888-11ec-82a8-0242ac130003',
    name: 'Yoga Classes',
    description: 'Yoga sessions for relaxation and fitness.',
    imageUrl: '/assets/icons/yoga.png',
  },
  {
    id: '9i0j1k2l-9999-11ec-82a8-0242ac130003',
    name: 'Family Doctors',
    description: 'General practitioners for family health care.',
    imageUrl: '/assets/icons/medical-team.png',
  },
  {
    id: '0j1k2l3m-aaaa-11ec-82a8-0242ac130003',
    name: 'Dental Clinics',
    description: 'Comprehensive dental care services.',
    imageUrl: '/assets/icons/dentalcare.png',
  },
  {
    id: '1k2l3m4n-bbbb-11ec-82a8-0242ac130003',
    name: 'Pediatricians',
    description: 'Specialized healthcare services for children.',
    imageUrl: '/assets/icons/pediatrician.png',
  },
  {
    id: '2l3m4n5o-cccc-11ec-82a8-0242ac130003',
    name: 'Emergency Care',
    description: 'Emergency medical services available 24/7.',
    imageUrl: '/assets/icons/emergency-call.png',
  },
  {
    id: '3m4n5o6p-dddd-11ec-82a8-0242ac130003',
    name: 'Police Department',
    description: 'Local police department contact information and services.',
    imageUrl: '/assets/icons/handyMan.png',
  },
  {
    id: '4n5o6p7q-eeee-11ec-82a8-0242ac130003',
    name: 'Fire Department',
    description: 'Fire safety and emergency response services.',
    imageUrl: '/assets/icons/handyMan.png',
  },
  {
    id: '5o6p7q8r-ffff-11ec-82a8-0242ac130003',
    name: 'Ambulance Services',
    description: 'Emergency ambulance services for medical emergencies.',
    imageUrl: '/assets/icons/emergency-call.png',
  },
  {
    id: '6p7q8r9s-gggg-11ec-82a8-0242ac130003',
    name: 'Disaster Preparedness',
    description: 'Resources and training for disaster preparedness.',
    imageUrl: '/assets/icons/emergency-call.png',
  },
  {
    id: '7q8r9s0t-hhhh-11ec-82a8-0242ac130003',
    name: 'Closed Community Houses',
    description: 'Housing and support services for closed communities.',
    imageUrl: '/assets/icons/house.png',
  },
  {
    id: '8r9s0t1u-iiii-11ec-82a8-0242ac130003',
    name: 'Food Banks',
    description: 'Food distribution services for those in need.',
    imageUrl: '/assets/icons/handyMan.png',
  },
  {
    id: '9s0t1u2v-jjjj-11ec-82a8-0242ac130003',
    name: 'Counseling Services',
    description: 'Mental health and counseling support services.',
  },
  {
    id: '0t1u2v3w-kkkk-11ec-82a8-0242ac130003',
    name: 'Financial Assistance',
    description: 'Programs offering financial aid and support.',
  },
  {
    id: '1u2v3w4x-llll-11ec-82a8-0242ac130003',
    name: 'Elementary Schools',
    description: 'List of local elementary schools.',
  },
  {
    id: '2v3w4x5y-mmmm-11ec-82a8-0242ac130003',
    name: 'High Schools',
    description: 'Information on local high schools.',
  },
  {
    id: '3w4x5y6z-nnnn-11ec-82a8-0242ac130003',
    name: 'Tutoring Services',
    description: 'Private tutoring services for various subjects.',
  },
  {
    id: '4x5y6z7a-oooo-11ec-82a8-0242ac130003',
    name: 'Special Education',
    description: 'Resources and services for special education.',
  },
  {
    id: '5y6z7a8b-pppp-11ec-82a8-0242ac130003',
    name: 'Public Transit',
    description: 'Information on local bus and train routes.',
  },
  {
    id: '6z7a8b9c-qqqq-11ec-82a8-0242ac130003',
    name: 'Carpooling',
    description: 'Carpooling services for commuters.',
  },
  {
    id: '7a8b9c0d-rrrr-11ec-82a8-0242ac130003',
    name: 'Taxi Services',
    description: 'Local taxi and ride-sharing services.',
  },
  {
    id: '8b9c0d1e-ssss-11ec-82a8-0242ac130003',
    name: 'Bike Rentals',
    description: 'Bike rental services and cycling routes.',
  },
  {
    id: '9c0d1e2f-tttt-11ec-82a8-0242ac130003',
    name: 'Local Parks',
    description: 'List of parks and green spaces in the community.',
  },
  {
    id: '0d1e2f3g-uuuu-11ec-82a8-0242ac130003',
    name: 'Sports Facilities',
    description: 'Information on sports facilities and leagues.',
  },
  {
    id: '1e2f3g4h-vvvv-11ec-82a8-0242ac130003',
    name: 'Hiking Trails',
    description: 'Details about local hiking and biking trails.',
  },
  {
    id: '2f3g4h5i-wwww-11ec-82a8-0242ac130003',
    name: 'Community Centers',
    description: 'Community centers offering various recreational activities.',
  },
  {
    id: '3g4h5i6j-xxxx-11ec-82a8-0242ac130003',
    name: 'Grocery Stores',
    description: 'Local grocery stores and supermarkets.',
  },
  {
    id: '4h5i6j7k-yyyy-11ec-82a8-0242ac130003',
    name: 'Restaurants',
    description: 'List of local restaurants and cafes.',
  },
  {
    id: '5i6j7k8l-zzzz-11ec-82a8-0242ac130003',
    name: 'Retail Shops',
    description: 'Local retail shops and boutiques.',
  },
  {
    id: '6j7k8l9m-aaaaa-11ec-82a8-0242ac130003',
    name: 'Auto Services',
    description: 'Car repair and maintenance services.',
  },
  {
    id: '7k8l9m0n-bbbbb-11ec-82a8-0242ac130003',
    name: 'Cultural Festivals',
    description: 'Details on cultural festivals happening in the community.',
  },
  {
    id: '8l9m0n1o-ccccc-11ec-82a8-0242ac130003',
    name: 'Community Fairs',
    description: 'Information on local community fairs and markets.',
  },
  {
    id: '9m0n1o2p-ddddd-11ec-82a8-0242ac130003',
    name: 'Concerts',
    description: 'Upcoming concerts and live music events.',
  },
  {
    id: '0n1o2p3q-eeeee-11ec-82a8-0242ac130003',
    name: 'Workshops',
    description: 'Workshops and seminars on various topics.',
  },
  {
    id: '1o2p3q4r-fffff-11ec-82a8-0242ac130003',
    name: 'Environmental Cleanup',
    description: 'Volunteer for local environmental cleanup efforts.',
  },
  {
    id: '2p3q4r5s-ggggg-11ec-82a8-0242ac130003',
    name: 'Food Distribution',
    description: 'Assist with food distribution programs.',
  },
  {
    id: '3q4r5s6t-hhhhh-11ec-82a8-0242ac130003',
    name: 'Animal Shelters',
    description: 'Volunteer opportunities at local animal shelters.',
  },
  {
    id: '4r5s6t7u-iiiii-11ec-82a8-0242ac130003',
    name: 'Community Outreach',
    description: 'Participate in community outreach and support programs.',
  },
];

const serviceProviders = [
  {
    id: '1a2b3c4d-1111-11ec-82a8-0242ac130003',
    name: 'Plumbing',
    title: 'Expert Plumbing Services',
    description:
      'Reliable plumbing services for your home, including leak repairs, pipe installations, and more.',
    provider: 'John Doe',
    phone: ['123-456-7890', '551-260-6654'],
    email: 'johndoe@example.com',
    address: '123 Main St, Anytown, USA',
    imageUrl: 'https://example.com/images/plumbing.jpg',
    service_id: '1a2b3c4d-1111-11ec-82a8-0242ac130003',
  },
  {
    id: '2b3c4d5e-2222-11ec-82a8-0242ac130003',
    name: 'Electrical Repair',
    title: 'Licensed Electrical Repair',
    description:
      'Professional electricians ready to handle all your home electrical repair needs.',
    provider: 'Jane Smith',
    phone: ['123-456-7890', '551-260-6654'],
    email: 'janesmith@example.com',
    address: '456 Elm St, Anytown, USA',
    imageUrl: 'https://example.com/images/electrical_repair.jpg',
    service_id: '2b3c4d5e-2222-11ec-82a8-0242ac130003',
  },
  {
    id: '3c4d5e6f-3333-11ec-82a8-0242ac130003',
    name: 'House Painting',
    title: 'Professional House Painting',
    description:
      'Top-quality painting services for your home, both interior and exterior.',
    provider: 'Mike Johnson',
    phone: ['123-456-7890', '551-260-6654'],
    email: 'mikejohnson@example.com',
    address: '789 Oak St, Anytown, USA',
    imageUrl: 'https://example.com/images/house_painting.jpg',
    service_id: '3c4d5e6f-3333-11ec-82a8-0242ac130003',
  },
  {
    id: '4d5e6f7g-4444-11ec-82a8-0242ac130003',
    name: 'Carpentry',
    title: 'Custom Carpentry Services',
    description:
      'Expert carpentry for custom furniture, home repairs, and more.',
    provider: 'Sarah Lee',
    phone: ['987-654-3210'],
    email: 'sarahlee@example.com',
    address: '321 Pine St, Anytown, USA',
    imageUrl: 'https://example.com/images/carpentry.jpg',
    service_id: '4d5e6f7g-4444-11ec-82a8-0242ac130003',
  },
  {
    id: '5e6f7g8h-5555-11ec-82a8-0242ac130003',
    name: 'Swimming Classes',
    title: 'Beginner to Advanced Swimming Lessons',
    description:
      'Swimming lessons for all ages, taught by certified instructors.',
    provider: 'Emily Davis',
    phone: ['333-222-1111'],
    email: 'emilydavis@example.com',
    address: '456 Lake Rd, Anytown, USA',
    imageUrl: 'https://example.com/images/swimming_classes.jpg',
    service_id: '5e6f7g8h-5555-11ec-82a8-0242ac130003',
  },
  {
    id: '6f7g8h9i-6666-11ec-82a8-0242ac130003',
    name: 'Music Classes',
    title: 'Piano and Guitar Lessons',
    description:
      'Private music lessons for piano and guitar, from beginner to advanced levels.',
    provider: 'David Martin',
    phone: ['222-333-4444'],
    email: 'davidmartin@example.com',
    address: '789 Music Ln, Anytown, USA',
    imageUrl: 'https://example.com/images/music_classes.jpg',
    service_id: '6f7g8h9i-6666-11ec-82a8-0242ac130003',
  },
  {
    id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
    name: 'Art Classes',
    title: 'Creative Art Workshops',
    description:
      'Art workshops and classes for kids and adults, focusing on painting, drawing, and more.',
    provider: 'Jessica Brown',
    phone: ['555-444-3333'],
    email: 'jessicabrown@example.com',
    address: '321 Art St, Anytown, USA',
    imageUrl: 'https://example.com/images/art_classes.jpg',
    service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
  },
  {
    id: '8h9i0j1k-8888-11ec-82a8-0242ac130003',
    name: 'Family Doctor',
    title: 'General Family Healthcare',
    description: 'Comprehensive healthcare services for all family members.',
    provider: 'Dr. Michael White',
    phone: ['666-555-4444'],
    email: 'drwhite@example.com',
    address: '123 Health Blvd, Anytown, USA',
    imageUrl: 'https://example.com/images/family_doctor.jpg',
    service_id: '8h9i0j1k-8888-11ec-82a8-0242ac130003',
  },
  {
    id: '9i0j1k2l-9999-11ec-82a8-0242ac130003',
    name: 'Dental Care',
    title: 'Professional Dental Services',
    description:
      'Complete dental care for the entire family, including cleanings, fillings, and more.',
    provider: 'Dr. Anna Green',
    phone: ['777-888-9999'],
    email: 'drgreen@example.com',
    address: '789 Dental Dr, Anytown, USA',
    imageUrl: 'https://example.com/images/dental_care.jpg',
    service_id: '9i0j1k2l-9999-11ec-82a8-0242ac130003',
  },
  {
    id: '0j1k2l3m-aaaa-11ec-82a8-0242ac130003',
    name: 'Police Department',
    title: 'Local Police Services',
    description:
      'Community policing services including emergency response, safety education, and more.',
    provider: 'Chief James Taylor',
    phone: [],
    email: 'chief@example.com',
    address: '123 Safety St, Anytown, USA',
    imageUrl: 'https://example.com/images/police_department.jpg',
    service_id: '0j1k2l3m-aaaa-11ec-82a8-0242ac130003',
  },
  {
    id: '1k2l3m4n-bbbb-11ec-82a8-0242ac130003',
    name: 'Fire Department',
    title: 'Fire & Rescue Services',
    description: 'Emergency fire and rescue services for the community.',
    provider: 'Chief Linda Wilson',
    phone: [],
    email: 'firechief@example.com',
    address: '456 Fire St, Anytown, USA',
    imageUrl: 'https://example.com/images/fire_department.jpg',
    service_id: '1k2l3m4n-bbbb-11ec-82a8-0242ac130003',
  },
  {
    id: '2l3m4n5o-cccc-11ec-82a8-0242ac130003',
    name: 'Ambulance Services',
    title: 'Emergency Medical Services',
    description:
      'Emergency ambulance services providing quick response to medical emergencies.',
    provider: 'EMS Director Chris Harris',
    phone: [],
    email: 'ems@example.com',
    address: '789 Emergency Rd, Anytown, USA',
    imageUrl: 'https://example.com/images/ambulance_services.jpg',
    service_id: '2l3m4n5o-cccc-11ec-82a8-0242ac130003',
  },
];

export const getTopServiceCategories = () => {
  return TopServiceCategories;
};
export const getTopServices = () => {
  return services.slice(0, 4);
};

export const getServiceCategories = () => {
  return serviceCategories;
};

// export const getServices = () => {
//   return services;
// };

export const getServiceCategory = (id: string) => {
  return serviceCategories.find((category) => category.id === id);
};

export const getService = (id: string) => {
  return services.find((service) => service.id === id);
};

// export const getCategoryServices = (category_id: string) => {
//   const category = serviceCategories.find(
//     (category) => category.id === category_id,
//   );
//   if (!category) {
//     return [];
//   }
//
//   return services.filter((service) =>
//     category.service_ids.includes(service.id),
//   );
// };

export const getServiceProviders = (ids: string[]) => {
  return serviceProviders.filter((provider) =>
    ids.includes(provider.service_id),
  );
};

export const getServiceProvider = (id: string) => {
  return serviceProviders.find((provider) => provider.id === id);
};

export const getServicesByIds = (ids: string[]) => {
  return services.filter((service) => ids.includes(service.id));
};

export const getTopServiceProviders = () => {
  return serviceProviders.slice(0, 4);
};

// const SherrifProviders = [
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130003',
//     name: 'Police Department',
//     title: 'Local Police Services',
//     description:
//       'Community policing services including emergency response, safety education, and more.',
//     provider: '',
//     phone: ['209-468-4400'],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
// ];
//
// const InsuranceProviders = [
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130003',
//     name: 'Patriot America',
//     title: 'Health Insurance Plans',
//     description: 'If you are looking for comprehensive coverage',
//     provider: 'Patriot America',
//     phone: [''],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130004',
//     name: 'Medex',
//     title: '',
//     description: 'If you are looking for comprehensive coverage',
//     provider: 'Medex',
//     phone: [''],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
// ];
//
// const DoctorsProviders = [
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130005',
//     name: 'Dentist',
//     title: 'Dentist',
//     description: 'Comprehensive dental care services.',
//     provider: 'Mamatha Bellam',
//     phone: ['123-456-7890'],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130006',
//     name: 'Dr. Jane Smith',
//     title: 'Family Doctor',
//     description: 'Comprehensive healthcare services for all family members.',
//     provider: 'Dr. Jane Smith',
//     phone: ['123-456-7890'],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
//   {
//     id: '1a2b3c4d-1111-11ec-82a8-0242ac130007',
//     name: '',
//     title: 'Family Doctor',
//     description: 'Comprehensive healthcare services for all family members.',
//     provider: 'Dr. Mike Johnson',
//     phone: ['123-456-7890'],
//     email: '',
//     service_id: '7g8h9i0j-7777-11ec-82a8-0242ac130003',
//   },
// ];
//
// const contacts = [
//   {
//     services: [
//       {
//         id: 88,
//         category: 'Yard Maintenance/Gardener',
//         businessName: 'JC Gardening',
//         contactPerson: 'Jesus',
//         phoneNumber: '209-914-0000',
//       },
//       {
//         id: 89,
//         category: 'Yard Maintenance/Gardener',
//         businessName: "Joe's Gardening Service",
//         contactPerson: 'Leon',
//         phoneNumber: '209-408-9935',
//         comments:
//           'He is super friendly, and is very thorough. Shows up on the expected day',
//       },
//       {
//         id: 90,
//         category: 'Backyard concrete',
//         contactPerson: 'Juan Carlos',
//         phoneNumber: '209 612 9993',
//         comments: 'recommended by many in facebook page',
//       },
//       {
//         id: 91,
//         category: 'Backyard concrete',
//         contactPerson: 'Alex',
//         phoneNumber: '(510) 565-0242',
//       },
//       {
//         id: 92,
//         category: 'Backyard concrete',
//         businessName: 'JC Concrete',
//         phoneNumber: '209-346-8680',
//       },
//       {
//         id: 93,
//         category: 'Backyard concrete',
//         businessName: 'Paradise Designs',
//         contactPerson: 'Larry Diggs',
//       },
//       {
//         id: 94,
//         category: 'Backyard concrete',
//         businessName: 'Jim Bradley',
//         phoneNumber: '(209) 835-9691',
//         comments: 'Jim Bradley is licensed and local and does great work',
//       },
//       {
//         id: 95,
//         category: 'Backyard concrete',
//         contactPerson: 'Freddy Mendez',
//         phoneNumber: '408-887-1459',
//       },
//       {
//         id: 96,
//         category: 'Backyard concrete',
//         contactPerson: 'Dana Stokes',
//         phoneNumber: '(209) 321-9941',
//       },
//       {
//         id: 97,
//         category: 'Backyard concrete',
//         businessName: "Sam's Concrete & Landscaping",
//         phoneNumber: '(925) 640-6283',
//         miscInfo: 'http://www.sams-concrete.com/',
//       },
//       {
//         id: 98,
//         category: 'Painter',
//         contactPerson: 'Alvaro Vera',
//         phoneNumber: '(209) 605-5875',
//       },
//       {
//         id: 99,
//         category: 'Painter',
//         businessName: 'Spencer Flooring & Paint',
//         contactPerson: 'Kipp Skelton',
//         phoneNumber: '209-835-5537',
//       },
//       {
//         id: 100,
//         category: 'Pergola/Patio cover Contractor',
//         contactPerson: 'Damon Stevenson',
//         phoneNumber: '209-502-0221',
//       },
//       {
//         id: 101,
//         category: 'Painter',
//         businessName: 'Helget painting',
//         contactPerson: 'Kipp',
//         phoneNumber: '925-200-0041',
//       },
//       {
//         id: 102,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Noe Hernandez',
//         phoneNumber: '(209) 683-9194',
//       },
//       {
//         id: 103,
//         category: 'Handyman',
//         contactPerson: 'Chalio',
//         phoneNumber: '(510) 750-4460',
//       },
//       {
//         id: 63,
//         category: 'Auto Mechanic',
//         businessName: 'Ashton Auto Service Auto mechanic Body shop',
//         location: 'Dublin Blvd, Dublin',
//         phoneNumber: '(925) 380-9080',
//         comments:
//           "There is a good shop in Dublin over the hill. It's worth the trip for a trustworthy and reputable shop.",
//         miscInfo: 'https://www.yelp.com/biz/ashton-auto-service-dubl',
//       },
//       {
//         id: 64,
//         category: 'Painter',
//         contactPerson: 'Alvaro Sousa',
//         phoneNumber: '(209) 605-5875',
//         comments:
//           "1) He's the best. Painted the interior of our house, and did epoxy. Just finished our kitchen cabinets two weeks ago. 2) He has been painting in mountain house for 8 plus years. Amazing work. He is a perfectionist! You would not be disappointed. Highly recommended!!!!",
//       },
//       {
//         id: 65,
//         category: 'Plumber',
//         businessName: 'Simpson Plumbing',
//         contactPerson: 'Brandon Simpson',
//         phoneNumber: '(209) 648-7407',
//         miscInfo: 'https://www.yelp.com/biz/simpson-plumbing-tracy',
//       },
//       {
//         id: 66,
//         category: 'Handyman/Epoxy painter',
//         contactPerson: 'Brian',
//         phoneNumber: '(925) 580 9884',
//         comments: 'He is awesome. He is a handyman as well.',
//       },
//       {
//         id: 67,
//         category: 'Plumber',
//         contactPerson: 'Mario',
//         phoneNumber: '(209) 229-0660',
//         comments: 'Installed pelican water system',
//       },
//       {
//         id: 68,
//         category: 'AutoGlass/ Car windshield',
//         phoneNumber: '(209) 830-6611',
//         comments: 'May quote lower price',
//       },
//       {
//         id: 69,
//         category: 'Golden Valley Nursery',
//         businessName: 'Golden Valley Nursery , Tracy',
//         phoneNumber: '(209) 830-9200',
//         comments: 'Can deliver top soil/dirt',
//       },
//       {
//         id: 71,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'Maya Landscapin',
//         contactPerson: 'Bernardo Maya',
//         phoneNumber: '209-200-6555/209 640-0417',
//         comments:
//           'They have been our gardener for 12 years. I highly recommend him too',
//       },
//       {
//         id: 72,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Mario Lopez',
//         phoneNumber: '209-914-8920',
//       },
//       {
//         id: 74,
//         category: 'Yard Maintenance/Gardner',
//         businessName: "Josh's yard maintainance",
//         contactPerson: 'Josh Miller',
//         phoneNumber: '(209) 914 0827',
//         comments:
//           'This is our guy! He is REALLY reasonable and super nice, always punctual.',
//       },
//       {
//         id: 75,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Enrique Ruiz',
//         phoneNumber: '209-229-0616',
//         comments:
//           "I've had the same guy for 10 years. He's very thorough. English not that great but wife helps. I think our gardener is awesome. He just installed a new watering timer and fixed a broken sprinkler head for us today.Very reasonable prices too",
//       },
//       {
//         id: 76,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Miguel',
//         phoneNumber: '209-898-9332',
//       },
//       {
//         id: 77,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'Salco Yard Care',
//         phoneNumber: '(510) 760-3877',
//       },
//       {
//         id: 78,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'www.jpspalms.com',
//         phoneNumber: '(925) 948-8954',
//       },
//       {
//         id: 79,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Nathan',
//         phoneNumber: '209-470-5102',
//         comments: 'Quality with a reasonable price',
//       },
//       {
//         id: 80,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'ProScape Landscaping',
//         contactPerson: 'Victor Cazarez',
//         phoneNumber: '925-490-1948 / Victor@proscapeservices.com',
//         comments:
//           "he's great with communication (in person, email), always always comes to service the property, does a great job. He did install sprinkler pipes for me",
//       },
//       {
//         id: 81,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'Tony Silveira',
//         contactPerson: 'Tony Silveira',
//         phoneNumber: '209 321 6493',
//         comments:
//           'Distinguished Look. Tony Silveira is the owner operator and he is very professional',
//       },
//       {
//         id: 81,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'Salco GardenServices',
//         phoneNumber: '209-834-0594',
//         comments:
//           'This guy provided a quote on the spot showed up the next day to work he was amazing. Did a great job and was the best price I got around this area for the amount of work I needed done!',
//       },
//       {
//         id: 82,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Juan',
//         phoneNumber: '209-969-4019',
//       },
//       {
//         id: 83,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Jose Gardener',
//         phoneNumber: '209-484 4121',
//         comments: 'Jose is great!',
//       },
//       {
//         id: 84,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'JCP landscaping',
//         contactPerson: 'Janel or Carlos',
//         phoneNumber: '925-339-4134',
//         comments: 'This guy is very reasonable',
//       },
//       {
//         id: 85,
//         category: 'Yard Maintenance/Gardner',
//         contactPerson: 'Rudy',
//         phoneNumber: '209-263-2852',
//       },
//       {
//         id: 86,
//         category: 'Backyard concrete',
//       },
//       {
//         id: 87,
//         category: 'Yard Maintenance/Gardner',
//         businessName: 'RM Yard Maint',
//         phoneNumber: '(209) 814-6923',
//         comments: 'Amazing work/Great prices',
//       },
//     ],
//   },
// ];

interface SearchResult {
  id: string;
  name: string;
  title?: string;
  type: 'service' | 'category' | 'provider';
  link: string;
}

export const searchAll = (searchText: string): SearchResult[] => {
  const search = searchText.toLowerCase();
  const regex = new RegExp(search, 'i');

  const serviceResults = services
    .filter(
      (service) => regex.test(service.name) || regex.test(service.description),
    )
    .map((service) => {
      const categ = serviceCategories.find((category) =>
        category.service_ids.includes(service.id),
      );
      return {
        id: service.id,
        name: service.name,
        type: 'service' as const,
        link: `/services/categories/${categ?.id}?serviceId=${service.id}`,
      };
    });

  const categoryResults = serviceCategories
    .filter(
      (category) =>
        regex.test(category.name) || regex.test(category.description),
    )
    .map((category) => ({
      id: category.id,
      name: category.name,
      type: 'category' as const,
      link: `/services/categories/${category.id}`,
    }));

  const providerResults = serviceProviders
    .filter(
      (provider) =>
        regex.test(provider.name) ||
        regex.test(provider.title) ||
        regex.test(provider.description),
    )
    .map((provider) => ({
      id: provider.id,
      name: provider.name,
      title: provider.title,
      type: 'provider' as const,
      link: `/services/provider/${provider.id}`,
    }));

  return [
    ...serviceResults,
    ...categoryResults,
    ...providerResults,
  ] as SearchResult[];
};
