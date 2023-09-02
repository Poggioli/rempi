import { Flex } from "@rempi-ui/Flex";
import { Switch } from "@rempi-ui/switch";
import { Typography } from "@rempi-ui/typography";
import { BellIcon } from "lucide-react";
import { FC } from "react";

export const SwitchPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Switch.Label
        alignItems="center"
        style={{
          gap: 16,
          padding: "16px",
          borderColor: "var(--colors-grey6)",
          borderStyle: "solid",
          borderWidth: "var(--border-widths-1)",
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
      </Switch.Label>
    </Flex>
  );
};
