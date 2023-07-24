import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Button.scss";

type Size = "small" | "standard" | "large";
const sizeClasses: Record<Size, string> = {
  small: "rempi-button--size-small",
  standard: "rempi-button--size-standard",
  large: "rempi-button--size-large",
};

type Variant = "text" | "contained" | "outlined" | "solid";
const variantClasses: Record<Variant, string> = {
  text: "rempi-button--variant-text",
  contained: "rempi-button--variant-contained",
  outlined: "rempi-button--variant-outlined",
  solid: "rempi-button--variant-solid",
};

type Shape = "flat" | "smoth" | "rounded";
const shapeClasses: Record<Shape, string> = {
  flat: "rempi-button--shape-flat",
  smoth: "rempi-button--shape-smoth",
  rounded: "rempi-button--shape-rounded",
};

type Color = "primary" | "secondary" | "success" | "error";
const colorClasses: Record<Color, string> = {
  primary: "rempi-button--color-primary",
  secondary: "rempi-button--color-secondary",
  success: "rempi-button--color-success",
  error: "rempi-button--color-error",
};

export type ButtonProps = HTMLRempiProps<"button"> & {
  type?: "button" | "submit" | "reset";
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  color?: Color;
  upperCase?: boolean;
};

export const Button = forwardRef<"button", ButtonProps>(
  (
    {
      children,
      size = "standard",
      variant = "solid",
      shape = "smoth",
      color = "primary",
      upperCase,
      as: Component = "button",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          "rempi-button",
          sizeClasses[size],
          variantClasses[variant],
          shapeClasses[shape],
          colorClasses[color],
          { "rempi-button--is-upercase": upperCase },
          className
        )}
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

export const IconButton = forwardRef<"button", IconButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        className={classNames("rempi-button--icon", className)}
      >
        {children}
      </Button>
    );
  }
);
