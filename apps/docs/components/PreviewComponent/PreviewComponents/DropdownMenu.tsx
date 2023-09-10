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
          {/* i18n */}
          <IconButton
            style={{
              borderRadius: "var(--radii-pill)",
              padding: 12,
            }}
            aria-label="Configurações"
            variant="contained"
            shape="rounded"
            color="primary"
          >
            <SlidersHorizontal size={16} />
          </IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            {/* i18n */}
            Voltar <div style={{ marginLeft: "auto" }}>⌘+[</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            {/* i18n */}
            Avançar <div style={{ marginLeft: "auto" }}>⌘+]</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            {/* i18n */}
            Recarregar <div style={{ marginLeft: "auto" }}>⌘+R</div>
          </DropdownMenu.Item>

          <DropdownMenu.SubMenu>
            <DropdownMenu.SubMenuTrigger>
              {/* i18n */}
              Mais ferramentas
            </DropdownMenu.SubMenuTrigger>
            <DropdownMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
              <DropdownMenu.Item>
                {/* i18n */}
                Salvar página como...{" "}
                <div style={{ marginLeft: "auto" }}>⌘+S</div>
              </DropdownMenu.Item>
              {/* i18n */}
              <DropdownMenu.Item>Criar atalho...</DropdownMenu.Item>
              {/* i18n */}
              <DropdownMenu.Item>Nome da janela...</DropdownMenu.Item>
              <DropdownMenu.Separator />
              {/* i18n */}
              <DropdownMenu.Item>
                Ferramentas do desenvolvedor
              </DropdownMenu.Item>
            </DropdownMenu.SubMenuContent>
          </DropdownMenu.SubMenu>

          <DropdownMenu.Separator />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            {/* i18n */}
            Mostrar favoritos <div style={{ marginLeft: "auto" }}>⌘+B</div>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            {/* i18n */}
            Mostras URLs completas
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          {/* i18n */}
          <DropdownMenu.Label>Pessoas</DropdownMenu.Label>

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
