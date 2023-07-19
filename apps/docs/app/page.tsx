"use client";

import { Accordion } from "@rempi-ui/accordion";
import { AlertDialog } from "@rempi-ui/alert-dialog";
import { AspectRatio } from "@rempi-ui/aspect-ratio";
import { Avatar } from "@rempi-ui/avatar";
import { Button, IconButton } from "@rempi-ui/button";
import { Card } from "@rempi-ui/card";
import { Checkbox } from "@rempi-ui/checkbox";
import { Container } from "@rempi-ui/container";
import { ContextMenu } from "@rempi-ui/context-menu";
import { Dialog } from "@rempi-ui/dialog";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { HoverCard } from "@rempi-ui/hover-card";
import { Popover } from "@rempi-ui/popover";
import { Progress } from "@rempi-ui/progress";
import { Radio } from "@rempi-ui/radio";
import { Select } from "@rempi-ui/select";
import { Separator } from "@rempi-ui/separator";
import { Slider } from "@rempi-ui/slider";
import { Switch } from "@rempi-ui/switch";
import { Tabs } from "@rempi-ui/tabs";
import { Toggle } from "@rempi-ui/toggle";
import { Tooltip } from "@rempi-ui/tooltip";
import { Typography } from "@rempi-ui/typography";
import {
  BellIcon,
  Check,
  HelpCircle,
  Italic,
  SlidersHorizontal,
} from "lucide-react";
import { useContext, useState } from "react";
import "./page.scss";
import { FriendlyThemeName, ThemeProviderContext } from "./ThemeProvider";
import { Skeleton } from "@rempi-ui/skeleton";
import { Input } from "@rempi-ui/input";
import { Textarea } from "@rempi-ui/textarea";

export default function Page() {
  const { availableThemes, setTheme } = useContext(ThemeProviderContext);

  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");
  const [selectedTheme, setSelectedTheme] = useState<string>(
    availableThemes[0].toString()
  );

  const handleSelectTheme = (value: string) => {
    setSelectedTheme(value);
    setTheme(
      availableThemes.find(
        (availableTheme) => availableTheme.toString() === value
      )
    );
  };

  return (
    <Container variant="md" className="padding-8">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="gap-4"
      >
        <Heading>Select your theme here</Heading>
        <Select.Root value={selectedTheme} onValueChange={handleSelectTheme}>
          <Select.Trigger aria-label="Theme">
            <Select.Value placeholder="Select a theme...">
              {FriendlyThemeName[selectedTheme]}
            </Select.Value>
          </Select.Trigger>
          <Select.Content>
            <Select.Viewport>
              {availableThemes.map((availableTheme) => (
                <Select.Item
                  key={availableTheme.toString()}
                  value={availableTheme.toString()}
                >
                  {FriendlyThemeName[availableTheme.toString()]}
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            className="padding-8 b-dashed"
          >
            <Typography>Right click here</Typography>
          </Flex>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>
            Back <div className="ml-auto">⌘+[</div>
          </ContextMenu.Item>
          <ContextMenu.Item disabled>
            Foward <div className="ml-auto">⌘+]</div>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Reload <div className="ml-auto">⌘+R</div>
          </ContextMenu.Item>

          <ContextMenu.SubMenu>
            <ContextMenu.SubMenuTrigger>More Tools</ContextMenu.SubMenuTrigger>
            <ContextMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <ContextMenu.Item>
                Save Page As… <div className="ml-auto">⌘+S</div>
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
            Show Bookmarks <div className="ml-auto">⌘+B</div>
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

      <Separator className="margin-bt-8" />

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

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4 flex-c-1"
      >
        <div className="max-w-600">
          <AspectRatio>
            <img
              className="img-aspect-ratio"
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <Tooltip.Root>
          <Tooltip.Trigger>
            <IconButton
              className="rounded-button"
              aria-label="settings"
              variant="contained"
              shape="rounded"
              color="primary"
            >
              <HelpCircle size={16} />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>
            Add to library
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button color="error">Delete account</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay blur />
              <AlertDialog.Content>
                <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                <AlertDialog.Description>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
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
        </div>

        <div>
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
                  Make changes to your profile here. Click save when you're
                  done.
                </Dialog.Description>
                <Flex
                  direction="column"
                  wrap="wrap"
                  justifyContent="space-between"
                  className="gap-4 padding-b-4"
                >
                  <Input.Label
                    alignItems="flex-start"
                    direction="column"
                    className="width-80"
                  >
                    Name
                    <Input.Root
                      className="min-full-width"
                      placeholder="Enter your name"
                      defaultValue="João Vitor"
                    />
                  </Input.Label>
                  <Input.Label
                    alignItems="flex-start"
                    direction="column"
                    className="width-80"
                  >
                    Username
                    <Input.Root
                      className="min-full-width"
                      placeholder="Enter your username"
                      defaultValue="@Pogiolli"
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
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        className="gap-4"
      >
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <Button variant="solid" color="error">
            Error
          </Button>
          <Button variant="solid" color="primary">
            Primary
          </Button>
          <Button variant="solid" color="secondary">
            Secondary
          </Button>
          <Button variant="solid" color="success">
            Success
          </Button>
          <br />
          <Button variant="solid" disabled color="error">
            Error
          </Button>
          <Button variant="solid" disabled color="primary">
            Primary
          </Button>
          <Button variant="solid" disabled color="secondary">
            Secondary
          </Button>
          <Button variant="solid" disabled color="success">
            Success
          </Button>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        className="gap-4"
      >
        <Avatar.Root size="small">
          <Avatar.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root size="standard">
          <Avatar.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root size="large">
          <Avatar.Image
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root size="small">
          <Avatar.Fallback>PD</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root size="standard">
          <Avatar.Fallback>PD</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root size="large">
          <Avatar.Fallback>PD</Avatar.Fallback>
        </Avatar.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        className="gap-4"
      >
        <Tabs.Root defaultValue="photos" className="max-w-600">
          <Tabs.List>
            <Tabs.Trigger value="photos">Photos</Tabs.Trigger>
            <Tabs.Trigger value="description">Description</Tabs.Trigger>
            <Tabs.Trigger value="personal-settings" disabled>
              Personal Settings
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="photos">
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-around"
              alignItems="center"
              className="gap-4 padding-6 bordered"
            >
              <Avatar.Root size="large">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Boy"
                />
                <Avatar.Fallback delayMs={600}>B</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root size="large">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Girl"
                />
                <Avatar.Fallback delayMs={600}>G</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root size="large">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                  alt="Dog"
                />
                <Avatar.Fallback delayMs={600}>D</Avatar.Fallback>
              </Avatar.Root>
            </Flex>
          </Tabs.Content>
          <Tabs.Content value="description">
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-around"
              alignItems="center"
              className="gap-4 padding-6 bordered"
            >
              <Typography color="low-contrast" fontSize="md" lineHeight={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor venenatis ipsum, ac volutpat justo. Praesent ut
                molestie sem, eu laoreet nulla. Nullam varius ut neque sit amet
                dignissim. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Morbi eu ante posuere, bibendum ante nec, auctor
                felis. Donec vitae luctus risus, a venenatis nisi. Nunc
                consectetur lectus at dolor aliquet fermentum. Duis vehicula,
                nisl sed imperdiet porta, lorem dolor accumsan mi, vel semper
                lectus arcu vel arcu. Maecenas porttitor lacus et arcu ultrices,
                quis pharetra magna cursus. Nullam cursus mattis hendrerit.
                Donec leo purus, lacinia sed lacus et, aliquam.
              </Typography>
            </Flex>
          </Tabs.Content>
          <Tabs.Content value="personal-setting"></Tabs.Content>
        </Tabs.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root placeholder="Email" />
        </Input.Label>
        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root placeholder="Email" disabled />
        </Input.Label>
        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root
            placeholder="Email"
            value="joaopogiolli@gmail.com"
            disabled
          />
        </Input.Label>

        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root aria-invalid placeholder="Email" />
        </Input.Label>
        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root aria-invalid placeholder="Email" disabled />
        </Input.Label>
        <Input.Label alignItems="flex-start" direction="column">
          Enter your email
          <Input.Root
            aria-invalid
            placeholder="Email"
            value="joaopogiolli@gmail.com"
            disabled
          />
        </Input.Label>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root placeholder="Email" />
        </Textarea.Label>
        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root placeholder="Email" disabled />
        </Textarea.Label>
        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root
            placeholder="Email"
            value="joaopogiolli@gmail.com"
            disabled
          />
        </Textarea.Label>

        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root aria-invalid placeholder="Email" />
        </Textarea.Label>
        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root aria-invalid placeholder="Email" disabled />
        </Textarea.Label>
        <Textarea.Label alignItems="flex-start" direction="column">
          Enter your email
          <Textarea.Root
            aria-invalid
            placeholder="Email"
            value="joaopogiolli@gmail.com"
            disabled
          />
        </Textarea.Label>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <Checkbox.Label>
            <Checkbox.Check />
            teste
          </Checkbox.Label>

          <Checkbox.Label>
            <Checkbox.Check disabled />
            teste
          </Checkbox.Label>

          <Checkbox.Label>
            <Checkbox.Check defaultChecked />
            teste
          </Checkbox.Label>

          <Checkbox.Label>
            <Checkbox.Check defaultChecked disabled />
            teste
          </Checkbox.Label>
        </div>

        <div>
          <Checkbox.Label>
            teste
            <Checkbox.Check />
          </Checkbox.Label>

          <Checkbox.Label>
            teste
            <Checkbox.Check disabled />
          </Checkbox.Label>

          <Checkbox.Label>
            teste
            <Checkbox.Check defaultChecked />
          </Checkbox.Label>

          <Checkbox.Label>
            teste
            <Checkbox.Check defaultChecked disabled />
          </Checkbox.Label>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton
                className="rounded-button"
                aria-label="settings"
                variant="contained"
                shape="rounded"
                color="primary"
              >
                <SlidersHorizontal size={16} />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                Back <div className="ml-auto">⌘+[</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled>
                Foward <div className="ml-auto">⌘+]</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                Reload <div className="ml-auto">⌘+R</div>
              </DropdownMenu.Item>

              <DropdownMenu.SubMenu>
                <DropdownMenu.SubMenuTrigger>
                  More Tools
                </DropdownMenu.SubMenuTrigger>
                <DropdownMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
                  <DropdownMenu.Item>
                    Save Page As… <div className="ml-auto">⌘+S</div>
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
                Show Bookmarks <div className="ml-auto">⌘+B</div>
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
        </div>

        <div>
          <HoverCard.Root>
            <HoverCard.Trigger>
              <a
                className="image-trigger"
                href="https://twitter.com/radix_ui"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  className="image image--normal"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                  alt="Radix UI"
                />
              </a>
            </HoverCard.Trigger>
            <HoverCard.Content className="max-w-300">
              <Flex direction="column" className="gap-2">
                <img
                  className="image image--large"
                  src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                  alt="Radix UI"
                />
                <Flex direction="column" className="gap-4">
                  <Flex direction="column">
                    <Typography
                      as="h6"
                      color="high-contrast"
                      fontWeight="bold"
                      fontSize="md"
                      lineHeight={2}
                    >
                      Radix
                    </Typography>
                    <Typography
                      color="low-contrast"
                      fontSize="sm"
                      lineHeight={2}
                    >
                      @radix_ui
                    </Typography>
                  </Flex>
                  <Typography
                    color="high-contrast"
                    fontSize="md"
                    lineHeight={1}
                  >
                    Components, icons, colors, and templates for building
                    high-quality, accessible UI. Free and open-source.
                  </Typography>
                  <Flex className="gap-4" alignItems="center">
                    <Flex className="gap-1" alignItems="center">
                      <Typography
                        color="high-contrast"
                        fontWeight="bold"
                        fontSize="md"
                        lineHeight={2}
                      >
                        0
                      </Typography>
                      <Typography
                        color="low-contrast"
                        fontSize="sm"
                        lineHeight={2}
                      >
                        Following
                      </Typography>
                    </Flex>
                    <Flex className="gap-1" alignItems="center">
                      <Typography
                        color="high-contrast"
                        fontWeight="bold"
                        fontSize="md"
                        lineHeight={2}
                      >
                        2,900
                      </Typography>
                      <Typography
                        color="low-contrast"
                        fontSize="sm"
                        lineHeight={2}
                      >
                        Followers
                      </Typography>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <HoverCard.Arrow />
            </HoverCard.Content>
          </HoverCard.Root>
        </div>

        <div>
          <Popover.Root>
            <Popover.Trigger asChild>
              <IconButton
                className="rounded-button"
                aria-label="settings"
                variant="contained"
                shape="rounded"
                color="primary"
              >
                <SlidersHorizontal size={16} />
              </IconButton>
            </Popover.Trigger>
            <Popover.Content>
              <Flex direction="column" className="max-w-300">
                <Typography
                  fontSize="sm"
                  fontWeight="normal"
                  color="low-contrast"
                  lineHeight={2}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus ut vulputate elit, at efficitur tortor. Fusce at dui
                  est. Morbi ac mauris vehicula, sagittis tortor eget, ultricies
                  erat. Vivamus suscipit, arcu a lobortis eleifend, augue tellus
                  laoreet ipsum, vitae cursus magna erat sed lorem. Etiam at
                  augue pellentesque, sollicitudin metus.
                </Typography>
              </Flex>
              <Popover.CloseCross aria-label="Close" />
              <Popover.Arrow />
            </Popover.Content>
          </Popover.Root>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <Switch.Label>
            <Switch.Thumb defaultChecked />
            Switch 1
          </Switch.Label>
          <br />

          <Switch.Label>
            <Switch.Thumb defaultChecked disabled />
            Switch 2
          </Switch.Label>
          <br />

          <Switch.Label>
            <Switch.Thumb />
            Switch 3
          </Switch.Label>
          <br />

          <Switch.Label>
            <Switch.Thumb disabled />
            Switch 4
          </Switch.Label>
        </div>

        <div>
          <Switch.Label>
            Switch 1
            <Switch.Thumb defaultChecked />
          </Switch.Label>
          <br />

          <Switch.Label>
            Switch 2
            <Switch.Thumb defaultChecked disabled />
          </Switch.Label>
          <br />

          <Switch.Label>
            Switch 3
            <Switch.Thumb />
          </Switch.Label>
          <br />

          <Switch.Label>
            Switch 4
            <Switch.Thumb disabled />
          </Switch.Label>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <Card.Root>
          <Card.Header>
            <Card.Title>Notifications</Card.Title>
            <Card.Description>You have 3 unread messages.</Card.Description>
          </Card.Header>
          <Card.Content direction="column">
            <Flex
              alignItems="center"
              className="gap-4 rounded-md border padding-4"
            >
              <BellIcon size={16} className="high-contrast" />
              <Flex direction="column" className="gap-1">
                <Typography
                  fontSize="sm"
                  fontWeight="semi-bold"
                  color="high-contrast"
                  lineHeight={1}
                >
                  Push Notifications
                </Typography>
                <Typography
                  fontSize="sm"
                  fontWeight="regular"
                  color="low-contrast"
                  lineHeight={1}
                >
                  Send notifications to device.
                </Typography>
              </Flex>
              <Switch.Thumb />
            </Flex>
            <div>
              {[
                {
                  title: "Your call has been confirmed.",
                  description: "1 hour ago",
                },
                {
                  title: "You have a new message!",
                  description: "1 hour ago",
                },
                {
                  title: "Your subscription is expiring soon!",
                  description: "2 hours ago",
                },
              ].map((notification, index) => (
                <Flex
                  key={index}
                  direction="row"
                  alignItems="start"
                  className="gap-3 margin-b-4 margin-b-4--last-child-0 padding-b-4 padding-b-4--last-child-0"
                >
                  <Typography className="pill info size-2 translate-y-1" />
                  <Flex direction="column" className="gap-1">
                    <Typography
                      fontSize="sm"
                      fontWeight="semi-bold"
                      color="high-contrast"
                      lineHeight={1}
                    >
                      {notification.title}
                    </Typography>
                    <Typography
                      fontSize="sm"
                      fontWeight="regular"
                      color="low-contrast"
                      lineHeight={1}
                    >
                      {notification.description}
                    </Typography>
                  </Flex>
                </Flex>
              ))}
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="full-width">
              <Check size={16} className="mr-3" /> Mark all as read
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root bordered={false}>
          <Card.Header>
            <Card.Title>Notifications</Card.Title>
            <Card.Description>You have 3 unread messages.</Card.Description>
          </Card.Header>
          <Card.Content direction="column">
            <Flex
              alignItems="center"
              className="gap-4 rounded-md border padding-4"
            >
              <BellIcon size={16} className="high-contrast" />
              <Flex direction="column" className="gap-1">
                <Typography
                  fontSize="sm"
                  fontWeight="semi-bold"
                  color="high-contrast"
                  lineHeight={1}
                >
                  Push Notifications
                </Typography>
                <Typography
                  fontSize="sm"
                  fontWeight="regular"
                  color="low-contrast"
                  lineHeight={1}
                >
                  Send notifications to device.
                </Typography>
              </Flex>
              <Switch.Thumb />
            </Flex>
            <div>
              {[
                {
                  title: "Your call has been confirmed.",
                  description: "1 hour ago",
                },
                {
                  title: "You have a new message!",
                  description: "1 hour ago",
                },
                {
                  title: "Your subscription is expiring soon!",
                  description: "2 hours ago",
                },
              ].map((notification, index) => (
                <Flex
                  key={index}
                  direction="row"
                  alignItems="start"
                  className="gap-3 margin-b-4 margin-b-4--last-child-0 padding-b-4 padding-b-4--last-child-0"
                >
                  <Typography className="pill info size-2 translate-y-1" />
                  <Flex direction="column" className="gap-1">
                    <Typography
                      fontSize="sm"
                      fontWeight="semi-bold"
                      color="high-contrast"
                      lineHeight={1}
                    >
                      {notification.title}
                    </Typography>
                    <Typography
                      fontSize="sm"
                      fontWeight="regular"
                      color="low-contrast"
                      lineHeight={1}
                    >
                      {notification.description}
                    </Typography>
                  </Flex>
                </Flex>
              ))}
            </div>
          </Card.Content>
          <Card.Footer>
            <Button className="full-width">
              <Check size={16} className="mr-3" /> Mark all as read
            </Button>
          </Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Skeleton
              style={{
                height: "16px",
                width: "115px",
                borderRadius: "4px",
              }}
            />
            <Skeleton
              style={{
                height: "21px",
                width: "220px",
                borderRadius: "4px",
              }}
            />
          </Card.Header>
          <Card.Content direction="column">
            <Skeleton
              style={{
                height: "71px",
                width: "330px",
                borderRadius: "4px",
              }}
            />
            <div>
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Flex
                    key={index}
                    direction="row"
                    alignItems="start"
                    className="gap-3 margin-b-4 margin-b-4--last-child-0 padding-b-4 padding-b-4--last-child-0"
                  >
                    <Skeleton
                      style={{
                        height: "8px",
                        width: "8px",
                        borderRadius: "4px",
                      }}
                    />
                    <Flex direction="column" className="gap-1">
                      <Skeleton
                        style={{
                          height: "16px",
                          width: "220px",
                          borderRadius: "4px",
                        }}
                      />
                      <Skeleton
                        style={{
                          height: "16px",
                          width: "80px",
                          borderRadius: "4px",
                        }}
                      />
                    </Flex>
                  </Flex>
                ))}
            </div>
          </Card.Content>
          <Card.Footer>
            <Skeleton
              style={{
                height: "34px",
                width: "100%",
                borderRadius: "4px",
              }}
            />
          </Card.Footer>
        </Card.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <Toggle>
          <Italic size={16} />
        </Toggle>

        <Toggle defaultPressed>
          <Italic size={16} />
        </Toggle>

        <Toggle disabled>
          <Italic size={16} />
        </Toggle>

        <Toggle disabled defaultPressed>
          <Italic size={16} />
        </Toggle>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <Radio.Root>
            <Radio.Label>
              <Radio.Item value="radio-1" />
              Radio 1
            </Radio.Label>

            <Radio.Label>
              <Radio.Item value="radio-2" disabled />
              Radio 2
            </Radio.Label>

            <Radio.Label>
              <Radio.Item value="radio-3" />
              Radio 3
            </Radio.Label>
          </Radio.Root>
        </div>

        <div>
          <Radio.Root defaultValue="radio-2-1">
            <Radio.Label>
              Radio 1
              <Radio.Item value="radio-1-1" />
            </Radio.Label>

            <Radio.Label>
              Radio 2
              <Radio.Item value="radio-2-1" disabled />
            </Radio.Label>

            <Radio.Label>
              Radio 3
              <Radio.Item value="radio-3-1" />
            </Radio.Label>
          </Radio.Root>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
          <Select.Root disabled defaultValue="banana">
            <Select.Trigger aria-label="Food">
              <Select.Value placeholder="Select a fruit…" />
            </Select.Trigger>
            <Select.Content>
              <Select.Viewport>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item disabled value="banana">
                    Banana
                  </Select.Item>
                  <Select.Item value="blueberry">Blueberry</Select.Item>
                  <Select.Item value="grapes">Grapes</Select.Item>
                  <Select.Item value="pineapple">Pineapple</Select.Item>
                </Select.Group>

                <Select.Separator />

                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value="aubergine">Aubergine</Select.Item>
                  <Select.Item value="broccoli">Broccoli</Select.Item>
                  <Select.Item value="carrot" disabled>
                    Carrot
                  </Select.Item>
                  <Select.Item value="courgette">Courgette</Select.Item>
                  <Select.Item value="leek">Leek</Select.Item>
                </Select.Group>

                <Select.Separator />

                <Select.Group>
                  <Select.Label>Meat</Select.Label>
                  <Select.Item value="beef">Beef</Select.Item>
                  <Select.Item value="chicken">Chicken</Select.Item>
                  <Select.Item value="lamb">Lamb</Select.Item>
                  <Select.Item value="pork">Pork</Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        </div>

        <div>
          <Select.Root defaultValue="banana">
            <Select.Trigger aria-label="Food">
              <Select.Value placeholder="Select a fruit…" />
            </Select.Trigger>
            <Select.Content>
              <Select.Viewport>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item disabled value="banana">
                    Banana
                  </Select.Item>
                  <Select.Item value="blueberry">Blueberry</Select.Item>
                  <Select.Item value="grapes">Grapes</Select.Item>
                  <Select.Item value="pineapple">Pineapple</Select.Item>
                </Select.Group>

                <Select.Separator />

                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value="aubergine">Aubergine</Select.Item>
                  <Select.Item value="broccoli">Broccoli</Select.Item>
                  <Select.Item value="carrot" disabled>
                    Carrot
                  </Select.Item>
                  <Select.Item value="courgette">Courgette</Select.Item>
                  <Select.Item value="leek">Leek</Select.Item>
                </Select.Group>

                <Select.Separator />

                <Select.Group>
                  <Select.Label>Meat</Select.Label>
                  <Select.Item value="beef">Beef</Select.Item>
                  <Select.Item value="chicken">Chicken</Select.Item>
                  <Select.Item value="lamb">Lamb</Select.Item>
                  <Select.Item value="pork">Pork</Select.Item>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        </div>
      </Flex>

      <Separator className="margin-bt-8" />

      <Progress value={75} size="small" />
      <br />
      <Progress value={50} size="standard" />
      <br />
      <Progress value={25} size="large" />

      <Separator className="margin-bt-8" />

      <Slider.Root defaultValue={[50]} max={100} step={1}>
        <Slider.Thumb aria-label="Volume" />
      </Slider.Root>

      <Separator className="margin-bt-8" />

      <Slider.Root disabled defaultValue={[75]} max={100} step={1}>
        <Slider.Thumb aria-label="Volume" />
      </Slider.Root>

      <Separator className="margin-bt-8" />

      <Flex
        alignItems="center"
        justifyContent="space-around"
        direction="row"
        wrap="wrap"
        className="gap-8 min-h-300"
      >
        <Slider.Root
          defaultValue={[50]}
          orientation="vertical"
          max={100}
          step={1}
        >
          <Slider.Thumb aria-label="Volume" />
          <Slider.Thumb aria-label="Volume" />
        </Slider.Root>

        <Separator orientation="vertical" />

        <Slider.Root
          disabled
          defaultValue={[75]}
          orientation="vertical"
          max={100}
          step={1}
        >
          <Slider.Thumb aria-label="Volume" />
        </Slider.Root>
      </Flex>
    </Container>
  );
}
