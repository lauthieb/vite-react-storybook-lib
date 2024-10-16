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
   * Button start icon
   */
  startIcon?: React.ReactNode;
  /**
   * Button end icon
   */
  endIcon?: React.ReactNode;
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
  startIcon = <SvgShoppingBag />,
  endIcon = <SvgArrowRight />,
  children,
  ...props
}: ButtonProps) => {

  const renderIcon = (icon: React.ReactNode) => {
    if (React.isValidElement<{ className?: string }>(icon)) {
      return React.cloneElement(icon, { className: `icon--${size}` });
    }
    return null;
  };

  return (
    <button
      type="button"
      className={["button", `button--${variant}`, `button--${size}`].join(" ")}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {renderIcon(startIcon)}
      {children}
      {renderIcon(endIcon)}
    </button>
  );
};
