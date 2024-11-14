import { PropsWithChildren } from 'react';

export type PopupProps = PropsWithChildren<{
  visible: boolean;
  confirmText?: string;
  onConfirm: () => void;
}>;
