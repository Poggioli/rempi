import { Flex } from "@rempi-ui/Flex";
import { Heading } from "@rempi-ui/heading";
import { Separator } from "@rempi-ui/separator";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const SeparatorPreview: FC = () => {
  const t = useTranslations("preview.separator");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)", textAlign: "center" }}
    >
      <Heading>{t("first-label")}</Heading>
      <Separator />
      <Heading>{t("second-label")}</Heading>
    </Flex>
  );
};
