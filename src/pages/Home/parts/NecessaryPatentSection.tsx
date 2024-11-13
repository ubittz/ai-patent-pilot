import Flex from '@@components/Flex';
import Slider from '@@components/Slider';
import SliderItem from '@@components/SliderItem';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import NecessaryImage1 from '@@pages/Home/images/necessary_1.jpeg';
import NecessaryImage2 from '@@pages/Home/images/necessary_2.jpeg';

const SLIDER_ITEM = [
  {
    id: 1,
    title: '내게 필요한 등록 특허 찾기',
    description: (
      <Typography.Header6 color={COLORS.SUB_TEXT}>
        복잡한 특허 정보를 손쉽게 검색하고,
        <br />
        내 사업에 맞는
        <br />
        특허를 정확하게 찾아드립니다.
      </Typography.Header6>
    ),
    image: NecessaryImage1,
  },
  {
    id: 2,
    title: '내가 원하는 특허 맞춤 제작',
    description: (
      <Typography.Header6 color={COLORS.SUB_TEXT}>
        아이디어와 비즈니스 목표에
        <br />
        딱 맞는 특허를 설계하고
        <br />
        제작할 수 있도록 도와드립니다.
      </Typography.Header6>
    ),
    image: NecessaryImage2,
  },
].map(({ id, title, description, image }) => (
  <SliderItem key={id} title={title} image={image} hiddenButton={false} buttonColor={COLORS.SUB_GREEN} imageHeight={194}>
    {description}
  </SliderItem>
));

function NecessaryPatentSection() {
  return (
    <Flex.Vertical className='tw-px-[30px] tw-mt-[60px]'>
      <Slider items={SLIDER_ITEM} gap={12} sliderProps={{ dots: false }} />
    </Flex.Vertical>
  );
}

export default NecessaryPatentSection;
