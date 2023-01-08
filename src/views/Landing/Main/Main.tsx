import {Card} from "components/Card";
import mostTools from "../../../store/mostTools.json";
import newTools from "../../../store/newTools.json";
import styled from "styled-components";
import {useState} from "react";
import {Button} from "components/Button";
import {BrandPanel} from "components/BrandPanel";

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  width: 100%;
`;
const STextBox = styled.div`
  text-align: center;
  margin-bottom: 90px;
`;
const STitle = styled.h2`
  font-size: 48px;
  color: ${(props) => props.theme.colors.white90};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  margin-bottom: 25px;
`;
const SPrgrph = styled.p<{mb?: string;}>`
  font-size: 18px;
  max-width: 427px;
  color: ${(props) => props.theme.colors.white55};
  line-height: 30px;

  margin-bottom: ${({mb}) => mb || "revert"}
`;
const SCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 24px;
  margin-bottom: 100px;
`;

export const Main = () => {
  const [arTools, setArTools] = useState(mostTools);

  const onClickHandler = (id: number | undefined) => {
    setArTools(
      arTools.map((i) =>
        i.id === id ? {...i, favourite: !i.favourite} : {...i}
      )
    );
  };

  return (
    <SMain>
      <SSection>
        <STextBox>
          <STitle>Most Popular Tools</STitle>
          <SPrgrph>
            Tools for the best Designers and Developers most popularly used in
            the world
          </SPrgrph>
        </STextBox>
        <SCardBox>
          {arTools.map((i) => (
            <Card
              key={i.id}
              onClick={onClickHandler}
              {...i}
            />
          ))}
        </SCardBox>
        <Button outlined>Load more</Button>
      </SSection>
      <SSection>
        <BrandPanel />
      </SSection>
      <SSection>
        <div>
          <STitle>Newcomer Tools</STitle>
          <SPrgrph mb="60px">
            Wow! see the latest update of the most recommended tools from reliable designers and developers
          </SPrgrph>
          <Button>Explore more</Button>
        </div>
        <SCardBox>
          {newTools.map(i =>
            <Card
              key={i.id}
              onClick={onClickHandler}
              {...i}
            />
          )}
        </SCardBox>
      </SSection>
      <section>Ronald Richards</section>
      <section>Become a contributor?</section>
    </SMain>
  );
};
