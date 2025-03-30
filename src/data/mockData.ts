
// Mock data for the Sociology Blog

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured: boolean;
}

export interface Topic {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  articleCount: number;
}

export const topics: Topic[] = [
  { id: 'social-theory', name: 'Social Theory' },
  { id: 'research-methods', name: 'Research Methods' },
  { id: 'social-movements', name: 'Social Movements' },
  { id: 'urban-sociology', name: 'Urban Sociology' },
  { id: 'globalization', name: 'Globalization' },
  { id: 'inequality', name: 'Inequality' },
  { id: 'education', name: 'Education' },
  { id: 'gender-studies', name: 'Gender Studies' },
];

export const categories: Category[] = [
  { id: 'social-theory', name: 'Social Theory', articleCount: 12 },
  { id: 'research-methods', name: 'Research Methods', articleCount: 8 },
  { id: 'social-movements', name: 'Social Movements', articleCount: 15 },
  { id: 'urban-sociology', name: 'Urban Sociology', articleCount: 9 },
  { id: 'globalization', name: 'Globalization', articleCount: 7 },
  { id: 'inequality', name: 'Inequality', articleCount: 18 },
  { id: 'education', name: 'Education', articleCount: 11 },
  { id: 'gender-studies', name: 'Gender Studies', articleCount: 14 },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Wheel',
    excerpt: 'Functional Divergence in Mesopotamia and Mesoamerica.',
    content: `
       Mesopotamia (~3500 BC)

The invention of the wheel is one of the most significant breakthroughs in human history. The
earliest evidence comes from Mesopotamia, where solid wooden disks were first used in pottery.
Eventually, these evolved into wheels for transportation, facilitating the rise of long-distance trade
networks and increasing agricultural efficiency. The use of the wheel was fundamental in the
construction of carts, chariots, and irrigation systems.
 Technological Features: Early wheels were made from planks joined together, later evolving
into spoked wheels.
 Impact: Enhanced mobility, increased agricultural output, and the development of largescale trade networks across the Fertile Crescent.
 Archaeological Evidence: Finds from Uruk and Sumer confirm the widespread use of
wheeled vehicles by 3000 BC.
-----------------------------------------------------------------------------------------------------------
 Mesoamerica (~1500 BC)
 In contrast to Mesopotamia, the Mesoamerican civilizations, including the Olmecs and Mayans, did
not use wheels for transportation. However, wheeled artifacts—small ceramic toys with axles—
indicate knowledge of the principle.

 Technological Features: Wheeled figurines crafted from clay, found in Veracruz and Oaxaca.
 Cultural and Environmental Constraints: The absence of large draft animals like horses or
oxen meant wheeled transport was not feasible.
 Symbolic and Ritual Use: Some scholars suggest that these wheeled objects may have held
religious significance or been used in divination.

Comparative Analysis:
 Why did one society adopt wheels for transport while another did not?
o The presence of domesticated animals in Mesopotamia enabled practical use.
o Mesoamerican terrain (dense jungles, mountains) made wheeled vehicles
impractical.
o Social structures influenced technological priorities; Mesoamerica focused more on
vertical transportation (such as rope-based systems in the Andes).

    `,
    category: 'Social Movements',
    author: 'Dr. Sarah Johnson',
    authorAvatar: '',
    date: 'April 15, 2023',
    readTime: '8 min read',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Roue_primitive.png/330px-Roue_primitive.png',
    featured: true,
  },
  {
    id: '2',
    title: 'Urban Gentrification and Social Displacement',
    excerpt: 'Examining the complex relationship between urban development, cultural shifts, and community displacement.',
    content: `
      # Urban Gentrification and Social Displacement

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      ## The Gentrification Process

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Economic Factors

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Cultural Transformation

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Social Consequences

      * Displacement of low-income residents
      * Loss of community ties
      * Cultural erasure
      * Housing affordability crisis

      ## Policy Responses

      1. Inclusive zoning
      2. Rent control
      3. Community land trusts
      4. Anti-displacement programs

      ## Conclusion

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: 'Urban Sociology',
    author: 'Prof. Michael Chen',
    authorAvatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    date: 'March 22, 2023',
    readTime: '6 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: true,
  },
  {
    id: '3',
    title: 'Intersectionality in Modern Feminist Theory',
    excerpt: 'Analyzing how intersectional approaches have transformed feminist sociological theory and research.',
    content: `
      # Intersectionality in Modern Feminist Theory

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      ## Origins of Intersectionality

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Key Theoretical Contributions

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Multiple Axes of Oppression

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Methodological Implications

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Contemporary Applications

      * Educational research
      * Health disparities
      * Workplace studies
      * Political engagement

      ## Criticisms and Limitations

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Conclusion

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: 'Gender Studies',
    author: 'Dr. Amara Wilson',
    authorAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    date: 'February 11, 2023',
    readTime: '10 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: false,
  },
  {
    id: '4',
    title: 'Digital Ethnography: Methods and Ethics',
    excerpt: 'Exploring the methodological innovation and ethical challenges in conducting ethnographic research in digital spaces.',
    content: `
      # Digital Ethnography: Methods and Ethics

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      ## Traditional vs. Digital Ethnography

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Methodological Approaches

      * Participant observation in digital communities
      * Digital interviews and focus groups
      * Social media analysis
      * Platform ethnography

      ## Ethical Considerations

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Privacy and Consent

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Representation and Power

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Case Studies

      1. Online gaming communities
      2. Social media activism
      3. Digital diaspora
      4. Virtual workplaces

      ## Conclusion

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: 'Research Methods',
    author: 'Dr. James Rodriguez',
    authorAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    date: 'January 29, 2023',
    readTime: '7 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: false,
  },
  {
    id: '5',
    title: 'Global Inequality and the World-Systems Theory',
    excerpt: 'A critical examination of world-systems theory and its relevance in understanding contemporary global inequality.',
    content: `
      # Global Inequality and the World-Systems Theory

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      ## Foundations of World-Systems Theory

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Core, Periphery, and Semi-Periphery

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Historical Development

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Contemporary Applications

      * Global trade and economic power
      * Labor exploitation and migration
      * Environmental degradation
      * Technology transfer

      ## Critiques and Limitations

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Alternative Perspectives

      1. Dependency theory
      2. Modernization theory
      3. Post-colonial approaches
      4. Global networks theory

      ## Conclusion

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: 'Globalization',
    author: 'Prof. Elena Santos',
    authorAvatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    date: 'May 3, 2023',
    readTime: '9 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: false,
  },
  {
    id: '6',
    title: 'Education as Social Reproduction: Contemporary Perspectives',
    excerpt: 'Examining how educational systems perpetuate social inequality through various mechanisms of social reproduction.',
    content: `
      # Education as Social Reproduction: Contemporary Perspectives

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      ## Theoretical Foundations

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Bourdieu's Cultural Capital

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ### Willis's Learning to Labor

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Mechanisms of Reproduction

      * Curriculum and knowledge selection
      * Assessment and credential systems
      * Tracking and ability grouping
      * Hidden curriculum

      ## Case Studies

      1. Higher education access
      2. Digital divide in learning
      3. International educational inequality
      4. Vocational vs. academic pathways

      ## Resistance and Change

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      ## Conclusion

      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: 'Education',
    author: 'Dr. Robert Taylor',
    authorAvatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    date: 'April 18, 2023',
    readTime: '8 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: false,
  },
];

// Function to get articles by category
export const getArticlesByCategory = (categoryId: string) => {
  return articles.filter(article => 
    article.category.toLowerCase() === categories.find(cat => cat.id === categoryId)?.name.toLowerCase()
  );
};

// Function to get a single article by id
export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

// Function to get featured articles
export const getFeaturedArticles = () => {
  return articles.filter(article => article.featured);
};

// Function to get recent articles (non-featured)
export const getRecentArticles = (limit = 10) => {
  return articles
    .filter(article => !article.featured)
    .slice(0, limit);
};
