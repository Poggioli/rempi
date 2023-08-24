import { Label } from "@rempi-ui/label";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const LabelPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Label>Hello I'm a Label</Label>
    </Flex>
  );
};
