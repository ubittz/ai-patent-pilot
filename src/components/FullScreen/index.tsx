import styled from 'styled-components';

import Flex from '@@components/Flex';
import { FullScreenProps } from '@@components/FullScreen/types';
import NavigationBar from '@@components/NavigationBar';

const StyledFullScreen = styled(Flex.Vertical)`
  height: 100vh;

  .body {
    flex: 1;
    flex-direction: column;
    overflow-y: scroll;
  }
`;

function FullScreen({ children, navigation, ...props }: FullScreenProps) {
  return (
    <StyledFullScreen {...props}>
      {children}
      {!!navigation && <NavigationBar />}
    </StyledFullScreen>
  );
}

export default FullScreen;
