import { IconButton } from "@rempi-ui/button";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { SlidersHorizontal } from "lucide-react";
import { FC, useState } from "react";

export const DropdownMenuPreview: FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton
            className="rounded-button"
            style={{
              borderRadius: 'var(--radii-pill)',
              padding: 12
            }}
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
            Back <div style={{ marginLeft: "auto" }}>⌘+[</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            Foward <div style={{ marginLeft: "auto" }}>⌘+]</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            Reload <div style={{ marginLeft: "auto" }}>⌘+R</div>
          </DropdownMenu.Item>

          <DropdownMenu.SubMenu>
            <DropdownMenu.SubMenuTrigger>
              More Tools
            </DropdownMenu.SubMenuTrigger>
            <DropdownMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <DropdownMenu.Item>
                Save Page As… <div style={{ marginLeft: "auto" }}>⌘+S</div>
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
            Show Bookmarks <div style={{ marginLeft: "auto" }}>⌘+B</div>
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
    </Flex>
  );
};
