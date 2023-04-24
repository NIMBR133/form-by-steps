import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${mediaDevice.lg} {
    padding: 18px;
  }
`;

const Content = styled.div`
  width: 340px;

  @media ${mediaDevice.lg} {
    width: 100%;
  }
`;

const TopBlock = styled.div`
  @media ${mediaDevice.lg} {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-size: 19px;
  line-height: 23px;
  color: ${(props) => props.theme.colors.gray_700};
  margin-bottom: 20px;

  @media ${mediaDevice.md} {
    margin-bottom: 10px;
  }
`;

const Text = styled.span`
  font-weight: ${(props) => props.theme.fonts.weight.light};
  font-size: 17px;
  line-height: 22px;
  color: ${(props) => props.theme.colors.black};
  opacity: 0.5;

  @media ${mediaDevice.md} {
    font-size: ${(props) => props.theme.fonts.size.default};
  }
`;

export const Styles = {
  Wrapper,
  Content,
  TopBlock,
  Title,
  Text,
};
