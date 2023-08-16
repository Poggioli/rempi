import * as Tabs from "@radix-ui/react-tabs";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledTabsContent,
  StyledTabsList,
  StyledTabsRoot,
  StyledTabsTrigger,
} from "./Tabs.styles";

export type TabsRootProps = HTMLRempiProps<typeof StyledTabsRoot> &
  Tabs.TabsProps;

export const TabsRoot = forwardRef<typeof StyledTabsRoot, TabsRootProps>(
  ({ ...props }, ref) => {
    return <StyledTabsRoot {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsListProps = HTMLRempiProps<typeof StyledTabsList> &
  Tabs.TabsListProps;

export const TabsList = forwardRef<typeof StyledTabsList, TabsListProps>(
  ({ ...props }, ref) => {
    return <StyledTabsList {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsTriggerProps = HTMLRempiProps<typeof StyledTabsTrigger> &
  Tabs.TabsTriggerProps;

export const TabsTrigger = forwardRef<
  typeof StyledTabsTrigger,
  TabsTriggerProps
>(({ ...props }, ref) => {
  return <StyledTabsTrigger {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TabsContentProps = HTMLRempiProps<typeof StyledTabsContent> &
  Tabs.TabsContentProps;

export const TabsContent = forwardRef<
  typeof StyledTabsContent,
  TabsContentProps
>(({ ...props }, ref) => {
  return <StyledTabsContent {...props} ref={ref} />;
});
