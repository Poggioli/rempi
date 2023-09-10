import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { Flex, FlexProps } from "@rempi-ui/flex";
import { TypographyProps, Typography } from "@rempi-ui/typography";
import { StyledCalloutIcon, StyledCalloutRoot } from "./Callout.styles";

export type Size = "small" | "standard" | "large";

export type Variant = "soft" | "surface" | "outlined";

export type Color = "info" | "success" | "error";

export type CalloutRootProps = HTMLRempiProps<"div"> &
  FlexProps & {
    size?: RempiVariant<Size>;
    variant?: RempiVariant<Variant>;
    color?: RempiVariant<Color>;
  };

export const CalloutRoot = forwardRef<"div", CalloutRootProps>(
  (
    {
      size = "standard",
      variant = "outlined",
      color = "info",
      flexWrap = "nowrap",
      ...props
    },
    ref
  ) => {
    return (
      <StyledCalloutRoot
        {...props}
        ref={ref}
        as={Flex}
        $size={size}
        $variant={variant}
        $color={color}
        flexWrap={flexWrap}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CalloutTextProps = TypographyProps;

export const CalloutText = Typography;

// ------------------------------------------------------------------------- //

export type CalloutIconProps = TypographyProps;

export const CalloutIcon = forwardRef<"span", CalloutIconProps>(
  ({ ...props }, ref) => {
    return <StyledCalloutIcon {...props} ref={ref} as={Typography} />;
  }
);
