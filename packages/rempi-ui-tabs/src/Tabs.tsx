import * as Tabs from "@radix-ui/react-tabs";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Tabs.scss";

export type TabsRootProps = HTMLRempiProps<typeof Tabs.Root> & Tabs.TabsProps;

export const TabsRoot = forwardRef<typeof Tabs.Root, TabsRootProps>(
  ({ as: Component = Tabs.Root, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-tabs__root", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsListProps = HTMLRempiProps<typeof Tabs.List> &
  Tabs.TabsListProps;

export const TabsList = forwardRef<typeof Tabs.List, TabsListProps>(
  ({ as: Component = Tabs.List, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-tabs__list", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsTriggerProps = HTMLRempiProps<typeof Tabs.Trigger> &
  Tabs.TabsTriggerProps;

export const TabsTrigger = forwardRef<typeof Tabs.Trigger, TabsTriggerProps>(
  ({ as: Component = Tabs.Trigger, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-tabs__trigger", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsContentProps = HTMLRempiProps<typeof Tabs.Content> &
  Tabs.TabsContentProps;

export const TabsContent = forwardRef<typeof Tabs.Content, TabsContentProps>(
  ({ as: Component = Tabs.Content, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-tabs__content", className)}
      />
    );
  }
);
