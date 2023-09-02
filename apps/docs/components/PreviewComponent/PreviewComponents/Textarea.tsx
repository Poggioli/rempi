import { Flex } from "@rempi-ui/Flex";
import { Textarea } from "@rempi-ui/textarea";
import { FC } from "react";

export const TextareaPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)" }}
    >
      <Textarea.Label alignItems="flex-start" flexDirection="column">
        Message
        <Textarea.Root placeholder="Type your message here" />
      </Textarea.Label>
    </Flex>
  );
};
