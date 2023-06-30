import styled from 'styled-components';

import { padding } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 155px);
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: ${padding.xl} 0;
`;
