import styled from 'styled-components';
import { fontSize, fontWeight } from 'styles';

export const ButtonClose = styled.button`
  position: absolute;
  right: 20px;
  top: 0;
  font-size: 20px;
  font-weight: ${fontWeight.regular};
  color: var(--text-color);
  background-color: inherit;
  border: none;
  font-family: 'Archivo', sans-serif;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonTerm = styled(ButtonClose)`
  position: inherit;
  text-decoration: underline;
  font-size: ${fontSize.m};
  font-weight: ${fontWeight.semiBold};
`;
