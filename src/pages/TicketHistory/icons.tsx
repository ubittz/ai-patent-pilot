import { DefaultIconProps } from '@@types/common';

export function UpArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask
        id='mask0_67_6577'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='16'
        height='16'
      >
        <rect width='16' height='16' transform='matrix(0 1 1 0 0 0)' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_67_6577)'></g>
      <g clipPath='url(#clip0_67_6577)'>
        <mask id='mask1_67_6577' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='4' width='16' height='7'>
          <rect x='0.857178' y='10.9841' width='6.34921' height='14.2857' transform='rotate(-90 0.857178 10.9841)' fill='black' />
        </mask>
        <g mask='url(#mask1_67_6577)'>
          <rect x='3.28638' y='10.9841' width='1.19048' height='7.64277' transform='rotate(-135 3.28638 10.9841)' fill='#777777' />
          <rect width='1.19048' height='7.64277' transform='matrix(-0.707107 0.707107 0.707107 0.707107 8.0293 4.63501)' fill='#777777' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_67_6577'>
          <rect width='13.3333' height='13.3333' fill='white' transform='matrix(0 1 1 0 1.33325 1.33325)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function DownArrowIcon(props: DefaultIconProps) {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask id='mask0_67_6594' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='0' width='16' height='16'>
        <rect width='16' height='16' transform='matrix(0 -1 -1 0 16 16)' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_67_6594)'></g>
      <g clipPath='url(#clip0_67_6594)'>
        <mask id='mask1_67_6594' style={{ maskType: 'alpha' }} maskUnits='userSpaceOnUse' x='0' y='5' width='16' height='7'>
          <rect x='15.1428' y='5.01587' width='6.34921' height='14.2857' transform='rotate(90 15.1428 5.01587)' fill='black' />
        </mask>
        <g mask='url(#mask1_67_6594)'>
          <rect x='12.7136' y='5.01587' width='1.19048' height='7.64277' transform='rotate(45 12.7136 5.01587)' fill='#777777' />
          <rect width='1.19048' height='7.64277' transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 7.9707 11.365)' fill='#777777' />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_67_6594'>
          <rect width='13.3333' height='13.3333' fill='white' transform='matrix(0 -1 -1 0 14.6667 14.6667)' />
        </clipPath>
      </defs>
    </svg>
  );
}
