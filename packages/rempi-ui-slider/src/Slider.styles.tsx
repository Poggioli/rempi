import * as Slider from "@radix-ui/react-slider";
import { styled } from "@rempi-ui/core";

export const StyledSliderRange = styled(Slider.Range)`
  background-color: ${({ theme }) => theme.colors.primary11};
  border-radius: ${({ theme }) => theme.radii.pill};
  position: absolute;

  &[data-orientation="horizontal"] {
    height: 100%;
  }

  &[data-orientation="vertical"] {
    width: 100%;
  }
`;

export const StyledSliderTrack = styled(Slider.Track)`
  background-color: ${({ theme }) => theme.colors.grey8};
  border-radius: ${({ theme }) => theme.radii.pill};
  flex-grow: 1;
  position: relative;

  &[data-orientation="horizontal"] {
    height: ${({ theme }) => theme.spaces[1]};
  }

  &[data-orientation="vertical"] {
    width: ${({ theme }) => theme.spaces[1]};
  }
`;

export const StyledSliderThumb = styled(Slider.Thumb)`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary11};
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  height: ${({ theme }) => theme.spaces[5]};
  transition: background-color 200ms ease, transform 200ms ease;
  width: ${({ theme }) => theme.spaces[5]};

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:focus-visible,
  &:focus {
    transform: scale(1.1);
    outline-color: ${({ theme }) => theme.colors.info9};
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borderWidths[1]};
  }
`;

export const StyledSliderRoot = styled(Slider.Root)`
  align-items: center;
  display: flex;
  position: relative;
  touch-action: none;
  user-select: none;

  &[data-orientation="vertical"] {
    flex-direction: column;
    width: ${({ theme }) => theme.spaces[1]};
    height: 100%;
  }

  &[data-orientation="horizontal"] {
    flex-direction: row;
    height: ${({ theme }) => theme.spaces[1]};
    width: 100%;
  }

  &[data-disabled] {
    cursor: not-allowed;

    ${StyledSliderRange.toString()} {
      background-color: ${({ theme }) => theme.colors.grey7};
    }

    ${StyledSliderTrack.toString()} {
      background-color: ${({ theme }) => theme.colors.grey4};
    }

    ${StyledSliderThumb.toString()} {
      background-color: ${({ theme }) => theme.colors.grey6};
      box-shadow: none;

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;
