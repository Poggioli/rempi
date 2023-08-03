"use client";

import { NavigationMenu } from "@rempi-ui/navigation-menu";
import { FC } from "react";

export const ExampleNav: FC = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/examples/dash">
          Dashboard
        </NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/examples/cards">Cards</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/examples/tasks">Tasks</NavigationMenu.Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <NavigationMenu.Link href="/examples/forms">Forms</NavigationMenu.Link>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  );
};
