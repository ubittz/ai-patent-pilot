import { Field, FieldProps, useFormikContext } from 'formik';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import FormGroup from '@@components/FormGroup';
import Radio from '@@components/Radio';
import Typography from '@@components/Typography';
import { PURCHASE_TYPE } from '@@pages/PurchaseTicket/constants';
import PurchaseAccountForm from '@@pages/PurchaseTicket/parts/PurchaseAccountForm';
import PurchaseCardForm from '@@pages/PurchaseTicket/parts/PurchaseCardForm';
import { PurchaseTicketDto } from '@@pages/PurchaseTicket/types';

const StyledPurchaseInfo = styled(Flex.Vertical)`
  padding: 40px 30px 30px;

  .purchase_info__radio_box {
    padding: 10px 0;
  }
`;

function PurchaseInfo() {
  const { values, getFieldProps } = useFormikContext<PurchaseTicketDto>();

  return (
    <StyledPurchaseInfo gap={30}>
      <Typography.Header3>결제 정보</Typography.Header3>
      <FormGroup label='결제 수단'>
        <Flex.Horizontal>
          <Flex.Horizontal gap={30} className='purchase_info__radio_box'>
            <Field
              type='radio'
              {...getFieldProps('purchaseType')}
              value={PURCHASE_TYPE.ACCOUNT}
              as={(props: FieldProps['field']) => <Radio {...props}>가상계좌</Radio>}
            />
            <Field
              type='radio'
              {...getFieldProps('purchaseType')}
              value={PURCHASE_TYPE.CARD}
              as={(props: FieldProps['field']) => <Radio {...props}>카드결제</Radio>}
            />
          </Flex.Horizontal>
        </Flex.Horizontal>
      </FormGroup>
      {values.purchaseType === PURCHASE_TYPE.ACCOUNT ? <PurchaseAccountForm /> : <PurchaseCardForm />}
    </StyledPurchaseInfo>
  );
}

export default PurchaseInfo;
