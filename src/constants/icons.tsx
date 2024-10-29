import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function ArrowLeftIcon(props: DefaultIconProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <mask
        id='mask0_4_1058'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x='6'
        y='0'
        width='11'
        height='23'
      >
        <rect width='10.0571' height='22.6286' transform='matrix(-1 0 0 1 17 0)' fill='black' />
      </mask>
      <g mask='url(#mask0_4_1058)'>
        <rect width='1.88572' height='12.1061' rx='0.942858' transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 17 3.8477)' fill='#333333' />
        <rect x='6.94287' y='11.3606' width='1.88572' height='12.1061' rx='0.942858' transform='rotate(-45 6.94287 11.3606)' fill='#333333' />
      </g>
    </svg>
  );
}
