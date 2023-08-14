import * as LabelRadix from "@radix-ui/react-label";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Flex, FlexProps } from "@rempi-ui/flex";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { StyledLabel } from "./Label.styles";

export const LabelContext = createContext<{
  setAttrs: Dispatch<SetStateAction<any>>;
}>({
  setAttrs: () => null,
});

export type LabelProps = Omit<HTMLRempiProps<typeof StyledLabel>, "as"> &
  Omit<LabelRadix.LabelProps, "asChild"> &
  FlexProps;

export const Label = forwardRef<typeof StyledLabel, LabelProps>(
  (
    { children, alignItems = "center", flexDirection = "row", ...props },
    ref
  ) => {
    const [attrs, setAttrs] = useState<any>({});

    return (
      <LabelContext.Provider value={{ setAttrs }}>
        <Flex
          {...props}
          {...attrs}
          alignItems={alignItems}
          flexDirection={flexDirection}
          as={StyledLabel}
          ref={ref}
        >
          {children}
        </Flex>
      </LabelContext.Provider>
    );
  }
);
