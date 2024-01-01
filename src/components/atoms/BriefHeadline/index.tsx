import { FC } from 'react';
import styles from './BriefHeadlne.module.css';

interface BriefHeadlineProps {
  headlineList: string[];
}
const BriefHeadline: FC<BriefHeadlineProps> = ({ headlineList }) => {
  return (
    <ul className={styles.briefheadline}>
      {headlineList.map((el) => (
        <li className={styles.briefheadline__items}> {el} </li>
      ))}
    </ul>
  );
};

export default BriefHeadline;
