import { IconButton } from "@rempi-ui/button";
import { Counter } from "@rempi-ui/counter";
import { Flex } from "@rempi-ui/flex";
import { BellRing } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const CounterPreview: FC = () => {
  const t = useTranslations("preview.counter");

  return (
    <Flex justifyContent="center" style={{ padding: 2 }}>
      <Counter counter={10} positionX="right" positionY="top">
        <IconButton
          aria-label={t("aria-label")}
          variant="outlined"
          shape="rounded"
          size="small"
          style={{
            padding: "var(--spaces-2)",
          }}
        >
          <BellRing size={20} />
        </IconButton>
      </Counter>
    </Flex>
  );
};
