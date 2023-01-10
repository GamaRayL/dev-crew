import { FC, useState } from "react";
import { Card, Button, BrandPanel, Carousel, Form } from "components";
import mostTools from "store/mostTools.json";
import newTools from "store/newTools.json";
import styled from "styled-components";

const S: any = {};

S.Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
S.Section = styled.div<{ fd?: string; ai?: string; mb?: string; }>`
  display: flex;
  flex-direction: ${({ fd }) => fd || "column"};
  align-items: ${({ ai }) => ai || "normal"};
  margin-bottom: ${({ mb }) => mb || "200px"};
  width: 100%;
`;
S.TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 95px;
`;
S.Title = styled.h2`
  font-size:  ${props => props.theme.fontSizes.large48};
  color: ${(props) => props.theme.colors.white90};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: 30px;
`;
S.Prgrph = styled.p<{ mb?: string; tAl?: string; }>`
  font-size:  ${props => props.theme.fontSizes.medium18};
  max-width: 427px;
  color: ${(props) => props.theme.colors.white55};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 30px;
  text-align: ${({ tAl }) => tAl || "start"};
  margin-bottom: ${({ mb }) => mb || "revert"};
`;
S.CardBox = styled.div<{ jc?: string, rg?: string; cg?: string; }>`
  display: flex;
  justify-content: ${({ jc }) => jc || "flex-end"};
  flex-flow: wrap;
  row-gap: ${({ rg }) => rg || "94px"};
  column-gap: ${({ cg }) => cg || "24px"};
  margin-bottom: 84px;
`;
S.SubscribeBox = styled(S.TextBox)`
  margin-bottom: 80px;
`
S.MoreBox = styled.div`
  width: -webkit-fill-available;
`

export const Main: FC = () => {
  const [arMostTools, setMostArTools] = useState(mostTools);
  const [arNewTools, setArNewTools] = useState(newTools);

  const onClickHandler = (id: number | undefined) => {
    setMostArTools(
      arMostTools.map((i) =>
        i.id === id ? { ...i, favourite: !i.favourite } : { ...i }
      )
    );
    setArNewTools(
      arNewTools.map((i) =>
        i.id === id ? { ...i, favourite: !i.favourite } : { ...i }
      )
    );
  };

  return (
    <S.Main>
      <S.Section ai="center">
        <S.TextBox>
          <S.Title>Most Popular Tools</S.Title>
          <S.Prgrph tAl="center">
            Tools for the best Designers and Developers most popularly used in
            the world
          </S.Prgrph>
        </S.TextBox>
        <S.CardBox jc="center">
          {arMostTools.map(i => (
            <Card
              key={i.id}
              onClick={onClickHandler}
              {...i}
            />
          ))}
        </S.CardBox>
        <Button outlined medium>Load more</Button>
      </S.Section>
      <S.Section mb="222px">
        <BrandPanel />
      </S.Section>
      <S.Section fd="row" mb="94px">
        <S.MoreBox>
          <S.Title>Newcomer Tools</S.Title>
          <S.Prgrph mb="60px">
            Wow! see the latest update of the most recommended tools from reliable designers and developers
          </S.Prgrph>
          <Button medium>Explore more</Button>
        </S.MoreBox>
        <S.CardBox rg="42px">
          {arNewTools.map(i =>
            <Card
              key={i.id}
              onClick={onClickHandler}
              fz="14px"
              mxWidth="284px"
              pd="28px 22px"
              {...i}
            />
          )}
        </S.CardBox>
      </S.Section>
      <S.Section mb="282px">
        <Carousel />
      </S.Section>
      <S.Section mb="240px" ai="center">
        <div>
          <S.SubscribeBox>
            <S.Title>Become a contributor?</S.Title>
            <S.Prgrph tAl="center">
              Join us and get tips & tricks to become a great Designer and Developer
            </S.Prgrph>
          </S.SubscribeBox>
          <Form placeholder="Enter your email..." btnTxt="Join Us" />
        </div>
      </S.Section>
    </S.Main>
  );
};
