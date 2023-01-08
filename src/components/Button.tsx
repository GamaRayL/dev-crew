import {FC} from "react";
import styled, {css} from "styled-components";

interface IButtonProps {
  text?: boolean;
  contained?: boolean;
  outlined?: boolean;
  minWidth?: string;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

const SButton = styled.button<IButtonProps>`
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.orange};
  transition: ${props => props.theme.transition.middleAll};
  min-width: ${({minWidth}: any) => minWidth ? minWidth : "auto"};

  &:hover {
    background-color: ${props => props.theme.colors.orange55};
  }

  &:active {
    transform: translateY(4px);
  }

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
    <SButton {...props}>{props.children}</SButton>
  );
};