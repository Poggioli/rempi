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
      {/* i18n */}
      <Heading>Entre nós</Heading>
      <Separator />
      {/* i18n */}
      <Heading>é um Separator</Heading>
    </Flex>
  );
};
