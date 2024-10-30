import { ReactNode } from 'react';

export interface PopupProps {
  visible: boolean;
  content: ReactNode;
  confirmText?: string;
  onConfirm: () => void;
}
