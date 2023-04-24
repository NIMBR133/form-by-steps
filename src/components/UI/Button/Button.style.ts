import styled from "styled-components";

const StyledButton = styled.button<{ $width?: number | string }>`
  width: ${(props) => {
    if (props.$width) {
      return typeof props.$width === "number"
        ? `${props.$width}px`
        : props.$width;
    }
    return "auto";
  }};

  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  height: 54px;

  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-size: 15px;
  line-height: 18px;

  &.primary {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.blue_700};
  }
  &.outline {
    color: ${(props) => props.theme.colors.gray_700};
    background: none;
    opacity: 0.35;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.blue_200};
    pointer-events: none;
  }
`;

export const Styles = {
  StyledButton,
};
