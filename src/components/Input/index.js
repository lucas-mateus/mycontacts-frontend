import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: none;
  appearance: none;
  font-size: 16px;

  transition: border 0.4s ease-in;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) =>
    error &&
    css`
      color: ${theme.colors.danger.main};
      &:focus {
        border: 2px solid ${theme.colors.danger.main};
      }
    `}
`;
