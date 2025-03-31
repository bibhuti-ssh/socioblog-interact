export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;

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
2. The Wheel: Functional Divergence in Mesopotamia and Mesoamerica

2.1 Mesopotamia (~3500 BC)

The invention of the wheel is one of the most significant breakthroughs in human history. The earliest evidence comes from Mesopotamia, where solid wooden disks were first used in pottery. Eventually, these evolved into wheels for transportation, facilitating the rise of long-distance trade networks and increasing agricultural efficiency. The use of the wheel was fundamental in the construction of carts, chariots, and irrigation systems.

• Technological Features: Early wheels were made from planks joined together, later evolving into spoked wheels.
• Impact: Enhanced mobility, increased agricultural output, and the development of large-scale trade networks across the Fertile Crescent.
• Archaeological Evidence: Finds from Uruk and Sumer confirm the widespread use of wheeled vehicles by 3000 BC.

2.2 Mesoamerica (~1500 BC)

In contrast to Mesopotamia, the Mesoamerican civilizations – including the Olmecs and Mayans – did not use wheels for transportation. However, wheeled artifacts, such as small ceramic toys with axles, indicate knowledge of the principle.

• Technological Features: Wheeled figurines crafted from clay, found in Veracruz and Oaxaca.
• Cultural and Environmental Constraints: The absence of large draft animals like horses or oxen meant wheeled transport was not feasible.
• Symbolic and Ritual Use: Some scholars suggest that these wheeled objects may have held religious significance or been used in divination.

Comparative Analysis:
• Why did one society adopt wheels for transport while another did not?
  - The presence of domesticated animals in Mesopotamia enabled practical use.
  - Mesoamerican terrain (dense jungles, mountains) made wheeled vehicles impractical.
  - Social structures influenced technological priorities; Mesoamerica focused more on vertical transportation (such as rope-based systems in the Andes).
    `,
    readTime: '8 min read',
    imageUrl: 'https://i.postimg.cc/J44LkwCv/Screenshot-from-2025-03-31-08-22-57.png',
    featured: true,
  },
  {
    id: '2',
    title: 'Crossbows',
    excerpt: 'Independent Military Innovations.',
    content: `
 Crossbows: Independent Military Innovations

 China (~600 BC)

The crossbow was a transformative military technology in China, allowing large armies to field projectile weapons with greater accuracy and lethality. The Han Dynasty perfected mass production techniques, enabling widespread deployment. 
• Technological Features: Bronze and iron trigger mechanisms with standardized parts for quick assembly.
• Impact: Shifted power dynamics in warfare by enabling even poorly trained soldiers to engage elite warriors.
• Historical Evidence: Qin Dynasty crossbows, such as those found with the Terracotta Army, exemplify this innovation.

 Greece (~400 BC) & Rome (~200 BC)

The Greeks developed the gastraphetes, a forerunner to the crossbow used in siege warfare. Later, the Romans refined the design into the scorpio, a lightweight artillery weapon. 
• Comparative Analysis:
  - In China, crossbows were employed in mass infantry formations.
  - Greeks and Romans used them primarily as siege or defensive weapons.
    `,
    readTime: '7 min read',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QcSMy5TkdGrjzqRoHCMmFLeAA7uigCVB4Q&s',
    featured: false,
  },
  {
    id: '3',
    title: 'Stirrups',
    excerpt: 'Transforming Cavalry Warfare',
    content: `
 

 China (300–400 AD)

The earliest known use of metal stirrups emerged in China, revolutionizing cavalry tactics. Stirrups provided riders with increased stability and control, which in turn allowed warriors to wield weapons more effectively while mounted.
• Military Impact: Enhanced precision in strikes and bolstered the effectiveness of heavy cavalry.
• Social Impact: Contributed to shifts in military hierarchy, emphasizing the importance of mounted troops.

 Central Asia & The Huns

The Huns, originating from Central Asia, played a crucial role in the spread of stirrup technology. Their agile mounted warfare tactics were significantly enhanced by the adoption of stirrups.
• Expansion and Influence: The Huns’ rapid conquests forced neighboring societies to reconsider cavalry strategies.
• Comparative Note: Whereas Chinese stirrups strengthened centralized forces, the Huns used them to maximize raiding mobility.

 Medieval Europe

The introduction of stirrups in Europe had profound societal effects. By the early medieval period, the stirrup was integral to feudal warfare and the rise of the armored knight.
• Political Impact: Reinforced feudal systems where knights, supported by powerful cavalry, became central to military organization.
• Technological Integration: Alongside innovations like high-backed saddles and long lances, stirrups enabled the mounted charge—a hallmark of medieval combat.
    `,
    readTime: '8 min read',
    imageUrl: 'https://i.postimg.cc/brvYJLzZ/Screenshot-from-2025-03-31-08-16-51.png',
    featured: false,
  },
  {
    id: '4',
    title: 'Paper',
    excerpt: 'Tracing the independent origins of paper and its cultural significance.',
    content: `


 China (~100 BC)

Paper was first developed in China under the Han Dynasty, with Cai Lun often credited for its invention around 105 AD. This breakthrough had transformative effects on Chinese administration and culture.
• Bureaucratic Expansion: Enabled the maintenance of extensive administrative records and strengthened centralized governance.
• Literacy and Education: Facilitated mass reproduction of Confucian texts and spread education.
• Economic Impact: Lowered the cost of recording information, thereby supporting trade and commerce.

 Mesoamerica (~300 AD)

Independently, the Maya developed amate paper made from tree bark. This paper was predominantly used for sacred codices.
• Religious and Ritual Use: Essential for recording astronomical data, mythologies, and calendrical information.
• Production Constraints: Its labor-intensive production limited its use to the religious elite.
    `,
    readTime: '7 min read',
    imageUrl: 'https://i.postimg.cc/W4Jj1Mc4/Screenshot-from-2025-03-31-08-19-55.png',
    featured: false,
  },
  {
    id: '5',
    title: 'Gunpowder',
    excerpt: 'Examining divergent paths in the development of gunpowder.',
    content: `
 Gunpowder: Divergent Paths in Warfare

 China (~900 AD)

Gunpowder was first invented in China during the Tang Dynasty. Initially created for fireworks, it was soon adapted for military applications including flame-throwers, bombs, and early firearms.
• State Control: The Chinese government tightly regulated gunpowder to maintain military superiority.
• Defensive Use: Played a key role in fortifying defenses and repelling nomadic invasions.
 Middle East & Europe (~1200–1300 AD)

Gunpowder technology spread westward via trade routes. In the Middle East and later in Europe, it was quickly integrated into military strategies.
• Siege Warfare: Led to the decline of traditional fortifications and castles.
• Geopolitical Impact: Facilitated the centralization of state power as emerging monarchies used gunpowder weapons to subdue feudal rivals.
    `,
    readTime: '8 min read',
    imageUrl: 'https://res.cloudinary.com/dxma9myrh/image/upload/v1743329428/b4vs8ik59fbyxtf3elrf.jpg',
    featured: false,
  },
  {
    id: '6',
    title: 'Printing',
    excerpt: 'Assessing the global impact of printing and its theoretical interpretations.',
    content: `
 Printing: Independent Inventions with Global Impact

 China (~700 AD) & Korea (~1200 AD)

The Chinese pioneered block printing, which allowed for the mass production of texts, primarily for state use. By the 1200s, Korea refined this technology by developing movable metal type.
• State Control: Printing served as a tool for bureaucratic administration and the spread of Confucian and Buddhist texts.
• Cultural Influence: Contributed to the rapid dissemination of religious and philosophical ideas across East Asia.

 Europe (~1450 AD)

Johannes Gutenberg’s invention of the printing press with movable type revolutionized Europe.
• Democratization of Knowledge: Printing transitioned from state-controlled production to a commercially driven enterprise.
• Intellectual Movements: Fueled the Renaissance, Reformation, and Scientific Revolution by breaking the Church’s monopoly on information.

 Theoretical Perspectives: Actor-Network Theory and Assemblage

Both Actor-Network Theory (ANT) and Assemblage Theory offer frameworks for understanding these independent technological innovations. ANT emphasizes the network of human and non-human actors in shaping technology, while Assemblage Theory focuses on the interaction of multiple elements—technological, social, and environmental—in driving innovation.

 Conclusion

Parallel inventions across civilizations demonstrate the universality of human ingenuity. Although similar innovations arose independently, their development and impact were heavily influenced by local conditions and societal structures. This comprehensive analysis underscores that technological progress is not isolated but rather a dynamic, interconnected process.
    `,
    readTime: '10 min read',
    imageUrl: 'https://i.postimg.cc/mDYsQBDf/Screenshot-from-2025-03-31-08-21-00.png',
    featured: false,
  },
];

// Function to get articles by category
export const getArticlesByCategory = (categoryId: string) => {
  
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
