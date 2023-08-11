import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { FlexProps } from "@rempi-ui/flex";
import { HeadingProps } from "@rempi-ui/heading";
import { Typography, TypographyProps } from "@rempi-ui/typography";
import {
  StyledCardContent,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardRoot,
  StyledCardTitle,
} from "./Card.styles";

export type CardProps = Omit<
  HTMLRempiProps<typeof StyledCardRoot>,
  "$bordered"
> & {
  bordered?: boolean;
} & FlexProps;

export const Card = forwardRef<typeof StyledCardRoot, CardProps>(
  ({ bordered = true, direction = "column", ...props }, ref) => {
    return (
      <StyledCardRoot
        {...props}
        ref={ref}
        direction={direction}
        $bordered={bordered}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardHeaderProps = HTMLRempiProps<typeof StyledCardHeader> &
  FlexProps;

export const CardHeader = forwardRef<typeof StyledCardHeader, CardHeaderProps>(
  ({ direction = "column", ...props }, ref) => {
    return <StyledCardHeader {...props} ref={ref} direction={direction} />;
  }
);

// ------------------------------------------------------------------------- //

export type CardTitleProps = HTMLRempiProps<typeof StyledCardTitle> &
  HeadingProps;

export const CardTitle = forwardRef<typeof StyledCardTitle, CardTitleProps>(
  (
    {
      as = "h3",
      color = "high-contrast",
      fontSize = "md",
      variant = "6",
      ...props
    },
    ref
  ) => {
    return (
      <StyledCardTitle
        {...props}
        ref={ref}
        as={as}
        color={color}
        fontSize={fontSize}
        variant={variant}
      />
    );
  }
);

// ------------------------------------------------------------------------- //

export type CardDescriptionProps = HTMLRempiProps<
  typeof Typography
> &
  TypographyProps;

export const CardDescription = forwardRef<
  typeof Typography,
  CardDescriptionProps
>(({ as = "p", variant = "body2", ...props }, ref) => {
  return (
    <Typography {...props} ref={ref} as={as} variant={variant} />
  );
});

// ------------------------------------------------------------------------- //

export type CardContentProps = HTMLRempiProps<typeof StyledCardContent> &
  FlexProps;

export const CardContent = forwardRef<
  typeof StyledCardContent,
  CardContentProps
>(({ ...props }, ref) => {
  return <StyledCardContent {...props} ref={ref} />;
});

// ------------------------------------------------------------------------- //

export type CardFooterProps = HTMLRempiProps<typeof StyledCardFooter> &
  FlexProps;

export const CardFooter = forwardRef<typeof StyledCardFooter, CardFooterProps>(
  ({ justifyContent = "flex-end", ...props }, ref) => {
    return (
      <StyledCardFooter {...props} ref={ref} justifyContent={justifyContent} />
    );
  }
);
