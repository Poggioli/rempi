import { Button } from "@rempi-ui/button";
import { Card } from "@rempi-ui/card";
import { css } from "@rempi-ui/core";
import { Flex } from "@rempi-ui/flex";
import { Switch } from "@rempi-ui/switch";
import { Typography } from "@rempi-ui/typography";
import { BellIcon, Check } from "lucide-react";
import { FC } from "react";

export const CardPreview: FC = () => {
  return (
    <Flex justifyContent="center">
      <Card.Root>
        <Card.Header>
          <Card.Title>Notifications</Card.Title>
          <Card.Description>You have 3 unread messages.</Card.Description>
        </Card.Header>
        <Card.Content flexDirection="column">
          <Flex
            alignItems="center"
            style={{
              gap: 16,
              padding: '16px 0',
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
                flex: 1
              }}
            >
              <Typography
                fontSize="sm"
                fontWeight="semi-bold"
                color="high-contrast"
                lineHeight={1}
              >
                Push Notifications
              </Typography>
              <Typography
                fontSize="sm"
                fontWeight="regular"
                color="low-contrast"
                lineHeight={1}
              >
                Send notifications to device.
              </Typography>
            </Flex>
            <Switch.Thumb />
          </Flex>
          <div>
            {[
              {
                title: "Your call has been confirmed.",
                description: "1 hour ago",
              },
              {
                title: "You have a new message!",
                description: "1 hour ago",
              },
              {
                title: "Your subscription is expiring soon!",
                description: "2 hours ago",
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
            />{" "}
            Mark all as read
          </Button>
        </Card.Footer>
      </Card.Root>
    </Flex>
  );
};
