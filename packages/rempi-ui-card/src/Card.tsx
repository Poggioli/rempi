import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Flex, FlexProps } from "@rempi-ui/flex";
import { Heading, HeadingProps } from "@rempi-ui/heading";
import { Typography, TypographyProps } from "@rempi-ui/typography";
import classNames from "classnames";
import "./Card.scss";

export type CardProps = HTMLRempiProps<typeof Flex> &
  FlexProps & {
    bordered?: boolean;
  };

export const Card = forwardRef<typeof Flex, CardProps>(
  ({ bordered = true, direction = "column", className, ...props }, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        direction={direction}
        className={classNames(
          "rempi-card__root",
          { "rempi-card__root--bordered": bordered },
          className
        )}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardHeaderProps = HTMLRempiProps<typeof Flex> & FlexProps;

export const CardHeader = forwardRef<typeof Flex, CardHeaderProps>(
  ({ direction = "column", className, ...props }, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        direction={direction}
        className={classNames("rempi-card__header", className)}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardTitleProps = HTMLRempiProps<typeof Heading> & HeadingProps;

export const CardTitle = forwardRef<typeof Heading, CardTitleProps>(
  (
    {
      as = "h3",
      className,
      color = "high-contrast",
      fontSize = "md",
      variant = "6",
      ...props
    },
    ref
  ) => {
    return (
      <Heading
        {...props}
        ref={ref}
        as={as}
        color={color}
        fontSize={fontSize}
        variant={variant}
        className={classNames("rempi-card__title", className)}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardDescriptionProps = HTMLRempiProps<typeof Typography> &
  TypographyProps;

export const CardDescription = forwardRef<
  typeof Typography,
  CardDescriptionProps
>(({ as = "p", className, variant = "body2", ...props }, ref) => {
  return (
    <Typography
      {...props}
      ref={ref}
      as={as}
      variant={variant}
      className={classNames("rempi-card__description", className)}
    />
  );
});

// ------------------------------------------------------------------------- //

export type CardContentProps = HTMLRempiProps<typeof Flex> & FlexProps;

export const CardContent = forwardRef<typeof Flex, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        className={classNames("rempi-card__content", className)}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardFooterProps = HTMLRempiProps<typeof Flex> & FlexProps;

export const CardFooter = forwardRef<typeof Flex, CardFooterProps>(
  ({ className, justifyContent = "flex-end", ...props }, ref) => {
    return (
      <Flex
        {...props}
        ref={ref}
        justifyContent={justifyContent}
        className={classNames("rempi-card__footer", className)}
      />
    );
  }
);
