import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Typography.scss";

type TypographySize = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";
const typographySizeClasses: Record<TypographySize, string> = {
  "2xsm": "rempi-typography--font-size-2xsm",
  xsm: "rempi-typography--font-size-xsm",
  sm: "rempi-typography--font-size-sm",
  md: "rempi-typography--font-size-md",
  lg: "rempi-typography--font-size-lg",
  xlg: "rempi-typography--font-size-xlg",
};

type TypographyWeight =
  | "tiny"
  | "normal"
  | "regular"
  | "semi-bold"
  | "bold"
  | "extra-bold";
const typographyWeightClasses: Record<TypographyWeight, string> = {
  tiny: "rempi-typography--font-weight-tiny",
  normal: "rempi-typography--font-weight-normal",
  regular: "rempi-typography--font-weight-regular",
  "semi-bold": "rempi-typography--font-weight-semi-bold",
  bold: "rempi-typography--font-weight-bold",
  "extra-bold": "rempi-typography--font-weight-extra-bold",
};

type TypographyLineHeight = 1 | 2;
const typographyLineHeightClasses: Record<TypographyLineHeight, string> = {
  1: "rempi-typography--line-height-1",
  2: "rempi-typography--line-height-2",
};

type TypographyColor = "low-contrast" | "high-contrast";
const typographyColorClasses: Record<TypographyColor, string> = {
  "high-contrast": "rempi-typography--color-high-contrast",
  "low-contrast": "rempi-typography--color-low-contrast",
};

type TypographyVariant =
  | "lead1"
  | "lead2"
  | "body1"
  | "body2"
  | "caption"
  | "subtitle";
const typographyVariantClasses: Record<TypographyVariant, string> = {
  lead1: "rempi-typography--variant-lead1",
  lead2: "rempi-typography--variant-lead2",
  body1: "rempi-typography--variant-body1",
  body2: "rempi-typography--variant-body2",
  caption: "rempi-typography--variant-caption",
  subtitle: "rempi-typography--variant-subtitle",
};

type TypographyAlign = "left" | "center" | "right";
const typographyAlignClasses: Record<TypographyAlign, string> = {
  left: "rempi-typography--align-left",
  center: "rempi-typography--align-center",
  right: "rempi-typography--align-right",
};

export type TypographyProps = HTMLRempiProps<"span"> & {
  color?: TypographyColor;
  fontSize?: TypographySize;
  fontWeight?: TypographyWeight;
  lineHeight?: TypographyLineHeight;
  isTruncated?: boolean;
  align?: TypographyAlign;
  variant?: TypographyVariant;
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
          typographyVariantClasses[variant],
          color && typographyColorClasses[color],
          fontSize && typographySizeClasses[fontSize],
          fontWeight && typographyWeightClasses[fontWeight],
          lineHeight && typographyLineHeightClasses[lineHeight],
          align && typographyAlignClasses[align],
          { "rempi-typography--truncated": isTruncated },
          className
        )}
      >
        {children}
      </Component>
    );
  }
);
