import PatentSection from '@@components/PatentSection';
import PattentLevelImage from '@@pages/Home/images/patent_level.jpeg';

function PatentLevelSection() {
  return (
    <PatentSection
      title='나의 특허 기술 레벨 측정'
      description='나의 특허 아이디어의 레벨을 측정해보세요.'
      image={PattentLevelImage}
      buttonProps={{
        children: '측정하러 가기',
      }}
    />
  );
}

export default PatentLevelSection;
