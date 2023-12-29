import AboutMe from '@/components/widgets/AboutMe';
import Header from '@/components/widgets/Header';
import profilePic from '@/assets/image/profile-pic-orange.png';
import htmlLogo from '@/assets/image/html__logo.png';
import cssLogo from '@/assets/image/css_logo.png';
import jsLogo from '@/assets/image/js_logo.png';
import typescriptLogo from '@/assets/image/Typescript_logo.png';
import sassLogo from '@/assets/image/Sass_Logo.png';
import reactLogo from '@/assets/image/react_logo.svg';
import vueLogo from '@/assets/image/vuejs_logo.svg';
import angularLogo from '@/assets/image/Angular_logo.png';
import nodejsLogo from '@/assets/image/Nodejs_logo.svg';

const Home = () => {
  const headerData = {
    logo: 'Raj Rana',
    links: [
      {
        id: 1,
        url: '#about-me',
        label: 'About me',
      },
      {
        id: 2,
        url: '#experience',
        label: 'Experience',
      },
      {
        id: 3,
        url: '#contact-me',
        label: 'Contact me',
      },
    ],
  };

  const aboutMeSectionData = {
    bannerData: {
      infoText:
        'Hi my name is Raj rana , I am a frontend developer based out in india ',
      profileImage: profilePic,
    },
    briefData: {
      headline:
        'with 6+ Years Proffesional  Experience in front end developement, Proficient in HTML, CSS, JavaScript, and TypeScript. Experienced in Collaborative Projects with Startups, Mid-size Tech Companies, and MNCs, Including Client Engagement with UK-Based Organizations. Strong Communication Skills and Robust Fundamentals in Frontend Development. Proven Track Record of Delivering High-Quality Solutions, Offering In-Depth Technical Proficiency and Valuable Contributions to Drive Project Success . Following is techstacks list which i have worked on',
      techStacks: [
        {
          id: 1,
          altText: 'html',
          imageUrl: htmlLogo,
        },
        {
          id: 2,
          altText: 'css',
          imageUrl: cssLogo,
        },
        {
          id: 3,
          altText: 'javascript',
          imageUrl: jsLogo,
        },
        {
          id: 4,
          altText: 'typescript',
          imageUrl: typescriptLogo,
        },
        {
          id: 5,
          altText: 'React',
          imageUrl: reactLogo,
        },
        {
          id: 6,
          altText: 'Vue',
          imageUrl: vueLogo,
        },
        {
          id: 7,
          altText: 'Angular',
          imageUrl: angularLogo,
        },
        {
          id: 8,
          altText: 'Sass',
          imageUrl: sassLogo,
        },
        {
          id: 9,
          altText: 'nodejs',
          imageUrl: nodejsLogo,
        },
      ],
    },
  };

  return (
    <>
      <Header data={headerData} />
      <AboutMe data={aboutMeSectionData} />
    </>
  );
};

export default Home;
