import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Badge.scss";

type Variant = "primary" | "secondary" | "outlined" | "destructive";
const variantClasses: Record<Variant, string> = {
  primary: "rempi-badge--variant-primary",
  secondary: "rempi-badge--variant-secondary",
  outlined: "rempi-badge--variant-outlined",
  destructive: "rempi-badge--variant-destructive",
};

export type BadgeProps = HTMLRempiProps<"div"> & {
  variant?: Variant;
  upperCase?: boolean;
};

export const Badge = forwardRef<"div", BadgeProps>(
  (
    {
      children,
      variant = "primary",
      as: Component = "div",
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
          "rempi-badge",
          variantClasses[variant],
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
