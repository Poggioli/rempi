import { css, styled } from "@rempi-ui/core";
import { DayPicker } from "react-day-picker";

export const Wrapper = styled.div``;

export const StyledDayPicker = styled(DayPicker)`
  ${`${Wrapper.toString()}-rempi-calendar`} {
    &__months {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spaces[8]};
      border-color: ${(props) => props.theme.colors.grey6};
      border-radius: ${(props) => props.theme.radii[2]};
      border-style: solid;
      border-width: ${(props) => props.theme.borderWidths[1]};
      padding: ${(props) => props.theme.spaces[2]};

      @media (min-width: 576px) {
        flex-direction: row;
      }
    }

    &__month {
    }

    &__caption {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: ${(props) => props.theme.spaces[1]};
      position: relative;

      &-label {
        color: ${(props) => props.theme.colors.grey12};
        font-size: ${(props) => props.theme.fontSizes[3]};
        font-weight: ${(props) => props.theme.fontWeights[3]};
        line-height: ${(props) => props.theme.lineHeights[2]};
        text-transform: capitalize;
      }

      &-dropdown {
        display: flex;
        width: 100%;
        gap: ${(props) => props.theme.spaces[6]};
        justify-content: space-between;

        .rdp-vhidden {
          visibility: hidden;
          display: none;
        }

        .rempi-select__trigger {
          min-width: inherit;
        }
      }
    }

    &__nav {
      display: flex;
      align-items: center;

      &-button {
        -webkit-font-smoothing: antialiased;
        align-items: center;
        appearance: none;
        background-color: transparent;
        border: none;
        border-color: ${(props) => props.theme.colors.grey7};
        border-style: solid;
        border-radius: ${(props) => props.theme.radii[2]};
        border-width: ${(props) => props.theme.borderWidths[1]};
        cursor: pointer;
        display: inline-flex;
        flex-direction: row;
        font-size: ${(props) => props.theme.fontSizes[3]};
        font-weight: ${(props) => props.theme.fontWeights[3]};
        height: ${(props) => props.theme.spaces[7]};
        justify-content: center;
        line-height: normal;
        outline: none;
        position: absolute;
        transition: background-color 200ms ease, color 200ms ease,
          border-color 200ms ease, opacity 200ms ease;
        user-select: none;
        vertical-align: middle;
        width: ${(props) => props.theme.spaces[7]};
        white-space: nowrap;

        &,
        * {
          color: ${(props) => props.theme.colors.grey11};
        }

        &:hover:enabled {
          background-color: ${(props) => props.theme.colors.grey4};
          border-color: ${(props) => props.theme.colors.grey8};
        }

        &:focus {
          background-color: ${(props) => props.theme.colors.grey5};
        }

        &:focus-visible,
        &:focus {
          outline-color: ${(props) => props.theme.colors.info9};
          outline-style: solid;
          outline-width: ${(props) => props.theme.borderWidths[1]};
        }

        &[disabled] {
          cursor: not-allowed;
          background-color: ${(props) => props.theme.colors.grey2};
          border-color: ${(props) => props.theme.colors.grey7};

          &,
          * {
            color: ${(props) => props.theme.colors.grey8};
          }
        }

        &--previous {
          left: ${(props) => props.theme.spaces[2]};
        }

        &--next {
          right: ${(props) => props.theme.spaces[2]};
        }
      }
    }

    &__table {
      border-collapse: collapse;
      margin-top: ${(props) => props.theme.spaces[4]};
      width: 100%;
    }

    &__head {
      &-row {
        display: flex;
      }

      &-cell {
        border-radius: ${(props) => props.theme.radii[1]};
        color: ${(props) => props.theme.colors.grey10};
        font-size: ${(props) => props.theme.fontSizes[3]};
        font-weight: ${(props) => props.theme.fontWeights[4]};
        line-height: ${(props) => props.theme.lineHeights[1]};
        width: ${(props) => props.theme.spaces[9]};
      }
    }

    &__row {
      margin-top: ${(props) => props.theme.spaces[2]};
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    &__cell {
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes[3]};
      padding: 0;
      position: relative;
      transition: background-color 200ms ease;

      &:focus-within {
        position: relative;
        z-index: 20;
      }

      &:has(${Wrapper.toString()}-rempi-calendar__day--range-start) {
        background-color: ${(props) => props.theme.colors.primary9};
        border-radius: ${(props) => props.theme.radii.pill} 0 0
          ${(props) => props.theme.radii.pill};
      }

      &:has(${Wrapper.toString()}-rempi-calendar__day--range-end) {
        background-color: ${(props) => props.theme.colors.primary9};
        border-radius: 0 ${(props) => props.theme.radii.pill}
          ${(props) => props.theme.radii.pill} 0;
      }

      &:has(${Wrapper.toString()}-rempi-calendar__day--range-start${Wrapper.toString()}-rempi-calendar__day--range-end) {
        background-color: ${(props) => props.theme.colors.primary9};
        border-radius: ${(props) => props.theme.radii.pill};
      }
    }

    &__day {
      align-items: center;
      border-radius: ${(props) => props.theme.radii.pill};
      color: ${(props) => props.theme.colors.grey12};
      cursor: pointer;
      display: inline-flex;
      font-weight: ${(props) => props.theme.fontWeights[3]};
      justify-content: center;
      height: ${(props) => props.theme.spaces[9]};
      padding: 0;
      width: ${(props) => props.theme.spaces[9]};
      transition: background-color 200ms ease, color 200ms ease,
        border-color 200ms ease, opacity 200ms ease;

      &:focus-visible,
      &:focus {
        outline-color: ${(props) => props.theme.colors.info9};
        outline-style: solid;
        outline-width: ${(props) => props.theme.borderWidths[1]};
      }

      &:hover:not([aria-selected]):not([disabled]) {
        background-color: ${(props) => props.theme.colors.primary4};
      }

      &--outside {
        color: ${(props) => props.theme.colors.grey9};
      }

      &--disabled {
        color: ${(props) => props.theme.colors.grey7};
        cursor: not-allowed;
      }

      &--selected {
        background-color: ${(props) => props.theme.colors.primary11};
        color: ${(props) => props.theme.colors.grey1};
      }

      &--today {
        background-color: ${(props) => props.theme.colors.primary4};
        border-color: ${(props) => props.theme.colors.primary7};
        border-style: solid;
        border-width: ${(props) => props.theme.borderWidths[1]};
        color: ${(props) => props.theme.colors.grey12};
      }

      &--range-middle {
        border-radius: 0;
        background-color: ${(props) => props.theme.colors.primary9};
        
        &${Wrapper.toString()}-rempi-calendar__day--disabled {
          color: ${(props) => props.theme.colors.grey11};
        }

        &${Wrapper.toString()}-rempi-calendar__day--today {
          border: none;
          color: ${(props) => props.theme.colors.grey1};
        }
      }

      &--day-hidden {
        visibility: hidden;
      }
    }
  }
`;
