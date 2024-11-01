import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PURCHASE_TICKET_TYPE_STRING } from '@@pages/PurchaseHistory/constants';
import { PurchaseItem } from '@@pages/PurchaseHistory/types';
import { TICKET_TYPE_PRICE } from '@@pages/PurchaseTicket/constants';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

const StyledPurchaseHistoryItem = styled(Flex.Vertical)`
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid #f9f9f9;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  .purchase_history_item__badge {
    ${({ theme }) => theme.typography.Header6}
    padding: 4px 8px;
    color: ${COLORS.WHITE_TEXT};
    background: ${COLORS.MAIN_GREEN};
    border-radius: 100px;
  }

  .purchase_history_item__button {
    margin-top: 8px;
  }
`;

function PurchaseHistoryItem({ purchaseHistory }: { purchaseHistory: PurchaseItem }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pathGenerator(`${PAGES.MY}/purchase-history/${purchaseHistory.id}`));
  };

  return (
    <StyledPurchaseHistoryItem gap={12}>
      <Flex.Horizontal justifyContent='space-between'>
        <div className='purchase_history_item__badge'>{PURCHASE_TICKET_TYPE_STRING[purchaseHistory.type]}</div>
        <Typography.Header6 color={COLORS.SUB_TEXT}>2024.10.21</Typography.Header6>
      </Flex.Horizontal>
      <Flex.Vertical alignItems='flex-end' gap={4}>
        <Typography.Header4>{TICKET_TYPE_PRICE[purchaseHistory.type].toLocaleString()}원</Typography.Header4>
        <Typography.Header6 color={COLORS.SUB_TEXT}>202401236435</Typography.Header6>
      </Flex.Vertical>
      <Button.Large className='purchase_history_item__button' onClick={handleClick}>
        결제 내역 상세보기
      </Button.Large>
    </StyledPurchaseHistoryItem>
  );
}

export default PurchaseHistoryItem;
