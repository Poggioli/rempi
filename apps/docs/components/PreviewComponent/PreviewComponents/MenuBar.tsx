import { Menubar } from "@rempi-ui/menubar";
import { Flex } from "@rempi-ui/flex";
import { FC, useState } from "react";

export const MenuBarPreview: FC = () => {
  const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
  const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              New Tab <div style={{ marginLeft: "auto" }}>⌘ T</div>
            </Menubar.Item>
            <Menubar.Item>
              New Window <div style={{ marginLeft: "auto" }}>⌘ N</div>
            </Menubar.Item>
            <Menubar.Item disabled>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>Share</Menubar.SubMenuTrigger>
              <Menubar.SubMenuContent alignOffset={-5}>
                <Menubar.Item>Email Link</Menubar.Item>
                <Menubar.Item>Messages</Menubar.Item>
                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>
              Print… <div style={{ marginLeft: "auto" }}>⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              Undo <div style={{ marginLeft: "auto" }}>⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item>
              Redo <div style={{ marginLeft: "auto" }}>⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>Find</Menubar.SubMenuTrigger>

              <Menubar.SubMenuContent alignOffset={-5}>
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
              Reload <div style={{ marginLeft: "auto" }}>⌘ R</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              Force Reload <div style={{ marginLeft: "auto" }}>⇧ ⌘ R</div>
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
          <Menubar.Trigger disabled>Companies</Menubar.Trigger>
        </Menubar.Menu>
      </Menubar.Root>
    </Flex>
  );
};
