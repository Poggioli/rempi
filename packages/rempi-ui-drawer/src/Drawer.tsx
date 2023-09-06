import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { X } from "lucide-react";
import {
  StyledDrawerCloseCross,
  StyledDrawerContent,
  StyledDrawerDescription,
  StyledDrawerFooter,
  StyledDrawerOverlay,
  StyledDrawerTitle,
} from "./Drawer.styles";

export type DrawerRootProps = Dialog.DialogProps;

export const DrawerRoot = Dialog.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerTriggerProps = HTMLRempiProps<typeof Dialog.Trigger> &
  Dialog.DialogTriggerProps;

export const DrawerTrigger = forwardRef<
  typeof Dialog.Trigger,
  DrawerTriggerProps
>(({ as: Component = Dialog.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerPortalProps = HTMLRempiProps<typeof Dialog.Portal> &
  Dialog.DialogPortalProps;

export const DrawerPortal = forwardRef<typeof Dialog.Portal, DrawerPortalProps>(
  ({ as: Component = Dialog.Portal, ...props }, ref) => {
    return <Component {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerOverlayProps = Omit<
  HTMLRempiProps<typeof StyledDrawerOverlay>,
  "$blur"
> &
  Dialog.DialogOverlayProps & {
    blur?: RempiVariant<boolean>;
  };

export const DrawerOverlay = forwardRef<
  typeof StyledDrawerOverlay,
  DrawerOverlayProps
>(({ blur, ...props }, ref) => {
  return <StyledDrawerOverlay {...props} ref={ref} $blur={blur} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type Position = "left" | "bottom" | "right" | "top";

export type DrawerContentProps = Omit<
  HTMLRempiProps<typeof StyledDrawerContent>,
  "$position"
> &
  Dialog.DialogContentProps & { position?: RempiVariant<Position> };

export const DrawerContent = forwardRef<
  typeof StyledDrawerContent,
  DrawerContentProps
>(({ position = "left", ...props }, ref) => {
  return <StyledDrawerContent {...props} $position={position} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerCloseProps = HTMLRempiProps<typeof Dialog.Close> &
  Dialog.DialogCloseProps;

export const DrawerClose = forwardRef<typeof Dialog.Close, DrawerCloseProps>(
  ({ as: Component = Dialog.Close, asChild = true, ...props }, ref) => {
    return <Component {...props} ref={ref} asChild={asChild} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerCloseCrossProps = Dialog.DialogCloseProps & {
  "aria-label": string;
};

export const DrawerCloseCross = forwardRef<
  typeof StyledDrawerCloseCross,
  DrawerCloseCrossProps
>(({ ...props }, ref) => {
  return (
    <StyledDrawerCloseCross {...props} ref={ref}>
      <X size={18} />
    </StyledDrawerCloseCross>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerTitleProps = HTMLRempiProps<typeof StyledDrawerTitle> &
  Dialog.DialogTitleProps;

export const DrawerTitle = forwardRef<
  typeof StyledDrawerTitle,
  DrawerTitleProps
>(({ ...props }, ref) => {
  return <StyledDrawerTitle {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerDescriptionProps = HTMLRempiProps<
  typeof StyledDrawerDescription
> &
  Dialog.DialogDescriptionProps;

export const DrawerDescription = forwardRef<
  typeof StyledDrawerDescription,
  DrawerDescriptionProps
>(({ ...props }, ref) => {
  return <StyledDrawerDescription {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DrawerFooterProps = HTMLRempiProps<typeof StyledDrawerFooter>;

export const DrawerFooter = forwardRef<
  typeof StyledDrawerFooter,
  DrawerFooterProps
>(({ ...props }, ref) => {
  return <StyledDrawerFooter {...props} ref={ref} />;
});
