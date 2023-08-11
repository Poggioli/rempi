"use client";

import { Accordion } from "@rempi-ui/accordion";
import { AlertDialog } from "@rempi-ui/alert-dialog";
import { AspectRatio } from "@rempi-ui/aspect-ratio";
import { Avatar } from "@rempi-ui/avatar";
import { Badge } from "@rempi-ui/badge";
import { Button, IconButton } from "@rempi-ui/button";
import { Calendar } from "@rempi-ui/calendar";
import { Card } from "@rempi-ui/card";
import { Checkbox } from "@rempi-ui/checkbox";
import { Collapsible } from "@rempi-ui/collpasible";
import { Combobox } from "@rempi-ui/combobox";
import { Container } from "@rempi-ui/container";
import { ContextMenu } from "@rempi-ui/context-menu";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Dialog } from "@rempi-ui/dialog";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { HoverCard } from "@rempi-ui/hover-card";
import { Input } from "@rempi-ui/input";
import { Menubar } from "@rempi-ui/menubar";
import { NavigationMenu } from "@rempi-ui/navigation-menu";
import { Popover } from "@rempi-ui/popover";
import { Progress } from "@rempi-ui/progress";
import { Radio } from "@rempi-ui/radio";
import { Select } from "@rempi-ui/select";
import { Separator } from "@rempi-ui/separator";
import { Skeleton } from "@rempi-ui/skeleton";
import { Slider } from "@rempi-ui/slider";
import { Switch } from "@rempi-ui/switch";
import { Table } from "@rempi-ui/table";
import { Tabs } from "@rempi-ui/tabs";
import { Textarea } from "@rempi-ui/textarea";
import { Toast } from "@rempi-ui/toast";
import { Toggle } from "@rempi-ui/toggle";
import { Tooltip } from "@rempi-ui/tooltip";
import { Typography } from "@rempi-ui/typography";
import {
  BellIcon,
  Check,
  FoldVertical,
  HelpCircle,
  Italic,
  SlidersHorizontal,
} from "lucide-react";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "./page.scss";
import { FriendlyThemeName, ThemeProviderContext } from "./ThemeProvider";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

const INVOICES = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const REGIONS_AB = {
  acre: "AC",
  amapa: "AP",
  amazonas: "AM",
  para: "PA",
  rondonia: "RO",
  roraima: "RR",
  tocantis: "TO",
  alagoas: "AL",
  bahia: "BA",
  ceara: "CE",
  maranhao: "MA",
  paraiba: "PB",
  pernambuco: "PE",
  piaui: "PI",
  "rio-grande-do-norte": "RN",
  sergipe: "SE",
  goias: "GO",
  "mato-grosso": "MT",
  "mato-grosso-do-sul": "MS",
  "espirito-santo": "ES",
  "minas-gerais": "MG",
  "rio-de-janeiro": "RJ",
  "sao-paulo": "SP",
  parana: "PR",
  "rio-grande-do-sul": "RS",
  "santa-catarina": "SC",
};

const REGIONS = [
  {
    name: "Norte",
    states: [
      { index: 1, value: "acre", name: "Acre" },
      { index: 2, value: "amapa", name: "Amapá" },
      { index: 3, value: "amazonas", name: "Amazonas" },
      { index: 4, value: "para", name: "Pará" },
      { index: 5, value: "rondonia", name: "Rondônia" },
      { index: 6, value: "roraima", name: "Roraima" },
      { index: 7, value: "tocantis", name: "Tocantis" },
    ],
  },
  {
    name: "Nordeste",
    states: [
      { index: 8, value: "alagoas", name: "Alagoas" },
      { index: 9, value: "bahia", name: "Bahia" },
      { index: 10, value: "ceara", name: "Ceará" },
      { index: 11, value: "maranhao", name: "Maranhão" },
      { index: 12, value: "paraiba", name: "Paraíba" },
      { index: 13, value: "pernambuco", name: "Pernambuco" },
      { index: 14, value: "piaui", name: "Piauí" },
      { index: 15, value: "rio-grande-do-norte", name: "Rio Grande do Norte" },
      { index: 16, value: "sergipe", name: "Sergipe" },
    ],
  },
  {
    name: "Centro-Oeste",
    states: [
      { index: 17, value: "goias", name: "Goiás" },
      { index: 18, value: "mato-grosso", name: "Mato Grosso" },
      { index: 19, value: "mato-grosso-do-sul", name: "Mato Grosso do Sul" },
    ],
  },
  {
    name: "Sudeste",
    states: [
      { index: 20, value: "espirito-santo", name: "Espírito Santo" },
      { index: 21, value: "minas-gerais", name: "Minas Gerais" },
      { index: 22, value: "rio-de-janeiro", name: "Rio de Janeiro" },
      { index: 23, value: "sao-paulo", name: "São Paulo" },
    ],
  },
  {
    name: "Sul",
    states: [
      { index: 24, value: "parana", name: "Paraná" },
      { index: 25, value: "rio-grande-do-sul", name: "Rio Grande do Sul" },
      { index: 26, value: "santa-catarina", name: "Santa Catarina" },
    ],
  },
];

type ListItemProps = HTMLRempiProps<"a"> & { title: string };

const ListItem = forwardRef<"a", ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <a className={`list-item-link ${className}`} {...props} ref={ref}>
            <div className="list-item-heading">{title}</div>
            <p className="list-item-text">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  }
);

export default function Page() {
  const { availableThemes, setTheme } = useContext(ThemeProviderContext);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multDate, setMultDate] = useState<Date[]>([new Date()]);
  const [rangeDate, setRangeDate] = useState<{
    from: Date | undefined;
    to?: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [state, setState] = useState("acre");
  const [openState, setOpenState] = useState(false);
  const [person, setPerson] = useState("pedro");
  const [selectedTheme, setSelectedTheme] = useState<string>(
    availableThemes[0].toString()
  );

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

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
        <Heading textAlign="center">Select your theme here</Heading>
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
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="gap-4"
        wrap="wrap"
      >
        <Calendar
          disabled={[
            new Date(2023, 6, 10),
            new Date(2023, 6, 12),
            new Date(2023, 6, 20),
          ]}
          fromMonth={new Date(2023, 6)}
          mode="single"
          selected={date}
          onSelect={(value) => {
            setDate(value);
          }}
        />

        <Calendar
          disabled={[
            new Date(2023, 6, 10),
            new Date(2023, 6, 12),
            new Date(2023, 6, 20),
          ]}
          mode="multiple"
          selected={multDate}
          onSelect={(value) => {
            setMultDate(value);
          }}
        />

        <Calendar
          disabled={[
            new Date(2023, 6, 10),
            new Date(2023, 6, 12),
            new Date(2023, 6, 20),
          ]}
          mode="range"
          selected={rangeDate}
          onSelect={(value) => {
            setRangeDate(value);
          }}
        />
      </Flex>
      <Separator className="margin-bt-8" />

      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="gap-4 flex-c-1"
        wrap="wrap"
      >
        <Combobox.Root
          value={state}
          onValueChange={setState}
          open={openState}
          onOpenChange={setOpenState}
        >
          <Combobox.Trigger>
            <Combobox.Value placeholder="Selecione o estado">
              {REGIONS_AB[state]}
            </Combobox.Value>
          </Combobox.Trigger>
          <Combobox.Content>
            <Combobox.Input placeholder="Busque pelo estado" />
            <Combobox.Empty className="max-w-180">
              Nenhum estado encontrado.
            </Combobox.Empty>
            {REGIONS.map((region, index) => (
              <Fragment key={region.name}>
                <Combobox.Label>{region.name}</Combobox.Label>
                {region.states.map((state) => (
                  <Combobox.Item
                    disabled={
                      state.index === 12 ||
                      state.index === 15 ||
                      state.index === 26
                    }
                    key={state.value}
                    value={state.value}
                  >
                    {state.name}
                  </Combobox.Item>
                ))}
                {index + 1 !== REGIONS.length ? <Combobox.Separator /> : null}
              </Fragment>
            ))}
          </Combobox.Content>
        </Combobox.Root>

        <Combobox.Root disabled>
          <Combobox.Trigger>
            <Combobox.Value placeholder="Selecione o estado" />
          </Combobox.Trigger>
          <Combobox.Content>
            <Combobox.Input placeholder="Busque pelo estado" />
            <Combobox.Empty className="max-w-180">
              Nenhum estado encontrado.
            </Combobox.Empty>
            {REGIONS.map((region, index) => (
              <Fragment key={region.name}>
                <Combobox.Label>{region.name}</Combobox.Label>
                {region.states.map((state) => (
                  <Combobox.Item
                    disabled={
                      state.value === "amazonas" ||
                      state.value === "santa-catarina" ||
                      state.value === "mato-grosso-do-sul"
                    }
                    key={state.value}
                    value={state.value}
                  >
                    {state.name}
                  </Combobox.Item>
                ))}
                {index + 1 !== REGIONS.length ? <Combobox.Separator /> : null}
              </Fragment>
            ))}
          </Combobox.Content>
        </Combobox.Root>

        <Combobox.Root disabled defaultValue="sao-paulo">
          <Combobox.Trigger>
            <Combobox.Value placeholder="Selecione o estado" />
          </Combobox.Trigger>
          <Combobox.Content>
            <Combobox.Input placeholder="Busque pelo estado" />
            <Combobox.Empty className="max-w-180">
              Nenhum estado encontrado.
            </Combobox.Empty>
            {REGIONS.map((region, index) => (
              <Fragment key={region.name}>
                <Combobox.Label>{region.name}</Combobox.Label>
                {region.states.map((state) => (
                  <Combobox.Item
                    disabled={
                      state.value === "amazonas" ||
                      state.value === "santa-catarina" ||
                      state.value === "mato-grosso-do-sul"
                    }
                    key={state.value}
                    value={state.value}
                  >
                    {state.name}
                  </Combobox.Item>
                ))}
                {index + 1 !== REGIONS.length ? <Combobox.Separator /> : null}
              </Fragment>
            ))}
          </Combobox.Content>
        </Combobox.Root>

        <Combobox.Root>
          <Combobox.Trigger>
            <Combobox.Value placeholder="Selecione o estado" />
          </Combobox.Trigger>
          <Combobox.Content>
            <Combobox.Input placeholder="Busque pelo estado" />
            <Combobox.Empty className="max-w-180">
              Nenhum estado encontrado.
            </Combobox.Empty>
            {REGIONS.map((region, index) => (
              <Fragment key={region.name}>
                <Combobox.Label>{region.name}</Combobox.Label>
                {region.states.map((state) => (
                  <Combobox.Item
                    disabled={
                      state.value === "amazonas" ||
                      state.value === "santa-catarina" ||
                      state.value === "mato-grosso-do-sul"
                    }
                    key={state.value}
                    value={state.value}
                  >
                    {state.name}
                  </Combobox.Item>
                ))}
                {index + 1 !== REGIONS.length ? <Combobox.Separator /> : null}
              </Fragment>
            ))}
          </Combobox.Content>
        </Combobox.Root>
      </Flex>

      <Separator className="margin-bt-8" />

      <Table.Root>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.invoice}>
              <Table.Cell className="font-weight-500">
                {invoice.invoice}
              </Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root striped={false} condensed={false}>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.invoice}>
              <Table.Cell className="font-weight-500">
                {invoice.invoice}
              </Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Table.Root condensed={false}>
        <Table.Caption>A list of your recent invoices.</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-100">Invoice</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head>Method</Table.Head>
            <Table.Head className="text-right">Amount</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {INVOICES.map((invoice) => (
            <Table.Row key={invoice.invoice}>
              <Table.Cell className="font-weight-500">
                {invoice.invoice}
              </Table.Cell>
              <Table.Cell>{invoice.paymentStatus}</Table.Cell>
              <Table.Cell>{invoice.paymentMethod}</Table.Cell>
              <Table.Cell className="text-right">
                {invoice.totalAmount}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Separator className="margin-bt-8" />

      <NavigationMenu.Root>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Learn</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="list one">
              <li style={{ gridRow: "span 3 / auto" }}>
                <NavigationMenu.Link asChild>
                  <a className="callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="var(--colors-grey12)"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="callout-heading">Radix Primitives</div>
                    <p className="callout-text">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Overview</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="list two">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger disabled>Disabled</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="list two">
              <ListItem
                title="Introduction"
                href="/docs/primitives/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/docs/primitives/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/docs/primitives/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/docs/primitives/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/docs/primitives/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/docs/primitives/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link href="https://github.com/radix-ui">
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.Root>

      <Separator className="margin-bt-8" />

      <Flex justifyContent="center" alignItems="center" className="gap-4">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outlined">Outlined</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </Flex>

      <Separator className="margin-bt-8" />

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="gap-4"
      >
        <Button
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              setOpen(true);
            }, 100);
          }}
        >
          Show toast
        </Button>
      </Flex>

      <Toast.Root duration={3000} open={open} onOpenChange={setOpen}>
        <Toast.Title>User will be deleted</Toast.Title>
        <Toast.Description>
          The user will be deleted in 5 seconds
        </Toast.Description>
        <Toast.Action asChild altText="Goto schedule to undo">
          <Button size="small">Undo</Button>
        </Toast.Action>
        <Toast.CloseCross aria-label="Close" />
      </Toast.Root>
      <Toast.Viewport />

      <Separator className="margin-bt-8" />

      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              New Tab <div className="ml-auto">⌘ T</div>
            </Menubar.Item>
            <Menubar.Item>
              New Window <div className="ml-auto">⌘ N</div>
            </Menubar.Item>
            <Menubar.Item disabled>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>Share</Menubar.SubMenuTrigger>
              <Menubar.SubMenuContent
                className="MenubarSubContent"
                alignOffset={-5}
              >
                <Menubar.Item>Email Link</Menubar.Item>
                <Menubar.Item>Messages</Menubar.Item>
                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>
              Print… <div className="ml-auto">⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              Undo <div className="ml-auto">⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item>
              Redo <div className="ml-auto">⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>Find</Menubar.SubMenuTrigger>

              <Menubar.SubMenuContent
                className="MenubarSubContent"
                alignOffset={-5}
              >
                <Menubar.Item>Search the web…</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Find…</Menubar.Item>
                <Menubar.Item>Find Next</Menubar.Item>
                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content align="start" alignOffset={-14}>
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator />
            <Menubar.Item>
              Reload <div className="ml-auto">⌘ R</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              Force Reload <div className="ml-auto">⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Profiles</Menubar.Trigger>
          <Menubar.Content align="start" alignOffset={-14}>
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem key={item} value={item}>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator />
              <Menubar.Item>Edit…</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Add Profile…</Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger disabled>Profiles</Menubar.Trigger>
          <Menubar.Content align="start" alignOffset={-14}>
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem key={item} value={item}>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator />
              <Menubar.Item>Edit…</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Add Profile…</Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>

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

      <Collapsible.Root>
        <Flex justifyContent="space-between">
          <Typography>@peduarte starred 3 repositories</Typography>
          <Collapsible.Trigger>
            <IconButton shape="rounded" size="small" aria-label="open repos">
              <FoldVertical />
            </IconButton>
          </Collapsible.Trigger>
        </Flex>
        <Typography>@radix-ui/primitives</Typography>
        <Collapsible.Content>
          <Flex direction="column" className="gap-4">
            <Typography>@radix-ui/colors</Typography>
            <Typography>@radix-ui/react</Typography>
          </Flex>
        </Collapsible.Content>
      </Collapsible.Root>

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
