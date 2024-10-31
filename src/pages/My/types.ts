import { ReactNode } from 'react';

import { PURCHASE_TYPE, TICKET_TYPE } from '@@pages/My/constants';
import { asType } from '@@types/common';

export interface TicketItemProps {
  type: TicketType;
  selected: boolean;
  onClick: (type: TicketType) => void;
}

export interface ConfigItem {
  title: string;
  icon: ReactNode;
  path: string;
}

export interface UpdateMyInfoForm {
  name: string;
  id: string;
  password?: string;
  passwordCheck?: string;
  phone?: string;
  publish: boolean;
  email: string;
}

export interface UpdateMyInfoDto {
  name?: string;
  password?: string;
  phone?: string;
  publish?: boolean;
  email?: string;
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
