import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { StyledTypography } from "./Typography.styles";

export type FontSize = "2xsm" | "xsm" | "sm" | "md" | "lg" | "xlg";

export type FontWeight =
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

export type TextAlign = "left" | "center" | "right";

export type TypographyProps = Omit<
  HTMLRempiProps<typeof StyledTypography>,
  | "$fontSize"
  | "$fontWeight"
  | "$lineHeight"
  | "$color"
  | "$variant"
  | "$textAlign"
  | "$isTruncated"
> & {
  color?: RempiVariant<Color>;
  fontSize?: RempiVariant<FontSize>;
  fontWeight?: RempiVariant<FontWeight>;
  lineHeight?: RempiVariant<LineHeight>;
  isTruncated?: RempiVariant<boolean>;
  textAlign?: RempiVariant<TextAlign>;
  variant?: RempiVariant<Variant>;
};

export const Typography = forwardRef<typeof StyledTypography, TypographyProps>(
  (
    {
      color,
      fontSize,
      fontWeight,
      lineHeight,
      isTruncated,
      textAlign,
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
        $textAlign={textAlign}
        $variant={variant}
        {...props}
        ref={ref}
      />
    );
  }
);
