import * as Tooltip from "@radix-ui/react-tooltip";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { StyledTooltipArrow, StyledTooltipContent } from "./Tooltip.styles";

export type TooltipProviderProps = Tooltip.TooltipProviderProps;

export const TooltipProvider = Tooltip.Provider;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipRootProps = Tooltip.TooltipProps;

export const TooltipRoot = Tooltip.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipTriggerProps = HTMLRempiProps<typeof Tooltip.Trigger> &
  Tooltip.TooltipTriggerProps;

export const TooltipTrigger = forwardRef<
  typeof Tooltip.Trigger,
  TooltipTriggerProps
>(({ as: Component = Tooltip.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type TooltipPortalProps = Tooltip.TooltipPortalProps;

const TooltipPortal = Tooltip.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipContentProps = HTMLRempiProps<typeof StyledTooltipContent> &
  Tooltip.TooltipContentProps &
  TooltipPortalProps;

export const TooltipContent = forwardRef<
  typeof StyledTooltipContent,
  TooltipContentProps
>(({ children, forceMount, container, sideOffset = 5, ...props }, ref) => {
  return (
    <TooltipPortal forceMount={forceMount} container={container}>
      <StyledTooltipContent {...props} ref={ref} sideOffset={sideOffset}>
        {children}
      </StyledTooltipContent>
    </TooltipPortal>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipArrowProps = HTMLRempiProps<typeof StyledTooltipArrow> &
  Tooltip.TooltipArrowProps;

export const TooltipArrow = forwardRef<
  typeof StyledTooltipArrow,
  TooltipArrowProps
>(({ ...props }, ref) => {
  return <StyledTooltipArrow {...props} ref={ref} />;
});
