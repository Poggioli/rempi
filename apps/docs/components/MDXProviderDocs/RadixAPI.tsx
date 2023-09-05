import { Badge } from "@rempi-ui/badge";
import { FC } from "react";

export const RadixAPI: FC<any> = ({ href, ...props }) => {
  return (
    <Badge as="a" href={href} target="__blank" variant="outlined" {...props}>
      {/* i18n */}
      Referência da API
    </Badge>
  );
};
