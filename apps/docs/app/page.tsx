"use client";

import { Accordion } from "@rempi-ui/accordion";
import { AlertDialog } from "@rempi-ui/alert-dialog";
import { Button, IconButton } from "@rempi-ui/button";
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
import { Typography } from "@rempi-ui/typography";
import { SlidersHorizontal } from "lucide-react";
import { useContext, useState } from "react";
import "./page.scss";
import { FriendlyThemeName, ThemeProviderContext } from "./ThemeProvider";

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
        alignItems="center"
        justifyContent="space-around"
        wrap="wrap"
        className="gap-4"
      >
        <div>
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
        </div>

        <div>
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
          <Switch.Container>
            <Switch.Thumb defaultChecked id="switch-1" value="switch-1" />
            <Switch.Label htmlFor="switch-1">Switch 1</Switch.Label>
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Thumb
              defaultChecked
              disabled
              id="switch-2"
              value="switch-2"
            />
            <Switch.Label htmlFor="switch-2">Switch 2</Switch.Label>
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Thumb id="switch-3" value="switch-3" />
            <Switch.Label htmlFor="switch-3">Switch 3</Switch.Label>
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Thumb disabled id="switch-4" value="switch-4" />
            <Switch.Label htmlFor="switch-4">Switch 4</Switch.Label>
          </Switch.Container>
        </div>

        <div>
          <Switch.Container>
            <Switch.Label htmlFor="switch-1-1">Switch 1</Switch.Label>
            <Switch.Thumb defaultChecked id="switch-1-1" value="switch-1-1" />
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Label htmlFor="switch-2-1">Switch 2</Switch.Label>
            <Switch.Thumb
              defaultChecked
              disabled
              id="switch-2-1"
              value="switch-2-1"
            />
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Label htmlFor="switch-3-1">Switch 3</Switch.Label>
            <Switch.Thumb id="switch-3-1" value="switch-3-1" />
          </Switch.Container>
          <br />

          <Switch.Container>
            <Switch.Label htmlFor="switch-4-1">Switch 4</Switch.Label>
            <Switch.Thumb disabled id="switch-4-1" value="switch-4-1" />
          </Switch.Container>
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
          <Radio.Root>
            <Radio.Container>
              <Radio.Item id="radio-1" value="radio-1" />
              <Radio.Label htmlFor="radio-1">Radio 1</Radio.Label>
            </Radio.Container>

            <Radio.Container>
              <Radio.Item id="radio-2" value="radio-2" disabled />
              <Radio.Label htmlFor="radio-2">Radio 2</Radio.Label>
            </Radio.Container>

            <Radio.Container>
              <Radio.Item id="radio-3" value="radio-3" />
              <Radio.Label htmlFor="radio-3">Radio 3</Radio.Label>
            </Radio.Container>
          </Radio.Root>
        </div>

        <div>
          <Radio.Root defaultValue="radio-2-1">
            <Radio.Container>
              <Radio.Label htmlFor="radio-1-1">Radio 1</Radio.Label>
              <Radio.Item id="radio-1-1" value="radio-1-1" />
            </Radio.Container>

            <Radio.Container>
              <Radio.Label htmlFor="radio-2-1">Radio 2</Radio.Label>
              <Radio.Item id="radio-2-1" value="radio-2-1" disabled />
            </Radio.Container>

            <Radio.Container>
              <Radio.Label htmlFor="radio-3-1">Radio 3</Radio.Label>
              <Radio.Item id="radio-3-1" value="radio-3-1" />
            </Radio.Container>
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
