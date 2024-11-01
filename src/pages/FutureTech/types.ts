import { ReactNode } from 'react';

export interface PatentContactItem {
  id: number;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  title: string;
}

export interface FutureTechItemProps {
  item: PatentContactItem;
  selected: boolean;
  onSelect: (id: number) => void;
}
