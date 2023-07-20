import * as Toast from "@radix-ui/react-toast";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import classNames from "classnames";
import "./Toast.scss";

export type ToastProviderProps = Toast.ToastProviderProps;

export const ToastProvider = Toast.Provider;

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastViewportProps = HTMLRempiProps<typeof Toast.Root> &
  Toast.ToastViewportProps;

export const ToastViewport = forwardRef<typeof Toast.Viewport, ToastViewportProps>(
  ({ as: Component = Toast.Viewport, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__view-port", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastRootProps = HTMLRempiProps<typeof Toast.Root> &
  Toast.ToastProps;

export const ToastRoot = forwardRef<typeof Toast.Root, ToastRootProps>(
  ({ as: Component = Toast.Root, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__root", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastTitleProps = HTMLRempiProps<typeof Toast.Title> &
  Toast.ToastProps;

export const ToastTitle = forwardRef<typeof Toast.Title, ToastTitleProps>(
  ({ as: Component = Toast.Title, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__title", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastDescriptionProps = HTMLRempiProps<typeof Toast.Description> &
  Toast.ToastProps;

export const ToastDescription = forwardRef<typeof Toast.Description, ToastDescriptionProps>(
  ({ as: Component = Toast.Description, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__description", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastActionProps = HTMLRempiProps<typeof Toast.Action> &
  Toast.ToastProps;

export const ToastAction = forwardRef<typeof Toast.Action, ToastActionProps>(
  ({ as: Component = Toast.Action, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__action", className)}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type ToastCloseProps = HTMLRempiProps<typeof Toast.Close> &
  Toast.ToastProps;

export const ToastClose = forwardRef<typeof Toast.Close, ToastCloseProps>(
  ({ as: Component = Toast.Close, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={classNames("rempi-toast__close", className)}
      />
    );
  }
);


