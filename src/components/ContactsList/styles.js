import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 8px 16px;

    transition: all 0.2s ease-in;
  }
  a:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: #fff;
  }
`;

export const ListContainer = styled.div`
  margin-bottom: 16px;

  header {
    margin-top: 24px;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
  }
  span {
    margin-right: 8px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
