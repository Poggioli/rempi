"use client";

import { Avatar } from "@rempi-ui/avatar";
import { Button } from "@rempi-ui/button";
import { Calendar, DateRange } from "@rempi-ui/calendar";
import { Combobox } from "@rempi-ui/combobox";
import { Card } from "@rempi-ui/card";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { Heading } from "@rempi-ui/heading";
import { Input } from "@rempi-ui/input";
import { NavigationMenu } from "@rempi-ui/navigation-menu";
import { Popover } from "@rempi-ui/popover";
import { Tabs } from "@rempi-ui/tabs";
import { addDays, format } from "date-fns";
import {
  CreditCardIcon,
  DollarSignIcon,
  DownloadIcon,
  LineChartIcon,
  UsersIcon,
} from "lucide-react";
import { FC, useState } from "react";
import {
  StyledCalendarWithoutBorder,
  StyledContainerCalendarDownload,
  StyledContainerHeader,
  StyledDashboard,
  StyledDashboardBody,
  StyledDashboardHeader,
  StyledDashboardSearch,
  StyledDownloadButton,
  StyledCardContainer,
  StyledTabsList,
  StyledTabsRoot,
  StyledCardHeader,
} from "./Dashboard.styles";
import { Typography } from "@rempi-ui/typography";

const Dashboard: FC = () => {
  const [selectedValue, setSelectedValue] = useState("john-stone");
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  return (
    <StyledDashboard as={Flex} flexDirection="column">
      <StyledDashboardHeader
        as={Flex}
        alignItems={{
          "@initial": "flex-start",
          "@3": "center",
        }}
        flexDirection={{
          "@initial": "column",
          "@3": "row",
        }}
        justifyContent="space-between"
      >
        <Flex
          flexDirection={{
            "@initial": "column",
            "@2": "row",
          }}
          alignItems={{
            "@initial": "flex-start",
            "@2": "center",
          }}
        >
          <Combobox.Root value={selectedValue} onValueChange={setSelectedValue}>
            <Combobox.Trigger>
              <Combobox.Value placeholder="Selecione um time" />
            </Combobox.Trigger>
            <Combobox.Content>
              <Combobox.Input placeholder="Busque pelo time" />
              <Combobox.Empty>Nenhum time encontrado.</Combobox.Empty>
              <Combobox.Label>Conta pessoal</Combobox.Label>
              <Combobox.Item value="john-stone">John Stone</Combobox.Item>
              <Combobox.Separator />
              <Combobox.Label>Times</Combobox.Label>
              <Combobox.Item value="acme-inc">Acme Inc.</Combobox.Item>
              <Combobox.Item value="monsters-inc">Monsters Inc.</Combobox.Item>
              <Combobox.Item disabled value="angels-inc">
                Angles Inc.
              </Combobox.Item>
            </Combobox.Content>
          </Combobox.Root>
          <NavigationMenu.Root>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/examples/dash">
                Overview
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/examples/dash">
                Customers
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/examples/dash">
                Products
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/examples/dash">
                Settings
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.Root>
        </Flex>

        <StyledDashboardSearch as={Flex} alignItems="center">
          <Input.Root placeholder="Buscar..." />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar.Root size="small">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
              </Avatar.Root>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Item>
                Profile <div className="ml-auto">⌘+[</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled>
                Billing <div className="ml-auto">⌘+]</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                Settings <div className="ml-auto">⌘+R</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>New Team</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                Log out <div className="ml-auto">⌘+R</div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </StyledDashboardSearch>
      </StyledDashboardHeader>

      <StyledDashboardBody as={Flex} flexDirection="column">
        <StyledContainerHeader
          as={Flex}
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Heading as="h3" variant="5">
            Dashboard
          </Heading>
          <StyledContainerCalendarDownload as={Flex} flexWrap="wrap">
            <Popover.Root>
              <Popover.Trigger>
                <Button variant="outlined" color="primary">
                  {selectedRange?.from ? (
                    selectedRange.to ? (
                      <>
                        {`${format(selectedRange.from, "dd LLL, y")} - ${format(
                          selectedRange.to,
                          "dd LLL, y"
                        )}`}
                      </>
                    ) : (
                      format(selectedRange.from, "dd LLL, y")
                    )
                  ) : (
                    "Selecione um período"
                  )}
                </Button>
              </Popover.Trigger>
              <Popover.Content>
                <StyledCalendarWithoutBorder
                  as={Calendar}
                  numberOfMonths={2}
                  mode="range"
                  selected={selectedRange}
                  onSelect={setSelectedRange}
                />
              </Popover.Content>
            </Popover.Root>
            <StyledDownloadButton as={Button} variant="solid" color="primary">
              <DownloadIcon size={16} /> Download
            </StyledDownloadButton>
          </StyledContainerCalendarDownload>
        </StyledContainerHeader>

        <Tabs.Root value="overview">
          <StyledTabsList as={Tabs.List}>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="analytics" disabled>
              Analytics
            </Tabs.Trigger>
            <Tabs.Trigger value="reports" disabled>
              Reports
            </Tabs.Trigger>
            <Tabs.Trigger value="notifications" disabled>
              Notifications
            </Tabs.Trigger>
          </StyledTabsList>
          <Tabs.Content value="overview">
            <StyledCardContainer>
              <Card.Root>
                <Card.Header>
                  <StyledCardHeader
                    as={Flex}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Card.Title fontWeight="normal" fontSize="sm">
                      Total Revenue
                    </Card.Title>
                    <DollarSignIcon size={16} />
                  </StyledCardHeader>
                </Card.Header>
                <Card.Content>
                  <Flex flexDirection="column">
                    <Typography fontSize="xlg" fontWeight="semi-bold">
                      $45,231.89
                    </Typography>
                    <Typography fontSize="xsm" fontWeight="tiny">
                      +20.1% from last month
                    </Typography>
                  </Flex>
                </Card.Content>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <StyledCardHeader
                    as={Flex}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Card.Title fontWeight="normal" fontSize="sm">
                      Subscriptions
                    </Card.Title>
                    <UsersIcon size={16} />
                  </StyledCardHeader>
                </Card.Header>
                <Card.Content>
                  <Flex flexDirection="column">
                    <Typography fontSize="xlg" fontWeight="semi-bold">
                      +2350
                    </Typography>
                    <Typography fontSize="xsm" fontWeight="tiny">
                      +180.1% from last month
                    </Typography>
                  </Flex>
                </Card.Content>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <StyledCardHeader
                    as={Flex}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Card.Title fontWeight="normal" fontSize="sm">
                      Sales
                    </Card.Title>
                    <CreditCardIcon size={16} />
                  </StyledCardHeader>
                </Card.Header>
                <Card.Content>
                  <Flex flexDirection="column">
                    <Typography fontSize="xlg" fontWeight="semi-bold">
                      +12,234
                    </Typography>
                    <Typography fontSize="xsm" fontWeight="tiny">
                      +19% from last month
                    </Typography>
                  </Flex>
                </Card.Content>
              </Card.Root>
              <Card.Root>
                <Card.Header>
                  <StyledCardHeader
                    as={Flex}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Card.Title fontWeight="normal" fontSize="sm">
                      Active Now
                    </Card.Title>
                    <LineChartIcon size={16} />
                  </StyledCardHeader>
                </Card.Header>
                <Card.Content>
                  <Flex flexDirection="column">
                    <Typography fontSize="xlg" fontWeight="semi-bold">
                      +573
                    </Typography>
                    <Typography fontSize="xsm" fontWeight="tiny">
                      +201 since last hour
                    </Typography>
                  </Flex>
                </Card.Content>
              </Card.Root>
            </StyledCardContainer>
          </Tabs.Content>
        </Tabs.Root>
      </StyledDashboardBody>
    </StyledDashboard>
  );
};

export { Dashboard };
