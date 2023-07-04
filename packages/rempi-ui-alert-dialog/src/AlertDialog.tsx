import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classnames from "classnames";
import "./AlertDialog.scss";

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
>(
  (
    {
      children,
      as: Component = AlertDialog.Trigger,
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
        className={`rempi-alert-dialog__trigger ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogPortalProps = HTMLRempiProps<typeof AlertDialog.Portal> &
  AlertDialog.AlertDialogPortalProps;

export const AlertDialogPortal = forwardRef<
  typeof AlertDialog.Portal,
  AlertDialogPortalProps
>(
  (
    { children, as: Component = AlertDialog.Portal, className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__portal ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogOverlayProps = HTMLRempiProps<
  typeof AlertDialog.Overlay
> &
  AlertDialog.AlertDialogOverlayProps & {
    blur?: boolean;
  };

export const AlertDialogOverlay = forwardRef<
  typeof AlertDialog.Overlay,
  AlertDialogOverlayProps
>(
  (
    {
      children,
      as: Component = AlertDialog.Overlay,
      className,
      blur,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__overlay ${classnames(
          { "rempi-alert-dialog__overlay--blured": blur },
          className
        )}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogContentProps = HTMLRempiProps<
  typeof AlertDialog.Content
> &
  AlertDialog.AlertDialogContentProps;

export const AlertDialogContent = forwardRef<
  typeof AlertDialog.Content,
  AlertDialogContentProps
>(
  (
    { children, as: Component = AlertDialog.Content, className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__content ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogCancelProps = HTMLRempiProps<typeof AlertDialog.Cancel> &
  AlertDialog.AlertDialogCancelProps;

export const AlertDialogCancel = forwardRef<
  typeof AlertDialog.Cancel,
  AlertDialogCancelProps
>(
  (
    {
      children,
      as: Component = AlertDialog.Cancel,
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
        className={`rempi-alert-dialog__cancel ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogActionProps = HTMLRempiProps<typeof AlertDialog.Action> &
  AlertDialog.AlertDialogActionProps;

export const AlertDialogAction = forwardRef<
  typeof AlertDialog.Action,
  AlertDialogActionProps
>(
  (
    {
      children,
      as: Component = AlertDialog.Action,
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
        className={`rempi-alert-dialog__action ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogTitleProps = HTMLRempiProps<typeof AlertDialog.Title> &
  AlertDialog.AlertDialogTitleProps;

export const AlertDialogTitle = forwardRef<
  typeof AlertDialog.Title,
  AlertDialogTitleProps
>(
  (
    { children, as: Component = AlertDialog.Title, className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__title ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogDescriptionProps = HTMLRempiProps<
  typeof AlertDialog.Description
> &
  AlertDialog.AlertDialogDescriptionProps;

export const AlertDialogDescription = forwardRef<
  typeof AlertDialog.Description,
  AlertDialogDescriptionProps
>(
  (
    { children, as: Component = AlertDialog.Description, className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__description ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AlertDialogFooterProps = HTMLRempiProps<"div">;

export const AlertDialogFooter = forwardRef<"div", AlertDialogFooterProps>(
  ({ children, as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-alert-dialog__footer ${classnames(className)}`}
      >
        {children}
      </Component>
    );
  }
);
