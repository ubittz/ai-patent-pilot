import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { TICKET_STATUS } from '@@pages/TicketHistory/constants';
import TicketItem from '@@pages/TicketHistory/parts/TicketItem';
import { TicketHistoryItem } from '@@pages/TicketHistory/types';

const StyledTicketList = styled(Flex.Vertical)`
  padding: 30px;
`;

const TICKET_ITEMS: TicketHistoryItem[] = [
  {
    id: 1,
    number: 3,
    status: TICKET_STATUS.USING,
  },
  {
    id: 2,
    number: 1,
    status: TICKET_STATUS.EXPIRY,
  },
  {
    id: 3,
    number: 1,
    status: TICKET_STATUS.EXPIRY,
  },
];

function TicketList() {
  return (
    <StyledTicketList gap={12}>
      <Typography.Header6>총 N개 사용</Typography.Header6>
      {TICKET_ITEMS.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </StyledTicketList>
  );
}

export default TicketList;
