import * as Popover from "@radix-ui/react-popover";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import { X } from "lucide-react";
import "./Popover.scss";

export type PopoverRootProps = Popover.PopoverProps;

export const PopoverRoot = Popover.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverTriggerProps = HTMLRempiProps<typeof Popover.Trigger> &
  Popover.PopoverTriggerProps;

export const PopoverTrigger = forwardRef<
  typeof Popover.Trigger,
  PopoverTriggerProps
>(
  (
    { className, as: Component = Popover.Trigger, asChild = true, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={`rempi-popover__trigger ${classnames(className)}`}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type PopoverPortalProps = Popover.PopoverPortalProps;

const PopoverPortal = Popover.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverContentProps = HTMLRempiProps<typeof Popover.Content> &
  Popover.PopoverContentProps &
  PopoverPortalProps;

export const PopoverContent = forwardRef<
  typeof Popover.Content,
  PopoverContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = Popover.Content,
      sideOffset = 5,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <PopoverPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={`rempi-popover__content ${classnames(className)}`}
        >
          {children}
        </Component>
      </PopoverPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverArrowProps = HTMLRempiProps<typeof Popover.Arrow> &
  Popover.PopoverArrowProps;

export const PopoverArrow = forwardRef<typeof Popover.Arrow, PopoverArrowProps>(
  ({ className, as: Component = Popover.Arrow, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-popover__arrow ${classnames(className)}`}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverCloseProps = HTMLRempiProps<typeof Popover.Close> &
  Popover.PopoverCloseProps;

export const PopoverClose = forwardRef<typeof Popover.Close, PopoverCloseProps>(
  (
    {
      children,
      as: Component = Popover.Close,
      className,
      asChild = true,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={`rempi-popover__close ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type PopoverCloseCrossProps = Popover.PopoverCloseProps & {
  "aria-label": string;
};

export const PopoverCloseCross = forwardRef<
  typeof Popover.Close,
  PopoverCloseCrossProps
>(({ className, ...props }, ref) => {
  return (
    <Popover.Close
      {...props}
      ref={ref}
      className={`rempi-popover__close-cross ${classnames(className)}`}
    >
      <X size={18} />
    </Popover.Close>
  );
});
