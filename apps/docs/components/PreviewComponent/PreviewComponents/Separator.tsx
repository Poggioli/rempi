import { Flex } from "@rempi-ui/Flex";
import { Heading } from "@rempi-ui/heading";
import { Separator } from "@rempi-ui/separator";
import { FC } from "react";

export const SeparatorPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Heading>Between us there</Heading>
      <Separator />
      <Heading>Is a separator</Heading>
    </Flex>
  );
};
