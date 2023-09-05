import { AlertDialog } from "@rempi-ui/alert-dialog";
import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const AlertDialogPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          {/* i18n */}
          <Button color="error">Deletar conta</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            {/* i18n */}
            <AlertDialog.Title>Você tem certeza absoluta?</AlertDialog.Title>
            <AlertDialog.Description>
              {/* i18n */}
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removará seus dados de nossos servidores.
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>
                {/* i18n */}
                <Button variant="text">Cancelar</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                {/* i18n */}
                <Button color="error">Sim, excluir conta</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Flex>
  );
};
