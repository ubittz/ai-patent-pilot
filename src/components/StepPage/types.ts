import { PropsWithChildren } from 'react';

import { ButtonProps } from '@@components/Button/types';

export type StepPageProps = PropsWithChildren<{
  title: string;
  gauge: number;
  buttonProps?: ButtonProps;
}>;
