import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./Button.scss";

type ButtonSize = "small" | "standard" | "large";
const buttonSizeClasses: Record<ButtonSize, string> = {
  small: "rempi-button--size-small",
  standard: "rempi-button--size-standard",
  large: "rempi-button--size-large",
};

type ButtonVariant = "text" | "contained" | "outlined";
const buttonVariantClasses: Record<ButtonVariant, string> = {
  text: "rempi-button--variant-text",
  contained: "rempi-button--variant-contained",
  outlined: "rempi-button--variant-outlined",
};

type ButtonShape = "flat" | "smoth" | "rounded";
const buttonShapeClasses: Record<ButtonShape, string> = {
  flat: "rempi-button--shape-flat",
  smoth: "rempi-button--shape-smoth",
  rounded: "rempi-button--shape-rounded",
};

type ButtonColor = "primary" | "secondary" | "success" | "error";
const buttonColorClasses: Record<ButtonColor, string> = {
  primary: "rempi-button--color-primary",
  secondary: "rempi-button--color-secondary",
  success: "rempi-button--color-success",
  error: "rempi-button--color-error",
};

export type ButtonProps = HTMLRempiProps<"button"> & {
  type?: "button" | "submit" | "reset";
  buttonSize?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  color?: ButtonColor;
  upperCase?: boolean;
};

export const Button = forwardRef<"button", ButtonProps>(
  (
    {
      children,
      buttonSize = "standard",
      variant = "contained",
      shape = "smoth",
      color = "primary",
      upperCase,
      as: Component = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-button ${classnames(
          buttonSizeClasses[buttonSize],
          buttonVariantClasses[variant],
          buttonShapeClasses[shape],
          buttonColorClasses[color],
          { "rempi-button--is-upercase": upperCase }
        )}`}
      >
        {children}
      </Component>
    );
  }
);

// ------------------------------------------------------------------------- //

export type IconButtonProps = ButtonProps & {
  "aria-label": string;
};

export const IconButton = forwardRef<'button', IconButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {children}
      </Button>
    );
  }
);
