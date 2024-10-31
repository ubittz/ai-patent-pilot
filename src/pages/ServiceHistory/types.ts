import { ReactNode } from 'react';

export interface ServiceHistoryItem {
  id: number;
  category: string;
  title: string;
}

export interface BaseServiceInfoProps {
  category: string;
  contents: ServiceInfoContent[];
}

export interface ServiceInfoContent {
  key: string;
  value: string;
}

export interface BaseServiceDescriptionProps {
  title: ReactNode;
  contents: ServiceDescriptionContent[];
}

export interface ServiceDescriptionContent {
  title: ReactNode;
  description: ReactNode;
}
