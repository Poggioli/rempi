import * as ToggleRadix from "@radix-ui/react-toggle";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Toggle.scss";

export type ToggleProps = HTMLRempiProps<typeof ToggleRadix.Root> &
  ToggleRadix.ToggleProps;

export const Toggle = forwardRef<typeof ToggleRadix.Root, ToggleProps>(
  ({ className, as: Componente = ToggleRadix.Root, ...props }, ref) => {
    return (
      <Componente
        {...props}
        ref={ref}
        className={classNames("rempi-toggle__root", className)}
      />
    );
  }
);
