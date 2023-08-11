import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledTypography } from "./Typography.styles";

export type Size = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";

export type Weight =
  | "tiny"
  | "normal"
  | "regular"
  | "semi-bold"
  | "bold"
  | "extra-bold";

export type LineHeight = 1 | 2;

export type Color = "low-contrast" | "high-contrast";

export type Variant =
  | "lead1"
  | "lead2"
  | "body1"
  | "body2"
  | "caption"
  | "subtitle";

export type Align = "left" | "center" | "right";

export type TypographyProps = HTMLRempiProps<typeof StyledTypography> & {
  color?: Color;
  fontSize?: Size;
  fontWeight?: Weight;
  lineHeight?: LineHeight;
  isTruncated?: boolean;
  align?: Align;
  variant?: Variant;
};

export const Typography = forwardRef<typeof StyledTypography, TypographyProps>(
  (
    {
      color,
      fontSize,
      fontWeight,
      lineHeight,
      isTruncated,
      align,
      variant = "body1",
      ...props
    },
    ref
  ) => {
    return (
      <StyledTypography
        $color={color}
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        $lineHeight={lineHeight}
        $isTruncated={isTruncated}
        $textAlign={align}
        $variant={variant}
        {...props}
        ref={ref}
      />
    );
  }
);
