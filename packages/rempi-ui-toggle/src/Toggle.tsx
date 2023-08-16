import * as ToggleRadix from "@radix-ui/react-toggle";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledToggleRoot } from "./Toggle.styles";

export type ToggleProps = HTMLRempiProps<typeof StyledToggleRoot> &
  ToggleRadix.ToggleProps;

export const Toggle = forwardRef<typeof StyledToggleRoot, ToggleProps>(
  ({ ...props }, ref) => {
    return <StyledToggleRoot {...props} ref={ref} />;
  }
);
