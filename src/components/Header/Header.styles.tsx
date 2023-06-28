import styled, { css } from 'styled-components';

import { colors } from '../../styles/colors';
import { breakpoint, zIndex } from '../../styles/variables';

type InnerWrapperProps = {
  $justifyEnd?: boolean;
};

type MenuProps = {
  close: boolean;
};

export const Config = styled.div`
  position: relative;
  max-width: 1440px;
  height: 35px;
  margin: auto;
  border-bottom: 1px solid ${colors.primary};
  background-color: var(--background-secondary-color);
  z-index: ${zIndex.header};
`;

export const InnerWrapper = styled.nav<InnerWrapperProps>`
  display: flex;
  align-items: center;
  ${({ $justifyEnd }) =>
    $justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
  width: 100%;
  padding: 0 10px;
  margin: auto;
  height: 100%;

  @media screen and (min-width: ${breakpoint.s}) {
    ${({ $justifyEnd }) =>
      $justifyEnd
        ? css`
            justify-content: flex-end;
          `
        : css`
            justify-content: flex-start;
          `}
  }
`;

export const Header = styled.header`
  max-width: 1440px;
  height: 60px;
  margin: auto;
  border-bottom: 2px solid var(--border-color);
  background-color: var(--background-secondary-color);
  position: sticky;
  top: 0px;
  z-index: ${zIndex.header};
`;

export const MobileMenu = styled.div<MenuProps>`
  background-color: var(--background-secondary-color);
  color: var(--text-color);
  position: fixed;
  top: 35px;
  left: auto;
  min-width: 100%;
  min-height: 100%;
  transition: all 0.2s ease-out;
  z-index: ${zIndex.mobileMenu};
  overflow: hidden;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${({ close }) =>
    close
      ? css`
          right: -100%;
          visibility: hidden;
        `
      : css`
          right: 0;
          visibility: visible;
        `}
`;

export const FlagButton = styled.button`
  background-color: inherit;
  text-decoration: none;
  border: none;
  cursor: pointer;
  display: flex;
`;
