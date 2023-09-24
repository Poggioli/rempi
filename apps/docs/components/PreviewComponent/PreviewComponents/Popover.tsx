import { IconButton } from "@rempi-ui/button";
import { Flex } from "@rempi-ui/flex";
import { Popover } from "@rempi-ui/popover";
import { Typography } from "@rempi-ui/typography";
import { SlidersHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const PopoverPreview: FC = () => {
  const t = useTranslations("preview.popover");

  return (
    <Flex alignItems="center" justifyContent="center">
      <Popover.Root>
        <Popover.Trigger asChild>
          <IconButton
            style={{
              borderRadius: "var(--radii-pill)",
              padding: 12,
            }}
            aria-label={t("trigger")}
            variant="text"
            shape="rounded"
            color="primary"
          >
            <SlidersHorizontal size={16} />
          </IconButton>
        </Popover.Trigger>
        <Popover.Content>
          <Flex
            flexDirection="column"
            style={{
              maxWidth: 300,
            }}
          >
            <Typography
              fontSize="sm"
              fontWeight="normal"
              color="low-contrast"
              lineHeight={2}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ut vulputate elit, at efficitur tortor. Fusce at dui est. Morbi ac
              mauris vehicula, sagittis tortor eget, ultricies erat. Vivamus
              suscipit, arcu a lobortis eleifend, augue tellus laoreet ipsum,
              vitae cursus magna erat sed lorem. Etiam at augue pellentesque,
              sollicitudin metus.
            </Typography>
          </Flex>
          <Popover.CloseCross aria-label={t("close")} />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Root>
    </Flex>
  );
};
