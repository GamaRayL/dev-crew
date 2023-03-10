import { Landing } from 'views/Landing';
import GlobalStyles from "styles/global"
import styled from 'styled-components';

const S: any = {};
S.App = styled.div`
  max-width: 1440px;
  padding: 0 108px;
  margin: 0 auto;
`

function App() {
  return (
    <S.App>
      <GlobalStyles />
      <Landing />
    </S.App>
  );
}

export default App;
