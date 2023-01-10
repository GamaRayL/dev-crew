import { FC } from "react";
import { Button } from "./Button";
import { ICardProps } from "types";
import styled from "styled-components";

const S: any = {};

S.Card = styled.div<ICardProps>`
  --b:2px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  backdrop-filter: blur(25px);
  padding: ${({ pd }) => pd || "33px"};
  max-width: ${({ mxWidth }) => mxWidth || "392px"};
  transition: ${props => props.theme.transition.middleAll};

  &:before {
    content: "";
    position: absolute;
    opacity: 0;
    z-index: -1;
    inset: 0;
    background:
      var(--c,
        linear-gradient(300deg, #FFFFFF00 90%,#4040408C),
        linear-gradient(35deg, #FFFFFF00 85%, #FF6E302D));
    padding: var(--b);
    border-radius: 16px;
    mask:
      linear-gradient(#FFF 0 0) content-box,
      linear-gradient(#FFF 0 0);
    mask-composite: xor;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    height: 10px;
    right: 45px;
    top: 22px;
    box-shadow: 0 0 66px 14px ${props => props.theme.colors.orange};
    transition: ${props => props.theme.transition.middleAll};
  }

  &:hover {
    background-color: #222a2f;
    transform: translateY(-25px);
  }

  &:hover:before{
    opacity: 1;
  }

  &:hover:after{
    opacity: 1;
  }
`;

S.Header = styled.div`
  display: flex;
  gap: 31px;
`;
S.Logo = styled.div`
  width: 64px;
  height: 64px;
  transition: ${props => props.theme.transition.middleAll};
`;
S.Img = styled.img`
  opacity: 0.78;
  transition: ${props => props.theme.transition.middleAll};

  ${S.Card}:hover & {
    opacity: 1;
  }
`;
S.Title = styled.div`
  font-size: ${props => props.theme.fontSizes.medium24};
  width: max-content;
  margin-bottom: 12px;
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white78};
  transition: ${props => props.theme.transition.middleAll};

  ${S.Card}:hover & {
    color: ${props => props.theme.colors.white90};
  }
`;
S.Rate = styled.div`
  color: ${props => props.theme.colors.yellow55};
  transition: ${props => props.theme.transition.middleAll};
  font-size: ${props => props.theme.fontSizes.medium18};

  ${S.Card}:hover & {
    color: ${props => props.theme.colors.yellow};
  }
`;
S.Prgrph = styled.div<ICardProps>`
  line-height: 30px;
  font-weight: ${props => props.theme.fontWeight.light};
  transition: ${props => props.theme.transition.middleAll};
  font-size: ${({ fz }) => fz || "16px"};

  ${S.Card}:hover & {
    color: ${props => props.theme.colors.white78};
  }
`;
S.Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
S.IconsBox = styled.div`
  display: flex;
  gap: 12px;
`;
S.Icon = styled.div<ICardProps>`
  width: 44px;
  height: 44px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: ${props => props.theme.transition.middleAll};
  background: ${({ favourite }) => favourite ? "#283036" : "transparent"};
  box-shadow: ${({ favourite }) => favourite ? "0px 5px 10px -3px #12121226" : "none"};
`;
S.Svg = styled.svg<ICardProps>`
  width: 100%;
  height: 100%;
  fill: ${({ favourite }) => favourite
    ? (props) => props.theme.colors.red
    : (props) => props.theme.colors.white38
  };

  ${S.Icon}:hover & {
    animation: icon 0.6s infinite alternate;
  }

  @keyframes icon {
    from {
      transform: scale(1.2);
    }

    to {
      transform: scale(1.0);
    }
  }
`;


export const Card: FC<ICardProps> = (props) => {
  const { label, rate, description, icon, id, favourite, onClick, mxWidth, pd, fz } = props;

  return (
    <S.Card mxWidth={mxWidth} pd={pd}>
      <S.Header>
        <S.Logo>
          <S.Img src={`images/tools/${icon}.svg`} alt="" />
        </S.Logo>
        <div>
          <S.Title>
            {label}
          </S.Title>
          <S.Rate>
            {rate}
          </S.Rate>
        </div>
      </S.Header>
      <S.Prgrph fz={fz}>{description}</S.Prgrph>
      <S.Bar>
        <S.IconsBox>
          <S.Icon favourite={favourite} onClick={() => onClick?.(id)}>
            <S.Svg favourite={favourite}>
              <use xlinkHref={`sprites/ui.svg#favourite`}></use>
            </S.Svg>
          </S.Icon>
          <S.Icon>
            <S.Svg>
              <use xlinkHref={`sprites/ui.svg#add_folder`}></use>
            </S.Svg>
          </S.Icon>
        </S.IconsBox>
        <Button text minWidth="106px">Visit</Button>
      </S.Bar>
    </S.Card>
  );
};