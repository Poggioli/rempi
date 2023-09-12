import { Badge } from "@rempi-ui/badge";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const BadgePreview: FC = () => {
  const t = useTranslations("preview.badge");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Badge>{t("label")}</Badge>
    </Flex>
  );
};
