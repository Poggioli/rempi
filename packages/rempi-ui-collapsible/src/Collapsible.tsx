import * as Collapsible from "@radix-ui/react-collapsible";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./Collapsible.scss";

export type CollapsibleRootProps = Omit<HTMLRempiProps<typeof Collapsible.Root>, "as"> & Collapsible.CollapsibleProps

export const CollapsibleRoot = forwardRef<typeof Collapsible.Root, CollapsibleRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Collapsible.Root
        {...props}
        ref={ref}
        className={`rempi-collapsible ${classnames(className)}`}
      >
        {children}
      </Collapsible.Root>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CollapsibleTriggerProps = HTMLRempiProps<typeof Collapsible.CollapsibleTrigger> & Collapsible.CollapsibleTriggerProps;

export const CollapsibleTrigger = forwardRef<typeof Collapsible.CollapsibleTrigger, CollapsibleTriggerProps>(
  ({ children, as: Component = Collapsible.CollapsibleTrigger, className, asChild = true, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={`rempi-collapsible__trigger ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CollapsibleContentProps = HTMLRempiProps<typeof Collapsible.CollapsibleContent> & Collapsible.CollapsibleContentProps;

export const CollapsibleContent = forwardRef<typeof Collapsible.CollapsibleContent, CollapsibleContentProps>(
  ({ children, as: Component = Collapsible.CollapsibleContent, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-collapsible__content ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
