import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import { ALL_TICKET_TYPE } from '@@pages/My/constants';
import { PurchaseTicketDto, TicketType } from '@@pages/My/types';

import TicketItem from './TicketItem';

function TicketList() {
  const { values, setFieldValue } = useFormikContext<PurchaseTicketDto>();

  const handleSelectType = (type: TicketType) => {
    setFieldValue('ticketType', type);
  };

  return (
    <Flex.Vertical gap={8}>
      {ALL_TICKET_TYPE.map((type) => (
        <TicketItem type={type} selected={values.ticketType === type} onClick={handleSelectType} />
      ))}
    </Flex.Vertical>
  );
}

export default TicketList;
