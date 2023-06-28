import styled, { css } from 'styled-components';

import { shadow } from 'styles/variables';

type SocialMediaType = {
  $white?: boolean;
};

export const Wrapper = styled.div`
  width: 110px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const ButtonIcon = styled.a<SocialMediaType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  ${({ $white }) =>
    $white
      ? css`
          background-color: #ffffff;
        `
      : css`
          background-color: var(--background-color);
        `}
  border-radius: 50%;
  box-shadow: ${shadow.first};
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }
`;
