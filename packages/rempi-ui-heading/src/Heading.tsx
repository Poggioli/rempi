import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledHeading } from "./Heading.styles";

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

export type Variant = "1" | "2" | "3" | "4" | "5" | "6";

export type TextAlign = "left" | "center" | "right";

export type HeadingProps = Omit<
  HTMLRempiProps<typeof StyledHeading>,
  | "$fontSize"
  | "$fontWeight"
  | "$lineHeight"
  | "$color"
  | "$variant"
  | "$textAlign"
  | "$isTruncated"
> & {
  color?: Color;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  isTruncated?: boolean;
  textAlign?: TextAlign;
  variant?: Variant;
};

export const Heading = forwardRef<typeof StyledHeading, HeadingProps>(
  (
    {
      color,
      fontSize,
      fontWeight,
      lineHeight,
      isTruncated,
      textAlign,
      variant = "1",
      ...props
    },
    ref
  ) => {
    return (
      <StyledHeading
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
