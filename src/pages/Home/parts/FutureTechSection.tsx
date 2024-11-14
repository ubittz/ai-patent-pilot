import PatentSection from '@@components/PatentSection';
import FutureTechImage from '@@pages/Home/images/future_tech.jpeg';

function FutureTechSection() {
  return (
    <PatentSection
      title='AI 특허 파일럿이 제공하는 서비스입니다.'
      description='AI 특허 파일럿과 함께 미래 기술을 확인하세요.'
      image={FutureTechImage}
      buttonProps={{
        children: '미래기술 둘러보기',
      }}
    />
  );
}

export default FutureTechSection;
