import * as HoverCard from "@radix-ui/react-hover-card";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledHoverCardArrow,
  StyledHoverCardContent,
} from "./HoverCard.styles";

export type HoverCardRootProps = HoverCard.HoverCardProps;

export const HoverCardRoot = HoverCard.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardTriggerProps = HTMLRempiProps<typeof HoverCard.Trigger> &
  HoverCard.HoverCardTriggerProps;

export const HoverCardTrigger = forwardRef<
  typeof HoverCard.Trigger,
  HoverCardTriggerProps
>(({ as: Component = HoverCard.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type HoverCardPortalProps = HoverCard.HoverCardPortalProps;

const HoverCardPortal = HoverCard.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardContentProps = HTMLRempiProps<
  typeof StyledHoverCardContent
> &
  HoverCard.HoverCardContentProps &
  HoverCardPortalProps;

export const HoverCardContent = forwardRef<
  typeof StyledHoverCardContent,
  HoverCardContentProps
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
      <HoverCardPortal forceMount={forceMount} container={container}>
        <StyledHoverCardContent
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
        >
          {children}
        </StyledHoverCardContent>
      </HoverCardPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardArrowProps = HTMLRempiProps<typeof StyledHoverCardArrow> &
  HoverCard.HoverCardArrowProps;

export const HoverCardArrow = forwardRef<
  typeof StyledHoverCardArrow,
  HoverCardArrowProps
>(({ ...props }, ref) => {
  return <StyledHoverCardArrow {...props} ref={ref} />;
});
