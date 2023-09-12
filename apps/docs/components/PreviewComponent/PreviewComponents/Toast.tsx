import { Button } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/Flex";
import { Toast } from "@rempi-ui/toast";
import { useTranslations } from "next-intl";
import { FC, useRef, useState } from "react";

export const ToastPreview: FC = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);
  const t = useTranslations("preview.toast");

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
        {t("trigger")}
      </Button>

      <Toast.Root duration={3000} open={open} onOpenChange={setOpen}>
        <Toast.Title>{t("title")}</Toast.Title>
        <Toast.Description>{t("description")}</Toast.Description>
        <Toast.Action asChild altText={t("action")}>
          <Button size="small">{t("action")}</Button>
        </Toast.Action>
        <Toast.CloseCross aria-label={t("close")} />
      </Toast.Root>
      <Toast.Viewport />
    </Flex>
  );
};
