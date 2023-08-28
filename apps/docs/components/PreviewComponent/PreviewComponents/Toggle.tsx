import { Flex } from "@rempi-ui/Flex";
import { Toggle } from "@rempi-ui/toggle";
import { Italic } from "lucide-react";
import { FC } from "react";

export const TogglePreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)", gap: "var(--spaces-4)" }}
    >
      <Toggle>
        <Italic size={16} />
      </Toggle>

      <Toggle defaultPressed>
        <Italic size={16} />
      </Toggle>

      <Toggle disabled>
        <Italic size={16} />
      </Toggle>

      <Toggle disabled defaultPressed>
        <Italic size={16} />
      </Toggle>
    </Flex>
  );
};
