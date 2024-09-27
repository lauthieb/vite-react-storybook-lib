import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgShoppingBagBasket = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 13.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM14.75 14a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.65 3.375a.75.75 0 0 0-1.3-.75l-2 3.464a.752.752 0 0 0-.069.161H6a2.75 2.75 0 0 0-1.739 4.88l.667 4.585.447 2.093a3.049 3.049 0 0 0 2.561 2.384 29.49 29.49 0 0 0 8.128 0 3.049 3.049 0 0 0 2.561-2.384l.447-2.093.667-4.585A2.75 2.75 0 0 0 18 6.25h-.281a.753.753 0 0 0-.07-.16l-2-3.465a.75.75 0 1 0-1.298.75l1.66 2.875H7.99l1.66-2.875Zm8.484 8.372a2.819 2.819 0 0 1-.134.003H6c-.045 0-.09-.001-.133-.003l.538 3.703.437 2.045a1.549 1.549 0 0 0 1.301 1.211c2.559.356 5.155.356 7.714 0a1.549 1.549 0 0 0 1.301-1.21l.437-2.046.539-3.703ZM4.75 9c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgShoppingBagBasket;

