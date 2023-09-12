import { AlertDialog } from "@rempi-ui/alert-dialog";
import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const AlertDialogPreview: FC = () => {
  const t = useTranslations("preview.alert-dialog");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="error">{t("button")}</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>{t("title")}</AlertDialog.Title>
            <AlertDialog.Description>
              {t("description")}
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>
                <Button variant="text">{t("cancel")}</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="error">{t("action")}</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Flex>
  );
};
