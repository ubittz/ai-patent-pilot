import { DefaultIconProps } from '@@types/common';

export function RightArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_111_5873' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
        <rect width='16' height='16' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_111_5873)'>
        <path
          d='M10.2582 2.80078C10.1175 2.80078 9.97677 2.85514 9.86964 2.96227C9.65539 3.17652 9.65699 3.52348 9.86964 3.73614L13.8939 7.76036L9.87124 11.783C9.65699 11.9972 9.65699 12.3426 9.87124 12.5569C10.0855 12.7711 10.4309 12.7711 10.6451 12.5569L15.0563 8.1457C15.2721 7.93304 15.2705 7.58608 15.0563 7.37183L10.6451 2.96067C10.538 2.85354 10.3989 2.80078 10.2582 2.80078Z'
          fill='white'
        />
        <path
          d='M14.6695 7.2121L1.81427 7.2121C1.51048 7.2121 1.26584 7.45673 1.26584 7.76052C1.26584 8.06432 1.51048 8.30895 1.81427 8.30895L14.6695 8.30895C14.9733 8.30895 15.2179 8.06432 15.2179 7.76053C15.2179 7.45673 14.9733 7.2121 14.6695 7.2121Z'
          fill='white'
        />
      </g>
    </svg>
  );
}
