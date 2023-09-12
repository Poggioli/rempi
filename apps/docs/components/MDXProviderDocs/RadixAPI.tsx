import { Badge } from "@rempi-ui/badge";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const RadixAPI: FC<any> = ({ href, ...props }) => {
  const t = useTranslations("radix-api");

  return (
    <Badge as="a" href={href} target="__blank" variant="outlined" {...props}>
      {t("label")}
    </Badge>
  );
};
