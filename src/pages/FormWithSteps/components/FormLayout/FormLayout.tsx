import { FC } from "react";

import { Button } from "@/components/UI/Button";

import { Styles } from "./FormLayout.style";

const {
  Wrapper,
  Content,
  Header,
  TextHeader,
  Icon,
  Title,
  Text,
  Form,
  ButtonsBottom,
} = Styles;

interface Props {
  icon: React.ReactNode;
  title: string;
  text: string;
  children: React.ReactNode;
  btnPrev: {
    label: React.ReactNode;
    onClick: () => void;
  };
  btnNext: {
    label: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;
  };
}

export const FormLayout: FC<Props> = ({
  icon,
  title,
  text,
  children,
  btnPrev,
  btnNext,
}) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Icon>{icon}</Icon>
          <TextHeader>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextHeader>
        </Header>
        <Form>
          {children}
          <ButtonsBottom>
            <Button onClick={btnPrev.onClick} view="outline">
              {btnPrev.label}
            </Button>
            <Button
              width={150}
              onClick={btnNext.onClick}
              disabled={btnNext.disabled}
            >
              {btnNext.label}
            </Button>
          </ButtonsBottom>
        </Form>
      </Content>
    </Wrapper>
  );
};
