import { Button } from "./Button";
import styled, { css } from "styled-components";
import { FC } from "react";

const S: any = {};

const flexAln = css`
  display: flex;
  align-items: center;
`

S.Nav = styled.nav`
  ${flexAln}
  justify-content: space-between;
  user-select: none;
`;
S.LogoBox = styled.div`
  ${flexAln}
  gap: 12px;
  margin-right: 48px;
`;
S.List = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;
S.Item = styled.li`
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
S.LogoIcon = styled.svg`
  width: 38px;
  height: 38px;
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    transform: scale(1.1);
  }
`;
S.LogoName = styled.span`
  font-size:  ${props => props.theme.fontSizes.medium22};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.colors.white};
`;
S.ButtonBox = styled.div`
  display: flex;
  gap: 12px;
`;
S.ArrowIcon = styled.svg`
  stroke: ${props => props.theme.colors.white55};
  width: 18px;
  height: 18px;
  transition: ${props => props.theme.transition.middleAll};
`;
S.AdvItem = styled.div`
  ${flexAln}
  gap: 8px;

  &:hover ${S.ArrowIcon}{
    transform: rotate(180deg);
  }
`;

const links = ["Home", "Categories", "My Collections", "Blog"];

export const NavBar: FC = () => {
  return (
    <S.Nav>
      <S.LogoBox>
        <S.LogoIcon>
          <use xlinkHref="sprites/logos.svg#logo"></use>
        </S.LogoIcon>
        <S.LogoName>antools.</S.LogoName>
      </S.LogoBox>
      <S.List>
        {links.map(i =>
          <S.Item key={i}>{i === "Categories"
            ? <S.AdvItem>{i}<S.ArrowIcon><use xlinkHref="sprites/ui.svg#arrow"></use></S.ArrowIcon></S.AdvItem>
            : i}
          </S.Item>)}
      </S.List>
      <S.ButtonBox>
        <Button text color="#ffffffc7">Login</Button>
        <Button>Sign Up</Button>
      </S.ButtonBox>
    </S.Nav>
  );
};