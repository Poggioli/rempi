import {
  ToastProviderProps,
  ToastProvider,
  ToastViewportProps,
  ToastViewport,
  ToastRootProps,
  ToastRoot,
  ToastTitleProps,
  ToastTitle,
  ToastDescriptionProps,
  ToastDescription,
  ToastActionProps,
  ToastAction,
  ToastCloseProps,
  ToastClose,
} from "./Toast";

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
};

export type {
  ToastProviderProps,
  ToastViewportProps,
  ToastRootProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastActionProps,
  ToastCloseProps,
};
