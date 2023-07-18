import * as Tooltip from "@radix-ui/react-tooltip";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Tooltip.scss";

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
>(
  (
    { as: Component = Tooltip.Trigger, className, asChild = true, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={classNames("rempi-tooltip__trigger", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type TooltipPortalProps = Tooltip.TooltipPortalProps;

const TooltipPortal = Tooltip.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipContentProps = HTMLRempiProps<typeof Tooltip.Content> &
  Tooltip.TooltipContentProps &
  TooltipPortalProps;

export const TooltipContent = forwardRef<
  typeof Tooltip.Content,
  TooltipContentProps
>(
  (
    {
      children,
      forceMount,
      container,
      sideOffset = 5,
      as: Component = Tooltip.Content,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <TooltipPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          className={classNames("rempi-tooltip__content", className)}
        >
          {children}
        </Component>
      </TooltipPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type TooltipArrowProps = HTMLRempiProps<typeof Tooltip.Arrow> &
  Tooltip.TooltipArrowProps;

export const TooltipArrow = forwardRef<typeof Tooltip.Arrow, TooltipArrowProps>(
  ({ as: Component = Tooltip.Arrow, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-tooltip__arrow", className)}
      />
    );
  }
);
