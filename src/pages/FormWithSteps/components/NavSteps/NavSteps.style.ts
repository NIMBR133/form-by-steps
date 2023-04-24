import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

const Wrapper = styled.div`
  margin-top: 63px;

  @media ${mediaDevice.lg} {
    margin-top: 24px;
  }

  @media ${mediaDevice.md} {
    margin-top: 12px;
  }
`;

const Steps = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media ${mediaDevice.lg} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-around;
  }

  @media ${mediaDevice.md} {
    gap: 8px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Step = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StepNumber = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;

  background-color: ${(props) => props.theme.colors.blue_100};
  color: ${(props) => props.theme.colors.gray_700};
  font-weight: ${(props) => props.theme.fonts.weight.default};

  &.completed {
    background-color: ${(props) => props.theme.colors.blue_200};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.fonts.weight.medium};
  }

  &.active {
    background-color: ${(props) => props.theme.colors.blue_700};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.fonts.weight.medium};
  }

  @media ${mediaDevice.md} {
    width: 30px;
    height: 30px;
    font-size: ${(props) => props.theme.fonts.size.small};
  }
`;

const StepText = styled.span`
  font-size: ${(props) => props.theme.fonts.size.default};
  line-height: 19px;

  font-weight: ${(props) => props.theme.fonts.weight.default};
  color: ${(props) => props.theme.colors.gray_700};
  opacity: 0.6;
  transition: all 0.4s;

  &.active {
    font-weight: ${(props) => props.theme.fonts.weight.medium};
    color: ${(props) => props.theme.colors.gray_600};
    opacity: 1;
  }

  &.completed {
    font-weight: ${(props) => props.theme.fonts.weight.medium};
    color: ${(props) => props.theme.colors.gray_200};
    opacity: 1;
  }
`;

export const Styles = {
  Wrapper,
  Steps,
  Step,
  StepNumber,
  StepText,
};
