import { FC } from 'react';
import { BannerDataType } from '../../../utils/types/AboutMe';
import styles from './Banner.module.css';
import Image from '@/components/atoms/Image';

interface BannerProps {
  data: BannerDataType;
}

const Banner: FC<BannerProps> = ({ data }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__child}>
        <h4 className={styles.banner__child__intro}> {data.infoText} </h4>
      </div>
      <div className={styles.banner__child}>
        <Image url={data.profileImage} altText='Raj Rana Profile Picture' />
      </div>
    </div>
  );
};

export default Banner;
