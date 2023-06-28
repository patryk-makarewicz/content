import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Hamburger } from 'components/Hamburger';
import { Navigation } from 'components/Navigation';
import { ThemeButton } from 'components/ThemeButton';

import { Logo } from 'utils/logo';
import { useWindowSize } from 'utils/windowSize';

import FlagEn from '../../assets/flag_en.png';
import { ReactComponent as FlagPl } from '../../assets/flag_poland.svg';
import * as Styled from './Header.styles';

export const Header = () => {
  const { i18n } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  const onOpenCloseMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const [language, setLanguage] = useState('en');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const onChangeLanguage = () => {
    if (language === 'pl') {
      changeLanguage('en');
    } else {
      changeLanguage('pl');
    }
  };

  const renderFlag = () => {
    if (language === 'en') {
      return <img src={FlagEn} alt="Language flag En" width={24} height={22} style={{ marginLeft: '3px' }} />;
    } else {
      return <FlagPl width={27} height={32} />;
    }
  };

  useEffect(() => {
    setShowMenu(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width >= 576]);

  return (
    <>
      <Styled.Config id="about">
        <Styled.InnerWrapper $justifyEnd>
          <ThemeButton />
          <Styled.FlagButton onClick={onChangeLanguage} style={{ marginLeft: '15px', padding: 0 }}>
            {renderFlag()}
          </Styled.FlagButton>
        </Styled.InnerWrapper>
      </Styled.Config>

      <Styled.Header>
        <Styled.InnerWrapper>
          <h1 style={{ margin: 'auto 15px auto 0', display: 'flex' }}>{Logo()}</h1>
          <Navigation />
          <Hamburger showMenu={showMenu} onOpenCloseMenu={onOpenCloseMenu} />
        </Styled.InnerWrapper>
      </Styled.Header>

      <Styled.MobileMenu close={!showMenu}>
        <Navigation onClick={() => setShowMenu(false)} mobile />
      </Styled.MobileMenu>
    </>
  );
};
