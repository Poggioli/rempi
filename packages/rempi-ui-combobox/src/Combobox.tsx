import { createCollection } from "@radix-ui/react-collection";
import { createContextScope, Scope } from "@radix-ui/react-context";
import { forwardRef, HTMLRempiProps, RempiVariant } from "@rempi-ui/core";
import { Input, InputProps } from "@rempi-ui/input";
import {
  Popover,
  PopoverContentProps,
  PopoverRootProps,
  PopoverTriggerProps,
} from "@rempi-ui/popover";
import { SeparatorProps } from "@rempi-ui/separator";
import {
  assignRefs,
  composeEventHandlers,
  useControllableState,
} from "@rempi-ui/utils";
import { Check, LucideIcon, LucideProps } from "lucide-react";
import {
  ChangeEvent,
  ElementRef,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import {
  StyledComboboxChevron,
  StyledComboboxContent,
  StyledComboboxEmpty,
  StyledComboboxIndicator,
  StyledComboboxSearchInput,
  StyledComboboxItem,
  StyledComboboxLabel,
  StyledComboboxSearchIcon,
  StyledComboboxSearchWrapper,
  StyledComboboxSeparator,
  StyledComboboxTrigger,
  StyledComboboxValue,
} from "./Combobox.styles";

function filterSearch(search: string, value: string) {
  return value.toUpperCase().includes(search.toUpperCase());
}

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

function shouldShowPlaceholder(value?: string) {
  return value === "" || value === undefined;
}

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

function toggleOverflowBody(openState: boolean): void {
  const head = document.head || document.getElementsByTagName("head")[0];
  const styleSheetId = "combobox-overflow-body-hidden";

  if (openState) {
    const css = "body { overflow: hidden; }";
    const style = document.createElement("style");
    style.id = styleSheetId;
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  } else {
    const styleTag = head.querySelector(`#${styleSheetId}`);
    if (styleTag) {
      styleTag.remove();
    }
  }
}

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const COMBOBOX_NAME = "Combobox";

type ItemData = { value: string; disabled: boolean; textValue: string };
const [Collection, useCollection] = createCollection<
  ComboboxItemElement,
  ItemData
>(COMBOBOX_NAME);

type ScopedProps<P> = P & { __scopeCombobox?: Scope };

type ComboboxContextValue = {
  value?: string;
  onValueChange(value: string): void;
  open: boolean;
  onOpenChange(open: boolean): void;
  required?: boolean;
  disabled?: boolean;
  valueNode: HTMLSpanElement | null;
  onValueNodeChange(node: HTMLSpanElement): void;
  valueNodeHasChildren: boolean;
  onValueNodeHasChildrenChange(hasChildren: boolean): void;
};

export type ComboboxRootProps = PopoverRootProps & {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
};

const [createComboboxContext] = createContextScope(COMBOBOX_NAME);
const [ComboboxProvider, useComboboxContext] =
  createComboboxContext<ComboboxContextValue>(COMBOBOX_NAME);

export const ComboboxRoot = forwardRef<
  typeof Popover.Root,
  ScopedProps<ComboboxRootProps>
>(
  (
    {
      __scopeCombobox,
      children,
      disabled,
      defaultOpen,
      defaultValue,
      required,
      open: openProps,
      value: valueProps,
      onOpenChange: onOpenChangeProps,
      onValueChange: onValueChangeProps,
      ...props
    },
    ref
  ) => {
    const [open = false, onOpenChange] = useControllableState({
      prop: openProps,
      defaultProp: defaultOpen,
      onChange: onOpenChangeProps,
    });

    const [value = "", onValueChange] = useControllableState({
      prop: valueProps,
      defaultProp: defaultValue,
      onChange: onValueChangeProps,
    });

    const [valueNode, setValueNode] = useState<HTMLSpanElement | null>(null);
    const [valueNodeHasChildren, setValueNodeHasChildren] = useState(false);

    return (
      <ComboboxProvider
        open={open}
        onOpenChange={onOpenChange}
        value={value}
        onValueChange={onValueChange}
        required={required}
        disabled={disabled}
        valueNode={valueNode}
        onValueNodeChange={setValueNode}
        valueNodeHasChildren={valueNodeHasChildren}
        onValueNodeHasChildrenChange={setValueNodeHasChildren}
        scope={__scopeCombobox}
      >
        <Collection.Provider scope={__scopeCombobox}>
          <Popover.Root
            {...props}
            open={open}
            defaultOpen={defaultOpen}
            onOpenChange={composeEventHandlers(
              onOpenChange,
              (openValue: boolean) => {
                toggleOverflowBody(openValue);
              }
            )}
          >
            {children}
          </Popover.Root>
        </Collection.Provider>
      </ComboboxProvider>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const TRIGGER_NAME = "ComboboxTrigger";
export type ComboboxTriggerProps = PopoverTriggerProps;

export const ComboboxTrigger = forwardRef<
  typeof StyledComboboxTrigger,
  ScopedProps<ComboboxTriggerProps>
>(({ children, disabled = false, __scopeCombobox, ...props }, ref) => {
  const context = useComboboxContext(TRIGGER_NAME, __scopeCombobox);

  const isDisabled = context.disabled || disabled;

  return (
    <StyledComboboxTrigger
      asChild={false}
      type="button"
      role="combobox"
      aria-required={context.required}
      disabled={isDisabled}
      data-disabled={isDisabled ? "" : undefined}
      data-placeholder={shouldShowPlaceholder(context.value) ? "" : undefined}
      {...props}
      ref={ref}
    >
      {children}
      <ComboboxIcon />
    </StyledComboboxTrigger>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const VALUE_NAME = "ComboboxValue";
export type ComboboxValueProps = Omit<
  HTMLRempiProps<typeof StyledComboboxValue>,
  "as" | "classNames" | "style"
> & {
  placeholder?: ReactNode;
};

export const ComboboxValue = forwardRef<
  typeof StyledComboboxValue,
  ScopedProps<ComboboxValueProps>
>(({ children, __scopeCombobox, placeholder = "", ...props }, ref) => {
  const context = useComboboxContext(VALUE_NAME, __scopeCombobox);
  const { onValueNodeHasChildrenChange } = context;
  const hasChildren = children !== undefined;
  const composedRefs = assignRefs(ref, context.onValueNodeChange);

  useLayoutEffect(() => {
    onValueNodeHasChildrenChange(hasChildren);
  }, [onValueNodeHasChildrenChange, hasChildren]);

  return (
    <StyledComboboxValue {...props} ref={composedRefs}>
      {shouldShowPlaceholder(context.value) ? <>{placeholder}</> : children}
    </StyledComboboxValue>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

type ComboboxIconProps = LucideProps;

const ComboboxIcon = forwardRef<LucideIcon, ComboboxIconProps>(
  ({ ...props }, ref) => {
    return <StyledComboboxChevron size={18} {...props} ref={ref} />;
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const CONTENT_NAME = "ComboboxContent";
type ComboboxContentContextValue = {
  searchValue: string;
  onSearchValue: (value: string) => void;
};
const [ComboboxContentContextProvider, useComboboxContentContext] =
  createComboboxContext<ComboboxContentContextValue>(CONTENT_NAME);

export type ComboboxContentProps = PopoverContentProps & {
  condensed?: RempiVariant<boolean>;
};

export const ComboboxContent = forwardRef<
  typeof StyledComboboxContent,
  ScopedProps<ComboboxContentProps>
>(({ condensed = true, __scopeCombobox, children, ...props }, ref) => {
  const context = useComboboxContext(CONTENT_NAME, __scopeCombobox);
  const [fragment, setFragment] = useState<DocumentFragment>();
  const [searchValue, setSearchValue] = useState("");

  useLayoutEffect(() => {
    setFragment(new DocumentFragment());
  }, []);

  if (!context.open) {
    const frag = fragment as Element | undefined;
    return frag
      ? createPortal(
          <ComboboxContentContextProvider
            scope={__scopeCombobox}
            searchValue={searchValue}
            onSearchValue={setSearchValue}
          >
            <Collection.Slot scope={__scopeCombobox}>
              <div>{children}</div>
            </Collection.Slot>
          </ComboboxContentContextProvider>,
          frag
        )
      : null;
  }

  return (
    <ComboboxContentContextProvider
      scope={__scopeCombobox}
      searchValue={searchValue}
      onSearchValue={setSearchValue}
    >
      <Collection.Slot scope={__scopeCombobox}>
        <StyledComboboxContent
          {...props}
          ref={ref}
          role="listbox"
          $condensed={condensed}
        >
          {children}
        </StyledComboboxContent>
      </Collection.Slot>
    </ComboboxContentContextProvider>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const ITEM_NAME = "ComboboxItem";
type ComboboxItemContextValue = {
  value: string;
  disabled: boolean;
  isSelected: boolean;
  onItemTextChange(node: HTMLSpanElement | null): void;
};
type ComboboxItemElement = ElementRef<typeof StyledComboboxItem>;

const [ComboboxItemContextProvider, useComboboxItemContext] =
  createComboboxContext<ComboboxItemContextValue>(ITEM_NAME);

export type ComboboxItemProps = Omit<
  HTMLRempiProps<typeof StyledComboboxItem>,
  "as"
> & {
  value: string;
  disabled?: boolean;
};

export const ComboboxItem = forwardRef<
  typeof StyledComboboxItem,
  ScopedProps<ComboboxItemProps>
>(({ __scopeCombobox, children, value, disabled = false, ...props }, ref) => {
  const context = useComboboxContext(ITEM_NAME, __scopeCombobox);
  const [isFocused, setIsFocused] = useState(false);
  const [textValue, setTextValue] = useState("");
  const contentContext = useComboboxContentContext(
    ITEM_TEXT_NAME,
    __scopeCombobox
  );
  const isSelected = context.value === value;
  const onItemTextChange = useCallback((node: HTMLSpanElement | null) => {
    setTextValue(
      (prevTextValue) => prevTextValue || (node?.textContent ?? "").trim()
    );
  }, []);
  const [fragment, setFragment] = useState<DocumentFragment>();

  useLayoutEffect(() => {
    setFragment(new DocumentFragment());
  }, []);

  const handleSelect = () => {
    if (!disabled) {
      context.onValueChange(value);
      contentContext.onSearchValue("");
    }
  };

  if (value === "") {
    throw new Error(
      "A <Combobox.Item /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the comboboxion and show the placeholder."
    );
  }

  if (
    contentContext.searchValue &&
    !filterSearch(contentContext.searchValue, textValue)
  ) {
    const frag = fragment as Element | undefined;
    return frag
      ? createPortal(
          <ComboboxItemContextProvider
            scope={__scopeCombobox}
            value={value}
            disabled={disabled}
            isSelected={isSelected}
            onItemTextChange={onItemTextChange}
          >
            <Collection.ItemSlot
              scope={__scopeCombobox}
              value={value}
              disabled={disabled}
              textValue={textValue}
            >
              <StyledComboboxItem
                {...props}
                ref={ref}
                role="option"
                onPointerUp={composeEventHandlers(
                  props.onPointerUp,
                  handleSelect
                )}
                data-highlighted={isFocused ? "" : undefined}
                aria-selected={isSelected && isFocused}
                data-state={isSelected ? "checked" : "unchecked"}
                aria-disabled={disabled || undefined}
                data-disabled={disabled ? "" : undefined}
                tabIndex={disabled ? undefined : -1}
                onFocus={composeEventHandlers(props.onFocus, () =>
                  setIsFocused(true)
                )}
                onBlur={composeEventHandlers(props.onBlur, () =>
                  setIsFocused(false)
                )}
              >
                <ComboboxItemIndicator />
                <ComboboxItemText>{children}</ComboboxItemText>
              </StyledComboboxItem>
            </Collection.ItemSlot>
          </ComboboxItemContextProvider>,
          frag
        )
      : null;
  }

  return (
    <ComboboxItemContextProvider
      scope={__scopeCombobox}
      value={value}
      disabled={disabled}
      isSelected={isSelected}
      onItemTextChange={onItemTextChange}
    >
      <Collection.ItemSlot
        scope={__scopeCombobox}
        value={value}
        disabled={disabled}
        textValue={textValue}
      >
        <StyledComboboxItem
          {...props}
          ref={ref}
          role="option"
          data-highlighted={isFocused ? "" : undefined}
          aria-selected={isSelected && isFocused}
          data-state={isSelected ? "checked" : "unchecked"}
          aria-disabled={disabled || undefined}
          data-disabled={disabled ? "" : undefined}
          tabIndex={disabled ? undefined : -1}
          onFocus={composeEventHandlers(props.onFocus, () =>
            setIsFocused(true)
          )}
          onBlur={composeEventHandlers(props.onBlur, () => setIsFocused(false))}
          onPointerUp={composeEventHandlers(props.onPointerUp, handleSelect)}
          onMouseEnter={composeEventHandlers(
            props.onMouseMove,
            () => !disabled && setIsFocused(true)
          )}
          onMouseLeave={composeEventHandlers(
            props.onMouseMove,
            () => !disabled && setIsFocused(false)
          )}
        >
          <ComboboxItemIndicator />
          <ComboboxItemText>{children}</ComboboxItemText>
        </StyledComboboxItem>
      </Collection.ItemSlot>
    </ComboboxItemContextProvider>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const ITEM_TEXT_NAME = "ComboboxItemText";
type ComboboxItemTextProps = Omit<HTMLRempiProps<"span">, "as">;

const ComboboxItemText = forwardRef<"span", ScopedProps<ComboboxItemTextProps>>(
  ({ __scopeCombobox, className, ...props }, ref) => {
    const context = useComboboxContext(ITEM_TEXT_NAME, __scopeCombobox);
    const itemContext = useComboboxItemContext(ITEM_TEXT_NAME, __scopeCombobox);
    const [, setItemTextNode] = useState<HTMLSpanElement | null>(null);

    const composedRefs = assignRefs(
      ref,
      (node) => setItemTextNode(node),
      itemContext.onItemTextChange
    );

    return (
      <>
        <span
          {...props}
          ref={composedRefs}
        />
        {itemContext.isSelected &&
        context.valueNode &&
        !context.valueNodeHasChildren
          ? createPortal(props.children, context.valueNode)
          : null}
      </>
    );
  }
);

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const ITEM_INDICATOR_NAME = "ComboboxItemIndicator";
type ComboboxItemIndicatorProps = Omit<
  HTMLRempiProps<typeof StyledComboboxIndicator>,
  "as"
>;

const ComboboxItemIndicator = forwardRef<
  typeof StyledComboboxIndicator,
  ScopedProps<ComboboxItemIndicatorProps>
>(({ __scopeCombobox, ...props }, ref) => {
  const itemContext = useComboboxItemContext(
    ITEM_INDICATOR_NAME,
    __scopeCombobox
  );

  return itemContext.isSelected ? (
    <StyledComboboxIndicator {...props} ref={ref}>
      <Check size={12} />
    </StyledComboboxIndicator>
  ) : null;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const SEPARATOR_NAME = "ComboboxSeparator";
export type ComboboxSeparatorProps = SeparatorProps;

export const ComboboxSeparator = forwardRef<
  typeof StyledComboboxSeparator,
  ScopedProps<ComboboxSeparatorProps>
>(({ __scopeCombobox, ...props }, ref) => {
  const contentContext = useComboboxContentContext(
    SEPARATOR_NAME,
    __scopeCombobox
  );

  return !contentContext.searchValue ? (
    <StyledComboboxSeparator {...props} ref={ref} />
  ) : null;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const INPUT_NAME = "ComboboxInput";
const SELECT_ITEM_KEY: string[] = ["Enter"];

export type ComboboxInputProps = InputProps;

export const ComboboxInput = forwardRef<
  typeof StyledComboboxSearchInput,
  ScopedProps<ComboboxInputProps>
>(({ __scopeCombobox, value, ...props }, ref) => {
  const contentContext = useComboboxContentContext(INPUT_NAME, __scopeCombobox);
  const context = useComboboxContext(INPUT_NAME, __scopeCombobox);
  const getItems = useCollection(__scopeCombobox);

  const onChange = composeEventHandlers(
    props.onChange,
    (event: ChangeEvent<HTMLInputElement>) => {
      contentContext.onSearchValue(event.target.value);
    }
  );

  const onKeyDown = composeEventHandlers(
    props.onKeyDown,
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (contentContext.searchValue && SELECT_ITEM_KEY.includes(event.key)) {
        const filteredItems = getItems().filter((item) =>
          filterSearch(contentContext.searchValue, item.textValue)
        );

        if (filteredItems.length && !filteredItems[0].disabled) {
          context.onValueChange(filteredItems[0].value);
          contentContext.onSearchValue("");
        }
      }
    }
  );

  return (
    <StyledComboboxSearchWrapper>
      <StyledComboboxSearchInput
        {...props}
        as={Input.Root}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value ?? contentContext.searchValue}
        ref={ref}
      />
      <StyledComboboxSearchIcon size={16} />
    </StyledComboboxSearchWrapper>
  );
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const EMPTY_NAME = "ComboboxEmpty";
export type ComboboxEmptyProps = HTMLRempiProps<typeof StyledComboboxEmpty>;

export const ComboboxEmpty = forwardRef<
  typeof StyledComboboxEmpty,
  ScopedProps<ComboboxEmptyProps>
>(({ __scopeCombobox, ...props }, ref) => {
  const getItems = useCollection(__scopeCombobox);
  const contentContext = useComboboxContentContext(EMPTY_NAME, __scopeCombobox);

  return contentContext.searchValue &&
    getItems().length &&
    !getItems().filter((item) =>
      filterSearch(contentContext.searchValue, item.textValue)
    ).length ? (
    <StyledComboboxEmpty {...props} ref={ref} />
  ) : null;
});

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x //

const LABEL_NAME = "ComboboxLabel";
export type ComboboxLabelProps = HTMLRempiProps<typeof StyledComboboxLabel>;

export const ComboboxLabel = forwardRef<
  typeof StyledComboboxLabel,
  ScopedProps<ComboboxLabelProps>
>(({ __scopeCombobox, ...props }, ref) => {
  const contentContext = useComboboxContentContext(LABEL_NAME, __scopeCombobox);

  return !contentContext.searchValue ? (
    <StyledComboboxLabel {...props} ref={ref} />
  ) : null;
});
