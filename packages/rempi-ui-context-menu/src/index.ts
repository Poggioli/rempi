import {
  ContextMenuCheckboxItem,
  ContextMenuCheckboxItemProps,
  ContextMenuContent,
  ContextMenuContentProps,
  ContextMenuGroup,
  ContextMenuGroupProps,
  ContextMenuItem,
  ContextMenuItemProps,
  ContextMenuLabel,
  ContextMenuLabelProps,
  ContextMenuRadioGroup,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItem,
  ContextMenuRadioItemProps,
  ContextMenuRoot,
  ContextMenuRootProps,
  ContextMenuSeparator,
  ContextMenuSeparatorProps,
  ContextMenuSubMenu,
  ContextMenuSubMenuContent,
  ContextMenuSubMenuContentProps,
  ContextMenuSubMenuProps,
  ContextMenuSubMenuTrigger,
  ContextMenuSubMenuTriggerProps,
  ContextMenuTrigger,
  ContextMenuTriggerProps,
} from "./ContextMenu";

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Item: ContextMenuItem,
  Group: ContextMenuGroup,
  Label: ContextMenuLabel,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Separator: ContextMenuSeparator,
  SubMenu: ContextMenuSubMenu,
  SubMenuTrigger: ContextMenuSubMenuTrigger,
  SubMenuContent: ContextMenuSubMenuContent,
};

export type {
  ContextMenuRootProps,
  ContextMenuTriggerProps,
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuGroupProps,
  ContextMenuLabelProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSeparatorProps,
  ContextMenuSubMenuProps,
  ContextMenuSubMenuTriggerProps,
  ContextMenuSubMenuContentProps,
};