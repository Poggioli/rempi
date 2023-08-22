import { Accordion } from "@rempi-ui/accordion";
import { FC } from "react";

export const AccordionPreview: FC = () => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Header>
          <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4" disabled>
        <Accordion.Header>
          <Accordion.Trigger>Could be disabled?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>Yes. It could be disabled</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

