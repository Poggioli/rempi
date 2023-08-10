import { forwardRef, PropsOf } from "@rempi-ui/core";
import { Select } from "@rempi-ui/select";
import * as locales from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, Children, useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { StyledDayPicker, Wrapper } from "./Calendar.styles";

export type CalendarProps = PropsOf<typeof DayPicker>;

export const Calendar = forwardRef<typeof DayPicker, CalendarProps>(
  (
    {
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
      if (typeof window !== "undefined") {
        const languages = window.navigator.languages;
        const browserLocale = languages.length ? languages[0] : "en-US";
        const localeToSet =
          Object.values(locales).find((value) => {
            return value.code === browserLocale;
          }) ?? locales.enUS;
        setLocale(localeToSet);
      }
    }, []);

    return (
      <Wrapper ref={ref}>
        <StyledDayPicker
          captionLayout={captionLayout}
          locale={locale}
          showOutsideDays={showOutsideDays}
          fixedWeeks={fixedWeeks}
          classNames={{
            months: `${Wrapper.styledComponentId}-rempi-calendar__months`,
            month: `${Wrapper.styledComponentId}-rempi-calendar__month`,
            caption: `${Wrapper.styledComponentId}-rempi-calendar__caption`,
            caption_label: `${Wrapper.styledComponentId}-rempi-calendar__caption-label`,
            nav: `${Wrapper.styledComponentId}-rempi-calendar__nav`,
            nav_button: `${Wrapper.styledComponentId}-rempi-calendar__nav-button`,
            nav_button_previous: `${Wrapper.styledComponentId}-rempi-calendar__nav-button--previous`,
            nav_button_next: `${Wrapper.styledComponentId}-rempi-calendar__nav-button--next`,
            table: `${Wrapper.styledComponentId}-rempi-calendar__table`,
            head_row: `${Wrapper.styledComponentId}-rempi-calendar__head-row`,
            head_cell: `${Wrapper.styledComponentId}-rempi-calendar__head-cell`,
            row: `${Wrapper.styledComponentId}-rempi-calendar__row`,
            cell: `${Wrapper.styledComponentId}-rempi-calendar__cell`,
            day: `${Wrapper.styledComponentId}-rempi-calendar__day`,
            day_selected: `${Wrapper.styledComponentId}-rempi-calendar__day--selected`,
            day_today: `${Wrapper.styledComponentId}-rempi-calendar__day--today`,
            day_outside: `${Wrapper.styledComponentId}-rempi-calendar__day--outside`,
            day_disabled: `${Wrapper.styledComponentId}-rempi-calendar__day--disabled`,
            day_range_start: `${Wrapper.styledComponentId}-rempi-calendar__day--range-start`,
            day_range_end: `${Wrapper.styledComponentId}-rempi-calendar__day--range-end`,
            day_range_middle: `${Wrapper.styledComponentId}-rempi-calendar__day--range-middle`,
            day_hidden: `${Wrapper.styledComponentId}-rempi-calendar__day--hidden`,
            caption_dropdowns: `${Wrapper.styledComponentId}-rempi-calendar__caption-dropdown`,
            ...classNames,
          }}
          {...props}
          components={{
            IconLeft: ({ ...props }) => <ChevronLeft size={18} className="" />,
            IconRight: ({ ...props }) => (
              <ChevronRight size={18} className="" />
            ),
            Dropdown: ({
              // @ts-ignore
              value,
              // @ts-ignore
              onChange,
              // @ts-ignore
              children,
              // @ts-ignore
              caption,
              // @ts-ignore
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
      </Wrapper>
    );
  }
);
