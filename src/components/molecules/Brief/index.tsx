import { BriefDataType } from '@/utils/types/AboutMe';
import styles from './Brief.module.css';
import { FC } from 'react';
import TechStacks from '../TechStacks';

interface BriefProps {
  data: BriefDataType;
}
const Brief: FC<BriefProps> = ({ data }) => {
  return (
    <div className={styles.brief}>
      <p className={styles.brief__headline}> {data.headline} </p>
      <TechStacks lists={data.techStacks} />
    </div>
  );
};

export default Brief;
