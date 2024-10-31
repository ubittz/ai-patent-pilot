import { COLORS } from '@@constants/colors';
import { DefaultIconProps } from '@@types/common';

export function ProfileIcon(props: DefaultIconProps) {
  return (
    <svg width='18' height='21' viewBox='0 0 18 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M14.1181 15.1617C14.1181 13.8348 12.5817 10.9675 10.4865 10.3816C10.2459 10.2963 10.1489 9.98587 10.4555 9.79964C11.5845 9.29525 12.376 8.20111 12.376 6.88581C12.376 5.10105 10.9288 3.65771 9.14792 3.65771C7.36703 3.65771 5.91982 5.10493 5.91982 6.88581C5.91982 8.17395 6.67253 9.28361 7.76279 9.79964C8.0887 9.95484 8.07706 10.304 7.79771 10.3816C5.71031 10.9714 4.17773 13.8774 4.17773 15.1617'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M1 15.1617H17.2957' stroke='#379A0C' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M16.4809 20H1.81478C1.36471 20 1 19.6935 1 19.321V1.67899C1 1.30651 1.36471 1 1.81478 1H16.4809C16.931 1 17.2957 1.30651 17.2957 1.67899V19.321C17.2957 19.6935 16.931 20 16.4809 20Z'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function BookIcon(props: DefaultIconProps) {
  return (
    <svg width='15' height='19' viewBox='0 0 15 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M12.2321 1V7.60629L10.8386 6.18673L9.44507 7.60629V1' stroke='#379A0C' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M14.068 1H1.28912C1.12944 1 1 1.12944 1 1.28912V17.7109C1 17.8706 1.12944 18 1.28912 18H14.068C14.2277 18 14.3571 17.8706 14.3571 17.7109V1.28912C14.3571 1.12944 14.2277 1 14.068 1Z'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function TicketIcon(props: DefaultIconProps) {
  return (
    <svg width='22' height='15' viewBox='0 0 22 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M6.86353 4.26508V13.7651' stroke='#379A0C' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M6.86353 1V2.00078' stroke='#333333' strokeLinecap='round' strokeLinejoin='round' />
      <path
        d='M1 1V4.20627C1.05333 4.20627 1.10353 4.2 1.15686 4.2C3.04549 4.2 4.57647 5.75294 4.57647 7.66667C4.57647 9.58039 3.04549 11.1333 1.15686 11.1333C1.10353 11.1333 1.05333 11.1271 1 11.1271V14.3333H21V1H1Z'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function CoinIcon(props: DefaultIconProps) {
  return (
    <svg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.26548 17.3141C13.7505 17.2742 17.354 13.606 17.3141 9.12092C17.2742 4.63587 13.606 1.03238 9.1209 1.0723C4.63585 1.11223 1.03236 4.78045 1.07229 9.2655C1.11221 13.7505 4.78043 17.354 9.26548 17.3141Z'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.1436 3.48425C18.5253 4.46343 20.9998 7.58554 20.9998 11.2833C20.9998 15.7693 17.3647 19.4045 12.8786 19.4045C10.7764 19.4045 8.85868 18.6036 7.4165 17.2928'
        stroke='#333333'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.47266 7.11316L6.8158 12.738L8.94309 7.11316L11.2205 12.738L13.3103 7.11316'
        stroke='#379A0C'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M3.62817 9.53137H14.1582' stroke='#379A0C' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

interface TicketIconProps extends DefaultIconProps {
  selected: boolean;
}

export function Ticket1TimeIcon({ selected, ...props }: TicketIconProps) {
  return (
    <svg width='11' height='17' viewBox='0 0 11 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        opacity='0.5'
        d='M7.87053 14.558H10.7085V17H1.64453V14.558H4.85653V5.604L4.94453 4.174L2.26053 6.616L0.522531 4.636L5.27453 0.543999H7.87053V14.558Z'
        fill={selected ? COLORS.MAIN_700 : COLORS.GRAY_SCALE_400}
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
        fill={selected ? COLORS.MAIN_700 : COLORS.GRAY_SCALE_400}
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
        fill={selected ? COLORS.MAIN_700 : COLORS.GRAY_SCALE_400}
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
        fill={selected ? COLORS.MAIN_700 : COLORS.GRAY_SCALE_400}
      />
    </svg>
  );
}
