import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

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
