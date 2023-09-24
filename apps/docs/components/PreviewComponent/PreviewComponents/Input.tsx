import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const InputPreview: FC = () => {
  const t = useTranslations("preview.input");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)" }}
    >
      <Input.Label alignItems="flex-start" flexDirection="column">
        {t("label")}
        <Input.Root placeholder={t("placeholder")} />
      </Input.Label>
    </Flex>
  );
};
