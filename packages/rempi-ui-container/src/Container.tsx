import { HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { forwardRef } from "react";
import "./Container.scss";

type Variant = "sm" | "md" | "lg" | "xlg" | "2xlg" | "fluid";
const variantClasses: Record<Variant, string> = {
  sm: "rempi-container--sm",
  md: "rempi-container--md",
  lg: "rempi-container--lg",
  xlg: "rempi-container--xlg",
  "2xlg": "rempi-container--2xlg",
  fluid: "rempi-container--fluid",
};

export type ContainerProps = HTMLRempiProps<"div"> & {
  variant?: Variant;
  centered?: boolean;
};

export const Container = forwardRef<"div", ContainerProps>(
  (
    {
      children,
      variant,
      centered = true,
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
          "rempi-container",
          variant && variantClasses[variant],
          { "rempi-container--centered": centered },
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
