import { Form, NavBar } from "components";
import { FC } from "react";
import styled, { css } from "styled-components";

const S: any = {};

const flexDr = css`
  display: flex;
  flex-direction: column;
`

S.Header = styled.header`
  ${flexDr}
  gap: 106px;
  position: relative;
  padding-top: 26px;
  margin-bottom: 202px;
`;
S.Title = styled.h1`
  line-height: 70px;
  margin-bottom: 30px;
  font-size:  ${props => props.theme.fontSizes.large50};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white90};
`;
S.HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
S.HeaderBox = styled.div`
  ${flexDr}
  justify-content: space-between;
  max-width: 600px;
`;
S.LastSymb = styled.span`
  color: ${props => props.theme.colors.orange};
`;
S.Pgrph = styled.p`
  max-width: 487px;
  line-height: 30px;
  margin-bottom: 60px;
  font-size: ${props => props.theme.fontSizes.medium18};
`;
S.IconsBox = styled.div`
  display: flex;
  gap: 30px;
  padding: 12px;
  margin-top: 110px;
`;
S.Icon = styled.svg`
  width: 36px;
  height: 36px;
  cursor: pointer;
  fill: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    animation: soc 0.6s infinite alternate;
    fill: ${props => props.theme.colors.orange};
  }

  @keyframes soc {
    from {
      transform: translateY(2px);
    }

    to {
      transform: translateY(-4px);
    }
  }
`;
S.Illustration = styled.img`
  pointer-events: none;
  user-select: none;
  position: absolute;
  right: -106px;
  bottom: 0;
`

let slicedTitle = "";
let lastSymb = "";

const getCustomTitle = (str: string) => {
  slicedTitle = str.slice(0, str.length - 1);
  lastSymb = str[str.length - 1];
};

getCustomTitle("Awesome tools for Designer & Developer.");

const icons = ["facebook", "instagram", "twitter"];

export const Header: FC = () => {
  return (
    <S.Header>
      <NavBar />
      <S.HeaderSection>
        <S.HeaderBox>
          <S.Title>{slicedTitle}
            <S.LastSymb>{lastSymb}</S.LastSymb>
          </S.Title>
          <S.Pgrph>
            Antool is a web collection of information on paid or free Design and Development tools
          </S.Pgrph>
          <Form placeholder="find more than 430+ tools..."
            btnTxt="Search"
            mxWidth="498px"
            iconSearch
            focus
          />
          <S.IconsBox>
            {icons.map(i =>
              <S.Icon key={i}>
                <use xlinkHref={`social_sprite.svg#${i}`}></use>
              </S.Icon>
            )}
          </S.IconsBox>
        </S.HeaderBox>
        <S.Illustration src="images/illustration.svg" alt="" />
      </S.HeaderSection>
    </S.Header>
  );
};