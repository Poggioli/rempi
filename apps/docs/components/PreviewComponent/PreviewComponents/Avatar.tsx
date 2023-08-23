import { Avatar } from "@rempi-ui/avatar";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const AvatarPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Avatar.Root size="large">
        <Avatar.Image
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
      </Avatar.Root>
    </Flex>
  );
};
