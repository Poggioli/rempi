import { Label } from "@rempi-ui/label";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";
import { useTranslations } from "next-intl";

export const LabelPreview: FC = () => {
  const t = useTranslations("preview.label");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Label>{t("label")}</Label>
    </Flex>
  );
};
