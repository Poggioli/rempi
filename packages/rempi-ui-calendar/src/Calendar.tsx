import { forwardRef, PropsOf } from "@rempi-ui/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import classNamesMerge from "classnames";
import * as locales from "date-fns/locale";
import "./Calendar.scss";

export type CalendarProps = PropsOf<typeof DayPicker>;

export const Calendar = forwardRef<typeof DayPicker, CalendarProps>(
  (
    {
      className,
      classNames,
      showOutsideDays = true,
      fixedWeeks = true,
      locale: localeProps,
      ...props
    },
    ref
  ) => {
    let locale = locales.enUS;

    if (!localeProps) {
      const languages = window.navigator.languages;
      const browserLocale = languages.length ? languages[0] : "en-US";
      locale =
        Object.values(locales).find((value) => {
          return value.code === browserLocale;
        }) ?? locales.enUS;
    }

    return (
      <div ref={ref}>
        <DayPicker
          locale={locale}
          showOutsideDays={showOutsideDays}
          fixedWeeks={fixedWeeks}
          className={classNamesMerge("rempi-calendar", className)}
          classNames={{
            months: "rempi-calendar__months",
            month: "rempi-calendar__month",
            caption: "rempi-calendar__caption",
            caption_label: "rempi-calendar__caption-label",
            nav: "rempi-calendar__nav",
            nav_button: "rempi-calendar__nav-button",
            nav_button_previous: "rempi-calendar__nav-button--previous",
            nav_button_next: "rempi-calendar__nav-button--next",
            table: "rempi-calendar__table",
            head_row: "rempi-calendar__head-row",
            head_cell: "rempi-calendar__head-cell",
            row: "rempi-calendar__row",
            cell: "rempi-calendar__cell",
            day: "rempi-calendar__day",
            day_selected: "rempi-calendar__day--selected",
            day_today: "rempi-calendar__day--today",
            day_outside: "rempi-calendar__day--outside",
            day_disabled: "rempi-calendar__day--disabled",
            day_range_start: "rempi-calendar__day--range-start",
            day_range_end: "rempi-calendar__day--range-end",
            day_range_middle: "rempi-calendar__day--range-middle",
            day_hidden: "rempi-calendar__day--hidden",
            ...classNames,
          }}
          {...props}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft size={18} className="" />,
            IconRight: ({ ...props }) => (
              <ChevronRight size={18} className="" />
            ),
          }}
        />
      </div>
    );
  }
);
