import styled from 'styled-components';

import { lineHeight, padding } from 'styles/variables';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 155px);
`;

export const Paragraph = styled.p`
  text-align: center;
  max-width: 1080px;
  margin: auto;
  line-height: ${lineHeight.l};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  padding: ${padding.xl} 0;
`;
