import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgPulse = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.24 4.876a.75.75 0 0 0-1.454-.106l-2.09 6.48H2a.75.75 0 0 0 0 1.5h3.242a.75.75 0 0 0 .714-.52L7.27 8.16l1.84 10.965a.75.75 0 0 0 1.46.083l2.43-8.48 1.28 4.479a.75.75 0 0 0 1.368.173l1.54-2.629h1.166a2.751 2.751 0 1 0 0-1.5h-1.595a.75.75 0 0 0-.648.37l-.87 1.488-1.519-5.314a.75.75 0 0 0-1.442 0l-2.239 7.814-1.8-10.732ZM19.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPulse;

