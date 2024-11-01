import { PurchaseItem } from '@@pages/PurchaseHistory/types';
import { TICKET_TYPE } from '@@pages/PurchaseTicket/constants';

export const PURCHASE_HISTORY_LIST: PurchaseItem[] = [
  {
    id: 1,
    type: TICKET_TYPE.TIME_1,
  },
  {
    id: 2,
    type: TICKET_TYPE.TIME_3,
  },
  {
    id: 3,
    type: TICKET_TYPE.TIME_5,
  },
  {
    id: 4,
    type: TICKET_TYPE.TIME_10,
  },
];

export const PURCHASE_TICKET_TYPE_STRING = {
  [TICKET_TYPE.TIME_1]: '1회 이용권',
  [TICKET_TYPE.TIME_3]: '3회 이용권',
  [TICKET_TYPE.TIME_5]: '5회 이용권',
  [TICKET_TYPE.TIME_10]: '10회 이용권',
} as const;
