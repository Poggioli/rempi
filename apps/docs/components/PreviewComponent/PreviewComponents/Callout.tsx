import { Callout } from "@rempi-ui/callout";
import { Flex } from "@rempi-ui/flex";
import { Info } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const CalloutPreview: FC = () => {
  const t = useTranslations("preview.callout");

  return (
    <Flex
      justifyContent="center"
      style={{ padding: 2, gap: "var(--spaces-6)" }}
    >
      <Callout.Root>
        <Callout.Icon>
          <Info size={16} />
        </Callout.Icon>
        <Callout.Text>{t("label")}</Callout.Text>
      </Callout.Root>
    </Flex>
  );
};
