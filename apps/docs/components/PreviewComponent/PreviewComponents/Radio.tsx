import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Radio } from "@rempi-ui/radio";
import { FC } from "react";

export const RadioPreview: FC = () => {
  return (
    <Flex flexDirection="column" style={{ padding: 2, gap: 12 }}>
      <Heading variant="6" fontWeight="normal" fontSize="xlg">
        {/* i18n */}
        Selecione sua cor favorita
      </Heading>
      <Radio.Root style={{ gap: 16 }}>
        <Radio.Label>
          {/* i18n */}
          <Radio.Item value="green" /> Verde
        </Radio.Label>
        <Radio.Label>
          {/* i18n */}
          <Radio.Item value="purple" /> Roxa
        </Radio.Label>
        <Radio.Label>
          {/* i18n */}
          <Radio.Item value="brown" /> Marrom
        </Radio.Label>
        <Radio.Label>
          {/* i18n */}
          <Radio.Item value="white" /> Branco
        </Radio.Label>
        <Radio.Label>
          {/* i18n */}
          <Radio.Item value="yellow" /> Amarelo
        </Radio.Label>
      </Radio.Root>
    </Flex>
  );
};
