import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 204px;

  padding: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};

  h2 {
    font-weight: 700;
    font-size: 22px;

    color: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.dark};
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]};
    margin-top: 8px;
  }

  button:nth-child(2) {
    background: ${({ theme, danger }) =>
      danger ? theme.colors.danger.main : theme.colors.primary.main};

    &:hover {
      background: ${({ theme, danger }) =>
        danger ? theme.colors.danger.light : null};
    }
    &:active {
      background: ${({ theme, danger }) =>
        danger ? theme.colors.danger.dark : null};
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-btn {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 8px;
  }
`;
