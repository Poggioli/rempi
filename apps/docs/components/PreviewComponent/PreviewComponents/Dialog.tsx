import { Button } from "@rempi-ui/button";
import { Dialog } from "@rempi-ui/dialog";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const DialogPreview: FC = () => {
  const t = useTranslations("preview.dialog");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>{t("trigger")}</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay blur />
          <Dialog.Content>
            <Dialog.CloseCross aria-label={t("close-cross")} />
            <Dialog.Title>{t("title")}</Dialog.Title>
            <Dialog.Description>{t("description")}</Dialog.Description>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              style={{ gap: 16, padding: 16 }}
            >
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-name")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-name")}
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-username")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-username")}
                />
              </Input.Label>
            </Flex>
            <Dialog.Footer>
              <Dialog.Close>
                <Button color="primary" variant="text">
                  {t("cancel")}
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button color="success">{t("save")}</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Flex>
  );
};
