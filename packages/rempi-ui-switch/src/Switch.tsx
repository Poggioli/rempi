import * as Switch from "@radix-ui/react-switch";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./Switch.scss";

export type SwitchRootProps = Omit<
  HTMLRempiProps<typeof Switch.Root>,
  "children" | "as"
> &
  Switch.SwitchProps;

export const SwitchRoot = forwardRef<typeof Switch.Root, SwitchRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <Switch.Root
        {...props}
        ref={ref}
        className={`rempi-switch__root ${classnames(className)}`}
      >
        <SwitchThumb />
      </Switch.Root>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type SwitchThumbProps = HTMLRempiProps<typeof Switch.Thumb> &
  Switch.SwitchThumbProps;

const SwitchThumb = forwardRef<typeof Switch.Thumb, SwitchThumbProps>(
  ({ ...props }, ref) => {
    return (
      <Switch.Thumb {...props} ref={ref} className="rempi-switch__thumb" />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SwitchLabelProps = HTMLRempiProps<"label">;

export const SwitchLabel = forwardRef<"label", SwitchLabelProps>(
  ({ children, as: Component = "label", className, ...props }, ref) => {
    const useScope = Switch.createSwitchScope();

    console.log({});

    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-switch__label ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type SwitchContainerProps = HTMLRempiProps<"div">;

export const SwitchContainer = forwardRef<"div", SwitchContainerProps>(
  ({ children, as: Component = "div", className, ...props }, ref) => {

    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-switch__container ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
