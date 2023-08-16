import * as Toast from "@radix-ui/react-toast";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { X } from "lucide-react";
import {
  StyledToastAction,
  StyledToastCloseCross,
  StyledToastDescription,
  StyledToastRoot,
  StyledToastTitle,
  StyledToastViewport,
} from "./Toast.styles";

export type ToastProviderProps = Toast.ToastProviderProps;

export const ToastProvider = Toast.Provider;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastViewportProps = HTMLRempiProps<typeof StyledToastViewport> &
  Toast.ToastViewportProps;

export const ToastViewport = forwardRef<
  typeof StyledToastViewport,
  ToastViewportProps
>(({ ...props }, ref) => {
  return <StyledToastViewport {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastRootProps = HTMLRempiProps<typeof StyledToastRoot> &
  Toast.ToastProps;

export const ToastRoot = forwardRef<typeof StyledToastRoot, ToastRootProps>(
  ({ ...props }, ref) => {
    return <StyledToastRoot {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastTitleProps = HTMLRempiProps<typeof StyledToastTitle> &
  Toast.ToastProps;

export const ToastTitle = forwardRef<typeof StyledToastTitle, ToastTitleProps>(
  ({ ...props }, ref) => {
    return <StyledToastTitle {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastDescriptionProps = HTMLRempiProps<
  typeof StyledToastDescription
> &
  Toast.ToastProps;

export const ToastDescription = forwardRef<
  typeof StyledToastDescription,
  ToastDescriptionProps
>(({ ...props }, ref) => {
  return <StyledToastDescription {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastActionProps = HTMLRempiProps<typeof StyledToastAction> &
  Toast.ToastProps;

export const ToastAction = forwardRef<
  typeof StyledToastAction,
  ToastActionProps
>(({ ...props }, ref) => {
  return <StyledToastAction {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastCloseProps = HTMLRempiProps<typeof Toast.Close> &
  Toast.ToastProps;

export const ToastClose = forwardRef<typeof Toast.Close, ToastCloseProps>(
  ({ as: Component = Toast.Close, ...props }, ref) => {
    return <Component {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastCloseCrossProps = Toast.ToastCloseProps & {
  "aria-label": string;
};

export const ToastCloseCross = forwardRef<
  typeof StyledToastCloseCross,
  ToastCloseCrossProps
>(({ ...props }, ref) => {
  return (
    <StyledToastCloseCross {...props} ref={ref}>
      <X size={18} />
    </StyledToastCloseCross>
  );
});
