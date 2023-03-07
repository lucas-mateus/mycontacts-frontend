import styled from 'styled-components';

export const Button = styled.button`
  padding: 0 16px;
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
  &[disabled] {
    background: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }
`;
