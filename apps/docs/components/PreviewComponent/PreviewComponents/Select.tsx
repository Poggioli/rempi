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
        {/* i18n */}
        <Select.Trigger aria-label="Comida">
          {/* i18n */}
          <Select.Value placeholder="Selecione a comida..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              {/* i18n */}
              <Select.Label>Frutas</Select.Label>
              {/* i18n */}
              <Select.Item value="apple">Maçã</Select.Item>
              {/* i18n */}
              <Select.Item disabled value="banana">
                Banana
              </Select.Item>
              {/* i18n */}
              <Select.Item value="blueberry">Mirtilo</Select.Item>
              {/* i18n */}
              <Select.Item value="grapes">Uva</Select.Item>
              {/* i18n */}
              <Select.Item value="pineapple">Abacaxi</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              {/* i18n */}
              <Select.Label>Vegetais</Select.Label>
              {/* i18n */}
              <Select.Item value="aubergine">Berinjela</Select.Item>
              {/* i18n */}
              <Select.Item value="broccoli">Brócolis</Select.Item>
              {/* i18n */}
              <Select.Item value="carrot" disabled>
                Cenoura
              </Select.Item>
              {/* i18n */}
              <Select.Item value="courgette">Abobrinha</Select.Item>
              {/* i18n */}
              <Select.Item value="leek">Alho-poró</Select.Item>
            </Select.Group>

            <Select.Separator />

            <Select.Group>
              {/* i18n */}
              <Select.Label>Carnes</Select.Label>
              {/* i18n */}
              <Select.Item value="beef">Carne bovina</Select.Item>
              {/* i18n */}
              <Select.Item value="chicken">Frango</Select.Item>
              {/* i18n */}
              <Select.Item value="lamb">Ovelha</Select.Item>
              {/* i18n */}
              <Select.Item value="pork">Carne suína</Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </Flex>
  );
};
