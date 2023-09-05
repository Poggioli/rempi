import { IconButton } from "@rempi-ui/button";
import { Collapsible } from "@rempi-ui/collpasible";
import { Flex } from "@rempi-ui/flex";
import { Typography } from "@rempi-ui/typography";
import { FoldVertical, XIcon } from "lucide-react";
import { FC, useState } from "react";

export const CollapsiblePreview: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          style={{ gap: 24, padding: "0 4px 0 16px" }}
        >
          {/* i18n */}
          <Typography>@peduarte favoritou 3 repositórios</Typography>
          <Collapsible.Trigger>
            {/* i18n */}
            <IconButton
              shape="rounded"
              size="small"
              aria-label={
                !open
                  ? "Abrir repositórios favoritados"
                  : "Fechar repositórios favoritados"
              }
              variant="outlined"
              style={{ padding: 8 }}
            >
              {!open ? <FoldVertical size={18} /> : <XIcon size={18} />}
            </IconButton>
          </Collapsible.Trigger>
        </Flex>
        <Flex>
          <Typography
            style={{
              borderRadius: "var(--radii-2)",
              padding: "8px 16px",
              border: "var(--border-widths-1) solid var(--colors-grey6)",
              width: "100%",
              margin: "8px 0",
            }}
          >
            @radix-ui/primitives
          </Typography>
        </Flex>
        <Collapsible.Content>
          <Flex flexDirection="column">
            <Typography
              style={{
                borderRadius: "var(--radii-2)",
                padding: "8px 16px",
                border: "var(--border-widths-1) solid var(--colors-grey6)",
                width: "100%",
                margin: "8px 0",
              }}
            >
              @radix-ui/colors
            </Typography>
            <Typography
              style={{
                borderRadius: "var(--radii-2)",
                padding: "8px 16px",
                border: "var(--border-widths-1) solid var(--colors-grey6)",
                width: "100%",
                margin: "8px 0",
              }}
            >
              @radix-ui/react
            </Typography>
          </Flex>
        </Collapsible.Content>
      </Collapsible.Root>
    </Flex>
  );
};
