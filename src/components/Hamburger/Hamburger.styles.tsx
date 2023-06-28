import styled, { css } from 'styled-components';
import { breakpoint } from 'styles';

type BarProps = {
  open: boolean;
};

export const HamburgerButton = styled.button`
  position: relative;
  display: inline;
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: ${breakpoint.s}) {
    display: none;
  }
`;

export const BarOne = styled.div<BarProps>`
  width: 30px;
  height: 3px;
  background-color: var(--text-color);
  margin: 7px 0;
  transition: 0.2s;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(-45deg) translate(-7px, 9px);
      background-color: var(--text-color);
    `}
`;

export const BarTwo = styled(BarOne)`
  ${({ open }) =>
    open &&
    css`
      opacity: 0;
    `}
`;

export const BarThree = styled(BarOne)`
  ${({ open }) =>
    open &&
    css`
      transform: rotate(45deg) translate(-5px, -7px);
      background-color: var(--text-color);
    `}
`;
