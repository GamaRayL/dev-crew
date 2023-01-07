import styled from "styled-components";
import { Button } from "./Button";

const SBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  position: relative;
  max-width: 497px;
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
const SIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
const SInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: inherit;
`;
const SForm = styled.form`
  display: flex;
  gap: 40px;
  width: 100%;
`;

export const Input = () => {
  return (
    <SBox>
      <SIcon>
        <use xlinkHref={`/ui_sprite.svg#search`}></use>
      </SIcon>
      <SForm onSubmit={(e) => e.preventDefault()}>
        <SInput
          type="text"
          placeholder="find more than 430+ tools..."
        />
        <Button minWidth="130px">Search</Button>
      </SForm>
    </SBox>
  );
};