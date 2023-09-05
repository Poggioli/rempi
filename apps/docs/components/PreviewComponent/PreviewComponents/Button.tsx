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
        padding: 2,
      }}
    >
      {/* i18n */}
      <Button>Olá eu sou um botão</Button>
      {/* i18n */}
      <IconButton aria-label="Baixe o conteúdo" color="success">
        <DownloadCloudIcon size={20} />
      </IconButton>
    </Flex>
  );
};
