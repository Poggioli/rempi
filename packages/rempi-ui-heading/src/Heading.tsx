import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Heading.scss";

type Size = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";
const sizeClasses: Record<Size, string> = {
  "2xsm": "rempi-heading--font-size-2xsm",
  xsm: "rempi-heading--font-size-xsm",
  sm: "rempi-heading--font-size-sm",
  md: "rempi-heading--font-size-md",
  lg: "rempi-heading--font-size-lg",
  xlg: "rempi-heading--font-size-xlg",
};

type Weight =
  | "tiny"
  | "normal"
  | "regular"
  | "semi-bold"
  | "bold"
  | "extra-bold";
const weightClasses: Record<Weight, string> = {
  tiny: "rempi-heading--font-weight-tiny",
  normal: "rempi-heading--font-weight-normal",
  regular: "rempi-heading--font-weight-regular",
  "semi-bold": "rempi-heading--font-weight-semi-bold",
  bold: "rempi-heading--font-weight-bold",
  "extra-bold": "rempi-heading--font-weight-extra-bold",
};

type LineHeight = 1 | 2;
const lineHeightClasses: Record<LineHeight, string> = {
  1: "rempi-heading--line-height-1",
  2: "rempi-heading--line-height-2",
};

type Color = "low-contrast" | "high-contrast";
const colorClasses: Record<Color, string> = {
  "high-contrast": "rempi-heading--color-high-contrast",
  "low-contrast": "rempi-heading--color-low-contrast",
};

type Variant = "1" | "2" | "3" | "4" | "5" | "6";
const variantClasses: Record<Variant, string> = {
  1: "rempi-heading--variant-1",
  2: "rempi-heading--variant-2",
  3: "rempi-heading--variant-3",
  4: "rempi-heading--variant-4",
  5: "rempi-heading--variant-5",
  6: "rempi-heading--variant-6",
};

type HeadingAlign = "left" | "center" | "right";
const headingAlignClasses: Record<HeadingAlign, string> = {
  left: "rempi-heading--align-left",
  center: "rempi-heading--align-center",
  right: "rempi-heading--align-right",
};

export type HeadingProps = HTMLRempiProps<"h1"> & {
  color?: Color;
  fontSize?: Size;
  fontWeight?: Weight;
  lineHeight?: LineHeight;
  align?: HeadingAlign;
  variant?: Variant;
};

export const Heading = forwardRef<"h1", HeadingProps>(
  (
    {
      children,
      as: Component = "h1",
      color,
      fontSize,
      fontWeight,
      lineHeight,
      align,
      variant = "1",
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
          "rempi-heading",
          variantClasses[variant],
          color && colorClasses[color],
          fontSize && sizeClasses[fontSize],
          fontWeight && weightClasses[fontWeight],
          lineHeight && lineHeightClasses[lineHeight],
          align && headingAlignClasses[align],
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
