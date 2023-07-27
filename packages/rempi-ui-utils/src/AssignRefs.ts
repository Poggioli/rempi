import { MutableRefObject, Ref } from "react";

export const assignRefs = <T extends unknown>(
  ...refs: Array<Ref<T | null>>
) => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
  };
};
