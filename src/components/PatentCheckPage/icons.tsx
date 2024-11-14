import { COLORS } from '@@constants/colors';
import { DefaultIconProps } from '@@types/common';

export function CheckIcon({ isFill, ...props }: DefaultIconProps & { isFill: boolean }) {
  return (
    <svg width='14' height='11' viewBox='0 0 14 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 5.44444L5.15385 9L13 1' stroke={isFill ? COLORS.MAIN_GREEN : COLORS.WHITE_TEXT} strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}
