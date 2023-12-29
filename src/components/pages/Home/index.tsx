import Header from '../../widgets/Header';

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
  return (
    <>
      <Header data={headerData} />
    </>
  );
};

export default Home;
