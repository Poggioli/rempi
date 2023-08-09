import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledBadge } from "./Badge.styles";

export type Variant = "primary" | "secondary" | "outlined" | "destructive";

export type BadgeProps = HTMLRempiProps<typeof StyledBadge>;

export const Badge = forwardRef<typeof StyledBadge, BadgeProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledBadge {...props} ref={ref}>
        {children}
      </StyledBadge>
    );
  }
);
