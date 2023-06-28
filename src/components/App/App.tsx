import { Layout } from 'layout';
import { Routes, Route } from 'react-router-dom';

import { useTheme } from 'hooks/useTheme';

import { Contact } from 'pages/Contact';
import { Content } from 'pages/Content';
import { Landing } from 'pages/Landing';

import GlobalStyles from 'styles/GlobalStyles';

export const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles />
      <div data-theme={theme ? 'dark' : 'light'}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="content" element={<Content />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
