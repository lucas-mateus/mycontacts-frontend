import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 96px;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }

  .name-info {
    display: flex;
    align-items: center;
    small {
      margin-left: 8px;
      background-color: ${({ theme }) => theme.colors.primary.lighter};
      padding: 6px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 4px;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  span {
    display: block;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[200]};

    margin-top: 4px;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-left: 4px;
      border: none;
      background-color: transparent;
    }
  }
`;
