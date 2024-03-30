import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEth = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 43 45"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#ETH_svg__a)" opacity={0.3}>
      <path
        fill="#FE7B45"
        d="M18.685 11.625a5.629 5.629 0 1 1 5.63 9.75 5.629 5.629 0 0 1-5.63-9.75"
      />
    </g>
    <g filter="url(#ETH_svg__b)" opacity={0.4}>
      <path
        fill="#FE7B45"
        d="M18.5 16.732a6 6 0 0 1 6 0l.495.286a6 6 0 0 1 3 5.196v.572a6 6 0 0 1-3 5.196l-.495.286a6 6 0 0 1-6 0l-.495-.286a6 6 0 0 1-3-5.196v-.572a6 6 0 0 1 3-5.196z"
      />
    </g>
    <path
      fill="#FE7B45"
      d="M18.5 3.732a6 6 0 0 1 6 0l3.093 1.786a6 6 0 0 1 3 5.196v3.572a6 6 0 0 1-3 5.196L24.5 21.268a6 6 0 0 1-6 0l-3.093-1.786a6 6 0 0 1-3-5.196v-3.572a6 6 0 0 1 3-5.196z"
    />
    <g fill="#fff" clipPath="url(#ETH_svg__c)">
      <path d="m18.547 12.591 3.021-5.013v.003-.003l3.022 5.012.001.001-3.021 1.786h-.001z" />
      <path d="M21.568 17.42v.002l-3.021-4.258 3.021 1.785v.001l3.024-1.786-3.023 4.258z" />
    </g>
    <defs>
      <filter
        id="ETH_svg__a"
        width={23.258}
        height={23.258}
        x={9.871}
        y={4.871}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_9_874"
          stdDeviation={3}
        />
      </filter>
      <filter
        id="ETH_svg__b"
        width={42.99}
        height={43.144}
        x={0.005}
        y={0.928}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_9_874"
          stdDeviation={7.5}
        />
      </filter>
      <clipPath id="ETH_svg__c">
        <path fill="#fff" d="M16.25 7.25h10.5v10.5h-10.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEth;
