import { AlertDialog } from "@rempi-ui/alert-dialog";
import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const AlertDialogPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="error">Delete account</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>
                <Button variant="text">Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="error">Yes, delete account</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </Flex>
  );
};
