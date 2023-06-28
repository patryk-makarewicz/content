import { NavLink as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { breakpoint, colors, fontSize, fontWeight } from 'styles';

type MobileVersionProp = {
  mobile: boolean;
};

export const List = styled.ul<MobileVersionProp>`
  ${({ mobile }) =>
    mobile
      ? css`
          display: flex;
          flex-direction: column;
        `
      : css`
          display: none;

          @media screen and (min-width: ${breakpoint.s}) {
            display: flex;
          }
        `}
  list-style: none;
  margin: 0 10px;
`;

export const Item = styled.li<MobileVersionProp>`
  ${({ mobile }) =>
    mobile
      ? css`
          text-align: center;
          margin-left: 0;
          margin-bottom: 28px;

          &:last-of-type {
            margin-bottom: 0;
          }
        `
      : css`
          margin-left: 28px;

          &:first-of-type {
            margin-left: 0;
          }
        `}
`;

export const Link = styled(RouterLink)`
  color: var(--text-color);
  text-decoration: none;
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
  cursor: pointer;
  display: inline-block;
  position: relative;

  &.active {
    color: ${colors.primary};
    text-decoration: underline ${colors.primary};
    text-underline-offset: 4px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -2px;
    left: 0;
    background-color: ${colors.primary};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
