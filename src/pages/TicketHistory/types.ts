import { TICKET_STATUS } from '@@pages/TicketHistory/constants';
import { asType } from '@@types/common';

export interface TicketHistoryItem {
  id: number;
  number: number;
  status: TicketStatus;
}

export type TicketStatus = asType<typeof TICKET_STATUS>;
