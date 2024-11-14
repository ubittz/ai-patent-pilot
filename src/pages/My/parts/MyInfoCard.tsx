import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useAppState } from '@@store/hooks';

const StyledMyInfoCard = styled(Flex.Vertical)`
  padding: 30px;
  padding-bottom: 40px;
  background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);

  .my_info_card__ticket {
    border-radius: 16px;
    border: 1px solid ${COLORS.LINE};
    overflow: hidden;
    background: ${COLORS.WHITE_TEXT};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

    .my_info_card__ticket_top {
      padding: 20px 12px;
      padding-right: 16px;
      border-bottom: 1px solid ${COLORS.LINE};
    }

    .my_info_card__ticket_bottom {
      padding: 12px 16px 20px;

      & > button {
        padding: 8px 12px;
      }
    }
  }
`;

function MyInfoCard() {
  const navigate = useNavigate();

  const me = useAppState((state) => state.home.me);

  const handleClickPurchase = () => {
    navigate(pathGenerator(`${PAGES.MY}/purchase-ticket`));
  };

  const handleClickLogout = () => {
    navigate(pathGenerator(''));
  };

  return (
    <StyledMyInfoCard gap={16}>
      <Flex.Horizontal justifyContent='space-between' alignItems='center'>
        <Typography.Header2>안녕하세요, {me.name}님!</Typography.Header2>
        <Typography.Header6 color={COLORS.PLACEHOLDER} onClick={handleClickLogout}>
          Logout
        </Typography.Header6>
      </Flex.Horizontal>
      <Flex.Vertical className='my_info_card__ticket'>
        <Flex.Horizontal className='my_info_card__ticket_top' justifyContent='space-between'>
          <Typography.Header5>보유 이용권</Typography.Header5>
          <Typography.Header5>
            <Typography.Header5 as='span' color={COLORS.MAIN_GREEN}>
              3
            </Typography.Header5>
            개
          </Typography.Header5>
        </Flex.Horizontal>
        <Flex.Horizontal className='my_info_card__ticket_bottom' justifyContent='flex-end'>
          <Button.Tiny onClick={handleClickPurchase}>이용권 구매</Button.Tiny>
        </Flex.Horizontal>
      </Flex.Vertical>
    </StyledMyInfoCard>
  );
}

export default MyInfoCard;
