import { Avatar } from "@rempi-ui/avatar";
import { Flex } from "@rempi-ui/flex";
import { Tabs } from "@rempi-ui/tabs";
import { Typography } from "@rempi-ui/typography";
import { FC } from "react";

export const TabsPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Tabs.Root
        defaultValue="photos"
        style={{
          maxWidth: 600,
        }}
      >
        <Tabs.List>
          <Tabs.Trigger value="photos">Photos</Tabs.Trigger>
          <Tabs.Trigger value="description">Description</Tabs.Trigger>
          <Tabs.Trigger value="personal-settings" disabled>
            Personal Settings
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="photos">
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            style={{
              gap: "var(--spaces-4)",
              padding: "var(--spaces-6)",
              border: "var(--border-widths-1) solid var(--colors-grey6)",
              borderRadius: "var(--radii-3)",
            }}
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
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
            alignItems="center"
            style={{
              gap: "var(--spaces-4)",
              padding: "var(--spaces-6)",
              border: "var(--border-widths-1) solid var(--colors-grey6)",
              borderRadius: "var(--radii-3)",
            }}
          >
            <Typography color="low-contrast" fontSize="md" lineHeight={1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              porttitor venenatis ipsum, ac volutpat justo. Praesent ut molestie
              sem, eu laoreet nulla. Nullam varius ut neque sit amet dignissim.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Morbi eu ante posuere, bibendum ante nec, auctor felis. Donec
              vitae luctus risus, a venenatis nisi. Nunc consectetur lectus at
              dolor aliquet fermentum. Duis vehicula, nisl sed imperdiet porta,
              lorem dolor accumsan mi, vel semper lectus arcu vel arcu. Maecenas
              porttitor lacus et arcu ultrices, quis pharetra magna cursus.
              Nullam cursus mattis hendrerit. Donec leo purus, lacinia sed lacus
              et, aliquam.
            </Typography>
          </Flex>
        </Tabs.Content>
        <Tabs.Content value="personal-setting"></Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
};
