import { Button } from "@rempi-ui/button";
import { Dialog } from "@rempi-ui/dialog";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { FC } from "react";

export const DialogPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Edit profile</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay blur />
          <Dialog.Content>
            <Dialog.CloseCross aria-label="Close" />
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
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
                Name
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Enter your name"
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                Username
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Enter your username"
                />
              </Input.Label>
            </Flex>
            <Dialog.Footer>
              <Dialog.Close>
                <Button color="primary" variant="text">
                  Cancel
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button color="success">Save changes</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Flex>
  );
};
