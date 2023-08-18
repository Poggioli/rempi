import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import * as ProgressRadix from "@radix-ui/react-progress";
import { StyledProgessRoot, StyledProgressBar } from "./Progress.styles";

export type Size = "small" | "standard" | "large";

export type ProgressProps = Omit<
  HTMLRempiProps<typeof StyledProgessRoot>,
  "as" | "children" | "$size"
> &
  ProgressRadix.ProgressProps & {
    size?: RempiVariant<Size>;
  };

export const Progress = forwardRef<typeof StyledProgessRoot, ProgressProps>(
  ({ value, max = 100, size = "standard", ...props }, ref) => {
    return (
      <StyledProgessRoot
        {...props}
        $size={size}
        value={value}
        max={max}
        ref={ref}
      >
        <StyledProgressBar style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
      </StyledProgessRoot>
    );
  }
);
