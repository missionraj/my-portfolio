import { FC } from 'react';
import styles from './Link.module.css';
import { LinkVariant } from '../../../utils/types/LinkType';

const styleConfig = {
  [LinkVariant.NAVLINK]: styles.navlink__item,
};

interface LinksProps {
  label: string;
  url?: string;
  variant?: LinkVariant;
}

const Link: FC<LinksProps> = ({
  label,
  url = '#',
  variant = LinkVariant.NAVLINK,
}) => {
  const mappedClass: string = [styleConfig[variant]].join(' ');
  return (
    <a href={url} className={mappedClass}>
      {label}
    </a>
  );
};

export default Link;
