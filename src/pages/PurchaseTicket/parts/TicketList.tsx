import { useFormikContext } from 'formik';

import Flex from '@@components/Flex';
import { ALL_TICKET_TYPE } from '@@pages/PurchaseTicket/constants';
import TicketItem from '@@pages/PurchaseTicket/parts/TicketItem';
import { PurchaseTicketDto, TicketType } from '@@pages/PurchaseTicket/types';

function TicketList() {
  const { values, setFieldValue } = useFormikContext<PurchaseTicketDto>();

  const handleSelectType = (type: TicketType) => {
    setFieldValue('ticketType', type);
  };

  return (
    <Flex.Vertical gap={8}>
      {ALL_TICKET_TYPE.map((type) => (
        <TicketItem key={type} type={type} selected={values.ticketType === type} onClick={handleSelectType} />
      ))}
    </Flex.Vertical>
  );
}

export default TicketList;
