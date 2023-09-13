import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import * as Avatar from "@radix-ui/react-avatar";
import {
  StyledAvatarFallback,
  StyledAvatarImage,
  StyledAvatarRoot,
} from "./Avatar.styles";

export type Size = "small" | "standard" | "large";

export type AvatarRootProps = Omit<
  HTMLRempiProps<typeof StyledAvatarRoot>,
  "$size"
> &
  Avatar.AvatarProps & { size?: RempiVariant<Size> };

export const AvatarRoot = forwardRef<typeof Avatar.Root, AvatarRootProps>(
  ({ size = "standard", ...props }, ref) => {
    return <StyledAvatarRoot {...props} ref={ref} $size={size} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarImageProps = HTMLRempiProps<typeof StyledAvatarImage> &
  Avatar.AvatarImageProps;

export const AvatarImage = forwardRef<
  typeof StyledAvatarImage,
  AvatarImageProps
>(({ ...props }, ref) => {
  return <StyledAvatarImage {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarFallbackProps = HTMLRempiProps<typeof StyledAvatarFallback> &
  Avatar.AvatarFallbackProps;

export const AvatarFallback = forwardRef<
  typeof StyledAvatarFallback,
  AvatarFallbackProps
>(({ ...props }, ref) => {
  return <StyledAvatarFallback {...props} ref={ref} />;
});
