import styled, { css } from 'styled-components';
import { colors, fontSize } from 'styles';

type FormProps = {
  $error?: boolean;
};

export const Container = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 6px;
  font-size: ${fontSize.s};
  color: ${colors.warning};
`;

export const SentMessage = styled(ErrorMessage)`
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: -30px;
  text-align: center;
  color: ${colors.primary};
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: ${fontSize.s};
`;

const baseFieldsStyles = css`
  margin: 0 0 25px 0;
  width: 100%;
  font-size: ${fontSize.s};
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-family: 'Archivo', sans-serif;
  background-color: var(--background-secondary-color);

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.primary};
  }
`;

export const Input = styled.input<FormProps>`
  ${baseFieldsStyles}
  height: 32px;
  padding: 0 15px;
  ${({ $error = false }) =>
    $error &&
    css`
      border: 1px solid ${colors.warning};
    `}
`;

export const Textarea = styled.textarea<FormProps>`
  ${baseFieldsStyles}
  height: 122px;
  padding: 5px 15px;
  resize: none;
  ${({ $error = false }) =>
    $error &&
    css`
      border: 1px solid ${colors.warning};
    `}
`;

export const Select = styled.select`
  padding: 4px 0;
`;
