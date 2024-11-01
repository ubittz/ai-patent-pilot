import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { PURCHASE_HISTORY_LIST } from '@@pages/PurchaseHistory/constants';
import PurchaseHistoryItem from '@@pages/PurchaseHistory/parts/PurchaseHistoryItem';

const StyledPurchaseHistoryList = styled(Flex.Vertical)`
  padding: 30px;
`;

function PurchaseHistoryList() {
  return (
    <StyledPurchaseHistoryList gap={12}>
      <Typography.Header6>총 N개 사용</Typography.Header6>
      <Flex.Vertical gap={12}>
        {PURCHASE_HISTORY_LIST.map((history) => (
          <PurchaseHistoryItem key={history.id} purchaseHistory={history} />
        ))}
      </Flex.Vertical>
    </StyledPurchaseHistoryList>
  );
}
export default PurchaseHistoryList;
