import { ChangeEventHandler, ReactNode } from 'react';

import { TECH_SECTION } from '@@components/PatentCheckPage/constants';
import { asType } from '@@types/common';

export interface PatentCheckPageProps {
  title: ReactNode;
  values: TechSection[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export type TechSection = asType<typeof TECH_SECTION>;
