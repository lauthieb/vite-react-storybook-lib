import * as React from "react";
import { JSX } from "react/jsx-runtime";
import "./icon.css";

const SvgHome = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.558 5.534a2.25 2.25 0 0 0-3.116 0l-4.626 4.44a.748.748 0 0 0-.218.405 27.343 27.343 0 0 0-.121 9.15l.112.721h2.977v-6.211a.75.75 0 0 1 .75-.75h5.368a.75.75 0 0 1 .75.75v6.211h2.977l.112-.72c.474-3.036.433-6.13-.12-9.151a.748.748 0 0 0-.219-.405l-4.626-4.44ZM9.404 4.452a3.75 3.75 0 0 1 5.192 0l4.627 4.44c.34.326.57.752.655 1.216.584 3.188.627 6.451.127 9.653l-.18 1.157a.983.983 0 0 1-.972.832h-4.169a.75.75 0 0 1-.75-.75v-6.211h-3.868V21a.75.75 0 0 1-.75.75H5.147a.983.983 0 0 1-.971-.832l-.181-1.157c-.5-3.202-.457-6.465.127-9.653.086-.464.315-.89.655-1.217l4.627-4.44Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHome;

