import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as ProgressRadix from "@radix-ui/react-progress";
import classnames from "classnames";
import "./Progress.scss";

type Size = "small" | "standard" | "large";
const sizeClasses: Record<Size, string> = {
  small: "rempi-progress--small",
  standard: "rempi-progress--standard",
  large: "rempi-progress--large",
};

export type ProgressProps = Omit<
  HTMLRempiProps<typeof ProgressRadix.Root>,
  "as" | "children"
> &
  ProgressRadix.ProgressProps & {
    size?: Size;
  };

export const Progress = forwardRef<typeof ProgressRadix.Root, ProgressProps>(
  ({ className, value, max = 100, size = "standard", ...props }, ref) => {
    return (
      <ProgressRadix.Root
        {...props}
        value={value}
        max={max}
        ref={ref}
        className={`rempi-progress ${classnames(sizeClasses[size], className)}`}
      >
        <ProgressRadix.Indicator
          className="rempi-progress__bar"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressRadix.Root>
    );
  }
);
