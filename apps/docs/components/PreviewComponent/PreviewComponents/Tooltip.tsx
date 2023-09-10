import { IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/Flex";
import { Tooltip } from "@rempi-ui/tooltip";
import { HelpCircle } from "lucide-react";
import { FC } from "react";

export const TooltipPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)", gap: "var(--spaces-4)" }}
    >
      <Tooltip.Root>
        <Tooltip.Trigger>
          {/* i18n */}
          <IconButton
            aria-label="Configurações"
            variant="text"
            shape="rounded"
            color="primary"
            style={{ padding: 8 }}
          >
            <HelpCircle size={16} />
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {/* i18n */}
          Adicionar biblioteca
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Root>
    </Flex>
  );
};
