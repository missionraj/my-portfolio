import { BriefDataType } from '@/utils/types/AboutMe';
import styles from './Brief.module.css';
import { FC } from 'react';
import TechStacks from '../TechStacks';
import BriefHeadline from '@/components/atoms/BriefHeadline';

interface BriefProps {
  data: BriefDataType;
}
const Brief: FC<BriefProps> = ({ data }) => {
  return (
    <div className={styles.brief}>
      <BriefHeadline headlineList={data.headline} />
      <TechStacks lists={data.techStacks} />
    </div>
  );
};

export default Brief;
