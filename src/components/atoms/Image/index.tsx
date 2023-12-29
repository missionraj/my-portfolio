import { ImageVariant } from '@/utils/types/Image';
import { FC } from 'react';
import styles from './Image.module.css';

interface ImageProps {
  url: string;
  altText?: string;
  variant?: ImageVariant;
}

const imageStyleConfig = {
  [ImageVariant.PROFILE]: styles['profile-img'],
  [ImageVariant.MEDIUM]: styles['meduim'],
};
const Image: FC<ImageProps> = ({
  url,
  altText = '',
  variant = ImageVariant.PROFILE,
}) => {
  const mappedImageClass = imageStyleConfig[variant];
  return <img src={url} alt={altText} className={mappedImageClass} />;
};

export default Image;
