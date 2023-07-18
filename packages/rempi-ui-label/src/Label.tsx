import * as LabelRadix from "@radix-ui/react-label";
import { forwardRef, HTMLRempiProps } from "@rempi-ui/core";
import { Flex, FlexProps } from "@rempi-ui/flex";
import classNames from "classnames";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import "./Label.scss";

export const LabelContext = createContext<{
  setAttrs: Dispatch<SetStateAction<any>>;
}>({
  setAttrs: () => null,
});

export type LabelProps = Omit<HTMLRempiProps<typeof LabelRadix.Root>, "as"> &
  Omit<LabelRadix.LabelProps, "asChild"> &
  FlexProps;

export const Label = forwardRef<typeof LabelRadix.Root, LabelProps>(
  (
    { children, className, alignItems = "center", direction = "row", ...props },
    ref
  ) => {
    const [attrs, setAttrs] = useState<any>({});

    return (
      <LabelContext.Provider value={{ setAttrs }}>
        <Flex
          {...props}
          {...attrs}
          alignItems={alignItems}
          direction={direction}
          as="label"
          ref={ref}
          className={classNames("rempi-label", className)}
        >
          {children}
        </Flex>
      </LabelContext.Provider>
    );
  }
);
