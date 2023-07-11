"use client";

import { Accordion } from "@rempi-ui/accordion";
import { AlertDialog } from "@rempi-ui/alert-dialog";
import { Button, IconButton } from "@rempi-ui/button";
import { Checkbox } from "@rempi-ui/checkbox";
import { Container } from "@rempi-ui/container";
import { ContextMenu } from "@rempi-ui/context-menu";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { Dialog } from "@rempi-ui/dialog";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { DropdownMenu } from "@rempi-ui/dropdown-menu"
import "./page.scss"

export default function Page() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");

  return (
    <Container
      variant="md"
      style={{
        padding: "32px",
      }}
    >
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{
              padding: "32px",
              border: "2px dashed var(--colors-primary12)",
            }}
          >
            <Typography>Right click here</Typography>
          </Flex>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>
            Back <div style={{ marginLeft: "auto" }}>⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item disabled>
            Foward <div style={{ marginLeft: "auto" }}>⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Reload <div style={{ marginLeft: "auto" }}>⌘+R</div>
          </ContextMenu.Item>

          <ContextMenu.SubMenu>
            <ContextMenu.SubMenuTrigger>More Tools</ContextMenu.SubMenuTrigger>
            <ContextMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <ContextMenu.Item>
                Save Page As… <div style={{ marginLeft: "auto" }}>⌘+S</div>
              </ContextMenu.Item>
              <ContextMenu.Item>Create Shortcut…</ContextMenu.Item>
              <ContextMenu.Item>Name Window…</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item>Developer Tools</ContextMenu.Item>
            </ContextMenu.SubMenuContent>
          </ContextMenu.SubMenu>

          <ContextMenu.Separator />

          <ContextMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks <div style={{ marginLeft: "auto" }}>⌘+B</div>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator />

          <ContextMenu.Label>People</ContextMenu.Label>

          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem value="pedro">
              Pedro Duarte
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="colm">
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Root>

      <br />
      <br />

      <Accordion.Root type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2" disabled>
          <Accordion.Header>
            <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      <br />
      <br />

      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="error">Delete account</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay blur />
          <AlertDialog.Content>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <AlertDialog.Footer>
              <AlertDialog.Cancel>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button color="error">Yes, delete account</Button>
              </AlertDialog.Action>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>

      <br />
      <br />

      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <br />
      <Button variant="contained" disabled color="error">
        Error
      </Button>
      <Button variant="contained" disabled color="primary">
        Primary
      </Button>
      <Button variant="contained" disabled color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled color="success">
        Success
      </Button>

      <br />
      <br />

      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <br />
      <Button variant="outlined" disabled color="error">
        Error
      </Button>
      <Button variant="outlined" disabled color="primary">
        Primary
      </Button>
      <Button variant="outlined" disabled color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled color="success">
        Success
      </Button>

      <br />
      <br />

      <Button variant="text" color="error">
        Error
      </Button>
      <Button variant="text" color="primary">
        Primary
      </Button>
      <Button variant="text" color="secondary">
        Secondary
      </Button>
      <Button variant="text" color="success">
        Success
      </Button>
      <br />
      <Button variant="text" disabled color="error">
        Error
      </Button>
      <Button variant="text" disabled color="primary">
        Primary
      </Button>
      <Button variant="text" disabled color="secondary">
        Secondary
      </Button>
      <Button variant="text" disabled color="success">
        Success
      </Button>

      <br />
      <br />

      <Checkbox.Container>
        <Checkbox.Check id="check-1" />
        <Checkbox.Label htmlFor="check-1">teste</Checkbox.Label>
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Check id="check-2" disabled />
        <Checkbox.Label htmlFor="check-2">teste</Checkbox.Label>
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Check id="check-3" checked />
        <Checkbox.Label htmlFor="check-3">teste</Checkbox.Label>
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Check id="check-4" checked disabled />
        <Checkbox.Label htmlFor="check-4">teste</Checkbox.Label>
      </Checkbox.Container>

      <br />
      <br />

      <Checkbox.Container>
        <Checkbox.Label htmlFor="check-1-1">teste</Checkbox.Label>
        <Checkbox.Check id="check-1-1" />
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Label htmlFor="check-2-1">teste</Checkbox.Label>
        <Checkbox.Check id="check-2-1" disabled />
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Label htmlFor="check-3-1">teste</Checkbox.Label>
        <Checkbox.Check id="check-3-1" checked />
      </Checkbox.Container>

      <Checkbox.Container>
        <Checkbox.Label htmlFor="check-4-1">teste</Checkbox.Label>
        <Checkbox.Check id="check-4-1" checked disabled />
      </Checkbox.Container>

      <br />
      <br />

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

      <br />
      <br />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton className="rounded-button" aria-label="settings" variant="contained" shape="rounded" color="primary">
            <SlidersHorizontal size={16} />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            Back <div style={{ marginLeft: "auto" }}>⌘+[</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            Foward <div style={{ marginLeft: "auto" }}>⌘+]</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Reload <div style={{ marginLeft: "auto" }}>⌘+R</div>
          </DropdownMenu.Item>

          <DropdownMenu.SubMenu>
            <DropdownMenu.SubMenuTrigger>More Tools</DropdownMenu.SubMenuTrigger>
            <DropdownMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <DropdownMenu.Item>
                Save Page As… <div style={{ marginLeft: "auto" }}>⌘+S</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
              <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
            </DropdownMenu.SubMenuContent>
          </DropdownMenu.SubMenu>

          <DropdownMenu.Separator />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            Show Bookmarks <div style={{ marginLeft: "auto" }}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          <DropdownMenu.Label>People</DropdownMenu.Label>

          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem value="pedro">
              Pedro Duarte
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="colm">
              Colm Tuite
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Container>
  );
}
