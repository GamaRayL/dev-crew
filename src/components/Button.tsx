import { FC } from "react";
import styled from "styled-components";

const SButton = styled.button`
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  background-color: ${({ text }: any) => text ? "transparent" : props => props.theme.colors.orange};
  color: ${({ color }: any) => color ? color : props => props.theme.colors.white};
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};
  min-width: ${({ minWidth }: any) => minWidth ? minWidth : "auto"};
  user-select: none;

  &:hover {
    background-color: #D95922;
  }
  &:active {
    transform: translateY(4px);
  }
`;

interface IButtonProps {
  text?: boolean;
  contained?: boolean;
  outlined?: boolean;
  minWidth?: string;
  color?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

export const Button: FC<IButtonProps> = (props) => {
  return (
    <SButton {...props}>{props.children}</SButton>
  );
};