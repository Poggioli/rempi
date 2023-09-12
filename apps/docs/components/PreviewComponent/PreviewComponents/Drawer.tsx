import { Button } from "@rempi-ui/button";
import { Drawer } from "@rempi-ui/drawer";
import { Flex } from "@rempi-ui/flex";
import { Input } from "@rempi-ui/input";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const DrawerPreview: FC = () => {
  const t = useTranslations("preview.drawer");

  return (
    <Flex
      justifyContent="center"
      style={{ padding: 2, gap: "var(--spaces-2)" }}
    >
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>{t("trigger-left")}</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="left">
            <Drawer.CloseCross aria-label={t("close-cross")} />
            <Drawer.Title>{t("title")}</Drawer.Title>
            <Drawer.Description>{t("description")}</Drawer.Description>
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
                {t("input-label-name")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-name")}
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-username")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-username")}
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  {t("cancel")}
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">{t("save")}</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>{t("trigger-top")}</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="top">
            <Drawer.CloseCross aria-label={t("close-cross")} />
            <Drawer.Title>{t("title")}</Drawer.Title>
            <Drawer.Description>{t("description")}</Drawer.Description>
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
                {t("input-label-name")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-name")}
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-username")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-username")}
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  {t("cancel")}
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">{t("save")}</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>{t("trigger-right")}</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="right">
            <Drawer.CloseCross aria-label={t("close-cross")} />
            <Drawer.Title>{t("title")}</Drawer.Title>
            <Drawer.Description>{t("description")}</Drawer.Description>
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
                {t("input-label-name")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-name")}
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-username")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-username")}
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  {t("cancel")}
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">{t("save")}</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger>
          <Button>{t("trigger-bottom")}</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay blur />
          <Drawer.Content position="bottom">
            <Drawer.CloseCross aria-label={t("close-cross")} />
            <Drawer.Title>{t("title")}</Drawer.Title>
            <Drawer.Description>{t("description")}</Drawer.Description>
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
                {t("input-label-name")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-name")}
                />
              </Input.Label>
              <Input.Label
                alignItems="flex-start"
                flexDirection="column"
                style={{ width: "100%" }}
              >
                {t("input-label-username")}
                <Input.Root
                  style={{ maxWidth: "50%" }}
                  placeholder={t("input-placeholder-username")}
                />
              </Input.Label>
            </Flex>
            <Drawer.Footer>
              <Drawer.Close>
                <Button color="primary" variant="text">
                  {t("cancel")}
                </Button>
              </Drawer.Close>
              <Drawer.Close>
                <Button color="success">{t("save")}</Button>
              </Drawer.Close>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </Flex>
  );
};
