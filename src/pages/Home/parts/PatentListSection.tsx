import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import PatentImage1 from '@@pages/Home/images/patent_1.jpeg';
import PatentImage2 from '@@pages/Home/images/patent_2.jpeg';

const SLIDER_LIST = [
  {
    id: 1,
    title: '내가 원하는 특허 서비스 제공',
    description: <Typography.Header6 color={COLORS.SUB_TEXT}>내가 원하는 특허 서비스 제공</Typography.Header6>,
    image: PatentImage1,
  },
  {
    id: 2,
    title: '미래 기술 소개',
    description: <Typography.Header6 color={COLORS.SUB_TEXT}>미래 기술 소개</Typography.Header6>,
    image: PatentImage2,
  },
].map(({ id, title, description, image }) => (
  <SliderItem key={id} title={title} image={image} imageHeight={172}>
    {description}
  </SliderItem>
));

function PatentListSection() {
  return (
    <Flex.Vertical className='tw-px-[30px] tw-mt-[36px]' gap={16}>
      <Typography.Header3>특허 소개</Typography.Header3>
      <Slider items={SLIDER_LIST} gap={12} sliderProps={{ dots: false }} />
    </Flex.Vertical>
  );
}

export default PatentListSection;
