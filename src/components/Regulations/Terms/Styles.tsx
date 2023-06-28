import styled from 'styled-components';
import { colors } from 'styles';

export const Container = styled.div`
  max-height: 436.5px;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 20px 5px 5px 17px;
  font-weight: 400;
  font-size: 14px;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #000000a6;
    border-radius: 6px;
    margin: 35px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.primary};
    border-radius: 6px;
  }
  @media screen and (min-width: 430px) {
    width: 100%;
  }

  @media screen and (min-width: 566px) {
    padding: 30px 40px 5px 40px;
  }
`;

export const Header = styled.h2`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  margin-bottom: 30px;
  color: #ffffff;
`;

export const Title = styled.h3`
  margin: 10px 0;
  text-align: center;
  color: #ffffff;
`;

export const List = styled.ul`
  margin-left: 30px;
  list-style: none;
`;
