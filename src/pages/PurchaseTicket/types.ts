import { PURCHASE_TYPE, TICKET_TYPE } from '@@pages/PurchaseTicket/constants';
import { asType } from '@@types/common';

export interface TicketItemProps {
  type: TicketType;
  selected: boolean;
  onClick: (type: TicketType) => void;
}

export interface PurchaseTicketDto {
  ticketType: TicketType;
  purchaseType: PurchaseType;
  bank?: string;
  name?: string;
  cardCompany?: string;
  installment?: number;
}

export type TicketType = asType<typeof TICKET_TYPE>;

export type PurchaseType = asType<typeof PURCHASE_TYPE>;
