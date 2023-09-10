import { Badge } from "@rempi-ui/badge";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const BadgePreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      {/* i18n */}
      <Badge>Olá sou um Badge</Badge>
    </Flex>
  );
};
