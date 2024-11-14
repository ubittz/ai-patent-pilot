import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import PatentSection from '@@components/PatentSection';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { DownArrowPointIcon } from '@@constants/icons';
import CustomPatentImage from '@@pages/RecommendService/images/custom_patent.jpeg';
import FindPatentImage from '@@pages/RecommendService/images/find_patent.jpeg';
import LavelCheckImage from '@@pages/RecommendService/images/level_check.jpeg';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { asType } from '@@types/common';

function RecommendService() {
  const navigate = useNavigate();

  const [popupState, setPopupState] = useState<{
    visible: boolean;
    page?: asType<typeof PAGES>;
  }>({
    visible: false,
  });

  const handleConfirm = () => {
    if (popupState.page) navigate(pathGenerator(popupState.page));
  };

  const handleClickButton = (page: asType<typeof PAGES>) => () => {
    setPopupState({
      visible: true,
      page,
    });
  };

  return (
    <FullScreen navigation>
      <Popup visible={popupState.visible} onConfirm={handleConfirm}>
        서비스 이용권을 사용하시겠습니까?
      </Popup>
      <Header>AI 파일럿</Header>
      <Flex.Vertical className='body tw-pt-[40px] tw-pb-[80px]'>
        <Flex.Vertical className='tw-px-[30px]' gap={24}>
          <Typography.Header2>
            김준수님!
            <br />
            AI 특허 파일럿만의
            <br />
            특별한 서비스를 경헙해보세요.
          </Typography.Header2>
          <DownArrowPointIcon />
        </Flex.Vertical>
        <Flex.Vertical gap={60}>
          <PatentSection
            title='나의 특허 기술 레벨 측정'
            description='나의 특허 아이디어의 레벨을 측정해보세요.'
            image={CustomPatentImage}
            buttonProps={{
              children: '측정하러 가기',
              onClick: handleClickButton(PAGES.CHECK_LEVEL),
            }}
          />
          <PatentSection
            title='내게 맞는 등록 특허 찾기'
            description='나에게 맞는 등록 특허를 찾아보세요.'
            image={FindPatentImage}
            buttonProps={{
              children: '특허 찾기',
              onClick: handleClickButton(PAGES.FIND_PATENT),
            }}
          />
          <PatentSection
            title='내가 원하는 특허 맞춤 제작'
            description='내 사업에 맞는 특허를 정확하게 찾아보세요.'
            image={LavelCheckImage}
            buttonProps={{
              children: '특허 만들러 가기',
              onClick: handleClickButton(PAGES.CUSTOM_PATENT),
            }}
          />
        </Flex.Vertical>
      </Flex.Vertical>
    </FullScreen>
  );
}

export default RecommendService;
