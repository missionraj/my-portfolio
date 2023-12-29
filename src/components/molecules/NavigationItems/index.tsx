import { FC } from 'react';
import { NavBarOrder } from '../../../utils/types/NavBarTypes';
import Link from '../../atoms/Link';
import styles from './NavigationItems.module.css';
import { NavLink } from '../../../utils/types/Header';

const listOrderConfig = {
  [NavBarOrder.VERTICAL]: styles['navlinks--vertical'],
  [NavBarOrder.HORIZONTAL]: '',
};

interface NavBarProps {
  order?: NavBarOrder;
  list: NavLink[];
}

const NavBar: FC<NavBarProps> = ({ order = NavBarOrder.HORIZONTAL, list }) => {
  const mappedClassForList: string = [
    styles.navlinks,
    listOrderConfig[order],
  ].join(' ');
  return (
    <ul className={mappedClassForList}>
      {list.map((el) => (
        <li key={el.id}>
          <Link label={el.label} url={el.url} />
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
