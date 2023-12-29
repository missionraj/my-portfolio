import { FC } from 'react';
import { AboutMeType } from '../../../utils/types/AboutMe';
import Banner from '../../molecules/Banner';
import styles from './AboutMe.module.css';
import Brief from '@/components/molecules/Brief';

interface AboutMeProps {
  data: AboutMeType;
}

const AboutMe: FC<AboutMeProps> = ({ data }) => {
  return (
    <section id='about-me' className={styles.aboutme}>
      <Banner data={data.bannerData} />
      <Brief data={data.briefData} />
    </section>
  );
};

export default AboutMe;
