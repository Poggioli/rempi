"use client";

import { Flex } from "@rempi-ui/flex";
import { FC, useState } from "react";
import { Combobox } from "@rempi-ui/combobox";
import "./Dashboard.scss";
import { NavigationMenu } from "@rempi-ui/navigation-menu";
import { Avatar } from "@rempi-ui/avatar";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Input } from "@rempi-ui/input";

const Dashboard: FC = () => {
  const [selectedValue, setSelectedValue] = useState("john-stone");

  return (
    <Flex direction="column" className="dashboard">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        className="dashboard__header"
      >
        <Flex alignItems="center">
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

        <Flex alignItems="center">
          <Input.Root placeholder="Search..." />
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
        </Flex>
      </Flex>

      <Flex className="dashboard__body"></Flex>
    </Flex>
  );
};

export { Dashboard };
