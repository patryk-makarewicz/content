import styled from 'styled-components';
import { colors, fontWeight, margin, padding, shadow } from 'styles';

export const Wrapper = styled.div`
  padding: ${padding.m};
  box-shadow: ${shadow.first};
  border-radius: 6px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin-bottom: ${margin.m};
  filter: invert(23%) sepia(38%) saturate(4972%) hue-rotate(355deg) brightness(91%) contrast(86%);
`;

export const ErrorMessage = styled.p`
  font-weight: ${fontWeight.semiBold};
  color: ${colors.warning};
`;
