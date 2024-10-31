import { COLORS } from '@@constants/colors';
import { DefaultIconProps } from '@@types/common';

interface TicketIconProps extends DefaultIconProps {
  selected: boolean;
}

export function Ticket1TimeIcon({ selected, ...props }: TicketIconProps) {
  return (
    <svg width='11' height='17' viewBox='0 0 11 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.5'
        d='M7.87053 14.558H10.7085V17H1.64453V14.558H4.85653V5.604L4.94453 4.174L2.26053 6.616L0.522531 4.636L5.27453 0.543999H7.87053V14.558Z'
        fill={selected ? COLORS.SUB_GREEN : COLORS.SUB_TEXT}
      />
    </svg>
  );
}

export function Ticket3TimeIcon({ selected, ...props }: TicketIconProps) {
  return (
    <svg width='13' height='18' viewBox='0 0 13 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.5'
        d='M6.91253 0.279999C9.99253 0.345999 12.0385 2.26 11.9725 4.702C11.9725 6.572 10.8945 7.672 9.50853 8.354C11.4445 9.08 12.2585 10.334 12.2585 12.27C12.1925 15.636 9.50853 17.418 6.42853 17.418C3.08453 17.418 1.43453 15.746 0.554531 12.864L3.23853 11.808C3.59053 13.216 4.82253 14.778 6.38453 14.778C8.32053 14.778 9.26653 13.568 9.26653 12.336C9.26653 10.796 8.84853 9.74 5.41653 9.74V7.54C8.32053 7.474 9.00253 6.55 9.00253 5.142C9.02453 3.624 8.16653 2.876 6.73653 2.876C4.86653 2.876 4.22853 4.108 3.94253 5.692C2.99653 5.538 2.05053 5.34 1.08253 5.186C1.72053 1.82 3.81053 0.279999 6.91253 0.279999Z'
        fill={selected ? COLORS.SUB_GREEN : COLORS.SUB_TEXT}
      />
    </svg>
  );
}

export function Ticket5TimeIcon({ selected, ...props }: TicketIconProps) {
  return (
    <svg width='13' height='18' viewBox='0 0 13 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.5'
        d='M5.30653 3.25L4.75653 6.462C5.43853 6.352 6.05453 6.308 6.64853 6.308C10.1685 6.308 12.0605 8.552 12.0605 11.456C12.0605 14.998 9.37653 17.396 5.83453 17.396C3.81053 17.396 2.00653 16.472 0.884531 15.416L2.42453 13.172C3.45853 14.03 4.60253 14.778 6.01053 14.778C8.03453 14.778 9.11253 13.524 9.11253 11.588C9.11253 9.828 8.07853 8.75 6.05453 8.816C5.24053 8.882 4.44853 9.036 3.65653 9.322L1.80853 8.772C2.49053 4.548 2.93053 1.952 3.17253 0.543999H11.4885V3.25H5.30653Z'
        fill={selected ? COLORS.SUB_GREEN : COLORS.SUB_TEXT}
      />
    </svg>
  );
}

export function Ticket10TimeIcon({ selected, ...props }: TicketIconProps) {
  return (
    <svg width='25' height='18' viewBox='0 0 25 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.5'
        d='M7.76506 14.558H10.6031V17H1.53906V14.558H4.75106V5.604L4.83906 4.174L2.15506 6.616L0.417063 4.636L5.16906 0.543999H7.76506V14.558ZM24.5445 8.838C24.5445 14.646 21.9265 17.308 18.4065 17.308C14.9745 17.308 12.3345 14.646 12.3345 8.838C12.3345 2.986 14.9745 0.345999 18.4065 0.345999C21.9265 0.345999 24.5445 2.986 24.5445 8.838ZM21.4645 8.838C21.4645 4.152 20.0125 2.876 18.4065 2.876C16.8885 2.876 15.4145 4.152 15.4145 8.838C15.4145 13.502 16.8885 14.756 18.4065 14.756C20.0125 14.756 21.4645 13.502 21.4645 8.838Z'
        fill={selected ? COLORS.SUB_GREEN : COLORS.SUB_TEXT}
      />
    </svg>
  );
}
