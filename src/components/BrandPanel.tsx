import styled from "styled-components";

const S: any = {};

S.BrandPanel = styled.div`
  --b:2px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2C353D33;
  overflow: hidden;
  border-radius: 25px;
  backdrop-filter: blur(25px);
  padding: 55px 82px;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--c,linear-gradient(326deg, #FFFFFF02 94%, #ff484233));
    padding: var(--b);
    border-radius: 25px;
    -webkit-mask:
       linear-gradient(#FFF 0 0) content-box,
       linear-gradient(#FFF 0 0);
            mask:
       linear-gradient(#FFF 0 0) content-box,
       linear-gradient(#FFF 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    height: 12px;
    left: 22px;
    top: 22px;
    box-shadow: 0 0 78px 18px #FF4842;
    transition: ${props => props.theme.transition.middleAll};
  }
}
`;
S.Title = styled.h2`
  color: ${props => props.theme.colors.white80};
  font-weight: ${props => props.theme.fontWeight.medium};
  margin: 0 0 60px 0;
`;
S.Brands = styled.div`
  display: flex;
  gap: 80px;
  width: 1060px;
  height: 52px;
`;

export const BrandPanel = () => {
  const arBrands = ["microsoft", "google", "slack", "wordpress"];
  return (
    <S.BrandPanel>
      <S.Title>Trusted more than 150+ brand</S.Title>
      <S.Brands>
        {arBrands.map(i =>
          <svg key={i}>
            <use xlinkHref={`sprites/logos.svg#${i}`}></use>
          </svg>
        )}
      </S.Brands>
    </S.BrandPanel>
  );
};