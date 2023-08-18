import { css, styled } from "@rempi-ui/core";
import { DayPicker } from "react-day-picker";

export const Wrapper = styled.div``;

export const StyledDayPicker = styled(DayPicker)`
  ${Wrapper.toString()} {
    &__months {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spaces[8]};
      border-color: ${({ theme }) => theme.colors.grey6};
      border-radius: ${({ theme }) => theme.radii[2]};
      border-style: solid;
      border-width: ${({ theme }) => theme.borderWidths[1]};
      padding: ${({ theme }) => theme.spaces[2]};

      ${({ theme }) => theme.breakpoints[1]} {
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
      padding-top: ${({ theme }) => theme.spaces[1]};
      position: relative;

      &-label {
        color: ${({ theme }) => theme.colors.grey12};
        font-size: ${({ theme }) => theme.fontSizes[3]};
        font-weight: ${({ theme }) => theme.fontWeights[3]};
        line-height: ${({ theme }) => theme.lineHeights[2]};
        text-transform: capitalize;
      }

      &-dropdown {
        display: flex;
        width: 100%;
        gap: ${({ theme }) => theme.spaces[6]};
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
        border-color: ${({ theme }) => theme.colors.grey7};
        border-style: solid;
        border-radius: ${({ theme }) => theme.radii[2]};
        border-width: ${({ theme }) => theme.borderWidths[1]};
        cursor: pointer;
        display: inline-flex;
        flex-direction: row;
        font-size: ${({ theme }) => theme.fontSizes[3]};
        font-weight: ${({ theme }) => theme.fontWeights[3]};
        height: ${({ theme }) => theme.spaces[7]};
        justify-content: center;
        line-height: normal;
        outline: none;
        position: absolute;
        transition: background-color 200ms ease, color 200ms ease,
          border-color 200ms ease, opacity 200ms ease;
        user-select: none;
        vertical-align: middle;
        width: ${({ theme }) => theme.spaces[7]};
        white-space: nowrap;

        &,
        * {
          color: ${({ theme }) => theme.colors.grey11};
        }

        &:hover:enabled {
          background-color: ${({ theme }) => theme.colors.grey4};
          border-color: ${({ theme }) => theme.colors.grey8};
        }

        &:focus {
          background-color: ${({ theme }) => theme.colors.grey5};
        }

        &:focus-visible,
        &:focus {
          outline-color: ${({ theme }) => theme.colors.info9};
          outline-style: solid;
          outline-width: ${({ theme }) => theme.borderWidths[1]};
        }

        &[disabled] {
          cursor: not-allowed;
          background-color: ${({ theme }) => theme.colors.grey2};
          border-color: ${({ theme }) => theme.colors.grey7};

          &,
          * {
            color: ${({ theme }) => theme.colors.grey8};
          }
        }

        &--previous {
          left: ${({ theme }) => theme.spaces[2]};
        }

        &--next {
          right: ${({ theme }) => theme.spaces[2]};
        }
      }
    }

    &__table {
      border-collapse: collapse;
      margin-top: ${({ theme }) => theme.spaces[4]};
      width: 100%;
    }

    &__head {
      &-row {
        display: flex;
      }

      &-cell {
        border-radius: ${({ theme }) => theme.radii[1]};
        color: ${({ theme }) => theme.colors.grey10};
        font-size: ${({ theme }) => theme.fontSizes[3]};
        font-weight: ${({ theme }) => theme.fontWeights[4]};
        line-height: ${({ theme }) => theme.lineHeights[1]};
        width: ${({ theme }) => theme.spaces[9]};
      }
    }

    &__row {
      margin-top: ${({ theme }) => theme.spaces[2]};
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    &__cell {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSizes[3]};
      padding: 0;
      position: relative;
      transition: background-color 200ms ease;

      &:focus-within {
        position: relative;
        z-index: 20;
      }

      &:has(${Wrapper.toString()}__day--range-start) {
        background-color: ${({ theme }) => theme.colors.primary9};
        border-radius: ${({ theme }) => theme.radii.pill} 0 0
          ${({ theme }) => theme.radii.pill};
      }

      &:has(${Wrapper.toString()}__day--range-end) {
        background-color: ${({ theme }) => theme.colors.primary9};
        border-radius: 0 ${({ theme }) => theme.radii.pill}
          ${({ theme }) => theme.radii.pill} 0;
      }

      &:has(
          ${Wrapper.toString()}__day--range-start${Wrapper.toString()}__day--range-end
        ) {
        background-color: ${({ theme }) => theme.colors.primary9};
        border-radius: ${({ theme }) => theme.radii.pill};
      }
    }

    &__day {
      align-items: center;
      border-radius: ${({ theme }) => theme.radii.pill};
      color: ${({ theme }) => theme.colors.grey12};
      cursor: pointer;
      display: inline-flex;
      font-weight: ${({ theme }) => theme.fontWeights[3]};
      justify-content: center;
      height: ${({ theme }) => theme.spaces[9]};
      padding: 0;
      width: ${({ theme }) => theme.spaces[9]};
      transition: background-color 200ms ease, color 200ms ease,
        border-color 200ms ease, opacity 200ms ease;

      &:focus-visible,
      &:focus {
        outline-color: ${({ theme }) => theme.colors.info9};
        outline-style: solid;
        outline-width: ${({ theme }) => theme.borderWidths[1]};
      }

      &:hover:not([aria-selected]):not([disabled]) {
        background-color: ${({ theme }) => theme.colors.primary4};
      }

      &--outside {
        color: ${({ theme }) => theme.colors.grey9};
      }

      &--disabled {
        color: ${({ theme }) => theme.colors.grey7};
        cursor: not-allowed;
      }

      &--selected {
        background-color: ${({ theme }) => theme.colors.primary11};
        color: ${({ theme }) => theme.colors.grey1};
      }

      &--today {
        background-color: ${({ theme }) => theme.colors.primary4};
        border-color: ${({ theme }) => theme.colors.primary7};
        border-style: solid;
        border-width: ${({ theme }) => theme.borderWidths[1]};
        color: ${({ theme }) => theme.colors.grey12};
      }

      &--range-middle {
        border-radius: 0;
        background-color: ${({ theme }) => theme.colors.primary9};

        &${Wrapper.toString()}__day--disabled {
          color: ${({ theme }) => theme.colors.grey11};
        }

        &${Wrapper.toString()}__day--today {
          border: none;
          color: ${({ theme }) => theme.colors.grey1};
        }
      }

      &--day-hidden {
        visibility: hidden;
      }
    }
  }
`;
