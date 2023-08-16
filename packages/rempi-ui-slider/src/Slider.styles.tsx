import * as Slider from "@radix-ui/react-slider";
import { styled } from "@rempi-ui/core";

export const StyledSliderRange = styled(Slider.Range)`
  background-color: ${(props) => props.theme.colors.primary11};
  border-radius: ${(props) => props.theme.radii.pill};
  position: absolute;

  &[data-orientation="horizontal"] {
    height: 100%;
  }

  &[data-orientation="vertical"] {
    width: 100%;
  }
`;

export const StyledSliderTrack = styled(Slider.Track)`
  background-color: ${(props) => props.theme.colors.grey8};
  border-radius: ${(props) => props.theme.radii.pill};
  flex-grow: 1;
  position: relative;

  &[data-orientation="horizontal"] {
    height: ${(props) => props.theme.spaces[1]};
  }

  &[data-orientation="vertical"] {
    width: ${(props) => props.theme.spaces[1]};
  }
`;

export const StyledSliderThumb = styled(Slider.Thumb)`
  display: block;
  background-color: ${(props) => props.theme.colors.primary11};
  border-radius: ${(props) => props.theme.radii.pill};
  box-shadow: ${(props) => props.theme.shadows[1]};
  height: ${(props) => props.theme.spaces[5]};
  transition: background-color 200ms ease, transform 200ms ease;
  width: ${(props) => props.theme.spaces[5]};

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  &:focus-visible,
  &:focus {
    transform: scale(1.1);
    outline-color: ${(props) => props.theme.colors.info9};
    outline-style: solid;
    outline-width: ${(props) => props.theme.borderWidths[1]};
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
    width: ${(props) => props.theme.spaces[1]};
    height: 100%;
  }

  &[data-orientation="horizontal"] {
    flex-direction: row;
    height: ${(props) => props.theme.spaces[1]};
    width: 100%;
  }

  &[data-disabled] {
    cursor: not-allowed;

    ${StyledSliderRange.toString()} {
      background-color: ${(props) => props.theme.colors.grey7};
    }

    ${StyledSliderTrack.toString()} {
      background-color: ${(props) => props.theme.colors.grey4};
    }

    ${StyledSliderThumb.toString()} {
      background-color: ${(props) => props.theme.colors.grey6};
      box-shadow: none;

      &:hover {
        cursor: not-allowed;
      }
    }
  }
`;
