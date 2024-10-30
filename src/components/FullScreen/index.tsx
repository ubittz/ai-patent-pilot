import styled from 'styled-components';

const FullScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .body {
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export default FullScreen;
