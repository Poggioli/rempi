import { Accordion } from "@rempi-ui/accordion";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const AccordionPreview: FC = () => {
  const t = useTranslations("preview.accordion");

  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Header>
          <Accordion.Trigger>{t("items.0.title")}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{t("items.0.content")}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Header>
          <Accordion.Trigger>{t("items.1.title")}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{t("items.1.content")}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Header>
          <Accordion.Trigger>{t("items.2.title")}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>{t("items.2.content")}</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4" disabled>
        <Accordion.Header>
          <Accordion.Trigger>{t("items.3.title")}</Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content> {t("items.3.content")}</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
