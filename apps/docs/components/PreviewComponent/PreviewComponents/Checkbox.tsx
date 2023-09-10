import { Checkbox } from "@rempi-ui/checkbox";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const CheckboxPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Checkbox.Label>
        {/* i18n */}
        <Checkbox.Check />
        Eu li e aceito os termos de uso.
      </Checkbox.Label>
    </Flex>
  );
};
