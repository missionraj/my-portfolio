import NavLink from '../../atoms/NavLink';
import styles from './NavBar.module.css';
const NavBar = () => {
  return (
    <ul className={styles.navlinks}>
      <NavLink label={'About me'} />
      <NavLink label={'Experience'} />
      <NavLink label={'Contact me'} />
    </ul>
  );
};

export default NavBar;
