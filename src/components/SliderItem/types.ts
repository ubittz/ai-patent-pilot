import { PropsWithChildren } from 'react';

export type SliderItemProps = PropsWithChildren<{
  image: string;
  imageHeight?: number;
  title: string;
  hiddenButton?: boolean;
  buttonColor?: string;
}>;
