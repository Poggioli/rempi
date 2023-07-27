import {
  ComboboxContent,
  ComboboxContentProps,
  ComboboxEmpty,
  ComboboxEmptyProps,
  ComboboxInput,
  ComboboxInputProps,
  ComboboxItem,
  ComboboxItemProps,
  ComboboxLabel,
  ComboboxLabelProps,
  ComboboxRoot,
  ComboboxRootProps,
  ComboboxSeparator,
  ComboboxSeparatorProps,
  ComboboxTrigger,
  ComboboxTriggerProps,
  ComboboxValue,
  ComboboxValueProps,
} from "./Combobox";

export const Combobox = {
  Root: ComboboxRoot,
  Trigger: ComboboxTrigger,
  Value: ComboboxValue,
  Content: ComboboxContent,
  Item: ComboboxItem,
  Separator: ComboboxSeparator,
  Input: ComboboxInput,
  Empty: ComboboxEmpty,
  Label: ComboboxLabel,
};

export type {
  ComboboxRootProps,
  ComboboxTriggerProps,
  ComboboxValueProps,
  ComboboxContentProps,
  ComboboxItemProps,
  ComboboxSeparatorProps,
  ComboboxInputProps,
  ComboboxEmptyProps,
  ComboboxLabelProps,
};
