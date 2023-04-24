import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media ${mediaDevice.lg} {
    margin-top: 10px;
    box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.1);
  }
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  max-height: 804px;
  padding-left: 100px;
  padding-right: 132px;
  display: flex;
  flex-direction: column;

  @media ${mediaDevice.xl} {
    padding-left: 20px;
    padding-right: 30px;
  }

  @media ${mediaDevice.lg} {
    padding-right: 20px;
    padding-bottom: 50px;
  }

  @media ${mediaDevice.md} {
    padding-right: 16px;
    padding-bottom: 16px;
    max-height: 100%;
  }
`;

const Header = styled.header`
  margin-bottom: 64px;

  @media ${mediaDevice.lg} {
    margin-bottom: 30px;
    text-align: center;
  }
`;

const TextHeader = styled.div`
  margin-top: 40px;

  @media ${mediaDevice.lg} {
    margin-top: 20px;
  }

  @media ${mediaDevice.md} {
    margin-top: 10px;
  }
`;

const Icon = styled.div``;

const Title = styled.h1`
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-size: ${(props) => props.theme.fonts.size.medium};
  line-height: 22px;
  color: ${(props) => props.theme.colors.gray_700};
`;

const Text = styled.div`
  margin-top: 20px;
  font-weight: ${(props) => props.theme.fonts.weight.light};
  font-size: ${(props) => props.theme.fonts.size.default};
  color: ${(props) => props.theme.colors.black};
  line-height: 19px;
  opacity: 0.5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${mediaDevice.md} {
    margin-top: 10px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const ButtonsBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${mediaDevice.lg} {
    margin-top: 40px;
  }

  @media ${mediaDevice.lg} {
    margin-top: 20px;
  }
`;

export const Styles = {
  Wrapper,
  Content,
  Header,
  TextHeader,
  Icon,
  Title,
  Text,
  Form,
  ButtonsBottom,
};
