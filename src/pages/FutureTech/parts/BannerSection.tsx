import styled from 'styled-components';

import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import Banner1 from '@@pages/FutureTech/images/banner1.png';
import Banner2 from '@@pages/FutureTech/images/banner2.png';
import Banner3 from '@@pages/FutureTech/images/banner3.png';

const StyledBannerSection = styled(Flex.Vertical)`
  padding: 40px 30px;
  background: #f9f9f9;
`;

const SLIDER_LIST = [
  {
    title: '미래 기술 특허 1에 대한 타이틀',
    description: (
      <Typography.Header6 color={COLORS.SUB_TEXT}>
        미래 기술 특허 1에 대한 설명 미래 기술 특허 1에 대한 설명 미래 기술 특허 1에 대한 설명 미래 기술 특허 1에 대한 설명
      </Typography.Header6>
    ),
    image: Banner1,
  },
  {
    title: '미래 기술 특허 2에 대한 타이틀',
    description: (
      <Typography.Header6 color={COLORS.SUB_TEXT}>
        미래 기술 특허 2에 대한 설명 미래 기술 특허 2에 대한 설명 미래 기술 특허 2에 대한 설명 미래 기술 특허 2에 대한 설명
      </Typography.Header6>
    ),
    image: Banner2,
  },
  {
    title: '미래 기술 특허 3에 대한 타이틀',
    description: (
      <Typography.Header6 color={COLORS.SUB_TEXT}>
        미래 기술 특허 3에 대한 설명 미래 기술 특허 3에 대한 설명 미래 기술 특허 3에 대한 설명 미래 기술 특허 3에 대한 설명
      </Typography.Header6>
    ),
    image: Banner3,
  },
].map(({ title, description, image }) => (
  <SliderItem key={title} title={title} image={image}>
    {description}
  </SliderItem>
));

function BannerSection() {
  return (
    <StyledBannerSection gap={24}>
      <Typography.Header2>
        선제적 미래기술 창출을 위한
        <br />
        특허
      </Typography.Header2>
      <Slider items={SLIDER_LIST} gap={12} sliderProps={{ dots: false }} />
    </StyledBannerSection>
  );
}

export default BannerSection;
