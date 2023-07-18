import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import * as Avatar from "@radix-ui/react-avatar";
import classNames from "classnames";
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
        className={classNames(
          "rempi-avatar__root",
          avatarSizeClasses[size],
          className
        )}
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
        className={classNames("rempi-avatar__image", className)}
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
      className={classNames("rempi-avatar__fallback", className)}
    />
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //
