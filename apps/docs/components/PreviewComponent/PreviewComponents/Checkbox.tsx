import { Checkbox } from "@rempi-ui/checkbox";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const CheckboxPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Checkbox.Label>
        <Checkbox.Check />I have read and accept the terms of use
      </Checkbox.Label>
    </Flex>
  );
};
