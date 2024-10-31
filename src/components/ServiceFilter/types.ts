import { PropsWithChildren } from 'react';

export type ServiceFilterProps = PropsWithChildren<{
  categoryList: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
  label?: string;
}>;
