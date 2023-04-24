import styled from "styled-components";

const Wrapper = styled.div``;

const Items = styled.ul`
  margin-top: 12px;
  display: flex;
  gap: 9px;
  height: 54px;
`;

const Item = styled.li<{ $width?: number | string }>`
  width: ${(props) => {
    if (props.$width) {
      return typeof props.$width === "number"
        ? `${props.$width}px`
        : props.$width;
    }
    return "auto";
  }};

  border: 1px solid ${(props) => props.theme.colors.gray_100};
  background-color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 0 18px 0 12px;
  font-size: 15px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.gray_200};

  cursor: pointer;
  transition: all 0.2s;

  &.error {
    border: 1px solid ${(props) => props.theme.colors.red};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray_200};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.gray_200};
  }

  &.active {
    border: 1px solid ${(props) => props.theme.colors.blue_400};
    color: ${(props) => props.theme.colors.blue_400};
    font-weight: ${(props) => props.theme.fonts.weight.medium};

    & > div {
      opacity: 1;
      svg {
        fill: ${(props) => props.theme.colors.blue_400};
      }
    }
  }
`;

const ItemIcon = styled.div``;

const ItemText = styled.div`
  margin-left: 10px;
  opacity: 0.7;
`;

export const Styles = {
  Wrapper,
  Items,
  Item,
  ItemIcon,
  ItemText,
};
