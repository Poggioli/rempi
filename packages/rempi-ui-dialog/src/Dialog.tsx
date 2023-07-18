import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import { X } from "lucide-react";
import "./Dialog.scss";

export type DialogRootProps = Dialog.DialogProps;

export const DialogRoot = Dialog.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogTriggerProps = HTMLRempiProps<typeof Dialog.Trigger> &
  Dialog.DialogTriggerProps;

export const DialogTrigger = forwardRef<
  typeof Dialog.Trigger,
  DialogTriggerProps
>(
  (
    {
      children,
      as: Component = Dialog.Trigger,
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
        className={classNames("rempi-dialog__trigger", className)}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogPortalProps = HTMLRempiProps<typeof Dialog.Portal> &
  Dialog.DialogPortalProps;

export const DialogPortal = forwardRef<typeof Dialog.Portal, DialogPortalProps>(
  ({ children, as: Component = Dialog.Portal, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dialog__portal", className)}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogOverlayProps = HTMLRempiProps<typeof Dialog.Overlay> &
  Dialog.DialogOverlayProps & {
    blur?: boolean;
  };

export const DialogOverlay = forwardRef<
  typeof Dialog.Overlay,
  DialogOverlayProps
>(
  (
    { children, as: Component = Dialog.Overlay, className, blur, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames(
          "rempi-dialog__overlay",
          { "rempi-dialog__overlay--blured": blur },
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogContentProps = HTMLRempiProps<typeof Dialog.Content> &
  Dialog.DialogContentProps;

export const DialogContent = forwardRef<
  typeof Dialog.Content,
  DialogContentProps
>(({ children, as: Component = Dialog.Content, className, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames("rempi-dialog__content", className)}
    >
      {children}
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogCloseProps = HTMLRempiProps<typeof Dialog.Close> &
  Dialog.DialogCloseProps;

export const DialogClose = forwardRef<typeof Dialog.Close, DialogCloseProps>(
  (
    {
      children,
      as: Component = Dialog.Close,
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
        className={classNames("rempi-dialog__close", className)}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogCloseCrossProps = Dialog.DialogCloseProps & {
  "aria-label": string;
};

export const DialogCloseCross = forwardRef<
  typeof Dialog.Close,
  DialogCloseCrossProps
>(({ className, ...props }, ref) => {
  return (
    <Dialog.Close
      {...props}
      ref={ref}
      className={classNames("rempi-dialog__close-cross", className)}
    >
      <X size={18} />
    </Dialog.Close>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogTitleProps = HTMLRempiProps<typeof Dialog.Title> &
  Dialog.DialogTitleProps;

export const DialogTitle = forwardRef<typeof Dialog.Title, DialogTitleProps>(
  ({ children, as: Component = Dialog.Title, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dialog__title", className)}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogDescriptionProps = HTMLRempiProps<typeof Dialog.Description> &
  Dialog.DialogDescriptionProps;

export const DialogDescription = forwardRef<
  typeof Dialog.Description,
  DialogDescriptionProps
>(
  (
    { children, as: Component = Dialog.Description, className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dialog__description", className)}
      >
        {children}
      </Component>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogFooterProps = HTMLRempiProps<"div">;

export const DialogFooter = forwardRef<"div", DialogFooterProps>(
  ({ children, as: Component = "div", className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-dialog__footer", className)}
      >
        {children}
      </Component>
    );
  }
);
