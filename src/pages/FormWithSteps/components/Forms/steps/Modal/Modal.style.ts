import { Modal } from "antd";
import styled from "styled-components";

const ModalStyled = styled(Modal)`
  top: 40px;
  width: 600px !important;
`;

const Steps = styled.ul`
  margin-top: 20px;
`;

const Step = styled.li`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.blue_100};
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fonts.size.large};
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  margin-bottom: 10px;
`;

const Data = styled.ul`
  font-size: ${(props) => props.theme.fonts.size.default};
`;

const DataItem = styled.li`
  display: flex;
  gap: 4px;
`;

const DataTitle = styled.h3`
  font-weight: ${(props) => props.theme.fonts.weight.medium};
`;

const DataValue = styled.div``;

export const Styles = {
  ModalStyled,
  Steps,
  Step,
  Title,
  Data,
  DataItem,
  DataTitle,
  DataValue,
};
