import * as Dialog from "@radix-ui/react-dialog";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { X } from "lucide-react";
import { StyledDialogCloseCross, StyledDialogContent, StyledDialogDescription, StyledDialogFooter, StyledDialogOverlay, StyledDialogTitle } from "./Dialog.styles";

export type DialogRootProps = Dialog.DialogProps;

export const DialogRoot = Dialog.Root;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogTriggerProps = HTMLRempiProps<typeof Dialog.Trigger> &
  Dialog.DialogTriggerProps;

export const DialogTrigger = forwardRef<
  typeof Dialog.Trigger,
  DialogTriggerProps
>(({ as: Component = Dialog.Trigger, asChild = true, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      asChild={asChild}
    />
  );
}
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogPortalProps = HTMLRempiProps<typeof Dialog.Portal> &
  Dialog.DialogPortalProps;

export const DialogPortal = forwardRef<typeof Dialog.Portal, DialogPortalProps>(
  ({ as: Component = Dialog.Portal, ...props }, ref) => {
    return (
      <Component {...props} ref={ref} />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogOverlayProps = Omit<HTMLRempiProps<typeof StyledDialogOverlay>, " $blur"> &
  Dialog.DialogOverlayProps & {
    blur?: boolean;
  };

export const DialogOverlay = forwardRef<
  typeof StyledDialogOverlay,
  DialogOverlayProps
>(({ blur, ...props }, ref) => {
  return (
    <StyledDialogOverlay
      {...props}
      ref={ref}
      $blur={blur}
    />
  );
}
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogContentProps = HTMLRempiProps<typeof StyledDialogContent> &
  Dialog.DialogContentProps;

export const DialogContent = forwardRef<typeof StyledDialogContent, DialogContentProps>(({ ...props }, ref) => {
  return (
    <StyledDialogContent
      {...props}
      ref={ref} />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogCloseProps = HTMLRempiProps<typeof Dialog.Close> &
  Dialog.DialogCloseProps;

export const DialogClose = forwardRef<typeof Dialog.Close, DialogCloseProps>(
  ({ as: Component = Dialog.Close, asChild = true, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        asChild={asChild}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogCloseCrossProps = Dialog.DialogCloseProps & {
  "aria-label": string;
};

export const DialogCloseCross = forwardRef<
  typeof StyledDialogCloseCross,
  DialogCloseCrossProps
>(({ ...props }, ref) => {
  return (
    <StyledDialogCloseCross
      {...props}
      ref={ref}
    >
      <X size={18} />
    </StyledDialogCloseCross>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogTitleProps = HTMLRempiProps<typeof StyledDialogTitle> &
  Dialog.DialogTitleProps;

export const DialogTitle = forwardRef<typeof StyledDialogTitle, DialogTitleProps>(
  ({ ...props }, ref) => {
    return (
      <StyledDialogTitle
        {...props}
        ref={ref}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogDescriptionProps = HTMLRempiProps<typeof StyledDialogDescription> &
  Dialog.DialogDescriptionProps;

export const DialogDescription = forwardRef<
  typeof StyledDialogDescription,
  DialogDescriptionProps
>(({ ...props }, ref) => {
  return (
    <StyledDialogDescription
      {...props}
      ref={ref}
    />
  );
}
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type DialogFooterProps = HTMLRempiProps<typeof StyledDialogFooter>;

export const DialogFooter = forwardRef<typeof StyledDialogFooter, DialogFooterProps>(
  ({ ...props }, ref) => {
    return (
      <StyledDialogFooter
        {...props}
        ref={ref}
      />
    );
  }
);
