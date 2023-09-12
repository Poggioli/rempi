import { Flex } from "@rempi-ui/Flex";
import { Heading } from "@rempi-ui/heading";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const HeadingPreview: FC = () => {
  const t = useTranslations("preview.heading");

  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Heading>{t("label")}</Heading>
    </Flex>
  );
};
