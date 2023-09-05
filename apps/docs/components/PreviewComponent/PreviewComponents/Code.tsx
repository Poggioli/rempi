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
      {/* i18n */}
      <Code>console.log('Eu sou um Code')</Code>
    </Flex>
  );
};
