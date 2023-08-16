import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledSeparator } from "./Separator.styles";

export type SeparatorProps = HTMLRempiProps<typeof StyledSeparator>;

export const Separator = forwardRef<typeof StyledSeparator, SeparatorProps>(
  ({ ...props }, ref) => {
    return <StyledSeparator {...props} ref={ref} />;
  }
);
