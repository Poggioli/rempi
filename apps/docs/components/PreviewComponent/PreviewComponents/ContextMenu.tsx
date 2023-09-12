"use client";

import { ContextMenu } from "@rempi-ui/context-menu";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

export const ContextMenuPreview: FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");
  const t = useTranslations("preview.context-menu");

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          style={{
            padding: 32,
            border: "var(--border-widths-2) dashed var(--colors-grey9)",
          }}
        >
          <Typography>{t("trigger")}</Typography>
        </Flex>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          {t("item-back")}
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+[
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item disabled>
          {t("item-forward")}
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+]
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item>
          {t("item-reload")}
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+R
          </div>
        </ContextMenu.Item>

        <ContextMenu.SubMenu>
          <ContextMenu.SubMenuTrigger>
            {t("item-more-tools")}
          </ContextMenu.SubMenuTrigger>
          <ContextMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
            <ContextMenu.Item>
              {t("item-save")}
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                ⌘+S
              </div>
            </ContextMenu.Item>
            <ContextMenu.Item>{t("item-create-shortcut")}</ContextMenu.Item>
            <ContextMenu.Item>{t("item-window-name")}</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>{t("item-developer-tools")}</ContextMenu.Item>
          </ContextMenu.SubMenuContent>
        </ContextMenu.SubMenu>

        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          {t("item-show-bookmarks")}
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+B
          </div>
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          {t("item-show-full-url")}
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Label>{t("item-peoples")}</ContextMenu.Label>

        <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
          <ContextMenu.RadioItem value="pedro">
            Pedro Duarte
          </ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
};
