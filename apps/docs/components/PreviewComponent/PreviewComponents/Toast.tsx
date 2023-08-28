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
        Show toast
      </Button>

      <Toast.Root duration={3000} open={open} onOpenChange={setOpen}>
        <Toast.Title>User will be deleted</Toast.Title>
        <Toast.Description>
          The user will be deleted in 5 seconds
        </Toast.Description>
        <Toast.Action asChild altText="Goto schedule to undo">
          <Button size="small">Undo</Button>
        </Toast.Action>
        <Toast.CloseCross aria-label="Close" />
      </Toast.Root>
      <Toast.Viewport />
    </Flex>
  );
};
