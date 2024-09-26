import React from "react";
import "./button.css";
import SvgShoppingBag from "../icons/ShoppingBag";
import SvgArrowRight from "../icons/ArrowRight";

interface ButtonProps {
  /**
   * Button variant
   */
  variant?: "primary" | "secondary";
  /**
   * Button size
   */
  size?: "lg" | "sm";
  /**
   * Button is disabled
   */
  disabled?: boolean;
  /**
   * Button has a start icon
   */
  startIcon?: boolean;
  /**
   * Button has an end icon
   */
  endIcon?: boolean;
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Button click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size = "lg",
  disabled = false,
  startIcon = false,
  endIcon = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={["button", `button--${variant}`, `button--${size}`].join(" ")}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {startIcon && <SvgShoppingBag className={`icon--${size}`} />}
      {children}
      {endIcon && <SvgArrowRight className={`icon--${size}`} />}
    </button>
  );
};
