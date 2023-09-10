import { Button } from "@rempi-ui/button";
import { Drawer } from "@rempi-ui/drawer";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { FC } from "react";

export const DrawerPreview: FC = () => {
  return (
    <Flex
      justifyContent="center"
      style={{ padding: 2, gap: "var(--spaces-2)" }}
    >
      <Drawer.Root>
        <Drawer.Trigger>
          {/* i18n */}
          <Button>Drawer esquerdo</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="left">
            <Drawer.CloseCross aria-label="Fechar" />
            {/* i18n */}
            <Drawer.Title>Editar perfil</Drawer.Title>
            <Drawer.Description>
              {/* i18n */}
              Faça alterações em seu perfil aqui. Clique em salvar quando
              terminar.
            </Drawer.Description>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              style={{ gap: 16, padding: 16 }}
            >
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome"
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome de usuário
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome de usuário"
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancelar
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Salvar</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Drawer topo</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="top">
            <Drawer.CloseCross aria-label="Fechar" />
            {/* i18n */}
            <Drawer.Title>Editar perfil</Drawer.Title>
            <Drawer.Description>
              {/* i18n */}
              Faça alterações em seu perfil aqui. Clique em salvar quando
              terminar.
            </Drawer.Description>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              style={{ gap: 16, padding: 16 }}
            >
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome"
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome de usuário
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome de usuário"
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancelar
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Salvar</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Drawer direito</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="right">
            <Drawer.CloseCross aria-label="Fechar" />
            {/* i18n */}
            <Drawer.Title>Editar perfil</Drawer.Title>
            <Drawer.Description>
              {/* i18n */}
              Faça alterações em seu perfil aqui. Clique em salvar quando
              terminar.
            </Drawer.Description>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              style={{ gap: 16, padding: 16 }}
            >
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome"
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome de usuário
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome de usuário"
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancelar
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Salvar</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>Drawer abaixo</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="bottom">
            <Drawer.CloseCross aria-label="Fechar" />
            {/* i18n */}
            <Drawer.Title>Editar perfil</Drawer.Title>
            <Drawer.Description>
              {/* i18n */}
              Faça alterações em seu perfil aqui. Clique em salvar quando
              terminar.
            </Drawer.Description>
            <Flex
              flexDirection="column"
              flexWrap="wrap"
              justifyContent="space-between"
              style={{ gap: 16, padding: 16 }}
            >
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome"
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {/* i18n */}
                Nome de usuário
                {/* i18n */}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder="Digite seu nome de usuário"
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  Cancelar
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">Salvar</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Flex>
  );
};
