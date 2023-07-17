import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as Avatar from "@radix-ui/react-avatar";
import classnames from "classnames";
import "./Avatar.scss";

type AvatarSize = "small" | "standard" | "large";
const avatarSizeClasses: Record<AvatarSize, string> = {
  small: "rempi-avatar__root--size-small",
  standard: "rempi-avatar__root--size-standard",
  large: "rempi-avatar__root--size-large",
};

export type AvatarRootProps = HTMLRempiProps<typeof Avatar.Root> &
  Avatar.AvatarProps & {
    size?: AvatarSize;
  };

export const AvatarRoot = forwardRef<typeof Avatar.Root, AvatarRootProps>(
  (
    { as: Component = Avatar.Root, size = "standard", className, ...props },
    ref
  ) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-avatar__root ${classnames(
          avatarSizeClasses[size],
          className
        )}`}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarImageProps = HTMLRempiProps<typeof Avatar.Image> &
  Avatar.AvatarImageProps;

export const AvatarImage = forwardRef<typeof Avatar.Image, AvatarImageProps>(
  ({ as: Component = Avatar.Image, className, ...props }, ref) => {
    return (
      <Component
        {...props}
        ref={ref}
        className={`rempi-avatar__image ${classnames(className)}`}
      />
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AvatarFallbackProps = HTMLRempiProps<typeof Avatar.Fallback> &
  Avatar.AvatarFallbackProps;

export const AvatarFallback = forwardRef<
  typeof Avatar.Fallback,
  AvatarFallbackProps
>(({ as: Component = Avatar.Fallback, className, ...props }, ref) => {
  return (
    <Component
      {...props}
      ref={ref}
      className={`rempi-avatar__fallback ${classnames(className)}`}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
