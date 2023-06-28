import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fontSize, fontWeight, padding } from 'styles';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 155px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${padding.l};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 450px;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  padding: 50px;
  font-size: ${fontSize.xl};
  text-align: center;
`;

export const Link = styled(RouterLink)`
  font-family: 'Archivo', sans-serif;
  background-color: ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.semiBold};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 12px 40px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
