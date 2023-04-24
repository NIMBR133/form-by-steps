import { Select } from "antd";
import styled from "styled-components";
const { Option } = Select;
import { Checkbox as CheckboxUI } from "@/components/UI/Checkbox";
import { mediaDevice } from "@/styles/media";

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media ${mediaDevice.xl} {
    column-gap: 20px;
  }

  @media ${mediaDevice.md} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const Group = styled.div`
  display: flex;
  gap: 16px;

  @media ${mediaDevice.xl} {
    gap: 10px;
  }

  @media ${mediaDevice.md} {
    gap: 20px;
  }
`;

const OptionStyled = styled(Option)``;

const Checkbox = styled(CheckboxUI)`
  margin-top: 40px;
`;

export const Styles = {
  Fields,
  Group,
  Checkbox,
  OptionStyled,
};
