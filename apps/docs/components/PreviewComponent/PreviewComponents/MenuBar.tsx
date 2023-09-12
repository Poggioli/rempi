import { Menubar } from "@rempi-ui/menubar";
import { Flex } from "@rempi-ui/flex";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";

export const MenuBarPreview: FC = () => {
  const t = useTranslations("preview.menu-bar");
  const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
  const CHECK_ITEMS = [t("always-show-bookmarks"), t("always-show-full-url")];

  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Menubar.Root>
        <Menubar.Menu>
          <Menubar.Trigger>{t("files")}</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              {t("new-tab")} <div style={{ marginLeft: "auto" }}>⌘ T</div>
            </Menubar.Item>
            <Menubar.Item>
              {t("new-window")}
              <div style={{ marginLeft: "auto" }}>⌘ N</div>
            </Menubar.Item>
            <Menubar.Item disabled>{t("new-window-incognito")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>{t("share")}</Menubar.SubMenuTrigger>
              <Menubar.SubMenuContent alignOffset={-5}>
                <Menubar.Item>{t("email-link")}</Menubar.Item>
                <Menubar.Item>{t("messages")}</Menubar.Item>
                <Menubar.Item>{t("notes")}</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>
              {t("print")} <div style={{ marginLeft: "auto" }}>⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>{t("edit")}</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              {t("undo")} <div style={{ marginLeft: "auto" }}>⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item>
              {t("reundo")} <div style={{ marginLeft: "auto" }}>⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              <Menubar.SubMenuTrigger>{t("find")}</Menubar.SubMenuTrigger>

              <Menubar.SubMenuContent alignOffset={-5}>
                <Menubar.Item>{t("find-web")}</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>{t("find")}</Menubar.Item>
                <Menubar.Item>{t("find-next")}</Menubar.Item>
                <Menubar.Item>{t("find-previous")}</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>{t("cut")}</Menubar.Item>
            <Menubar.Item>{t("copy")}</Menubar.Item>
            <Menubar.Item>{t("paste")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>{t("view")}</Menubar.Trigger>
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
              {t("reload")} <div style={{ marginLeft: "auto" }}>⌘ R</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              {t("reload-forced")}
              <div style={{ marginLeft: "auto" }}>⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("full-screen")}</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>{t("hide-sidebar")}</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>{t("profile")}</Menubar.Trigger>
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
              <Menubar.Item>{t("edit")}</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>{t("add-profile")}</Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger disabled>{t("companies")}</Menubar.Trigger>
        </Menubar.Menu>
      </Menubar.Root>
    </Flex>
  );
};
