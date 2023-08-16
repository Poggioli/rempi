import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import {
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionItem,
  StyledAccordionRoot,
  StyledAccordionTrigger,
  StyledContent
} from "./Accordion.styles";

export type AccordionRootProps = HTMLRempiProps<typeof StyledAccordionRoot> &
  (Accordion.AccordionMultipleProps | Accordion.AccordionSingleProps);

export const AccordionRoot = forwardRef<
  typeof StyledAccordionRoot,
  AccordionRootProps
>(({ ...props }, ref) => {
  return <StyledAccordionRoot {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionItemProps = HTMLRempiProps<typeof StyledAccordionItem> &
  Accordion.AccordionItemProps;

export const AccordionItem = forwardRef<
  typeof StyledAccordionItem,
  AccordionItemProps
>(({ ...props }, ref) => {
  return <StyledAccordionItem {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionHeaderProps = HTMLRempiProps<
  typeof StyledAccordionHeader
> &
  Accordion.AccordionHeaderProps;

export const AccordionHeader = forwardRef<
  typeof StyledAccordionHeader,
  AccordionHeaderProps
>(({ ...props }, ref) => {
  return <StyledAccordionHeader {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionTriggerProps = HTMLRempiProps<
  typeof StyledAccordionTrigger
> &
  Accordion.AccordionTriggerProps;

export const AccordionTrigger = forwardRef<
  typeof StyledAccordionTrigger,
  AccordionTriggerProps
>(({ ...props }, ref) => {
  return <StyledAccordionTrigger {...props} ref={ref} />;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionContentProps = HTMLRempiProps<
  typeof StyledAccordionContent
> &
  Accordion.AccordionContentProps;

export const AccordionContent = forwardRef<
  typeof StyledAccordionContent,
  AccordionContentProps
>(({ children, ...props }, ref) => {
  return (
    <StyledAccordionContent {...props} ref={ref}>
      <StyledContent>{children}</StyledContent>
    </StyledAccordionContent>
  );
});
