import PatentSection from '@@components/PatentSection';
import PattentLevelImage from '@@pages/Home/images/patent_level.jpeg';
import { PAGES } from '@@router/constants';
import { asType } from '@@types/common';

function PatentLevelSection({ onClickButton }: { onClickButton: (page: asType<typeof PAGES>) => void }) {
  const handleClickButton = () => {
    onClickButton(PAGES.CHECK_LEVEL);
  };

  return (
    <PatentSection
      title='나의 특허 기술 레벨 측정'
      description='나의 특허 아이디어의 레벨을 측정해보세요.'
      image={PattentLevelImage}
      buttonProps={{
        children: '측정하러 가기',
        onClick: handleClickButton,
      }}
    />
  );
}

export default PatentLevelSection;
