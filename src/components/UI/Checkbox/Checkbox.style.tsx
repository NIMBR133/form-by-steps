import { Checkbox } from "antd";
import styled from "styled-components";

const CheckboxStyled = styled(Checkbox)`
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.gray_200};
  opacity: 0.87;

  & .ant-checkbox {
    &:hover {
      & .ant-checkbox-inner {
        border: 1px solid ${(props) => props.theme.colors.gray_200};
        &:after {
          inset-inline-start: 25%;
        }
      }
    }

    &:focus-within {
      & .ant-checkbox-inner {
        border: 1px solid ${(props) => props.theme.colors.blue_400};
      }
    }

    &.ant-checkbox-checked:not(.ant-checkbox-disabled) {
      &:after {
        border: 1px solid ${(props) => props.theme.colors.blue_400};;
      }

      & .ant-checkbox-inner {
        background-color: ${(props) => props.theme.colors.blue_400}; !important;
        border: 1px solid ${(props) => props.theme.colors.blue_400}; !important;
      }
    }

    & .ant-checkbox-inner {
      width: 18px;
      height: 18px;
    }
  }
`;

export const Styles = {
  CheckboxStyled,
};
