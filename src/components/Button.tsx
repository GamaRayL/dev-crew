import { FC } from "react";
import { IButtonProps } from "types";
import styled, { css } from "styled-components";

const S: any = {};

S.Button = styled.button<IButtonProps>`
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.orange};
  transition: ${props => props.theme.transition.middleAll};
  min-width: ${({ minWidth }: any) => minWidth ? minWidth : "auto"};
  font-size: ${({ fz }) => fz || "auto"};

  &:hover {
    background-color: ${props => props.theme.colors.orange55};
  }

  &:active {
    transform: translateY(4px);
  }

  ${props => props.medium && css`
    padding: 20px 38px;
    font-size:  ${props => props.theme.fontSizes.medium20};
  `}

  ${props => props.outlined && css`
    background-color: transparent;
    border: 1px solid #FFFFFF1A;
    font-weight: ${props => props.theme.fontWeight.medium};
    color: ${props => props.theme.colors.orange};

    &:hover {
      background-color: ${props => props.theme.colors.orange6};
    }
  `}

  ${props => props.text && css`
    background-color: transparent;
    color: ${props => props.theme.colors.white55};
    font-weight: ${props => props.theme.fontWeight.semiBold};

    &:hover {
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.orange};
    }
  `}
`;



export const Button: FC<IButtonProps> = (props) => {
  return (
    <S.Button {...props}>{props.children}</S.Button>
  );
};