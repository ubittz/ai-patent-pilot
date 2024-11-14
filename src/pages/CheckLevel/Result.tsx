import { useNavigate } from 'react-router-dom';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { DownArrowPointIcon } from '@@constants/icons';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';

import { ALL_CHECK_LEVEL_RESULT_STEP, CHECK_LEVEL_RESULT_STEP_DESCRIPTION } from './constants';

function CheckLevelReesult() {
  const navigate = useNavigate();
  const me = useAppState((state) => state.home.me);

  const index = Math.floor(Math.random() * (ALL_CHECK_LEVEL_RESULT_STEP.length - 1));
  const step = ALL_CHECK_LEVEL_RESULT_STEP[index];

  const handleClickBack = () => {
    navigate(pathGenerator(PAGES.RECOMMEND_SERVICE));
  };

  return (
    <FullScreen>
      <Header onBack={handleClickBack}>
        <Typography.Header4>결과보기</Typography.Header4>
      </Header>
      <Flex.Vertical className='body tw-pt-[40px] tw-px-[30px]' gap={34}>
        <Flex.Vertical gap={24}>
          <Typography.Header2>
            {me.name}님의
            <br />
            특허/아이디어는
            <br />
            <Typography.Header2 color={COLORS.MAIN_GREEN} as='span'>
              5단계 중에 {index + 1}단계
            </Typography.Header2>{' '}
            입니다.
          </Typography.Header2>
          <DownArrowPointIcon />
        </Flex.Vertical>
        <Flex.Vertical gap={4}>
          <Typography.Header5 color={COLORS.SUB_TEXT}>{CHECK_LEVEL_RESULT_STEP_DESCRIPTION[step]}</Typography.Header5>
        </Flex.Vertical>
      </Flex.Vertical>
    </FullScreen>
  );
}

export default CheckLevelReesult;
