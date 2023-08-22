import { Button, IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { DownloadCloudIcon } from "lucide-react";
import { FC } from "react";

export const ButtonPreview: FC = () => {
  return (
    <Flex
      justifyContent="center"
      style={{
        gap: 16,
      }}
    >
      <Button>Hello I'm a Button</Button>
      <IconButton aria-label="download" color="success">
        <DownloadCloudIcon size={18} />
      </IconButton>
    </Flex>
  );
};
