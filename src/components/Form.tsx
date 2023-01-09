import { FC } from "react";
import { Button } from "components";
import styled from "styled-components";

const S: any = {};

S.Box = styled.div<{ mxWidth?: string; }>`
  display: flex;
  align-items: center;
  gap: 13px;
  position: relative;
  max-width: ${({ mxWidth }) => mxWidth || "100%"} ;
  border-radius: 15px;
  padding: 8px 11px 8px 18px;
  background-color: #283036;

  :before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(35deg, #FFFFFF1a, #FFFFFF00);
    border-radius: 15px;
    z-index: -1;
  }
`;
S.Icon = styled.svg`
  width: 24px;
  height: 24px;
`;
S.Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size:  ${props => props.theme.fontSizes.small};
  color: inherit;
`;
S.Form = styled.form`
  display: flex;
  gap: 40px;
  width: 100%;
`;

interface IFormProps {
  placeholder?: string;
  btnTxt?: string;
  mxWidth?: string;
  iconSearch?: boolean;
}

export const Form: FC<IFormProps> = ({ placeholder, btnTxt, mxWidth, iconSearch }) => {
  return (
    <S.Box mxWidth={mxWidth}>
      {iconSearch ? <S.Icon>
        <use xlinkHref="sprites/ui.svg#search"></use>
      </S.Icon>
        : null}
      <S.Form onSubmit={(e: any) => e.preventDefault()}>
        <S.Input
          type="text"
          placeholder={placeholder}
        />
        <Button minWidth="130px">{btnTxt}</Button>
      </S.Form>
    </S.Box>
  );
};