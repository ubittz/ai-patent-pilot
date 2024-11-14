import { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FooterContainer from '@@components/FooterContainer';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { useToggle } from '@@hooks/common';

import { CATEGORY_LIST } from './constants';
import CategorySection from './parts/CategorySection';

const StyledFutureTech = styled(FullScreen)`
  .body {
    padding: 40px 30px 44px;
    overflow-x: hidden;
  }
`;

function FutureTech() {
  const [selectedDomainId, setSelectedDomainId] = useState<number>(CATEGORY_LIST[0].id);
  const [visible, toggle] = useToggle();

  const handleClickDomain = (id: number) => {
    setSelectedDomainId(id);
  };

  const handleClickSelect = () => {
    toggle();
  };

  return (
    <StyledFutureTech navigation>
      <Popup visible={visible} onConfirm={toggle}>
        미래 기술 상담 접수가 완료되었습니다.
      </Popup>
      <Header hiddenBack>AI 특허 파일럿</Header>
      <Flex.Vertical className='body' gap={24}>
        <Flex.Vertical gap={4}>
          <Typography.Header2>선제적 미래기술 창출을 위한 특허</Typography.Header2>
          <Typography.Header5>미래 기술 한가지를 선택해보세요. 전문가와 상담 연결을 해드립니다.</Typography.Header5>
        </Flex.Vertical>
        <Flex.Vertical gap={60}>
          {CATEGORY_LIST.map((category) => (
            <CategorySection key={category.id} category={category} selectedDomainId={selectedDomainId} onClickDomain={handleClickDomain} />
          ))}
        </Flex.Vertical>
      </Flex.Vertical>
      <FooterContainer>
        <Button.Large onClick={handleClickSelect}>미래 기술 선택하기</Button.Large>
      </FooterContainer>
    </StyledFutureTech>
  );
}

export default FutureTech;
