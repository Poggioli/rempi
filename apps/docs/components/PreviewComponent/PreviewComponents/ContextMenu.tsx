"use client";

import { ContextMenu } from "@rempi-ui/context-menu";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { FC, useState } from "react";

export const ContextMenuPreview: FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");

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
          <Typography>Right click here</Typography>
        </Flex>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          Back
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+[
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item disabled>
          Foward
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+]
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Reload
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+R
          </div>
        </ContextMenu.Item>

        <ContextMenu.SubMenu>
          <ContextMenu.SubMenuTrigger>More Tools</ContextMenu.SubMenuTrigger>
          <ContextMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
            <ContextMenu.Item>
              Save Page As…
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                ⌘+S
              </div>
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
          Show Bookmarks
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
          Show Full URLs
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        <ContextMenu.Label>People</ContextMenu.Label>

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
