import { Menubar } from "@rempi-ui/menubar";
import { Flex } from "@rempi-ui/flex";
import { FC, useState } from "react";

export const MenuBarPreview: FC = () => {
  const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
  // i18n
  const CHECK_ITEMS = [
    "Sempre mostrar barra de favoritos",
    "Sempre mostrar URLs completas",
  ];

  const [checkedSelection, setCheckedSelection] = useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = useState(RADIO_ITEMS[2]);

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Menubar.Root>
        <Menubar.Menu>
          {/* i18n */}
          <Menubar.Trigger>Arquivos</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              {/* i18n */}
              Nova aba <div style={{ marginLeft: "auto" }}>⌘ T</div>
            </Menubar.Item>
            <Menubar.Item>
              {/* i18n */}
              Nova janela <div style={{ marginLeft: "auto" }}>⌘ N</div>
            </Menubar.Item>
            {/* i18n */}
            <Menubar.Item disabled>Nova janela anônima</Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              {/* i18n */}
              <Menubar.SubMenuTrigger>Compartilhar</Menubar.SubMenuTrigger>
              <Menubar.SubMenuContent alignOffset={-5}>
                {/* i18n */}
                <Menubar.Item>Email Link</Menubar.Item>
                {/* i18n */}
                <Menubar.Item>Mensagens</Menubar.Item>
                {/* i18n */}
                <Menubar.Item>Notas</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            <Menubar.Item>
              {/* i18n */}
              Imprimir... <div style={{ marginLeft: "auto" }}>⌘ P</div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          {/* i18n */}
          <Menubar.Trigger>Editar</Menubar.Trigger>
          <Menubar.Content align="start">
            <Menubar.Item>
              {/* i18n */}
              Desfazer <div style={{ marginLeft: "auto" }}>⌘ Z</div>
            </Menubar.Item>
            <Menubar.Item>
              {/* i18n */}
              Refazer <div style={{ marginLeft: "auto" }}>⇧ ⌘ Z</div>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.SubMenu>
              {/* i18n */}
              <Menubar.SubMenuTrigger>Buscar</Menubar.SubMenuTrigger>

              <Menubar.SubMenuContent alignOffset={-5}>
                {/* i18n */}
                <Menubar.Item>Buscar na internet...</Menubar.Item>
                <Menubar.Separator />
                {/* i18n */}
                <Menubar.Item>Buscar</Menubar.Item>
                {/* i18n */}
                <Menubar.Item>Buscar próximo</Menubar.Item>
                {/* i18n */}
                <Menubar.Item>Buscar anterior</Menubar.Item>
              </Menubar.SubMenuContent>
            </Menubar.SubMenu>
            <Menubar.Separator />
            {/* i18n */}
            <Menubar.Item>Cortar</Menubar.Item>
            {/* i18n */}
            <Menubar.Item>Copiar</Menubar.Item>
            {/* i18n */}
            <Menubar.Item>Colar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          {/* i18n */}
          <Menubar.Trigger>Visualizar</Menubar.Trigger>
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
              {/* i18n */}
              Recarregar <div style={{ marginLeft: "auto" }}>⌘ R</div>
            </Menubar.Item>
            <Menubar.Item disabled>
              {/* i18n */}
              Recarregamento forçado{" "}
              <div style={{ marginLeft: "auto" }}>⇧ ⌘ R</div>
            </Menubar.Item>
            <Menubar.Separator />
            {/* i18n */}
            <Menubar.Item>Mudar para tela cheia</Menubar.Item>
            <Menubar.Separator />
            {/* i18n */}
            <Menubar.Item>Esconder barra lateral</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          {/* i18n */}
          <Menubar.Trigger>Perfil</Menubar.Trigger>
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
              {/* i18n */}
              <Menubar.Item>Editar</Menubar.Item>
              <Menubar.Separator />
              {/* i18n */}
              <Menubar.Item>Adicionar perfil</Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          {/* i18n */}
          <Menubar.Trigger disabled>Empresas</Menubar.Trigger>
        </Menubar.Menu>
      </Menubar.Root>
    </Flex>
  );
};
