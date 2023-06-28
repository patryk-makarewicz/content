import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from 'state/appState';

export const useTheme = () => {
  const storedDarkMode = localStorage.getItem('service_calculator_dark_mode') === 'true';
  const [themeLocal, setThemeLocal] = useState(storedDarkMode);
  const [theme, setTheme] = useRecoilState(themeState);

  useEffect(() => {
    const BooleanMode = themeLocal.toString();
    localStorage.setItem('service_calculator_dark_mode', BooleanMode);
  }, [themeLocal]);

  useEffect(() => {
    if (localStorage.getItem('service_calculator_dark_mode') === 'true') {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, [setTheme]);

  const onChangeTheme = () => {
    setThemeLocal((prevState) => !prevState);
    setTheme((prevState) => !prevState);
  };

  return { theme, onChangeTheme };
};
