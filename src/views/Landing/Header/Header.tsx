import { Input } from "components/Input";
import { NavBar } from "components/NavBar";
import styled from "styled-components";

const SHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 104px;
  position: relative;
  padding-top: 26px;
  margin-bottom: 200px;
`;
const STitle = styled.h1`
  font-size: 50px;
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white55};
  margin-bottom: 30px;
`;
const SHeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
const SHeaderBox = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  justify-content: space-between;
`;
const SLastSymb = styled.span`
  color: ${props => props.theme.colors.orange};
`;
const SPgrph = styled.p`
  max-width: 487px;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 60px;
`;
const SIconsBox = styled.div`
  display: flex;
  gap: 24px;
  padding: 12px;
  margin-top: 110px;
`;
const SIcon = styled.svg`
  width: 36px;
  height: 36px;
  cursor: pointer;
  fill: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    fill: ${props => props.theme.colors.orange};
    animation: icon 0.6s infinite alternate;
  }

  @keyframes icon {
    from {
      transform: translateY(2px);
    }

    to {
      transform: translateY(-4px);
    }
  }
`;

let slicedTitle = "";
let lastSymb = "";

const getCustomTitle = (str: string) => {
  slicedTitle = str.slice(0, str.length - 1);
  lastSymb = str[str.length - 1];
};

getCustomTitle("Awesome tools for Designer & Developer.");

const icons = ["facebook", "instagram", "twitter"];

export const Header = () => {
  return (
    <SHeader>
      <NavBar />
      <SHeaderSection>
        <SHeaderBox>
          <STitle>
            {slicedTitle}
            <SLastSymb>
              {lastSymb}
            </SLastSymb>
          </STitle>
          <SPgrph>
            Antool is a web collection of information on paid or free Design and Development tools
          </SPgrph>
          <Input />
          <SIconsBox>
            {icons.map(i =>
              <SIcon key={i}>
                <use xlinkHref={`/social_sprite.svg#${i}`}></use>
              </SIcon>
            )}
          </SIconsBox>
        </SHeaderBox>
        <img
          style={{
            pointerEvents: "none",
            userSelect: "none",
            position: "absolute",
            right: "-116px"
          }}
          src="illustration.svg" alt="" />
      </SHeaderSection>
    </SHeader>
  );
};