import * as ScrollArea from "@radix-ui/react-scroll-area";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledScrollAreaCorner,
  StyledScrollAreaRoot,
  StyledScrollAreaScrollbar,
  StyledScrollAreaThumb,
  StyledScrollAreaViewport,
} from "./ScrollArea.styles";

export type ScrollAreaRootProps = HTMLRempiProps<typeof StyledScrollAreaRoot> &
  ScrollArea.ScrollAreaProps;

export const ScrollAreaRoot = forwardRef<
  typeof StyledScrollAreaRoot,
  ScrollAreaRootProps
>(({ ...props }, ref) => {
  return <StyledScrollAreaRoot {...props} ref={ref} />;
});

export type ScrollAreaViewportProps = HTMLRempiProps<
  typeof StyledScrollAreaViewport
> &
  ScrollArea.ScrollAreaViewportProps;

export const ScrollAreaViewport = forwardRef<
  typeof StyledScrollAreaViewport,
  ScrollAreaViewportProps
>(({ ...props }, ref) => {
  return <StyledScrollAreaViewport {...props} ref={ref} />;
});

export type ScrollAreaScrollbarProps = HTMLRempiProps<
  typeof StyledScrollAreaScrollbar
> &
  ScrollArea.ScrollAreaScrollbarProps;

export const ScrollAreaScrollbar = forwardRef<
  typeof StyledScrollAreaScrollbar,
  ScrollAreaScrollbarProps
>(({ ...props }, ref) => {
  return <StyledScrollAreaScrollbar {...props} ref={ref} />;
});

export type ScrollAreaThumbProps = HTMLRempiProps<
  typeof StyledScrollAreaThumb
> &
  ScrollArea.ScrollAreaThumbProps;

export const ScrollAreaThumb = forwardRef<
  typeof StyledScrollAreaThumb,
  ScrollAreaThumbProps
>(({ ...props }, ref) => {
  return <StyledScrollAreaThumb {...props} ref={ref} />;
});

export type ScrollAreaCornerProps = HTMLRempiProps<
  typeof StyledScrollAreaCorner
> &
  ScrollArea.ScrollAreaCornerProps;

export const ScrollAreaCorner = forwardRef<
  typeof StyledScrollAreaCorner,
  ScrollAreaCornerProps
>(({ ...props }, ref) => {
  return <StyledScrollAreaCorner {...props} ref={ref} />;
});
