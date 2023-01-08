import styled from "styled-components";

const SBrandPanel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  padding: 56px 84px;
  border-radius: 26px;
  background-color: #22292F;

  &:before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;
    background:
      linear-gradient(280deg,#FFFFFF00 85%,#4040408c),
      linear-gradient(180deg,#FFFFFF00 85%,#3939398c),
      linear-gradient(0deg,#FFFFFF00 85%,#3737378c),
      linear-gradient(326deg,#FFFFFF00 90%,#ff484259);
    border-radius: 26px;
    z-index: -1;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    height: 14px;
    left: 20px;
    top: 18px;
    box-shadow: 0 0 74px 20px #FF4842;
    transition: ${props => props.theme.transition.middleAll};
  }
`;
const SWrap = styled.div`
  overflow: hidden;
  padding: 2px;
  border-radius: 26px;
`;
const STitle = styled.h2`
  color: ${props => props.theme.colors.white80};
  font-weight: ${props => props.theme.fontWeight.medium};
  margin: 0 0 55px 0;
`;
const SBrands = styled.div`
  display: flex;
  gap: 108px;
  width: 1060px;
  height: 52px;
`;

export const BrandPanel = () => {
  const arBrands = ["microsoft", "google", "slack", "wordpress"];
  return (
    <SWrap>
      <SBrandPanel>
        <STitle>Trusted more than 150+ brand</STitle>
        <SBrands>
          {arBrands.map(i =>
            <svg key={i}>
              <use xlinkHref={`/logos_sprite.svg#${i}`}></use>
            </svg>
          )}
        </SBrands>
      </SBrandPanel>
    </SWrap>
  );
};