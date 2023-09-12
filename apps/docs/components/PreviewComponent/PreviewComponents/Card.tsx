import { Button } from "@rempi-ui/button";
import { Card } from "@rempi-ui/card";
import { Flex } from "@rempi-ui/flex";
import { Switch } from "@rempi-ui/switch";
import { Typography } from "@rempi-ui/typography";
import { BellIcon, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const CardPreview: FC = () => {
  const t = useTranslations("preview.card");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Card.Root>
        <Card.Header>
          <Card.Title>{t("title")}</Card.Title>
          <Card.Description>{t("description")}</Card.Description>
        </Card.Header>
        <Card.Content flexDirection="column">
          <Flex
            alignItems="center"
            style={{
              gap: 16,
              padding: "16px",
              borderRadius: "var(--radii-2)",
              border: "var(--border-widths-1) solid var(--colors-grey6)",
            }}
          >
            <BellIcon
              size={16}
              style={{
                color: "var(--colors-grey12)",
              }}
            />
            <Flex
              flexDirection="column"
              style={{
                gap: 4,
                flex: 1,
              }}
            >
              <Typography
                fontSize="sm"
                fontWeight="semi-bold"
                color="high-contrast"
                lineHeight={1}
              >
                {t("notifications-alert.title")}
              </Typography>
              <Typography
                fontSize="sm"
                fontWeight="regular"
                color="low-contrast"
                lineHeight={1}
              >
                {t("notifications-alert.description")}
              </Typography>
            </Flex>
            <Switch.Thumb />
          </Flex>
          <div>
            {[
              {
                title: t("notifications.0.title"),
                description: t("notifications.0.description"),
              },
              {
                title: t("notifications.1.title"),
                description: t("notifications.1.description"),
              },
              {
                title: t("notifications.2.title"),
                description: t("notifications.2.description"),
              },
            ].map((notification, index, ar) => (
              <Flex
                key={index}
                flexDirection="row"
                alignItems="start"
                style={{
                  gap: 12,
                  marginBottom: ar.length === index + 1 ? 0 : 16,
                  paddingBottom: ar.length === index + 1 ? 0 : 16,
                }}
              >
                <Typography
                  style={{
                    borderRadius: 999999,
                    width: 8,
                    height: 8,
                    backgroundColor: "var(--colors-info9)",
                    transform: "translate(0, var(--spaces-1))",
                  }}
                />
                <Flex
                  flexDirection="column"
                  style={{
                    gap: 4,
                  }}
                >
                  <Typography
                    fontSize="sm"
                    fontWeight="semi-bold"
                    color="high-contrast"
                    lineHeight={1}
                  >
                    {notification.title}
                  </Typography>
                  <Typography
                    fontSize="sm"
                    fontWeight="regular"
                    color="low-contrast"
                    lineHeight={1}
                  >
                    {notification.description}
                  </Typography>
                </Flex>
              </Flex>
            ))}
          </div>
        </Card.Content>
        <Card.Footer>
          <Button
            style={{
              width: "100%",
            }}
          >
            <Check
              size={16}
              style={{
                marginRight: 12,
              }}
            />
            {t("mark-all-as-read")}
          </Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};
