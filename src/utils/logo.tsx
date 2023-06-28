import { useTheme } from 'hooks/useTheme';

import { default as LogoDark } from '../assets/logo_black.svg';
import { default as LogoWhite } from '../assets/logo_white.svg';

export const Logo = () => {
  const { theme } = useTheme();

  if (!theme) {
    return <img src={LogoDark} width={35} height={40} />;
  } else {
    return <img src={LogoWhite} width={35} height={40} />;
  }
};
