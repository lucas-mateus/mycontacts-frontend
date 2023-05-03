import styled, { css } from 'styled-components';

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
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

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

export const ListHeader = styled.header`
  margin-bottom: 16px;

  margin-top: 24px;

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

  img {
    transform: ${({ orderBy }) =>
      orderBy === 'ASC'
        ? css`
    rotate(180deg)
    `
        : css`rotate(0deg)`};

    transition: transform 0.2s ease-in;
  }
`;

export const CardContainer = styled.div`
  margin-top: 16px;
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.danger.main};
    margin-bottom: 8px;
  }
`;

export const EmptyListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-top: 16px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const ContactNotFound = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[200]};
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    margin-left: 12px;
  }

  strong {
    word-break: break-word;
  }
`;
