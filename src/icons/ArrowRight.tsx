import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgArrowRight = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69l-2.72-2.72Z"
    />
  </svg>
);
export default SvgArrowRight;

