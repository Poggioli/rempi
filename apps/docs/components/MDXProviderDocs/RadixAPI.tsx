import { Badge } from "@rempi-ui/badge";
import { FC } from "react";

export const RadixAPI: FC<any> = ({ href, ...props }) => {
  return (
    <Badge as="a" href={href} target="__blank" variant="outlined" {...props}>
      API Reference
    </Badge>
  );
};
