import { Callout } from "@rempi-ui/callout";
import { Flex } from "@rempi-ui/flex";
import { Info } from "lucide-react";
import { FC } from "react";

export const CalloutPreview: FC = () => {
  return (
    <Flex
      justifyContent="center"
      style={{ padding: 2, gap: "var(--spaces-6)" }}
    >
      <Callout.Root>
        <Callout.Icon>
          <Info size={16} />
        </Callout.Icon>
        <Callout.Text>
          {/* i18n */}
          Você precisará de privilégios de administrador para instalar e acessar
          este aplicativo.
        </Callout.Text>
      </Callout.Root>
    </Flex>
  );
};
