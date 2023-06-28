import { useTheme } from 'hooks/useTheme';

import { default as ModeDark } from '../../assets/mode_dark.svg';
import { default as ModeLight } from '../../assets/mode_light.svg';
import * as Styled from './ThemeButton.styles';

export const ThemeButton = () => {
  const { theme, onChangeTheme } = useTheme();

  return (
    <Styled.Button onClick={onChangeTheme}>
      <Styled.Toggle $theme={theme} />
      <img src={ModeDark} width={13} height={13} />
      <img src={ModeLight} width={15} height={15} />
    </Styled.Button>
  );
};
