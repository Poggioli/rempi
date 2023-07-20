import {
  ToastAction,
  ToastActionProps,
  ToastClose,
  ToastCloseCross,
  ToastCloseCrossProps,
  ToastCloseProps,
  ToastDescription,
  ToastDescriptionProps,
  ToastProvider,
  ToastProviderProps,
  ToastRoot,
  ToastRootProps,
  ToastTitle,
  ToastTitleProps,
  ToastViewport,
  ToastViewportProps,
} from "./Toast";

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Title: ToastTitle,
  Description: ToastDescription,
  Action: ToastAction,
  Close: ToastClose,
  CloseCross: ToastCloseCross,
};

export type {
  ToastProviderProps,
  ToastViewportProps,
  ToastRootProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastActionProps,
  ToastCloseProps,
  ToastCloseCrossProps,
};
