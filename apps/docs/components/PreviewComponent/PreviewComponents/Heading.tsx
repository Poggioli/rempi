import { Flex } from "@rempi-ui/Flex";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

export const HeadingPreview: FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      {/* i18n */}
      <Heading>Olá eu sou um Heading</Heading>
    </Flex>
  );
};
