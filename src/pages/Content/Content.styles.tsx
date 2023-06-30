import styled from 'styled-components';
import { colors } from 'styles';

import { fontWeight, padding } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 155px);
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const ErrorMessage = styled(Paragraph)`
  font-weight: ${fontWeight.semiBold};
  color: ${colors.warning};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: ${padding.xl} 0;
`;
