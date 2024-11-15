import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DownArrowPointIcon } from '@@constants/icons';
import { useToggle } from '@@hooks/common';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledDescriptionBox = styled(Flex.Vertical)`
  padding: 16px 12px;
  background: #f9f9f9;
  border: 1px solid ${COLORS.LINE};
  border-radius: 12px;
`;

function CustomPatentReesult() {
  const navigate = useNavigate();

  const [visible, toggle] = useToggle();

  const handleClickBack = () => {
    navigate(pathGenerator(PAGES.RECOMMEND_SERVICE));
  };

  const handleConfirm = () => {
    navigate(pathGenerator(`${PAGES.MY}/service-history`));
  };

  return (
    <FullScreen>
      <Popup visible={visible} onConfirm={handleConfirm}>
        검토 요청이 완료되었습니다.
        <br />
        서비스 이력 확인에서 확인 가능합니다.
      </Popup>
      <Header onBack={handleClickBack}>
        <Typography.Header4>결과보기</Typography.Header4>
      </Header>
      <Flex.Vertical className='body tw-pt-[40px] tw-px-[30px]' gap={34}>
        <Flex.Vertical gap={24}>
          <Typography.Header2>
            김진수님께
            <br />
            추천드리는 특허는
            <br />
            <Typography.Header2 color={COLORS.MAIN_GREEN} as='span'>
              드론을 활용한 녹조제거 및 개선시스템
            </Typography.Header2>{' '}
            입니다.
          </Typography.Header2>
          <DownArrowPointIcon />
        </Flex.Vertical>
        <Flex.Vertical gap={40}>
          <Flex.Vertical gap={4}>
            <Typography.Header4>
              <Typography.Header4 as='span' color={COLORS.MAIN_GREEN}>
                드론을 활용한 녹조제거 및 개선시스템
              </Typography.Header4>{' '}
              특허는
            </Typography.Header4>
            <Typography.Header6 color={COLORS.SUB_TEXT}>
              드론을 활용하여 녹조의 위치, 분포 등을 파악하고, 녹조제거선의 효율적 이동경로를 제공하며, 녹조 분포가 심한 지역에 드론으로 화학약품을
              살포하여 수질개선 조치를 하는 시스템에 대한 발명입니다.
            </Typography.Header6>
          </Flex.Vertical>
          <Flex.Vertical gap={20}>
            <Button.Large onClick={toggle}>특허 검토 요청</Button.Large>
            <StyledDescriptionBox gap={8}>
              <Typography.Header5 color={COLORS.SUB_TEXT}>특허 검토 요청이란?</Typography.Header5>
              <Typography.Header6 color='#999999'>
                검토 요청 시 회원님의 선택 사항을 토대로 전문가 검증을 거쳐 결과를 알려드립니다.
              </Typography.Header6>
            </StyledDescriptionBox>
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
    </FullScreen>
  );
}

export default CustomPatentReesult;
