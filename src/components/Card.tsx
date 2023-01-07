import { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";

const SCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 392px;
  max-height: 294px;
  padding: 33px;
  border-radius: 15px;
`;
const SHeader = styled.div`
  display: flex;
  gap: 30px;
`;
const SLogo = styled.svg`
  width: 64px;
  height: 64px;
`;
const SLabel = styled.div`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white78};
  margin-bottom: 4px;
`;
const SRate = styled.div`
  color: ${props => props.theme.colors.yellow55};
`;
const SPrgrph = styled.div`
  line-height: 30px;
  font-weight: ${props => props.theme.fontWeight.light};
`;
const SBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SIconsBox = styled.div`
  display: flex;
  gap: 20px;
`;
const SIcon = styled.svg`
  width: 28px;
  height: 28px;
`;

interface ICardProps {
  label?: string;
  rate?: string;
  description?: string;
  icon?: string;
}

export const Card: FC<ICardProps> = (props) => {
  const { label, rate, description, icon } = props;
  return (
    <SCard>
      <SHeader>
        <SLogo>
          <use xlinkHref={`/tools_sprite.svg#${icon}`}></use>
        </SLogo>
        <div>
          <SLabel>
            {label}
          </SLabel>
          <SRate>
            {rate}
          </SRate>
        </div>
      </SHeader>
      <SPrgrph>{description}</SPrgrph>
      <SBar>
        <SIconsBox>
          <SIcon>
            <use xlinkHref={`/ui_sprite.svg#favourite`}></use>
          </SIcon>
          <SIcon>
            <use xlinkHref={`/ui_sprite.svg#add_folder`}></use>
          </SIcon>
        </SIconsBox>
        <Button text>Visit</Button>
      </SBar>
    </SCard>
  );
};