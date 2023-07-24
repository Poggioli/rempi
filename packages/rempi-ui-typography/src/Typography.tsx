import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Typography.scss";

type Size = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";
const sizeClasses: Record<Size, string> = {
  "2xsm": "rempi-typography--font-size-2xsm",
  xsm: "rempi-typography--font-size-xsm",
  sm: "rempi-typography--font-size-sm",
  md: "rempi-typography--font-size-md",
  lg: "rempi-typography--font-size-lg",
  xlg: "rempi-typography--font-size-xlg",
};

type Weight =
  | "tiny"
  | "normal"
  | "regular"
  | "semi-bold"
  | "bold"
  | "extra-bold";
const weightClasses: Record<Weight, string> = {
  tiny: "rempi-typography--font-weight-tiny",
  normal: "rempi-typography--font-weight-normal",
  regular: "rempi-typography--font-weight-regular",
  "semi-bold": "rempi-typography--font-weight-semi-bold",
  bold: "rempi-typography--font-weight-bold",
  "extra-bold": "rempi-typography--font-weight-extra-bold",
};

type LineHeight = 1 | 2;
const lineHeightClasses: Record<LineHeight, string> = {
  1: "rempi-typography--line-height-1",
  2: "rempi-typography--line-height-2",
};

type Color = "low-contrast" | "high-contrast";
const colorClasses: Record<Color, string> = {
  "high-contrast": "rempi-typography--color-high-contrast",
  "low-contrast": "rempi-typography--color-low-contrast",
};

type Variant =
  | "lead1"
  | "lead2"
  | "body1"
  | "body2"
  | "caption"
  | "subtitle";
const variantClasses: Record<Variant, string> = {
  lead1: "rempi-typography--variant-lead1",
  lead2: "rempi-typography--variant-lead2",
  body1: "rempi-typography--variant-body1",
  body2: "rempi-typography--variant-body2",
  caption: "rempi-typography--variant-caption",
  subtitle: "rempi-typography--variant-subtitle",
};

type Align = "left" | "center" | "right";
const alignClasses: Record<Align, string> = {
  left: "rempi-typography--align-left",
  center: "rempi-typography--align-center",
  right: "rempi-typography--align-right",
};

export type TypographyProps = HTMLRempiProps<"span"> & {
  color?: Color;
  fontSize?: Size;
  fontWeight?: Weight;
  lineHeight?: LineHeight;
  isTruncated?: boolean;
  align?: Align;
  variant?: Variant;
};

export const Typography = forwardRef<"span", TypographyProps>(
  (
    {
      children,
      as: Component = "span",
      color,
      fontSize,
      fontWeight,
      lineHeight,
      isTruncated,
      align,
      variant = "body1",
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
          "rempi-typography",
          variantClasses[variant],
          color && colorClasses[color],
          fontSize && sizeClasses[fontSize],
          fontWeight && weightClasses[fontWeight],
          lineHeight && lineHeightClasses[lineHeight],
          align && alignClasses[align],
          { "rempi-typography--truncated": isTruncated },
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
