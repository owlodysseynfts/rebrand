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
    viewBox="0 0 19 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="#FE7B45"
      d="M6.093.804a6 6 0 0 1 6 0l3.094 1.786a6 6 0 0 1 3 5.196v3.572a6 6 0 0 1-3 5.196l-3.094 1.786a6 6 0 0 1-6 0L3 16.554a6 6 0 0 1-3-5.196V7.786A6 6 0 0 1 3 2.59z"
    />
    <mask
      id="ETH_svg__a"
      width={12}
      height={11}
      x={3}
      y={4}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <path fill="#fff" d="M14.344 4.322h-10.5v10.5h10.5z" />
    </mask>
    <g fill="#fff" mask="url(#ETH_svg__a)">
      <path d="M6.14 9.663 9.163 4.65l3.021 5.012h.002L9.164 11.45h-.001z" />
      <path d="M9.162 14.494 6.14 10.236l3.02 1.785 3.025-1.785z" />
    </g>
  </svg>
);
export default SvgEth;
