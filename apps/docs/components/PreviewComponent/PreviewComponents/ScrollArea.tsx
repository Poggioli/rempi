import { Flex } from "@rempi-ui/flex";
import { ScrollArea } from "@rempi-ui/scroll-area";
import { Separator } from "@rempi-ui/separator";
import { Typography } from "@rempi-ui/typography";
import { FC, Fragment } from "react";

export const ScrollAreaPreview: FC = () => {
  const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <ScrollArea.Root
        style={{
          border: "var(--border-widths-1) solid var(--colors-grey6)",
          minWidth: 200,
          height: 250
        }}
      >
        <ScrollArea.Viewport>
          <div style={{ padding: "var(--spaces-4) var(--spaces-5)" }}>
            <Typography fontWeight="regular">Tags</Typography>
            {TAGS.map((tag) => (
              <Fragment key={tag}>
                <Separator
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Typography
                  variant="body2"
                  style={{
                    display: "block",
                  }}
                >
                  {tag}
                </Typography>
              </Fragment>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Flex>
  );
};
