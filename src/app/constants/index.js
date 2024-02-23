import {
  css,
  figma,
  git,
  html,
  javascript,
  java,
  nextjs,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  mysql,
  capella,
  lykka,
  hribs,
  swu,
  swu2,
  swu3,
  swu4,
  swu5,
  blog,
  fb2,
  fb3,
  fb4,
  fb5,
  cloudinaryDemo,
  travelWisely,
  travelWisely2,
  travelWisely3,
  travelWisely4,
  travelWisely5,
  heavensVault,
  breadit,
  breadit2,
  breadit3,
  smartwiz,
  wanderInn,
  wanderInn2,
  wanderInn3,
  wanderInn4,
  wanderInn5,
} from '../assets';

import logo from '../assets/Logos/Companies/logo.svg';

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'NextJS',
    icon: nextjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    companyName: 'SmartWiz',
    icon: smartwiz,
    date: 'Nov 2023 - Present',
    points: [
      `Initiated and conducted comprehensive code reviews, ensuring code quality, adherence to best practices, and knowledge sharing within the development team.`,
      `Collaborated closely with product owners, UI/UX designers, back-end developers, and QA engineers to translate user requirements into highly scalable web experiences, ensuring effective communication and seamless integration throughout the development process.`,
      `Participated in Agile methodologies (Scrum), sprint planning, stand-ups, reviews, and retrospectives ensuring timely, high-quality software delivery.`,
      `Leveraged AWS cloud services to host and manage web pages, ensuring optimal performance and reliability in a cloud environment.`,
    ],
  },
  {
    title: 'Web Development Consultant',
    companyName: 'JuDev',
    icon: logo,
    date: 'Feb 2023 - Sept 2023',
    points: [
      'Ensured web content accessibility guidelines and ADA compliance, resulting in a 15% increase in accessibility score and improved user satisfaction.',
      'Successfully attracted 7% more visitors to the website through SEO strategies and content marketing efforts.',
      'Designed and implemented robust backend systems, utilizing advanced proficiency in JSON and RESTful APIs to streamline data communication and enhance overall system efficiency.',
      'Conducted comprehensive use case analysis to identify key challenges in existing processes. Applied strategic problem-solving techniques to streamline operations and enhance user experiences.',
    ],
  },
  {
    title: 'Front-End Developer',
    companyName: 'Lykka Village',
    icon: lykka,
    date: 'Sept 2022 - Feb 2023',
    points: [
      'Conducted usability testing, leading to a 15% reduction in user interface issues and a more streamlined user experience.',
      'Improved data exchange efficiency by 25% and reduced server-client communication latency by 15% through the development and deployment of RESTful web services.',
      'Optimized database performance through advanced SQL queries, leading to a 20% reduction in query response time.',
      'Leveraged React.js and JavaScript to implement innovative user-facing features, ensuring technical feasibility of UI/UX designs and optimizing applications for speed and scalability.'
    ],
  },
  /* {
    title: 'Computer Science Student',
    companyName: 'Capella University',
    icon: capella,
    date: 'Jan 2020 - Sept 2022',
    points: [
      'Learn and use languages and software to build in React.js, JavaScript, HTML, CSS, Java, SQL, and MongoDB',
      'Collaborating with students in teams composed of designers, project managers, and other developers to create graded school projects.',
      'Implement Agile methodologies, namely Scrum.',
      'Participating in learning activities directed to learn from and teach others.',
    ],
  }, */
  {
    title: 'Software Developer',
    companyName: 'HR Inspired Business Solutions',
    icon: hribs,
    date: 'Aug 2021 - Apr 2022',
    points: [
      'Achieved a 15% increase in overall application performance by developing and implementing backend routes using Expressjs and Nodejs, resulting in a 20% improvement in server response time.',
      'Implemented cross-browser compatibility, responsive design, and mobile-first development strategies, contributing to a 25% increase in user engagement and improved user interface (UI/UX).',
      'Stayed abreast of industry trends and integrated emerging technologies, leading to a 30% reduction in page load times and enhanced web presence.',
    ],
  },
];

const projects = [
  {
    name: 'WanderInn',
    description: `Discover unique stays, from cozy cabins to urban lofts, and everything in between. 
    With WanderInn, you'll find the ideal place to call home while you explore new destinations.`,
    tags: ['React.js','TypeScript','TailwindCSS','MongoDB','Redux'],
    image: [wanderInn,wanderInn2,wanderInn3,wanderInn4,wanderInn5],
    github: 'https://github.com/JulianBristol/WanderInn',
    website: 'https://wanderinn.vercel.app/',
  },
  {
    name: 'Breadit',
    description: 'Breadit is a Reddit clone for just about anything you can think of. Feel free to signup for an account and post whatever you like. It is a FullStack application that employs concepts like infinite scrolling, caching, authentication, optimistic updates and more.',
    tags: ['React.js','TypeScript','TailwindCSS','MongoDB','Redux'],
    image: [breadit,breadit2,breadit3],
    github: 'https://github.com/JulianBristol/Breadit',
    website: 'https://breadit.netlify.app/',
  },
  {
    name: 'Searcy Water Utilities',
    description: 'Revamp the existing Searcy Water Utilities website to provide information and services to the residents of Searcy Arkansas. This was my first real attempt to understand design principles and incorporate them in projects.',
    tags: ['MongoDB','Express.js','React.js','Node.js','MUI',],
    image: [swu,swu2,swu3,swu4,swu5],
    github: undefined,
    website: 'http://searcywater.org/',
  },
  {
    name: 'FaceBlog',
    description: 'FaceBlog is a website that combines my portfolio, blog, and thoughts with AI-generated profiles and posts. Built using ReactJS, Javascript, MUI, and several APIs, it aims to help people learn more about me and my ideas.',
    tags: ['React.js','JavaScript','MUI',],
    image: [blog,fb2,fb3,fb4,fb5],
    github: 'https://github.com/JulianBristol/FaceBlog',
    website: 'https://face-blog.netlify.app',
  },
  {
    name: 'Travel Wisely',
    description: 'A comprehensive platform that empowers users with location-based information, weather forecasts, and recommendations for nearby restaurants, hotels, and attractions. It helps users make informed travel decisions and explore new places with confidence. This app uses several APIs like google maps, tripadvisor, and weather apis. I am also proud to state that I create all the weather icons utilizing my skills in photoshop',
    tags: ['React.js','JavaScript','MUI',],
    image: [travelWisely,travelWisely2,travelWisely3,travelWisely4,travelWisely5],
    github: 'https://github.com/JulianBristol/TravelWisely',
    website: 'https://travelwisely.netlify.app/',
  },
  {
    name: 'Heaven\'s Vault Translator',
    description: 'Heaven\'s Vault is a game with an interesting gimmick where you need to translate ancient runes into modern day language. This program acts as a translator of sorts, allowing you to Create, Read, Update, and Delete words and their meanings.',
    tags: ['Java','MySQL','CRUD','SceneBuilder',],
    image: [heavensVault],
    github: 'https://github.com/JulianBristol/HeavensVaultTranslator',
    website: undefined,
  }/*
  {
    name: 'Cloudinary Image Viewer',
    description: 'Cloudinary is a cloud-enabled image and video storage and management site. This application displays my abilities to work with Cloudinary\'s API to upload, store, and retrieve images for viewer consumption. While originally intended to work with a backend server, the code has been recently modified for display using Netlify\'s serverless backend',
    tags: [
      {
        name: 'React.js',
        color: '#00d9ff',
      },
      {
        name: 'JavaScript',
        color: '#ffd600',
      },
      {
        name: 'CSS',
        color: '#0ee979',
      },
      {
        name: 'Node.js',
        color: '#ac22e0',
      },
      {
        name: 'Express.js',
        color: '#CC112C',
      },
    ],
    image: cloudinaryDemo,
    sourceCodeLink: 'https://github.com/JulianBristol/CloudinaryImageUpload_Demo',
    activeLink: 'https://cloudinaryupload.netlify.app/',
  }, */
];

export { technologies, experiences, projects };
