import { Flex } from "@rempi-ui/flex";
import { Select } from "@rempi-ui/select";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const SelectPreview: FC = () => {
  const t = useTranslations("preview.select");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Select.Root>
        <Select.Trigger aria-label={t("aria-label")}>
          <Select.Value placeholder={t("placeholder")} />
        </Select.Trigger>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>{t("groups.0.title")}</Select.Label>
              <Select.Item value="apple">{t("groups.0.items.0")}</Select.Item>
              <Select.Item disabled value="banana">
                {t("groups.0.items.1")}
              </Select.Item>
              <Select.Item value="blueberry">
                {t("groups.0.items.2")}
              </Select.Item>
              <Select.Item value="grapes">{t("groups.0.items.3")}</Select.Item>
              <Select.Item value="pineapple">
                {t("groups.0.items.4")}
              </Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>{t("groups.1.title")}</Select.Label>
              <Select.Item value="aubergine">
                {t("groups.1.items.0")}
              </Select.Item>
              <Select.Item value="broccoli">
                {t("groups.1.items.1")}
              </Select.Item>
              <Select.Item value="carrot" disabled>
                {t("groups.1.items.2")}
              </Select.Item>
              <Select.Item value="courgette">
                {t("groups.1.items.3")}
              </Select.Item>
              <Select.Item value="leek">{t("groups.1.items.4")}</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>{t("groups.2.title")}</Select.Label>
              <Select.Item value="beef">{t("groups.2.items.0")}</Select.Item>
              <Select.Item value="chicken">{t("groups.2.items.1")}</Select.Item>
              <Select.Item value="lamb">{t("groups.2.items.2")}</Select.Item>
              <Select.Item value="pork">{t("groups.2.items.3")}</Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};
