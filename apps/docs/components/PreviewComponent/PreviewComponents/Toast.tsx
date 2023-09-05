import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/Flex";
import { Toast } from "@rempi-ui/toast";
import { FC, useRef, useState } from "react";

export const ToastPreview: FC = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      style={{ padding: "var(--spaces-1)" }}
    >
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        {/* i18n */}
        Mostrar Toast
      </Button>

      <Toast.Root duration={3000} open={open} onOpenChange={setOpen}>
        {/* i18n */}
        <Toast.Title>O usuário será excluído</Toast.Title>
        <Toast.Description>
          {/* i18n */}O usuário será excluído em 5 segundos
        </Toast.Description>
        {/* i18n */}
        <Toast.Action asChild altText="Desfazer ação">
          {/* i18n */}
          <Button size="small">Desfazer ação</Button>
        </Toast.Action>
        {/* i18n */}
        <Toast.CloseCross aria-label="Fechar" />
      </Toast.Root>
      <Toast.Viewport />
    </Flex>
  );
};
