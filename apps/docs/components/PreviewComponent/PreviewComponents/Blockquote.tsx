import { Blockquote } from "@rempi-ui/blockquote";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const BlockquotePreview: FC = () => {
  const t = useTranslations("preview.blockquote");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Blockquote>{t("label")}</Blockquote>
    </Flex>
  );
};
