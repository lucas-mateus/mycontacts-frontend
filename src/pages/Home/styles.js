import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 0 16px;
    font-size: 16px;
    outline: 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
  input:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
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
