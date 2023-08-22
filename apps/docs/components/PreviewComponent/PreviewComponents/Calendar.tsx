import { Calendar } from "@rempi-ui/calendar";
import { Flex } from "@rempi-ui/flex";
import { FC } from "react";

export const CalendarPreview: FC = () => {
  return (
    <Flex justifyContent="center">
      <Calendar />
    </Flex>
  );
};
