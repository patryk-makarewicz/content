/* eslint-disable @typescript-eslint/no-unused-expressions */
import 'jest-styled-components';

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        language: 'en',
        addResourceBundle: () => jest.fn(),
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

export const privateWarn = (filteredWarnMessages: string[]) => {
  const privateWarnLog = console.warn;
  jest.spyOn(console, 'warn').mockImplementation((msg: string, ...args: unknown[]) => {
    filteredWarnMessages.some((message) => msg?.includes(message)) ? jest.fn() : privateWarnLog(msg, ...args);
  });
};

export const privateError = (filteredErrorMessages: string[]) => {
  const privateErrorLog = console.error;
  jest.spyOn(console, 'error').mockImplementation((msg: string, ...args: unknown[]) => {
    filteredErrorMessages.some((message) => msg.includes(message)) ? jest.fn() : privateErrorLog(msg, ...args);
  });
};
