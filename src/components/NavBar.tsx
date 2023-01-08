import styled from "styled-components";
import { Button } from "./Button";

const SNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
    -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const SLogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const SList = styled.ul`
  display: flex;
  gap: 48px;
  list-style: none;
`;
const SItem = styled.li`
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
const SLogoIcon = styled.svg`
  width: 38px;
  height: 38px;
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    transform: scale(1.1);
  }
`;
const SLabel = styled.span`
  font-size: 22px;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.colors.white55};
`;
const SButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;
const SArrowIcon = styled.svg`
  stroke: ${props => props.theme.colors.white55};
  width: 18px;
  height: 18px;
  transition: ${props => props.theme.transition.middleAll};
`;
const SAdvItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover ${SArrowIcon}{
    transform: rotate(180deg);
  }
`;

const links = ["Home", "Categories", "My Collections", "Blog"];

export const NavBar = () => {
  return (
    <SNav>
      <SLogoBox>
        <SLogoIcon>
          <use xlinkHref={`logos_sprite.svg#logo`}></use>
        </SLogoIcon>
        <SLabel>antools.</SLabel>
      </SLogoBox>
      <SList>
        {links.map(i =>
          <SItem key={i}>{i === "Categories"
            ? <SAdvItem>{i}<SArrowIcon><use xlinkHref={`/ui_sprite.svg#chevron_down`}></use></SArrowIcon></SAdvItem>
            : i}
          </SItem>)}
      </SList>
      <SButtonBox>
        <Button text color="#ffffffc7">Login</Button>
        <Button>Sign Up</Button>
      </SButtonBox>
    </SNav>
  );
};