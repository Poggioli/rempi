import * as HoverCard from "@radix-ui/react-hover-card";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./HoverCard.scss";

export type HoverCardRootProps = HoverCard.HoverCardProps;

export const HoverCardRoot = HoverCard.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardTriggerProps = HTMLRempiProps<typeof HoverCard.Trigger> &
  HoverCard.HoverCardTriggerProps;

export const HoverCardTrigger = forwardRef<
  typeof HoverCard.Trigger,
  HoverCardTriggerProps
>(
  (
    { className, as: Component = HoverCard.Trigger, asChild = true, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
        className={classNames("rempi-hover-card__trigger", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type HoverCardPortalProps = HoverCard.HoverCardPortalProps;

const HoverCardPortal = HoverCard.Portal;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardContentProps = HTMLRempiProps<typeof HoverCard.Content> &
  HoverCard.HoverCardContentProps &
  HoverCardPortalProps;

export const HoverCardContent = forwardRef<
  typeof HoverCard.Content,
  HoverCardContentProps
>(
  (
    {
      children,
      className,
      forceMount,
      container,
      as: Component = HoverCard.Content,
      sideOffset = 5,
      collisionPadding = 16,
      ...props
    },
    ref
  ) => {
    return (
      <HoverCardPortal forceMount={forceMount} container={container}>
        <Component
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={classNames("rempi-hover-card__content", className)}
        >
          {children}
        </Component>
      </HoverCardPortal>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type HoverCardArrowProps = HTMLRempiProps<typeof HoverCard.Arrow> &
  HoverCard.HoverCardArrowProps;

export const HoverCardArrow = forwardRef<
  typeof HoverCard.Arrow,
  HoverCardArrowProps
>(({ className, as: Component = HoverCard.Arrow, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-hover-card__arrow", className)}
    />
  );
});
