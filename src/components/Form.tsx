import { FC, useEffect, useRef } from "react";
import { Button } from "components";
import { IFormProps } from "types";
import styled from "styled-components";

const S: any = {};

S.Box = styled.div<IFormProps>`
  display: flex;
  align-items: center;
  gap: 13px;
  position: relative;
  border-radius: 15px;
  padding: 8px 11px 8px 18px;
  background-color: ${props => props.theme.colors.darkBlue};
  max-width: ${({ mxWidth }) => mxWidth || "100%"} ;

  :before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background: linear-gradient(35deg, #FFFFFF1A, #FFFFFF00);
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
  color: inherit;
  font-size: ${props => props.theme.fontSizes.small};
`;
S.Form = styled.form`
  display: flex;
  gap: 40px;
  width: 100%;
`;

export const Form: FC<IFormProps> = ({ placeholder, btnTxt, mxWidth, iconSearch, focus }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) inputRef.current?.focus();
  }, [focus]);

  return (
    <S.Box mxWidth={mxWidth}>
      {iconSearch ? <S.Icon>
        <use xlinkHref="sprites/ui.svg#search"></use>
      </S.Icon>
        : null}
      <S.Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <S.Input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
        />
        <Button minWidth="130px">{btnTxt}</Button>
      </S.Form>
    </S.Box>
  );
};