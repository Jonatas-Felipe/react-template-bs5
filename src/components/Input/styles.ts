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

  + div {
    margin-top: 8px;
  }

  div {
    width: 100%;
    position: relative;

    .button-show {
      position: absolute;
      top: -6px;
      right: -10px;
      width: 70px;
      text-align: center;
      background: none;
      border: 0;
      padding: 6px 6px 6px;
      color: #cbccce;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  input {
    width: 100%;
    flex: 1;
    background: transparent;
    border: 0;
    color: #18191a;
    transition-duration: 0.2s;
    padding: 0 5px;
    outline: 0;

    ::placeholder {
      color: #18191a;
    }
  }

  svg {
    margin-right: 16px;
    color: #18191a;
    transition-duration: 0.2s;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030 !important;
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
      border-color: #333333 !important;

      svg {
        color: #18191a;
      }
    `}
`;
