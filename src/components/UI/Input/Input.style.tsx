import styled from "styled-components";

import { ReactComponent as IconCross } from "@/assets/icons/cross.svg";

const InputWrapper = styled.div<{ $width?: number | string }>`
  width: ${(props) => {
    if (props.$width) {
      return typeof props.$width === "number"
        ? `${props.$width}px`
        : props.$width;
    }
    return "auto";
  }};
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-radius: 7px;

  margin-top: 12px;

  border: 1px solid ${(props) => props.theme.colors.gray_100};
  background-color: ${(props) => props.theme.colors.white};
  height: 54px;
`;

const Addon = styled.div`
  padding: 0 20px;
  background-color: ${(props) => props.theme.colors.blue_100};
  height: 100%;
  display: flex;
  align-items: center;

  &.start {
    border-right: 1px solid ${(props) => props.theme.colors.gray_100};
  }

  &.end {
    border-left: 1px solid ${(props) => props.theme.colors.gray_100};
  }
`;

const InputStyled = styled.input`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 7px;

  color: ${(props) => props.theme.colors.gray_700};

  padding: 16px 20px;
  font-size: 15px;
  line-height: 18px;
  transition: all 0.2s;

  &.clear {
    padding-right: 36px;
  }

  &.error {
    border: 1px solid ${(props) => props.theme.colors.red};
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.gray_200};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.blue_400};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray_100};
    color: ${(props) => props.theme.colors.gray_200};
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray_200};
  }
`;

const InputStyledNumber = styled(InputStyled)`
  margin-top: 12px;
  border: 1px solid ${(props) => props.theme.colors.gray_100};
  background-color: ${(props) => props.theme.colors.white};
  height: 54px;
`;
const InputRelative = styled.div`
  position: relative;
  width: 100%;
`;

const IconCrossStyled = styled(IconCross)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const InputFileStyled = styled.div`
  margin-top: 12px;

  &.error .ant-upload-wrapper .ant-upload-drag {
    border: 1px solid ${(props) => props.theme.colors.red};
  }

  & .ant-upload-wrapper .ant-upload-drag {
    height: 54px;
    padding: 0 20px;
    border-radius: 7px;
    border: 1px dashed ${(props) => props.theme.colors.gray_100};
    background-color: ${(props) => props.theme.colors.white};
    position: relative;

    & .ant-upload-drag-container {
      display: block;
      color: ${(props) => props.theme.colors.gray_200};
      font-size: 15px;
      line-height: 18px;
      text-align: left;
    }

    &:hover {
      border: 1px dashed ${(props) => props.theme.colors.gray_200};
    }

    &:focus-within {
      border: 1px dashed ${(props) => props.theme.colors.blue_400};
    }
  }
`;

const IconUploadStyled = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  padding: 18px;
  z-index: 100;
  border-radius: 0 7px 7px 0;
  background: ${(props) => props.theme.colors.blue_400};
`;

const FileUpload = styled.div`
  display: flex;
  align-items: center;
  height: 22px;

  & svg {
    fill: #16bb5b;
  }
`;

const FileName = styled.div`
  margin-left: 12px;
  margin-right: auto;
  font-size: 15px;
  line-height: 18px;

  color: ${(props) => props.theme.colors.blue_400};
`;

export const Styles = {
  InputStyled,
  InputFileStyled,
  InputWrapper,
  IconUploadStyled,
  FileUpload,
  FileName,
  Row,
  Addon,
  InputRelative,
  IconCrossStyled,
  InputStyledNumber,
};
