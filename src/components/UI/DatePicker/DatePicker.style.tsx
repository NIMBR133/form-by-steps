import { Select } from "antd";
import styled from "styled-components";

const DatePickerWrapper = styled.div<{ $width?: number | string }>`
  width: ${(props) => {
    if (props.$width) {
      return typeof props.$width === "number"
        ? `${props.$width}px`
        : props.$width;
    }
    return "100%";
  }};

  min-width: 110px;

  & > div:nth-child(2) {
    margin-top: 12px;
    border-radius: 7px;
    height: 54px;
    width: 100%;

    border: 1px solid ${(props) => props.theme.colors.gray_100};

    &.error {
      border: 1px solid ${(props) => props.theme.colors.red};
    }

    &.ant-picker-disabled {
      background-color: ${(props) => props.theme.colors.gray_100};

      & input {
        color: ${(props) => props.theme.colors.gray_200};
      }
    }

    & .ant-picker-input {
      font-size: 15px;
      line-height: 18px;
      color: ${(props) => props.theme.colors.gray_700};

      & input {
        ::placeholder,
        ::-webkit-input-placeholder {
          color: ${(props) => props.theme.colors.gray_200};
        }
      }
    }

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.gray_200};
    }

    &:focus-within {
      border: 1px solid ${(props) => props.theme.colors.blue_400};
    }
  }
`;

const SelectStyled = styled(Select)`
  width: 100%;
  margin-top: 12px;
  border-radius: 7px;
  height: 54px;

  border: 1px solid ${(props) => props.theme.colors.gray_100};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray_200};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.blue_400};
  }

  &.ant-select > .ant-select-selector {
    border: none;
    height: 54px;
    padding: 17px 20px;

    & > .ant-select-selection-item {
      font-size: 15px;
      line-height: 18px;
    }

    & > .ant-select-selection-placeholder {
      font-size: 15px;
      line-height: 18px;
      color: ${(props) => props.theme.colors.gray_200};
    }

    & > .ant-select-selection-search {
      height: 100%;
      padding: 17px 20px;
      inset-inline-start: 0;
      inset-inline-end: 0;
      & > input {
        height: auto;
      }
    }
  }
`;

export const Styles = {
  DatePickerWrapper,
  SelectStyled,
};
