import styled, { css } from 'styled-components';
import { colors } from 'styles';

type ToggleProps = {
  $theme: boolean;
};

export const Button = styled.button`
  text-decoration: none;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.5s;
  width: 42px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  position: relative;
  background-color: ${colors.gray};
`;

export const Toggle = styled.div<ToggleProps>`
  border-radius: 50%;
  background-color: ${colors.primary};
  width: 16px;
  height: 16px;
  position: absolute;
  transition: all 0.2s ease-in-out;

  ${({ $theme }) =>
    !$theme &&
    css`
      margin-left: 18px;
    `}
`;
