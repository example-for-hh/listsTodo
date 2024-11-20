import { css, styled } from 'styled-components';

export const Todo = styled.div`
  margin-block-start: 100px;
`;

export const TodoActive = styled.div`
  font-weight: bold;
`;

export const TodoItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
`;

export const TodoHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TodoActions = styled.div`
  position: relative;
`;

export const TodoSpan = styled.span<{ $active?: boolean }>`
  padding: 0 10px;
  cursor: pointer;

  ${props =>
    props.$active &&
    css`
      font-weight: bold;
    `}
`;

export const ToboBodyStyled = styled.div`
  margin-block-start: 20px;
`;

export const TodoItem = styled.div<{ $isOpened: boolean }>`
  margin-block-end: 20px;
  padding: 30px;
  box-shadow: 2px 2px 10px rgba(216 224 237 / 80%);
  ${props => props.$isOpened && css``}
`;
export const TodoJobs = styled.div`
  border-block-end: 1px solid #000;
`;

export const TodoBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  block-size: 40px;
  margin-block-start: 10px;
`;
export const TodoTitle = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 10px;
  padding-block-end: 5px;
  border-block-end: 1px solid #000;
`;
export const TodoTitleSpan = styled.span`
  flex-grow: 1;
  flex-shrink: 0;
  padding-inline-start: 15px;
  font-size: 24px;
`;

export const TodoClearStyled = styled.div`
  cursor: pointer;
`;

export const TodoWrapperIcons = styled.div`
  svg {
    &:only-child {
      margin: 0;
    }

    &:not(:first-child) {
      margin-inline-start: 5px;
    }

    &:not(:last-child) {
      margin-inline-end: 5px;
    }

    &:not(:first-child):not(:last-child) {
      margin: 0 5px;
    }
  }
`;

export const TodoEmpty = styled.div`
  margin: 10px;
`;
