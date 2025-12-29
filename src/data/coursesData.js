// Course categories
export const COURSE_CATEGORIES = {
  SKIN: "skin",
  MAKEUP: "makeup",
  HAIR: "hair",
  NAILS: "nails",
};

// Course levels
export const COURSE_LEVELS = {
  BEGINNER: "beginner",
  BASIC: "basic",
  ADVANCE: "advance",
};

// Main course types (main categories)
export const MAIN_COURSES = {
  BEGINNER_COSMOTOLOGY: "beginner-cosmotology",
  BASIC_COSMOTOLOGY: "basic-cosmotology",
  ADVANCE_COSMOTOLOGY: "advance-cosmotology",
};

// All courses data
export const coursesData = [
  // BEGINNER COSMOTOLOGY LEVEL
  {
    id: 1,
    title: "Basic Skin",
    description: "Introduction to fundamental skincare principles and basic skin analysis techniques",
    category: COURSE_CATEGORIES.SKIN,
    level: COURSE_LEVELS.BEGINNER,
    mainCourse: MAIN_COURSES.BEGINNER_COSMOTOLOGY,
    price: "₹4,999",
    image: "https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "3 weeks",
  },
  {
    id: 2,
    title: "Basic Hair",
    description: "Learn basic hair care, washing techniques, and simple styling fundamentals",
    category: COURSE_CATEGORIES.HAIR,
    level: COURSE_LEVELS.BEGINNER,
    mainCourse: MAIN_COURSES.BEGINNER_COSMOTOLOGY,
    price: "₹4,999",
    image: "https://images.pexels.com/photos/17786008/pexels-photo-17786008.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "3 weeks",
  },
  {
    id: 3,
    title: "Basic Makeup",
    description: "Discover makeup fundamentals including foundation, concealer, and basic application",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.BEGINNER,
    mainCourse: MAIN_COURSES.BEGINNER_COSMOTOLOGY,
    price: "₹4,999",
    image: "https://images.pexels.com/photos/6954217/pexels-photo-6954217.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "3 weeks",
  },

  // BASIC COSMOTOLOGY LEVEL - Basic to Advance courses
  {
    id: 4,
    title: "Basic to Advance Skin",
    description: "Comprehensive skincare training from basic cleansing to advanced facial treatments and product knowledge",
    category: COURSE_CATEGORIES.SKIN,
    level: COURSE_LEVELS.BASIC,
    mainCourse: MAIN_COURSES.BASIC_COSMOTOLOGY,
    price: "₹8,999",
    image: "https://images.pexels.com/photos/247196/pexels-photo-247196.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 5,
    title: "Basic to Advance Makeup",
    description: "Master makeup artistry from everyday looks to professional bridal and event makeup",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.BASIC,
    mainCourse: MAIN_COURSES.BASIC_COSMOTOLOGY,
    price: "₹9,999",
    image: "https://images.pexels.com/photos/17042245/pexels-photo-17042245.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "7 weeks",
  },
  {
    id: 6,
    title: "Basic to Advance Hair",
    description: "Complete hair styling journey covering cutting, coloring, treatments, and advanced styling techniques",
    category: COURSE_CATEGORIES.HAIR,
    level: COURSE_LEVELS.BASIC,
    mainCourse: MAIN_COURSES.BASIC_COSMOTOLOGY,
    price: "₹8,999",
    image: "https://images.pexels.com/photos/14251997/pexels-photo-14251997.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "7 weeks",
  },
  {
    id: 7,
    title: "Hairstyling",
    description: "Specialized training in modern hairstyling, hair spa, and professional salon techniques",
    category: COURSE_CATEGORIES.HAIR,
    level: COURSE_LEVELS.BASIC,
    mainCourse: MAIN_COURSES.BASIC_COSMOTOLOGY,
    price: "₹7,999",
    image: "https://images.pexels.com/photos/16241289/pexels-photo-16241289.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 8,
    title: "Nail Art & Extension",
    description: "Master gel nails, extensions, nail art designs, and professional nail care techniques",
    category: COURSE_CATEGORIES.NAILS,
    level: COURSE_LEVELS.BASIC,
    mainCourse: MAIN_COURSES.BASIC_COSMOTOLOGY,
    price: "₹6,999",
    image: "https://images.pexels.com/photos/5128234/pexels-photo-5128234.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "5 weeks",
  },

  // ADVANCED COSMOTOLOGY LEVEL
  {
    id: 9,
    title: "Advanced Skin",
    description: "Expert-level skincare including chemical peels, anti-aging treatments, and skin analysis for professional practice",
    category: COURSE_CATEGORIES.SKIN,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹11,999",
    image: "https://images.pexels.com/photos/12992074/pexels-photo-12992074.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "8 weeks",
  },
  {
    id: 10,
    title: "Advanced Makeup",
    description: "Professional makeup artistry covering bridal, special effects, fashion, and editorial makeup at expert level",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹13,999",
    image: "https://images.pexels.com/photos/16241289/pexels-photo-16241289.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "9 weeks",
  },
  {
    id: 11,
    title: "Advanced Hair",
    description: "Advanced hair techniques including advanced coloring, trendy cuts, and professional salon management skills",
    category: COURSE_CATEGORIES.HAIR,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹12,999",
    image: "https://images.pexels.com/photos/10293685/pexels-photo-10293685.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "8 weeks",
  },

  // Additional popular courses
  {
    id: 12,
    title: "Bridal Makeup Specialist",
    description: "Expert training in traditional and modern bridal makeup for different skin tones and wedding styles",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹10,999",
    image: "https://images.pexels.com/photos/12992074/pexels-photo-12992074.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 13,
    title: "Professional Makeup Artistry",
    description: "Comprehensive makeup artistry for fashion, events, films, and professional entertainment industry",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹12,999",
    image: "https://images.pexels.com/photos/17042245/pexels-photo-17042245.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
  {
    id: 14,
    title: "Salon Management",
    description: "Learn to manage a salon and build your beauty brand including business planning and customer service",
    category: COURSE_CATEGORIES.MAKEUP,
    level: COURSE_LEVELS.ADVANCE,
    mainCourse: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
    price: "₹9,999",
    image: "https://images.pexels.com/photos/247196/pexels-photo-247196.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: "6 weeks",
  },
];

// Filter functions
export const getCoursesByLevel = (level) => {
  return coursesData.filter((course) => course.level === level);
};

export const getCoursesByCategory = (category) => {
  return coursesData.filter((course) => course.category === category);
};

export const getCoursesByMainCourse = (mainCourse) => {
  return coursesData.filter((course) => course.mainCourse === mainCourse);
};

export const getCoursesByLevelAndCategory = (level, category) => {
  return coursesData.filter(
    (course) => course.level === level && course.category === category
  );
};

export const getAllMainCourses = () => {
  return [
    {
      id: MAIN_COURSES.BEGINNER_COSMOTOLOGY,
      title: "Beginner Cosmotology",
      description: "Foundation level courses in skincare, makeup, and hair care",
      courseCount: coursesData.filter((c) => c.mainCourse === MAIN_COURSES.BEGINNER_COSMOTOLOGY).length,
    },
    {
      id: MAIN_COURSES.BASIC_COSMOTOLOGY,
      title: "Basic Cosmotology",
      description: "Intermediate level courses covering all beauty disciplines",
      courseCount: coursesData.filter((c) => c.mainCourse === MAIN_COURSES.BASIC_COSMOTOLOGY).length,
    },
    {
      id: MAIN_COURSES.ADVANCE_COSMOTOLOGY,
      title: "Advance Cosmotology",
      description: "Advanced level courses for professional beauty experts",
      courseCount: coursesData.filter((c) => c.mainCourse === MAIN_COURSES.ADVANCE_COSMOTOLOGY).length,
    },
  ];
};
