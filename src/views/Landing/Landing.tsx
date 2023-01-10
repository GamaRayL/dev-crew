import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

const S: any = {};
S.Line = styled.hr`
  position: absolute;
  width: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.white15};
  height: 1px;
  transform: scaleY(0.5);
`
export const Landing = () => {
  return (
    <div>
      <Header />
      <Main />
      <S.Line />
      <Footer />
    </div>
  );
};