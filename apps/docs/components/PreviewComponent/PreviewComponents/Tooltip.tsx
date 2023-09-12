import { IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/Flex";
import { Tooltip } from "@rempi-ui/tooltip";
import { HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const TooltipPreview: FC = () => {
  const t = useTranslations("preview.tooltip");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)", gap: "var(--spaces-4)" }}
    >
      <Tooltip.Root>
        <Tooltip.Trigger>
          <IconButton
            aria-label={t("trigger")}
            variant="text"
            shape="rounded"
            color="primary"
            style={{ padding: 8 }}
          >
            <HelpCircle size={16} />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {t("title")}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Flex>
  );
};
