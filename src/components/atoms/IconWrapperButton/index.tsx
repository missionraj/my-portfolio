import { FC, ReactNode } from 'react';
import styles from './IconWrapperButton.module.css';

interface IconWrapperButtonProps {
  handleClick: () => void;
  children: ReactNode;
}

const IconWrapperButton: FC<IconWrapperButtonProps> = ({
  handleClick,
  children,
}) => {
  return (
    <button className={styles.icon_wrapper_button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default IconWrapperButton;
