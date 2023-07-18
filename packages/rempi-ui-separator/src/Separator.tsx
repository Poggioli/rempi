import * as SeparatorRadix from "@radix-ui/react-separator";
import { HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { forwardRef } from "react";
import "./Separator.scss";

export type SeparatorProps = HTMLRempiProps<typeof SeparatorRadix.Root>;

export const Separator = forwardRef<typeof SeparatorRadix.Root, SeparatorProps>(
  ({ className, as: Component = SeparatorRadix.Root, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-separator", className)}
      />
    );
  }
);
