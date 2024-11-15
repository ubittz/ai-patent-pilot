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
import { FIND_PATENT_RESULT_LIST } from '@@pages/FindPatent/constants';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';

const StyledDivider = styled.div`
  height: 1px;
  background: ${COLORS.LINE};
`;

function FindPatentReesult() {
  const navigate = useNavigate();

  const me = useAppState((state) => state.home.me);

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
        상담 신청이 완료되었습니다.
        <br />
        서비스 이력 확인에서 확인 가능합니다.
      </Popup>
      <Header onBack={handleClickBack}>
        <Typography.Header4>결과보기</Typography.Header4>
      </Header>
      <Flex.Vertical className='body tw-py-[40px] tw-px-[30px]' gap={34}>
        <Flex.Vertical gap={24}>
          <Typography.Header2>
            {me.name}님께서
            <br />
            찾으시는 특허권의
            <br />
            정보입니다.
          </Typography.Header2>
          <DownArrowPointIcon />
        </Flex.Vertical>
        <Flex.Vertical gap={40}>
          {FIND_PATENT_RESULT_LIST.map((result, index) => (
            <>
              <Flex.Vertical key={result.number} gap={16}>
                <Flex.Vertical gap={4}>
                  <Typography.Header4>{result.number}</Typography.Header4>
                  <Typography.Header6 color={COLORS.SUB_TEXT}>{result.content}</Typography.Header6>
                </Flex.Vertical>
                <Button.Large onClick={toggle}>선택/상담</Button.Large>
              </Flex.Vertical>
              {index < FIND_PATENT_RESULT_LIST.length - 1 && <StyledDivider />}
            </>
          ))}
        </Flex.Vertical>
      </Flex.Vertical>
    </FullScreen>
  );
}

export default FindPatentReesult;
