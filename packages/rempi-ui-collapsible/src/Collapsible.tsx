import * as Collapsible from "@radix-ui/react-collapsible";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledCollapsibleContent,
  StyledCollapsibleRoot,
  StyledCollapsibleTrigger,
} from "./Collapsible.styles";

export type CollapsibleRootProps = Omit<
  HTMLRempiProps<typeof StyledCollapsibleRoot>,
  "as"
> &
  Collapsible.CollapsibleProps;

export const CollapsibleRoot = forwardRef<
  typeof StyledCollapsibleRoot,
  CollapsibleRootProps
>(({ ...props }, ref) => {
  return <StyledCollapsibleRoot {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CollapsibleTriggerProps = HTMLRempiProps<
  typeof StyledCollapsibleTrigger
> &
  Collapsible.CollapsibleTriggerProps;

export const CollapsibleTrigger = forwardRef<
  typeof StyledCollapsibleTrigger,
  CollapsibleTriggerProps
>(({ asChild = true, ...props }, ref) => {
  return <StyledCollapsibleTrigger {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type CollapsibleContentProps = HTMLRempiProps<
  typeof StyledCollapsibleContent
> &
  Collapsible.CollapsibleContentProps;

export const CollapsibleContent = forwardRef<
  typeof StyledCollapsibleContent,
  CollapsibleContentProps
>(({ ...props }, ref) => {
  return <StyledCollapsibleContent {...props} ref={ref} />;
});
