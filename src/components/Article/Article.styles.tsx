import styled, { css } from 'styled-components';
import { fontSize, fontWeight, lineHeight, margin, padding, shadow } from 'styles';

type PhotoProps = {
  hide: boolean;
};

type BoxProps = {
  $margin: string;
};

type IconProps = {
  $dark: boolean;
};

export const Wrapper = styled.div`
  padding: ${padding.m};
  box-shadow: ${shadow.first};
  border-radius: 6px;
  max-width: 300px;
`;

export const Body = styled.div`
  h2 {
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.semiBold};
    margin-bottom: ${margin.xs};
  }

  p {
    font-size: ${fontSize.m};
    line-height: ${lineHeight.m};
    margin-bottom: ${margin.xs};
  }
`;

export const Image = styled.img<PhotoProps>`
  transition: ease 1s all;
  ${({ hide }) =>
    hide
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
  border-radius: 4px;
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: ${margin.m};
`;

export const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ $margin }) =>
    css`
      margin: ${$margin};
    `}
`;

export const Title = styled.h3`
  font-size: ${fontSize.l};
  font-weight: ${fontWeight.bold};
`;

export const Metadata = styled.div`
  font-size: ${fontSize.s};
  font-weight: ${fontWeight.semiBold};
`;

export const Icon = styled.img<IconProps>`
  width: 25px;
  height: 25px;
  ${({ $dark }) =>
    $dark
      ? css`
          filter: invert(100%);
        `
      : css`
          filter: none;
        `}
`;
