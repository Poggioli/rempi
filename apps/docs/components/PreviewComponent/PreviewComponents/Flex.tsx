import { Flex } from "@rempi-ui/Flex";
import { FC } from "react";

export const FlexPreview: FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      style={{
        backgroundColor: "var(--colors-primary6)",
        borderRadius: "var(--radii-1)",
        padding: "var(--spaces-16)",
        gap: "var(--spaces-8)",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--colors-primary5)",
          borderRadius: "var(--radii-2)",
          border: "var(--border-widths-1) solid var(--colors-primary9)",
          minHeight: "var(--spaces-16)",
          minWidth: "var(--spaces-16)",
        }}
      />
      <div
        style={{
          backgroundColor: "var(--colors-primary5)",
          borderRadius: "var(--radii-2)",
          border: "var(--border-widths-1) solid var(--colors-primary9)",
          minHeight: "var(--spaces-16)",
          minWidth: "var(--spaces-16)",
        }}
      />
      <div
        style={{
          backgroundColor: "var(--colors-primary5)",
          borderRadius: "var(--radii-2)",
          border: "var(--border-widths-1) solid var(--colors-primary9)",
          minHeight: "var(--spaces-16)",
          minWidth: "var(--spaces-16)",
        }}
      />
    </Flex>
  );
};
