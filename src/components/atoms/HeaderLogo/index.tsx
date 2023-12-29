import { FC } from 'react';
import styles from './HeaderLogo.module.css';

interface HeaderLogoProps {
  value: string;
}

const HeaderLogo: FC<HeaderLogoProps> = ({ value }) => {
  return <h3 className={styles.headerlogo}> {value} </h3>;
};

export default HeaderLogo;
