import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import BannerSection from '@@pages/FutureTech/parts/BannerSection';
import FutureTechContact from '@@pages/FutureTech/parts/FutureTechContact';

const StyledFutureTech = styled(FullScreen)`
  .body {
    overflow-x: hidden;
  }
`;

function FutureTech() {
  return (
    <StyledFutureTech navigation>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <Flex.Vertical className='body'>
        <BannerSection />
        <FutureTechContact />
      </Flex.Vertical>
    </StyledFutureTech>
  );
}

export default FutureTech;
