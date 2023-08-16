import * as Popover from "@radix-ui/react-popover";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { X } from "lucide-react";
import {
  StyledPopoverArrow,
  StyledPopoverCloseCross,
  StyledPopoverContent,
} from "./Popover.styles";

export type PopoverRootProps = Popover.PopoverProps;

export const PopoverRoot = Popover.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverTriggerProps = HTMLRempiProps<typeof Popover.Trigger> &
  Popover.PopoverTriggerProps;

export const PopoverTrigger = forwardRef<
  typeof Popover.Trigger,
  PopoverTriggerProps
>(({ as: Component = Popover.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type PopoverPortalProps = Popover.PopoverPortalProps;

const PopoverPortal = Popover.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverContentProps = HTMLRempiProps<typeof StyledPopoverContent> &
  Popover.PopoverContentProps &
  PopoverPortalProps;

export const PopoverContent = forwardRef<
  typeof StyledPopoverContent,
  PopoverContentProps
>(
  (
    {
      children,
      forceMount,
      container,
      sideOffset = 5,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <PopoverPortal forceMount={forceMount} container={container}>
        <StyledPopoverContent
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
        >
          {children}
        </StyledPopoverContent>
      </PopoverPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverArrowProps = HTMLRempiProps<typeof StyledPopoverArrow> &
  Popover.PopoverArrowProps;

export const PopoverArrow = forwardRef<
  typeof StyledPopoverArrow,
  PopoverArrowProps
>(({ ...props }, ref) => {
  return <StyledPopoverArrow {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverCloseProps = HTMLRempiProps<typeof Popover.Close> &
  Popover.PopoverCloseProps;

export const PopoverClose = forwardRef<typeof Popover.Close, PopoverCloseProps>(
  ({ as: Component = Popover.Close, asChild = true, ...props }, ref) => {
    return <Component {...props} ref={ref} asChild={asChild} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverCloseCrossProps = Popover.PopoverCloseProps & {
  "aria-label": string;
};

export const PopoverCloseCross = forwardRef<
  typeof StyledPopoverCloseCross,
  PopoverCloseCrossProps
>(({ ...props }, ref) => {
  return (
    <StyledPopoverCloseCross {...props} ref={ref}>
      <X size={18} />
    </StyledPopoverCloseCross>
  );
});
