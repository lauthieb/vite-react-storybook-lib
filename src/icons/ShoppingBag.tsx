import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgShoppingBag = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.25 7.25v-.12a4.75 4.75 0 1 1 9.5 0v.12h1.501c.571 0 1.056.419 1.14.984l.218 1.493c.43 2.938.43 5.924 0 8.862a3.135 3.135 0 0 1-2.779 2.664l-.629.065c-2.793.29-5.609.29-8.402 0l-.629-.065a3.135 3.135 0 0 1-2.779-2.664 30.566 30.566 0 0 1 0-8.862l.219-1.493a1.151 1.151 0 0 1 1.139-.984H7.25Zm3.94-3.267a3.25 3.25 0 0 1 4.06 3.147v.12h-6.5v-.12a3.25 3.25 0 0 1 2.44-3.147ZM7.25 8.75V11a.75.75 0 0 0 1.5 0V8.75h6.5V11a.75.75 0 0 0 1.5 0V8.75h1.2l.175 1.194c.409 2.794.409 5.633 0 8.428a1.635 1.635 0 0 1-1.45 1.39l-.629.064c-2.69.28-5.402.28-8.092 0l-.63-.065a1.635 1.635 0 0 1-1.449-1.39 29.066 29.066 0 0 1 0-8.427L6.05 8.75h1.2Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBag;

