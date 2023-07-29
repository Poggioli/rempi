import { forwardRef, PropsOf } from "@rempi-ui/core";
import { Select } from "@rempi-ui/select";
import classNamesMerge from "classnames";
import * as locales from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, Children, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "./Calendar.scss";

export type CalendarProps = PropsOf<typeof DayPicker>;

export const Calendar = forwardRef<typeof DayPicker, CalendarProps>(
  (
    {
      className,
      classNames,
      captionLayout = "buttons",
      showOutsideDays = true,
      fixedWeeks = true,
      locale: localeProps,
      ...props
    },
    ref
  ) => {
    const [locale, setLocale] = useState(localeProps ?? locales.enUS);

    useEffect(() => {
      if (window) {
        const languages = window.navigator.languages;
        const browserLocale = languages.length ? languages[0] : "en-US";
        const localeToSet =
          Object.values(locales).find((value) => {
            return value.code === browserLocale;
          }) ?? locales.enUS;
        setLocale(localeToSet);
      }
    }, [window]);

    return (
      <div ref={ref}>
        <DayPicker
          captionLayout={captionLayout}
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
            caption_dropdowns: "rempi-calendar__caption-dropdown",
            ...classNames,
          }}
          {...props}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft size={18} className="" />,
            IconRight: ({ ...props }) => (
              <ChevronRight size={18} className="" />
            ),
            Dropdown: ({
              value,
              onChange,
              children,
              caption,
              name,
              ...props
            }) => {
              console.log({ children });
              return (
                <Select.Root
                  name={name}
                  value={value as string}
                  onValueChange={(value) => {
                    onChange?.({
                      target: { value },
                    } as ChangeEvent<HTMLSelectElement>);
                  }}
                >
                  <Select.Trigger aria-label={props["aria-label"]}>
                    <Select.Value placeholder={props["aria-label"]}>
                      {caption}
                    </Select.Value>
                  </Select.Trigger>
                  <Select.Content>
                    <Select.Viewport>
                      {Children.map(children, (child) => {
                        // @ts-ignore
                        const { props } = child;
                        return (
                          <Select.Item value={`${props.value}`}>
                            {props.children}
                          </Select.Item>
                        );
                      })}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Root>
              );
            },
          }}
        />
      </div>
    );
  }
);
