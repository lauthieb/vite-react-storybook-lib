import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgPalette = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.89 15.403a1 1 0 1 0 .243 1.985 1 1 0 0 0-.243-1.985ZM5.548 12.79a1 1 0 1 1 1.985-.244 1 1 0 0 1-1.985.243ZM7.919 7.462a1 1 0 1 0 .243 1.985 1 1 0 0 0-.243-1.985ZM15.697 9.281a1 1 0 1 1 1.985-.243 1 1 0 0 1-1.985.243ZM11.993 10.879a1 1 0 1 0 .242 1.985 1 1 0 0 0-.242-1.985ZM11.393 7.037a1 1 0 1 1 1.985-.243 1 1 0 0 1-1.985.243Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.253 11.764c.13-5.383 4.6-9.642 9.983-9.511 5.383.13 9.642 4.6 9.511 9.983-.008.341-.123.653-.334.91a1.834 1.834 0 0 1-.721.513c-.502.21-1.131.275-1.754.28-2.689.018-5.024 2.33-5.177 5.058-.035.636-.144 1.283-.418 1.792a1.872 1.872 0 0 1-.62.695 1.661 1.661 0 0 1-.96.263c-5.382-.13-9.64-4.6-9.51-9.983ZM12.2 3.752a8.25 8.25 0 1 0-.4 16.496c.068.001.093-.014.106-.021a.395.395 0 0 0 .117-.15c.117-.217.21-.601.24-1.164.195-3.475 3.142-6.45 6.665-6.475.562-.003.956-.067 1.186-.163a.481.481 0 0 0 .134-.076A8.25 8.25 0 0 0 12.2 3.752Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPalette;

