import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledButton, StyledIconButton } from "./Button.styles";

export type Size = "small" | "standard" | "large";

export type Variant = "text" | "contained" | "outlined" | "solid";

export type Shape = "flat" | "smoth" | "rounded";

export type Color = "primary" | "secondary" | "success" | "error";

export type ButtonProps = HTMLRempiProps<"button"> & {
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  color?: Color;
  upperCase?: boolean;
};

export const Button = forwardRef<"button", ButtonProps>(  
  (
    {
      size = "standard",
      variant = "solid",
      shape = "smoth",
      color = "primary",
      upperCase,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        $isUpperCase={upperCase}
        $size={size}
        $variant={variant}
        $color={color}
        $shape={shape}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type IconButtonProps = ButtonProps & {
  "aria-label": string;
};

export const IconButton = forwardRef<"button", IconButtonProps>(
  (
    {
      size = "standard",
      variant = "solid",
      shape = "smoth",
      color = "primary",
      upperCase,
      ...props
    },
    ref
  ) => {
    return (
      <StyledIconButton
        {...props}
        ref={ref}
        $isUpperCase={upperCase}
        $size={size}
        $variant={variant}
        $color={color}
        $shape={shape}
      />
    );
  }
);
