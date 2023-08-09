import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as Avatar from "@radix-ui/react-avatar";
import { StyledAvatarFallback, StyledAvatarImage, StyledAvatarRoot } from "./Avatar.styles";

export type Size = "small" | "standard" | "large";
const sizeClasses: Record<Size, string> = {
  small: "rempi-avatar__root--size-small",
  standard: "rempi-avatar__root--size-standard",
  large: "rempi-avatar__root--size-large",
};

export type AvatarRootProps = HTMLRempiProps<typeof StyledAvatarRoot> &
  Avatar.AvatarProps

export const AvatarRoot = forwardRef<typeof StyledAvatarRoot, AvatarRootProps>(
  ({ size = "standard", ...props }, ref) => {
    return (
      <StyledAvatarRoot
        {...props}
        ref={ref}
        size={size}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarImageProps = HTMLRempiProps<typeof StyledAvatarImage> &
  Avatar.AvatarImageProps;

export const AvatarImage = forwardRef<typeof StyledAvatarImage, AvatarImageProps>(
  ({ ...props }, ref) => {
    return (
      <StyledAvatarImage
        {...props}
        ref={ref}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarFallbackProps = HTMLRempiProps<typeof StyledAvatarFallback> &
  Avatar.AvatarFallbackProps;

export const AvatarFallback = forwardRef<
  typeof StyledAvatarFallback,
  AvatarFallbackProps
>(({ ...props }, ref) => {
  return (
    <StyledAvatarFallback
      {...props}
      ref={ref}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
