import { Code } from "@rempi-ui/code";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const CodePreview: FC = () => {
  const t = useTranslations("preview.code");

  return (
    <Flex
      justifyContent="center"
      style={{
        padding: 2,
      }}
    >
      <Code>{t("label")}</Code>
    </Flex>
  );
};
