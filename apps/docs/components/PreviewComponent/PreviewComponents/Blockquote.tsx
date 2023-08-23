import { Blockquote } from "@rempi-ui/blockquote";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const BlockquotePreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Blockquote>Hello I'm a Blockquote</Blockquote>
    </Flex>
  );
};
