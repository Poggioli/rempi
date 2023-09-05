import { Button } from "@rempi-ui/button";
import { Drawer } from "@rempi-ui/drawer";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { FC } from "react";

export const DrawerPreview: FC = () => {
  return (
    <Flex
      justifyContent="center"
      style={{ padding: 2, gap: "var(--spaces-2)" }}
    >
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Left Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="left">
            <Drawer.CloseCross aria-label="Close" />
            <Drawer.Title>Edit profile</Drawer.Title>
            <Drawer.Description>
              Make changes to your profile here. Click save when you're done.
            </Drawer.Description>
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
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancel
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Save changes</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Top Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="top">
            <Drawer.CloseCross aria-label="Close" />
            <Drawer.Title>Edit profile</Drawer.Title>
            <Drawer.Description>
              Make changes to your profile here. Click save when you're done.
            </Drawer.Description>
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
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancel
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Save changes</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Right Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="right">
            <Drawer.CloseCross aria-label="Close" />
            <Drawer.Title>Edit profile</Drawer.Title>
            <Drawer.Description>
              Make changes to your profile here. Click save when you're done.
            </Drawer.Description>
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
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancel
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Save changes</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Bottom Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="bottom">
            <Drawer.CloseCross aria-label="Close" />
            <Drawer.Title>Edit profile</Drawer.Title>
            <Drawer.Description>
              Make changes to your profile here. Click save when you're done.
            </Drawer.Description>
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
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancel
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Save changes</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Flex>
  );
};
