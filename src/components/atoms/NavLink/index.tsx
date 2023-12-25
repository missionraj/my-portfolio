import { FC } from 'react';
import styles from './NavLink.module.css';

interface NavLinksProps {
  label: string;
  url?: string;
}

const NavLink: FC<NavLinksProps> = ({ label, url = '#' }) => {
  return (
    <li>
      <a href={url} className={styles.navlink__item}>
        {label}
      </a>
    </li>
  );
};

export default NavLink;
