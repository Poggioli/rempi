import { Accordion } from "@rempi-ui/accordion";
import { FC } from "react";

export const AccordionPreview: FC = () => {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          {/* i18n */}
          <Accordion.Trigger>É acessível?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          {/* i18n */}
          Sim. Ele segue o padrão de design WAI-ARIA.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          {/* i18n */}
          <Accordion.Trigger>Não tem estilo?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          {/* i18n */}
          Sim. Não tem estilo por padrão, dando a você liberdade na estilização.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Header>
          {/* i18n */}
          <Accordion.Trigger>Pode ser animado?</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          {/* i18n */}
          Sim! Você pode animar o Accordion com CSS ou JavaScript.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4" disabled>
        <Accordion.Header>
          {/* i18n */}
          <Accordion.Trigger>Poderia ser desativado?</Accordion.Trigger>
        </Accordion.Header>
        {/* i18n */}
        <Accordion.Content>Sim. Poderia ser desativado</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
