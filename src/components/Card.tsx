import { FC } from "react";
import { Button } from "./Button";
import styled from "styled-components";

const S: any = {};

S.Card = styled.div<{ mxWidth?: string, pd?: string; }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  max-width: ${({ mxWidth }) => mxWidth || "388px"};
  padding: ${({ pd }) => pd || "33px"};
  border-radius: 16px;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    background-color: #222a2f;
  }

  &:hover:before{
    opacity: 1;
  }

  &:hover:after{
    opacity: 1;
  }

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
      linear-gradient(35deg,#FFFFFF00 85%,#FF6E308c);
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    height: 10px;
    right: 28px;
    top: 20px;
    box-shadow: 0 0 66px 14px ${props => props.theme.colors.orange};
    transition: ${props => props.theme.transition.middleAll};
    opacity: 0;
  }
`;
S.Wrap = styled.div`
  overflow: hidden;
  padding: 2px;
  border-radius: 16px;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    transform: translateY(-20px);
  }
`;
S.Header = styled.div`
  display: flex;
  gap: 30px;
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
  font-size:  ${props => props.theme.fontSizes.medium24};
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

  ${S.Card}:hover & {
    color: ${props => props.theme.colors.yellow};
  }
`;
S.Prgrph = styled.div<{ fz?: string; }>`
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
S.Icon = styled.div<{ favourite?: boolean; }>`
  width: 44px;
  height: 44px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: ${props => props.theme.transition.middleAll};
  background: ${({ favourite }) => favourite ? "#283036" : "transparent"};
  box-shadow: ${({ favourite }) => favourite ? "0px 5px 10px -3px #12121226" : "none"};
`;
S.Svg = styled.svg<{ favourite?: boolean; }>`
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

interface ICardProps {
  id?: number;
  label?: string;
  rate?: string;
  description?: string;
  icon?: string;
  mxWidth?: string;
  fz?: string;
  pd?: string;
  favourite?: boolean;
  onClick?: (id: number | undefined) => void;
}

export const Card: FC<ICardProps> = (props) => {
  const { label, rate, description, icon, id, favourite, onClick, mxWidth, pd, fz } = props;

  return (
    <S.Wrap>
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
    </S.Wrap >
  );
};