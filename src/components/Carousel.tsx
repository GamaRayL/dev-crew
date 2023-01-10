import { FC } from "react";
import styled from "styled-components";

const S: any = {};

S.Carousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
S.Svg = styled.svg`
  width: 48px;
  height: 48px;
  opacity: 0.28;
  cursor: pointer;
  stroke: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    opacity: 1;
    stroke: ${props => props.theme.colors.orange};
  }
`;
S.LeftArow = styled(S.Svg)`
  position: absolute;
  left: 0;
  transform: rotate(90deg);
`;
S.RightArrow = styled(S.Svg)`
  position: absolute;
  right: 0;
  transform: rotate(-90deg);
`;
S.DotBox = styled.div`
  position: absolute;
  display: flex;
  gap: 18px;
  bottom: 0;
`
S.Dot = styled.div`
  width: 44px;
  height: 6px;
  background-color: #283036;
  border-radius: 4px;
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    background-color: ${props => props.theme.colors.orange};
    transform: scale(1.1);
  }
`;
S.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 58px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 184px;
    left: 64px;
    box-shadow: 0 0 68px 14px #B345F1;
    height: 20px;
    z-index: -1;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 190px;
    left: 334px;
    box-shadow: 0 0 68px 16px rgba(255, 110, 48);;
    height: 20px;
    z-index: -1;
  }
`;
S.Person = styled.div`
  width: 399px;
  height: 492px;
  user-select: none;

  &:before {
    content: "“";
    top: -20px;
    left: -28px;
    position: absolute;
    font-family: 'Lora', serif;
    font-size: 250px;
    transform: rotate(22deg);
    background: linear-gradient(188.88deg, rgba(252, 252, 252, 0) 20.34%, rgba(255, 255, 255, 0.5) 155.72%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
  }
`;
S.Label = styled.div`
  --b:1px;
  display: inline-block;
  width: 265px;
  position: relative;
  z-index: 0;
  background-color: #28303680;
  overflow: hidden;
  border-radius: 8px;
  backdrop-filter: blur(25px);
  padding: 0 24px;
  bottom: 122px;
  left: 128px;

  &:before {
    content:"";
    position:absolute;
    z-index:-1;
    inset: 0;
    background: var(--c, linear-gradient(to right, #FFFFFF1A, #FFFFFF00));
    padding: var(--b);
    border-radius: 8px;
    mask:
       linear-gradient(#FFF 0 0) content-box,
       linear-gradient(#FFF 0 0);
    mask-composite: xor;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    height: 8px;
    right: 20px;
    bottom: 5px;
    box-shadow: 0 0 40px 8px #007ACC;
    transition: ${props => props.theme.transition.middleAll};
  }
`;
S.Prgrph = styled.p`
  max-width: 393px;
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 30px;
  color: ${props => props.theme.colors.white78};
  margin-bottom: 92px;
`;
S.Box = styled.div`
  position: relative;
  pointer-events: none;
`;
S.CircleImg = styled.img`
  position: absolute;
  bottom: 124px;
  right: 20px;
  z-index: -1;
`;
S.Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.medium26};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white78};
  margin: 16px 0 10px 2px;
`;
S.Career = styled.p`
  margin-bottom: 18px;
`;

export const Carousel: FC = () => {
  return <S.Carousel>
    <S.LeftArow><use xlinkHref={`sprites/ui.svg#arrow`}></use></S.LeftArow>
    <S.Item>
      <S.Box>
        <S.Person>
          <img src="images/david-suarez.png" alt="" />
          <S.CircleImg src="images/circle.svg" alt="" />
        </S.Person>
        <S.Label>
          <S.Name>Ronald Richards</S.Name>
          <S.Career>Product Manager</S.Career>
        </S.Label>
      </S.Box>
      <div>
        <S.Prgrph>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</S.Prgrph>
      </div>
    </S.Item>
    <S.RightArrow><use xlinkHref={`sprites/ui.svg#arrow`}></use></S.RightArrow>
    <S.DotBox>
      <S.Dot></S.Dot>
      <S.Dot></S.Dot>
      <S.Dot></S.Dot>
    </S.DotBox>

  </S.Carousel>;
};
