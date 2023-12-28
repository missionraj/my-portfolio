import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { MdDehaze } from 'react-icons/md';
import HeaderLogo from '../../atoms/HeaderLogo';
import IconWrapperButton from '../../atoms/IconWrapperButton';
import styles from './Header.module.css';
import NavigationItems from '../../molecules/NavigationItems';
import { NavBarOrder } from '../../../utils/types/NavBarTypes';

const Header = () => {
  const [showMobileNavigation, setShowMobileNavigation] = useState(false);
  return (
    <header className={styles.header}>
      <nav className={styles['header__main-nav']}>
        <HeaderLogo />
        <div className={styles['header__main-nav__menu']}>
          <NavigationItems />
        </div>
        <div className={styles['header__main-nav__iconwrapper']}>
          {showMobileNavigation ? (
            <IconWrapperButton
              handleClick={() => setShowMobileNavigation(false)}
            >
              <MdOutlineClose
                className={styles['header__main-nav____iconwrapper__icon']}
              />
            </IconWrapperButton>
          ) : (
            <IconWrapperButton
              handleClick={() => setShowMobileNavigation(true)}
            >
              <MdDehaze
                className={styles['header__main-nav____iconwrapper__icon']}
              />
            </IconWrapperButton>
          )}
        </div>
      </nav>
      <nav className={styles['header__mobile-nav']}>
        {showMobileNavigation && (
          <NavigationItems order={NavBarOrder.VERTICAL} />
        )}
      </nav>
    </header>
  );
};

export default Header;
