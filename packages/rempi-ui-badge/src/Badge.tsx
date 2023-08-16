import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledBadge } from "./Badge.styles";

export type Variant = "primary" | "secondary" | "outlined" | "destructive";

export type BadgeProps = Omit<
  HTMLRempiProps<typeof StyledBadge>,
  "$variant"
> & {
  variant?: Variant;
};

export const Badge = forwardRef<typeof StyledBadge, BadgeProps>(
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <StyledBadge $variant={variant} {...props} ref={ref}>
        {children}
      </StyledBadge>
    );
  }
);
