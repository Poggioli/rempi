import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./Heading.scss";

type HeadingSize = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";
const headingSizeClasses: Record<HeadingSize, string> = {
  "2xsm": "rempi-heading--font-size-2xsm",
  xsm: "rempi-heading--font-size-xsm",
  sm: "rempi-heading--font-size-sm",
  md: "rempi-heading--font-size-md",
  lg: "rempi-heading--font-size-lg",
  xlg: "rempi-heading--font-size-xlg",
};

type HeadingWeight =
  | "tiny"
  | "normal"
  | "regular"
  | "semi-bold"
  | "bold"
  | "extra-bold";
const headingWeightClasses: Record<HeadingWeight, string> = {
  tiny: "rempi-heading--font-weight-tiny",
  normal: "rempi-heading--font-weight-normal",
  regular: "rempi-heading--font-weight-regular",
  "semi-bold": "rempi-heading--font-weight-semi-bold",
  bold: "rempi-heading--font-weight-bold",
  "extra-bold": "rempi-heading--font-weight-extra-bold",
};

type HeadingLineHeight = 1 | 2;
const headingLineHeightClasses: Record<HeadingLineHeight, string> = {
  1: "rempi-heading--line-height-1",
  2: "rempi-heading--line-height-2",
};

type HeadingColor = "low-contrast" | "high-contrast";
const headingColorClasses: Record<HeadingColor, string> = {
  "high-contrast": "rempi-heading--color-high-contrast",
  "low-contrast": "rempi-heading--color-low-contrast",
};

type HeadingVariant = "1" | "2" | "3" | "4" | "5" | "6";
const headingVariantClasses: Record<HeadingVariant, string> = {
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
  color?: HeadingColor;
  fontSize?: HeadingSize;
  fontWeight?: HeadingWeight;
  lineHeight?: HeadingLineHeight;
  align?: HeadingAlign;
  variant?: HeadingVariant;
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
        className={`rempi-heading ${classnames(
          headingVariantClasses[variant],
          color && headingColorClasses[color],
          fontSize && headingSizeClasses[fontSize],
          fontWeight && headingWeightClasses[fontWeight],
          lineHeight && headingLineHeightClasses[lineHeight],
          align && headingAlignClasses[align],
          className
        )}`}
      >
        {children}
      </Component>
    );
  }
);
