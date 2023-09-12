import { Button, IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { DownloadCloudIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const ButtonPreview: FC = () => {
  const t = useTranslations("preview.button");

  return (
    <Flex
      justifyContent="center"
      style={{
        gap: 16,
        padding: 2,
      }}
    >
      <Button>{t("label")}</Button>
      <IconButton aria-label={t("aria-label")} color="success">
        <DownloadCloudIcon size={20} />
      </IconButton>
    </Flex>
  );
};
