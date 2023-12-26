import Link from '../../atoms/Link';
import styles from './NavBar.module.css';
const NavBar = () => {
  return (
    <ul className={styles.navlinks}>
      <li>
        <Link label={'About me'} />
      </li>
      <li>
        <Link label={'Experience'} />
      </li>
      <li>
        <Link label={'Contact me'} />
      </li>
    </ul>
  );
};

export default NavBar;
