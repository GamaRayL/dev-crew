import {FC} from "react";
import styled from "styled-components";
import {isConditionalExpression} from "typescript";
import {Button} from "./Button";


const SCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: relative;
  max-width: 388px;
  max-height: 288px;
  padding: 33px;
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
const SWrap = styled.div`
  overflow: hidden;
  padding: 2px;
  border-radius: 16px;
`;
const SHeader = styled.div`
  display: flex;
  gap: 30px;
`;
const SLogo = styled.svg`
  width: 64px;
  height: 64px;
  opacity: 0.78;
  transition: ${props => props.theme.transition.middleAll};

  ${SCard}:hover & {
    opacity: 1;
  }
`;
const SImg = styled.img`
  width: 64px;
  height: 64px;
  opacity: 0.78;
  transition: ${props => props.theme.transition.middleAll};

  ${SCard}:hover & {
    opacity: 1;
  }
`;
const SLabel = styled.div`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white78};
  margin-bottom: 4px;
  transition: ${props => props.theme.transition.middleAll};

  ${SCard}:hover & {
    color: ${props => props.theme.colors.white90};
  }
`;
const SRate = styled.div`
  color: ${props => props.theme.colors.yellow55};
  transition: ${props => props.theme.transition.middleAll};

  ${SCard}:hover & {
    color: ${props => props.theme.colors.yellow};
  }
`;
const SPrgrph = styled.div`
  line-height: 30px;
  font-weight: ${props => props.theme.fontWeight.light};
  transition: ${props => props.theme.transition.middleAll};

  ${SCard}:hover & {
    color: ${props => props.theme.colors.white78};
  }
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
const SIcon = styled.div<{favourite?: boolean;}>`
  width: 44px;
  height: 44px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: ${props => props.theme.transition.middleAll};
  background: ${({favourite}) => favourite ? "#283036" : "transparent"};
  box-shadow: ${({favourite}) => favourite ? "0px 5px 10px -3px #12121226" : "none"};
`;
const SSvg = styled.svg<{favourite?: boolean;}>`
  width: 100%;
  height: 100%;
  fill: ${({favourite}) => favourite
    ? (props) => props.theme.colors.red
    : (props) => props.theme.colors.white38
  };

  ${SIcon}:hover & {
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
  favourite?: boolean;
  onClick?: (id: number | undefined) => void;
}

export const Card: FC<ICardProps> = (props) => {
  const {label, rate, description, icon, id, favourite, onClick} = props;

  return (
    <SWrap>
      <SCard>
        <SHeader>

          {/* <div style={{width: 0, height: 0, position: "absolute", visibility: "hidden"}}>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <symbol viewBox="0 0 20 20" id="option">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1=".5" y1="10" x2="19.5" y2="10"><stop offset="0" stop-color="#EB2626" /><stop offset=".8" stop-color="#FF7336" /><stop offset="1" stop-color="#FDC16C" /></linearGradient>
                <path fill="url(#a)" d="M17.705 3.943v-2.918c0-.565-.458-1.025-1.02-1.025-.563 0-1.021.459-1.021 1.025v2.919c-1.07.418-1.795 1.46-1.795 2.635s.725 2.218 1.795 2.636v9.76c0 .565.457 1.024 1.021 1.024.562 0 1.02-.459 1.02-1.024v-9.76c1.071-.418 1.795-1.46 1.795-2.636s-.724-2.218-1.795-2.636zm-.245 2.636c0 .429-.348.779-.774.779-.428 0-.776-.35-.776-.779s.349-.778.776-.778c.426 0 .774.349.774.778zm-6.44 3.324v-8.878c0-.566-.458-1.025-1.02-1.025-.563 0-1.021.459-1.021 1.025v8.878c-1.071.418-1.795 1.461-1.795 2.637 0 1.175.724 2.217 1.795 2.635v3.801c0 .565.458 1.024 1.021 1.024.562 0 1.02-.459 1.02-1.024v-3.801c1.071-.418 1.795-1.46 1.795-2.635-.001-1.177-.724-2.219-1.795-2.637zm-.246 2.637c0 .429-.347.777-.774.777s-.775-.349-.775-.777c0-.43.348-.779.775-.779s.774.349.774.779zm-6.439-8.597v-2.918c0-.566-.458-1.025-1.021-1.025-.562 0-1.02.459-1.02 1.025v2.919c-1.07.418-1.794 1.46-1.794 2.635s.724 2.218 1.795 2.636v9.76c0 .565.458 1.024 1.02 1.024.563 0 1.021-.459 1.021-1.024v-9.76c1.07-.418 1.794-1.461 1.794-2.636 0-1.176-.724-2.218-1.795-2.636zm-.245 2.636c0 .429-.348.779-.776.779-.427 0-.774-.35-.774-.779s.347-.778.774-.778c.428 0 .776.349.776.778z" />
              </symbol>
            </svg>
          </div>1

          <svg width="25" height="25">
            <use xlinkHref="#option" width="25" height="25" />
          </svg> */}
          {/* <SLogo>
            <use xlinkHref={`tools_sprite.svg#${icon}`} ></use>
          </SLogo> */}

          {/* <SImg width={64} height={64} src={`tools/${icon}.svg`} alt="" />  */}

          <SLogo>
            <use xlinkHref={`tools_sprite.svg#${icon}`} ></use>
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
            <SIcon favourite={favourite} onClick={() => onClick?.(id)}>
              <SSvg favourite={favourite}>
                <use xlinkHref={`ui_sprite.svg#favourite`}></use>
              </SSvg>
            </SIcon>
            <SIcon>
              <SSvg>
                <use xlinkHref={`ui_sprite.svg#add_folder`}></use>
              </SSvg>
            </SIcon>
          </SIconsBox>
          <Button text minWidth="106px">Visit</Button>
        </SBar>
      </SCard>
    </SWrap >
  );
};