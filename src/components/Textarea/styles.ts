import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocuses: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff;
  opacity: 0.8;
  border-radius: 10px;
  border: 1.5px solid #cbccce;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100% - 32px);

  + div {
    margin-top: 8px;
  }

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    color: #18191a;
    transition-duration: 0.2s;
    height: 100%;
    resize: none;
    outline: 0;

    ::placeholder {
      color: #18191a;
    }
  }

  svg {
    margin-right: 16px;
    color: #666360;
    transition-duration: 0.2s;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      svg {
        color: #18191a;
      }
    `}

  ${(props) =>
    props.isFocuses &&
    css`
      color: #18191a;
      border-color: #333333;

      svg {
        color: #18191a;
      }
    `}
`;
