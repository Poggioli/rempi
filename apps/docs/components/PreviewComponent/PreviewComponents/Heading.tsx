import { Flex } from "@rempi-ui/Flex";
import { Heading } from "@rempi-ui/heading";
import { FC } from "react";

export const HeadingPreview: FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Heading>Hello I'm a Heading</Heading>
    </Flex>
  );
};
