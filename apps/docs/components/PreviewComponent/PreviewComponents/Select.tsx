import { Flex } from "@rempi-ui/Flex";
import { Select } from "@rempi-ui/select";
import { FC } from "react";

export const SelectPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Select.Root>
        <Select.Trigger aria-label="Food">
          <Select.Value placeholder="Select a food..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item disabled value="banana">
                Banana
              </Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              <Select.Item value="aubergine">Aubergine</Select.Item>
              <Select.Item value="broccoli">Broccoli</Select.Item>
              <Select.Item value="carrot" disabled>
                Carrot
              </Select.Item>
              <Select.Item value="courgette">Courgette</Select.Item>
              <Select.Item value="leek">Leek</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              <Select.Label>Meat</Select.Label>
              <Select.Item value="beef">Beef</Select.Item>
              <Select.Item value="chicken">Chicken</Select.Item>
              <Select.Item value="lamb">Lamb</Select.Item>
              <Select.Item value="pork">Pork</Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};
