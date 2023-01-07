import { Card } from "components/Card";
import arTools from "../../../store/tools.json";
import styled from "styled-components";

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const STextBox = styled.div`
  text-align: center;
  margin-bottom: 90px;
`;
const STitle = styled.h2`
  font-size: 48px;
  color: ${props => props.theme.colors.lightWhite};
  font-weight: ${props => props.theme.fontWeight.medium};
  margin-bottom: 25px;
`;
const SPrgrph = styled.p`
  font-size: 18px;
  max-width: 427px;
  color: ${props => props.theme.colors.gray};
  line-height: 30px;
`;
const SCardBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 24px;
`;
const SSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Main = () => {
  return (
    <SMain>
      <SSection>
        <STextBox>
          <STitle>
            Most Popular Tools
          </STitle>
          <SPrgrph>
            Tools for the best Designers and Developers
            most popularly used in the world
          </SPrgrph>
        </STextBox>
        <SCardBox>
          {arTools.map(i =>
            <Card
              key={i.id}
              label={i.label}
              rate={i.rate}
              description={i.description}
              icon={i.icon}
            />
          )}
        </SCardBox>
      </SSection>
      <section>Trusted more than 150+ brand</section>
      <section>Newcomer Tools</section>
      <section>Ronald Richards</section>
      <section>Become a contributor?</section>
    </SMain>
  );
};