import { FC } from 'react';
import { NavBarOrder } from '../../../utils/types/NavBarTypes';
import Link from '../../atoms/Link';
import styles from './NavigationItems.module.css';

const listOrderConfig = {
  [NavBarOrder.VERTICAL]: styles['navlinks--vertical'],
  [NavBarOrder.HORIZONTAL]: '',
};

interface NavBarProps {
  order?: NavBarOrder;
}

const NavBar: FC<NavBarProps> = ({ order = NavBarOrder.HORIZONTAL }) => {
  const mappedClassForList: string = [
    styles.navlinks,
    listOrderConfig[order],
  ].join(' ');
  return (
    <ul className={mappedClassForList}>
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
