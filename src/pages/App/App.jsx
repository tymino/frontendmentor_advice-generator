import styled from 'styled-components';
import { Attribution, Card } from '../../components';

const AppContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Attribution />
      <Card />
    </AppContainer>
  );
};

export default App;
