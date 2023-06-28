import styled from 'styled-components';
import { zIndex } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  min-width: 100%;
  min-height: 100%;
  z-index: ${zIndex.regulations};
  background: hsla(0, 0%, 70%, 0.8);
  color: white;
`;

export const InnerWrapper = styled.div`
  @keyframes slideIn {
    from {
      transform: scale(0.7);
    }

    to {
      transform: scale(1);
    }
  }
  margin: 0px auto 45px auto;
  background: hsla(0, 0%, 0%, 0.8);
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  padding: 55px 10px;
  max-width: 1035px;
  margin: auto;
  animation-duration: 0.5s;
  animation-name: slideIn;

  @media screen and (min-width: 490px) {
    padding: 55px 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;
