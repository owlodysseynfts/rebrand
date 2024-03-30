import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImage2 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 368 439"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      width={366.805}
      height={437.436}
      x={0.383}
      y={0.711}
      fill="url(#image_2_svg__a)"
      rx={24}
    />
    <defs>
      <pattern
        id="image_2_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#image_2_svg__b"
          transform="matrix(.0006 0 0 .0005 -.096 0)"
        />
      </pattern>
      <image
        id="image_2_svg__b"
        width={2000}
        height={2000}
      />
    </defs>
  </svg>
);
export default SvgImage2;