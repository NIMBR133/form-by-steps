import { Select } from "antd";
import styled from "styled-components";

import { mediaDevice } from "@/styles/media";
const { Option } = Select;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 20px;

  @media ${mediaDevice.xl} {
    column-gap: 20px;
  }

  @media ${mediaDevice.md} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const WidthTwoCol = styled.div`
  grid-column: span 2;
`;

const WidthThreeCol = styled.div`
  grid-column: span 3;
`;

const OptionStyled = styled(Option)``;

const NameOrg = styled.div``;

const InnOrg = styled.div`
  font-weight: ${(props) => props.theme.fonts.weight.medium};
`;

const OptionWrap = styled.div``;

export const Styles = {
  Wrapper,
  WidthTwoCol,
  WidthThreeCol,
  OptionStyled,
  NameOrg,
  InnOrg,
  OptionWrap,
};
