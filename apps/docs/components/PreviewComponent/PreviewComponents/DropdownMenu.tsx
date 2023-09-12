import { IconButton } from "@rempi-ui/button";
import { DropdownMenu } from "@rempi-ui/dropdown-menu";
import { Flex } from "@rempi-ui/flex";
import { SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

export const DropdownMenuPreview: FC = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(true);
  const [person, setPerson] = useState("pedro");
  const t = useTranslations("preview.dropdown-menu");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <IconButton
            style={{
              borderRadius: "var(--radii-pill)",
              padding: 12,
            }}
            aria-label={t("trigger")}
            variant="contained"
            shape="rounded"
            color="primary"
          >
            <SlidersHorizontal size={16} />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            {t("item-back")} <div style={{ marginLeft: "auto" }}>⌘+[</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            {t("item-forward")} <div style={{ marginLeft: "auto" }}>⌘+]</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            {t("item-reload")} <div style={{ marginLeft: "auto" }}>⌘+R</div>
          </DropdownMenu.Item>

          <DropdownMenu.SubMenu>
            <DropdownMenu.SubMenuTrigger>
              {t("item-more-tools")}
            </DropdownMenu.SubMenuTrigger>
            <DropdownMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <DropdownMenu.Item>
                {t("item-save")}
                <div style={{ marginLeft: "auto" }}>⌘+S</div>
              </DropdownMenu.Item>
              <DropdownMenu.Item>{t("item-create-shortcut")}</DropdownMenu.Item>
              <DropdownMenu.Item>{t("item-window-name")}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>{t("item-developer-tools")}</DropdownMenu.Item>
            </DropdownMenu.SubMenuContent>
          </DropdownMenu.SubMenu>

          <DropdownMenu.Separator />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            {t("item-show-bookmarks")}{" "}
            <div style={{ marginLeft: "auto" }}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            {t("item-show-full-url")}
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          <DropdownMenu.Label>{t("item-peoples")}</DropdownMenu.Label>

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
