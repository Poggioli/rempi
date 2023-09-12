import { Flex } from "@rempi-ui/Flex";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TypographyPreview: FC = () => {
  const t = useTranslations("preview.typography");

  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Typography>{t("label")}</Typography>
    </Flex>
  );
};
