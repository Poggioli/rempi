import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Radio } from "@rempi-ui/radio";
import { FC } from "react";

export const RadioPreview: FC = () => {
  return (
    <Flex flexDirection="column" style={{ padding: 2, gap: 12 }}>
      <Heading variant="6" fontWeight="normal" fontSize="xlg">Select your favorite color</Heading>
      <Radio.Root style={{ gap: 16 }}>
        <Radio.Label>
          <Radio.Item value="green" /> Green
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="purple" /> Purple
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="brown" /> Brown
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="white" /> White
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="yellow" /> Yellow
        </Radio.Label>
      </Radio.Root>
    </Flex>
  );
};
