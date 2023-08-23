import { Code } from "@rempi-ui/code";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const CodePreview: FC = () => {
  return (
    <Flex
      justifyContent="center"
      style={{
        padding: 2,
      }}
    >
      <Code>console.log('Hello I'm a Code')</Code>
    </Flex>
  );
};
