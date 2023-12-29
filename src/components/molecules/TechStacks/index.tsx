import { techStackType } from '@/utils/types/AboutMe';
import { FC } from 'react';
import styles from './TechStacks.module.css';
import Image from '@/components/atoms/Image';
import { ImageVariant } from '@/utils/types/Image';

interface TechStacks {
  lists: techStackType[];
}

const TechStacks: FC<TechStacks> = ({ lists }) => {
  return (
    <div className={styles.techstacks}>
      {lists.map((el) => (
        <Image
          url={el.imageUrl}
          altText={el.altText}
          key={el.id}
          variant={ImageVariant.MEDIUM}
        />
      ))}
    </div>
  );
};

export default TechStacks;
