import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink, FiGithub, FiFigma  } from 'react-icons/fi';

import Work1 from './assets/pro-min.png';
import Work2 from './assets/OPTY3C12-min.png';
import Work3 from './assets/pro1-min.png';
import Work4 from './assets/OJK92B1-min.png';
import Work5 from './assets/OPTY3C1-min.png';
import Work6 from './assets/project22.jpg-min.png';
import Work7 from './assets/807-min.png';
import Work8 from './assets/809-min.png';
import Work9 from './assets/808-min.png';


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: ' Tony',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Steve',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Cameroonian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Douala, Cameroon',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+237 658459727',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ts4665768@gmail.com',
  },


  {
    id: 9,
    title: 'Languages : ',
    description: ' English, French',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Frontend Developer <span> Nexinch LLC </span>',
    desc: ' Developing and implementing a cutting-edge, user-friendly website, elevating the overall user experience. By incorporating intuitive UI/UX elements and optimizing performance.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - Present',
    title: 'UI/UX Designer <span> Freelancer </span>',
    desc: 'Design of mobile application, websites and Product designs resulting in a more intuitive user interface and positive user feedback.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - Present',
    title: 'Graphic Design <span> Freelancer </span>',
    desc: 'Creating Visually compelling graphis designs for Individual business and small companies contributing to increase in brand awareness',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Higher National Diploma (HND) <span> UNIVERSITY INSTITUTE OF THE GULF OF GUINEA</span>',
  },

 
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'CSS/Bootstrap',
    percentage: '60',
  },

  {
    id: 3,
    title: 'Javascript',
    percentage: '66',
  },

  {
    id: 4,
    title: 'React',
    percentage: '60',
  },

  {
    id: 5,
    title: 'Figma',
    percentage: '75',
  },

  {
    id: 6,
    title: 'Wordpress',
    percentage: '40',
  },

  {
    id: 7,
    title: 'Adobe Illustrator',
    percentage: '65 ',
  },

  {
    id: 8,
    title: 'Adobe Photoshop',
    percentage: '50',
  },

  {
    id: 9,
    title: 'Firebase',
    percentage: '40',
  },

  {
    id: 10,
    title: 'PHP',
    percentage: '45',
  },

  {
    id: 11,
    title: 'Git/Github',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Websites',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Food Ordering website',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP & MYSQL',
      },
      {
        icon: (
          <a href="https://github.com/Tonysteve13/OFOS.git" target="_blank">
            <FiGithub />
          </a>
        ),
        title: 'Github : ',
        desc: 'https://github.com/OFOS.git',
      },
    ],
  },
  

  {
    id: 2,
    img: Work2,
    title: 'Websites',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiGithub />,
        title: 'Github : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Websites',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Netflix Clone',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React redux',
      },
      
        {
          icon: (
            <a href="https://github.com/Tonysteve13/NetflixClone.git" target="_blank">
              <FiGithub />
            </a>
          ),
        title: 'Github : ',
        desc: 'https://github.com/Tonysteve13/NetflixClone.git',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Web Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video PLayer Dashboard',
      },
      {
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Web Designs',
    details: [
      {
        title: 'Project : ',
        desc: 'HeartEase Landing page',
      },
      {
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Web Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Inspo Webiste',
      },
      {
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'Mobile Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Banking Mobile App',
      },
      {
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Mobile Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Travelling App',
      },
      {
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: 'Mobile Designs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Coffee shop App',
      },
      { 
        icon: <FiFigma />,
        title: 'Figma  ',
        // desc: 'www.figma.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
