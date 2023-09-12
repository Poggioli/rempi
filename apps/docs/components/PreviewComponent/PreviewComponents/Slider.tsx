import { Flex } from "@rempi-ui/Flex";
import { Slider } from "@rempi-ui/slider";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const SliderPreview: FC = () => {
  const t = useTranslations("preview.slider");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{ padding: "var(--spaces-2)" }}
    >
      <Slider.Root defaultValue={[50]} max={100} step={1}>
        <Slider.Thumb aria-label={t("label")} />
      </Slider.Root>
    </Flex>
  );
};
