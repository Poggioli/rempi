import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import { Check } from "lucide-react";
import "./Checkbox.scss";

export type CheckboxRootProps = Omit<
  HTMLRempiProps<typeof Checkbox.Root>,
  "as"
> &
  Checkbox.CheckboxProps &
  Checkbox.CheckboxIndicatorProps;

export const CheckboxRoot = forwardRef<typeof Checkbox.Root, CheckboxRootProps>(
  ({ children, className, forceMount, asChild, ...props }, ref) => {
    return (
      <Checkbox.Root
        {...props}
        ref={ref}
        className={`rempi-checkbox__check ${classnames(className)}`}
      >
        <Checkbox.Indicator
          className="rempi-checkbox__indicator"
          forceMount={forceMount}
          asChild={asChild}
        >
          <Check size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CheckboxLabelProps = HTMLRempiProps<"label">;

export const CheckboxLabel = forwardRef<"label", CheckboxLabelProps>(
  ({ children, as: Component = "label", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-checkbox__label ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CheckboxContainerProps = HTMLRempiProps<"div">;

export const CheckboxContainer = forwardRef<"div", CheckboxContainerProps>(
  ({ children, as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-checkbox__container ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
