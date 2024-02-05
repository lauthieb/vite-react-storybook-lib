import React from "react";
import "./button.css";

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
      {children}
    </button>
  );
};
