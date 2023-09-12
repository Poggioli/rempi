import { Flex } from "@rempi-ui/Flex";
import { Textarea } from "@rempi-ui/textarea";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TextareaPreview: FC = () => {
  const t = useTranslations("preview.textarea");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)" }}
    >
      <Textarea.Label alignItems="flex-start" flexDirection="column">
        {t("label")}
        <Textarea.Root placeholder={t("placeholder")} />
      </Textarea.Label>
    </Flex>
  );
};
