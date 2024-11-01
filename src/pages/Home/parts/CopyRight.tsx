import styled from 'styled-components';

import Flex from '@@components/Flex';
import { GrayScaleLogoIcon } from '@@pages/Home/icons';

const StyledCopyRight = styled(Flex.Vertical)`
  background: #eaeaea;
`;

function CopyRight() {
  return (
    <StyledCopyRight>
      <GrayScaleLogoIcon />
    </StyledCopyRight>
  );
}

export default CopyRight;
