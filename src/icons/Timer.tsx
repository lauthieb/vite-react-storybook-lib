import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgTimer = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 3.018a.75.75 0 0 1 0-1.5h3.536a.75.75 0 0 1 0 1.5H10ZM6.53 3.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM12 5.75A7.25 7.25 0 1 0 19.25 13a.75.75 0 0 1 1.5 0A8.75 8.75 0 1 1 12 4.25a.75.75 0 0 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M17.188 8.364a.75.75 0 0 0-1.052-1.052l-3.17 2.465-2.072 1.48a1.683 1.683 0 1 0 2.35 2.349l1.479-2.072 2.465-3.17Z"
    />
  </svg>
);
export default SvgTimer;

