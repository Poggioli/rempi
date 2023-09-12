import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Radio } from "@rempi-ui/radio";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const RadioPreview: FC = () => {
  const t = useTranslations("preview.radio");

  return (
    <Flex flexDirection="column" style={{ padding: 2, gap: 12 }}>
      <Heading variant="6" fontWeight="normal" fontSize="xlg">
        {t("label")}
      </Heading>
      <Radio.Root style={{ gap: 16 }}>
        <Radio.Label>
          <Radio.Item value="green" /> {t("values.0")}
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="purple" /> {t("values.1")}
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="brown" /> {t("values.2")}
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="white" /> {t("values.3")}
        </Radio.Label>
        <Radio.Label>
          <Radio.Item value="yellow" /> {t("values.4")}
        </Radio.Label>
      </Radio.Root>
    </Flex>
  );
};
