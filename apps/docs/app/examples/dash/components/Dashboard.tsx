"use client";

import { Avatar } from "@rempi-ui/avatar";
import { Combobox } from "@rempi-ui/combobox";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import {
  StyledDashboard,
  StyledDashboardBody,
  StyledDashboardHeader,
  StyledDashboardSearch,
} from "./Dashboard.styles";
import { DashboardBodyHeader } from "./DashboardBodyHeader";
import { DashboardTabs } from "./DashboardTabs";

const Dashboard: FC = () => {
  const [selectedValue, setSelectedValue] = useState("john-stone");
  const t = useTranslations("dashboard");

  return (
    <StyledDashboard as={Flex} flexDirection="column">
      <StyledDashboardHeader
        as={Flex}
        alignItems={{
          "@initial": "flex-start",
          "@3": "center",
        }}
        justifyContent="space-between"
      >
        <Combobox.Root value={selectedValue} onValueChange={setSelectedValue}>
          <Combobox.Trigger>
            <Combobox.Value placeholder={t("select-team")} />
          </Combobox.Trigger>
          <Combobox.Content>
            <Combobox.Input placeholder={t("search-team")} />
            <Combobox.Empty>{t("not-found")}</Combobox.Empty>
            <Combobox.Label>{t("personal-account")}</Combobox.Label>
            <Combobox.Item value="john-stone">John Stone</Combobox.Item>
            <Combobox.Separator />
            <Combobox.Label>{t("team")}</Combobox.Label>
            <Combobox.Item value="acme-inc">Acme Inc.</Combobox.Item>
            <Combobox.Item value="monsters-inc">Monsters Inc.</Combobox.Item>
            <Combobox.Item disabled value="angels-inc">
              Angles Inc.
            </Combobox.Item>
          </Combobox.Content>
        </Combobox.Root>

        <StyledDashboardSearch as={Flex} alignItems="center">
          <Input.Root placeholder={t("search")} />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar.Root size="small">
                <Avatar.Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback delayMs={600}>CT</Avatar.Fallback>
              </Avatar.Root>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align="end">
              <DropdownMenu.Item>
                {t("profile")} <div className="ml-auto">⌘+[</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled>
                {t("billing")} <div className="ml-auto">⌘+]</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                {t("settings")} <div className="ml-auto">⌘+R</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>{t("new-team")}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                {t("logout")} <div className="ml-auto">⌘+R</div>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </StyledDashboardSearch>
      </StyledDashboardHeader>

      <StyledDashboardBody as={Flex} flexDirection="column">
        <DashboardBodyHeader />
        <DashboardTabs />
      </StyledDashboardBody>
    </StyledDashboard>
  );
};

export { Dashboard };
