import { ReactNode } from 'react';

import { SERVICE_CATEGORY } from '@@pages/ServiceHistory/constants';
import { asType } from '@@types/common';

export interface ServiceHistoryItem {
  id: number;
  category: ServiceCategory;
  title: string;
}

export interface BaseServiceInfoProps {
  category: ServiceCategory;
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

export type ServiceCategory = asType<typeof SERVICE_CATEGORY>;
