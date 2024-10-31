import { useFormikContext } from 'formik';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PurchaseTicketDto } from '@@pages/PurchaseTicket/types';

const StyledDescription = styled(Flex.Vertical)`
  border-radius: 16px;
  background: ${COLORS.WHITE_TEXT};
  border: 1px solid ${COLORS.LINE};
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);

  .description__top {
    padding: 20px 12px;
    border-bottom: 1px solid ${COLORS.LINE};
  }
  .description__bottom {
    padding: 20px 12px;
  }
`;

function PurchaseAccountForm() {
  const { getFieldProps } = useFormikContext<PurchaseTicketDto>();

  return (
    <Flex.Vertical gap={30}>
      <InputFormGroup
        label='은행'
        inputProps={{
          ...getFieldProps('bank'),
          placeholder: '은행을 선택해주세요.',
        }}
      />
      <InputFormGroup
        label='입금자 명'
        inputProps={{
          ...getFieldProps('name'),
          placeholder: '입금자 명을 입력해주세요',
        }}
      />
      <StyledDescription>
        <Flex.Vertical className='description__top' gap={4}>
          <Typography.Header5>가상계좌 입금 주의사항</Typography.Header5>
          <Typography.Header6 color={COLORS.SUB_TEXT}>계좌유효기간: 2024년 12월 02일 23시 03분 49초</Typography.Header6>
        </Flex.Vertical>
        <Flex.Vertical className='description__bottom' gap={8}>
          <Typography.Header6 color={COLORS.SUB_TEXT}>- 가상계좌 주문 방식은 입금 최종 완료 후 주문확인 및 출고가 진행됩니다.</Typography.Header6>
          <Typography.Header6 color={COLORS.SUB_TEXT}>
            - 가상계좌 입금 전 재고 소전, 상품 품절 판매 종료 등의 사유가 발생될 경우 주문이 취소됩니다.
          </Typography.Header6>
          <Typography.Header6 color={COLORS.SUB_TEXT}>
            - 가상계좌는 주문 시 고객님께 발급되는 일회성 계좌번호 이므로 입금자명을 동일하게 처리해주셔야 합니다.
          </Typography.Header6>
        </Flex.Vertical>
      </StyledDescription>
    </Flex.Vertical>
  );
}

export default PurchaseAccountForm;
