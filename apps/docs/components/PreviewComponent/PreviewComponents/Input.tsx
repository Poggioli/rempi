import { Flex } from "@rempi-ui/Flex";
import { Input } from "@rempi-ui/input";
import { FC } from "react";

export const InputPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)" }}
    >
      <Input.Label alignItems="flex-start" flexDirection="column">
        Name
        <Input.Root placeholder="Enter your name" />
      </Input.Label>
    </Flex>
  );
};
