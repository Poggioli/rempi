import { AspectRatio } from "@rempi-ui/aspect-ratio";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const AspectRatioPreview: FC = () => {
  const t = useTranslations('preview.aspect-ratio');

  return (
    <AspectRatio ratio={16 / 9}>
      <img
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt={t("label", { value: "Tobias Tullius" })}
      />
    </AspectRatio>
  );
};
