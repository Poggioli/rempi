import { Button } from "@rempi-ui/button";
import { Dialog } from "@rempi-ui/dialog";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { FC } from "react";

export const DialogPreview: FC = () => {
  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Dialog.Root>
        <Dialog.Trigger>
          {/* i18n */}
          <Button>Editar perfil</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay blur />
          <Dialog.Content>
            {/* i18n */}
            <Dialog.CloseCross aria-label="Fechar" />
            {/* i18n */}
            <Dialog.Title>Editar perfil</Dialog.Title>
            <Dialog.Description>
              {/* i18n */}
              Faça alterações em seu perfil aqui. Clique em salvar quando
              terminar.
            </Dialog.Description>
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
            <Dialog.Footer>
              <Dialog.Close>
                <Button color="primary" variant="text">
                  {/* i18n */}
                  Cancelar
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                {/* i18n */}
                <Button color="success">Salvar</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Flex>
  );
};
