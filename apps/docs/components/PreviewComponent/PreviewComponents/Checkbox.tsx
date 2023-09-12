import { Checkbox } from "@rempi-ui/checkbox";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const CheckboxPreview: FC = () => {
  const t = useTranslations("preview.checkbox");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Checkbox.Label>
        <Checkbox.Check />
        {t("label")}
      </Checkbox.Label>
    </Flex>
  );
};
