import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import InputFormGroup from '@@components/InputFormGroup';
import { PurchaseTicketDto } from '@@pages/My/types';

function PurchaseCardForm() {
  const { getFieldProps } = useFormikContext<PurchaseTicketDto>();

  return (
    <Flex.Vertical gap={30}>
      <InputFormGroup
        label='카드사'
        inputProps={{
          ...getFieldProps('cardCompany'),
          placeholder: '카드사를 선택해주세요.',
        }}
      />
      <InputFormGroup
        label='할부'
        inputProps={{
          ...getFieldProps('installment'),
          type: 'number',
          placeholder: '할부 개월을 입력해주세요.',
        }}
      />
    </Flex.Vertical>
  );
}

export default PurchaseCardForm;
