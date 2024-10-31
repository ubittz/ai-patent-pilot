import { Ticket10TimeIcon, Ticket1TimeIcon, Ticket3TimeIcon, Ticket5TimeIcon } from '@@pages/My/icons';

export const TICKET_TYPE = {
  TIME_1: '1time',
  TIME_3: '3time',
  TIME_5: '5time',
  TIME_10: '10time',
} as const;

export const TICKET_TYPE_ICONS = {
  [TICKET_TYPE.TIME_1]: Ticket1TimeIcon,
  [TICKET_TYPE.TIME_3]: Ticket3TimeIcon,
  [TICKET_TYPE.TIME_5]: Ticket5TimeIcon,
  [TICKET_TYPE.TIME_10]: Ticket10TimeIcon,
};

export const TICKET_TYPE_STRING = {
  [TICKET_TYPE.TIME_1]: '1회권',
  [TICKET_TYPE.TIME_3]: '3회권',
  [TICKET_TYPE.TIME_5]: '5회권',
  [TICKET_TYPE.TIME_10]: '10회권',
} as const;

export const TICKET_TYPE_PRICE = {
  [TICKET_TYPE.TIME_1]: 50000,
  [TICKET_TYPE.TIME_3]: 130000,
  [TICKET_TYPE.TIME_5]: 180000,
  [TICKET_TYPE.TIME_10]: 220000,
} as const;

export const ALL_TICKET_TYPE = Object.values(TICKET_TYPE);

export const PURCHASE_TYPE = {
  ACCOUNT: 'account',
  CARD: 'card',
} as const;

export const PURCHASE_TYPE_STRING = {
  [PURCHASE_TYPE.ACCOUNT]: '가상계좌',
  [PURCHASE_TYPE.CARD]: '카드결제',
} as const;
