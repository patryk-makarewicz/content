import React from 'react';

import { Spinner } from 'components/Spinner';

import * as Styled from './Button.styles';

export type ButtonProps = {
  secondary?: boolean;
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
};

export const Button = ({ children, onClick, secondary = false, type = 'button', loading = false }: ButtonProps) => (
  <Styled.Button type={type} onClick={onClick} secondary={secondary} $loading={loading}>
    {loading ? <Spinner width="23px" height="23px" /> : children}
  </Styled.Button>
);
