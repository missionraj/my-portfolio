import HeaderLogo from '../../atoms/HeaderLogo';
import NavBar from '../../molecules/NavBar';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderLogo />
      <NavBar />
    </header>
  );
};

export default Header;
