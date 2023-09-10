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
          {/* i18n */}
          <Typography>Clique com o botão direito aqui</Typography>
        </Flex>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>
          {/* i18n */}
          Voltar
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+[
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item disabled>
          {/* i18n */}
          Avançar
          <div
            style={{
              marginLeft: "auto",
            }}
          >
            ⌘+]
          </div>
        </ContextMenu.Item>
        <ContextMenu.Item>
          {/* i18n */}
          Recarregar
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
            {/* i18n */}
            Mais ferramentas
          </ContextMenu.SubMenuTrigger>
          <ContextMenu.SubMenuContent sideOffset={2} alignOffset={-5}>
            <ContextMenu.Item>
              {/* i18n */}
              Salvar página como...
              <div
                style={{
                  marginLeft: "auto",
                }}
              >
                ⌘+S
              </div>
            </ContextMenu.Item>
            {/* i18n */}
            <ContextMenu.Item>Criar um atalho</ContextMenu.Item>
            {/* i18n */}
            <ContextMenu.Item>Nome da janela</ContextMenu.Item>
            <ContextMenu.Separator />
            {/* i18n */}
            <ContextMenu.Item>Ferramentas do desenvolvedor</ContextMenu.Item>
          </ContextMenu.SubMenuContent>
        </ContextMenu.SubMenu>

        <ContextMenu.Separator />

        <ContextMenu.CheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          {/* i18n */}
          Mostrar favoritos
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
          {/* i18n */}
          Mostrar URLs completas
        </ContextMenu.CheckboxItem>

        <ContextMenu.Separator />

        {/* i18n */}
        <ContextMenu.Label>Pessoas</ContextMenu.Label>

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
