import * as Accordion from "@radix-ui/react-accordion";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import "./Accordion.scss";

export type AccordionRootProps = HTMLRempiProps<typeof Accordion.Root> &
  (Accordion.AccordionMultipleProps | Accordion.AccordionSingleProps);

export const AccordionRoot = forwardRef<
  typeof Accordion.Root,
  AccordionRootProps
>(({ children, as: Component = Accordion.Root, ...props }, ref) => {
  return (
    <Component {...props} ref={ref} className="rempi-accordion">
      {children}
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionItemProps = HTMLRempiProps<typeof Accordion.Item> &
  Accordion.AccordionItemProps;

export const AccordionItem = forwardRef<
  typeof Accordion.Item,
  AccordionItemProps
>(({ children, as: Component = Accordion.Item, ...props }, ref) => {
  return (
    <Component {...props} ref={ref} className="rempi-accordion__item">
      {children}
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionHeaderProps = HTMLRempiProps<typeof Accordion.Header> &
  Accordion.AccordionHeaderProps;

export const AccordionHeader = forwardRef<
  typeof Accordion.Header,
  AccordionHeaderProps
>(({ children, as: Component = Accordion.Header, ...props }, ref) => {
  return (
    <Component {...props} ref={ref} className="rempi-accordion__header">
      {children}
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionTriggerProps = HTMLRempiProps<typeof Accordion.Trigger> &
  Accordion.AccordionTriggerProps;

export const AccordionTrigger = forwardRef<
  typeof Accordion.Trigger,
  AccordionTriggerProps
>(({ children, as: Component = Accordion.Trigger, ...props }, ref) => {
  return (
    <Component {...props} ref={ref} className="rempi-accordion__trigger">
      {children}
    </Component>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

export type AccordionContentProps = HTMLRempiProps<typeof Accordion.Content> &
  Accordion.AccordionContentProps;

export const AccordionContent = forwardRef<
  typeof Accordion.Content,
  AccordionContentProps
>(({ children, as: Component = Accordion.Content, ...props }, ref) => {
  return (
    <Component {...props} ref={ref} className="rempi-accordion__content">
      <div className="rempi-accordion__content__container">{children}</div>
    </Component>
  );
});
