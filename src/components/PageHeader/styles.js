import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 48px;
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 8px;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 16px;
      font-weight: bold;
    }

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }
  }

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;
