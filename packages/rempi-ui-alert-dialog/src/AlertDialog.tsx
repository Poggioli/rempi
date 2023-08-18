import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import {
  StyledAlertDialogOverlay,
  StyledAlertDialogContent,
  StyledAlertDialogTitle,
  StyledAlertDialogDescription,
  StyledAlertDialogFooter,
} from "./AlertDialog.styles";

export type AlertDialogRootProps = AlertDialog.AlertDialogProps;

export const AlertDialogRoot = AlertDialog.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogTriggerProps = HTMLRempiProps<
  typeof AlertDialog.Trigger
> &
  AlertDialog.AlertDialogTriggerProps;

export const AlertDialogTrigger = forwardRef<
  typeof AlertDialog.Trigger,
  AlertDialogTriggerProps
>(({ as: Component = AlertDialog.Trigger, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogPortalProps = HTMLRempiProps<typeof AlertDialog.Portal> &
  AlertDialog.AlertDialogPortalProps;

export const AlertDialogPortal = forwardRef<
  typeof AlertDialog.Portal,
  AlertDialogPortalProps
>(({ as: Component = AlertDialog.Portal, ...props }, ref) => {
  return <Component {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogOverlayProps = Omit<
  HTMLRempiProps<typeof StyledAlertDialogContent>,
  "$blur"
> &
  AlertDialog.AlertDialogOverlayProps & { blur?: RempiVariant<boolean> };

export const AlertDialogOverlay = forwardRef<
  typeof StyledAlertDialogContent,
  AlertDialogOverlayProps
>(({ blur, ...props }, ref) => {
  return <StyledAlertDialogOverlay {...props} ref={ref} $blur={blur} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogContentProps = HTMLRempiProps<
  typeof StyledAlertDialogContent
> &
  AlertDialog.AlertDialogContentProps;

export const AlertDialogContent = forwardRef<
  typeof StyledAlertDialogContent,
  AlertDialogContentProps
>(({ ...props }, ref) => {
  return <StyledAlertDialogContent {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogCancelProps = HTMLRempiProps<typeof AlertDialog.Cancel> &
  AlertDialog.AlertDialogCancelProps;

export const AlertDialogCancel = forwardRef<
  typeof AlertDialog.Cancel,
  AlertDialogCancelProps
>(({ as: Component = AlertDialog.Cancel, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogActionProps = HTMLRempiProps<typeof AlertDialog.Action> &
  AlertDialog.AlertDialogActionProps;

export const AlertDialogAction = forwardRef<
  typeof AlertDialog.Action,
  AlertDialogActionProps
>(({ as: Component = AlertDialog.Action, asChild = true, ...props }, ref) => {
  return <Component {...props} ref={ref} asChild={asChild} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogTitleProps = HTMLRempiProps<
  typeof StyledAlertDialogTitle
> &
  AlertDialog.AlertDialogTitleProps;

export const AlertDialogTitle = forwardRef<
  typeof StyledAlertDialogTitle,
  AlertDialogTitleProps
>(({ ...props }, ref) => {
  return <StyledAlertDialogTitle {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogDescriptionProps = HTMLRempiProps<
  typeof StyledAlertDialogDescription
> &
  AlertDialog.AlertDialogDescriptionProps;

export const AlertDialogDescription = forwardRef<
  typeof StyledAlertDialogDescription,
  AlertDialogDescriptionProps
>(({ ...props }, ref) => {
  return <StyledAlertDialogDescription {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogFooterProps = HTMLRempiProps<
  typeof StyledAlertDialogFooter
>;

export const AlertDialogFooter = forwardRef<
  typeof StyledAlertDialogFooter,
  AlertDialogFooterProps
>(({ ...props }, ref) => {
  return <StyledAlertDialogFooter {...props} ref={ref} />;
});
