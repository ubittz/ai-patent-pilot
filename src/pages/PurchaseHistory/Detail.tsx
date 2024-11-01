import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { TICKET_TYPE_PRICE } from '@@pages/PurchaseTicket/constants';

import { PURCHASE_HISTORY_LIST } from './constants';

const StyledPurchaseHistoryDetail = styled(FullScreen)`
  .body {
    .history_detail__header {
      padding: 30px;
      border-bottom: 8px solid #fbfbfb;
    }
    .history_detail__content {
      padding: 30px;

      .history_detail__content_key {
        flex: 0 0 auto;
        width: 120px;
      }

      .history_detail__content_value {
        flex: 1;
      }
    }
  }
`;

function PurchaseHistoryDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const purchaseHistory = PURCHASE_HISTORY_LIST.find((history) => history.id === +(id ?? 0));

  const handleClickBack = () => {
    navigate(-1);
  };

  if (!purchaseHistory) return;

  return (
    <StyledPurchaseHistoryDetail>
      <Header onBack={handleClickBack}>
        <Typography.Header4>결제 내역</Typography.Header4>
      </Header>
      <Flex.Vertical className='body'>
        <div className='history_detail__header'>
          <Typography.Header2>
            선택하신 결제에 대한
            <br />
            상세 내역입니다.
          </Typography.Header2>
        </div>
        <Flex.Vertical className='history_detail__content' gap={8}>
          <Flex.Horizontal>
            <Typography.Header4 className='history_detail__content_key' fontWeight={400} color={COLORS.SUB_TEXT}>
              결제 정보
            </Typography.Header4>
            <Typography.Header4 className='history_detail__content_value' fontWeight={400}>
              카드 결제
            </Typography.Header4>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <Typography.Header4 className='history_detail__content_key' fontWeight={400} color={COLORS.SUB_TEXT}>
              결제 상태
            </Typography.Header4>
            <Typography.Header4 className='history_detail__content_value' fontWeight={400}>
              결제완료
            </Typography.Header4>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <Typography.Header4 className='history_detail__content_key' fontWeight={400} color={COLORS.SUB_TEXT}>
              결제 일시
            </Typography.Header4>
            <Typography.Header4 className='history_detail__content_value' fontWeight={400}>
              2024.10.21
            </Typography.Header4>
          </Flex.Horizontal>
          <Flex.Horizontal>
            <Typography.Header4 className='history_detail__content_key' fontWeight={400} color={COLORS.SUB_TEXT}>
              최종 결제 금액
            </Typography.Header4>
            <Typography.Header4 className='history_detail__content_value' fontWeight={400}>
              {TICKET_TYPE_PRICE[purchaseHistory.type].toLocaleString()}원
            </Typography.Header4>
          </Flex.Horizontal>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledPurchaseHistoryDetail>
  );
}

export default PurchaseHistoryDetail;
