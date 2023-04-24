import { FC } from "react";

import { NavSteps } from "../NavSteps";
import { Styles } from "./NavStepsBlock.style";

const { Wrapper, Content, TopBlock, Title, Text } = Styles;

export const NavStepsBlock: FC = () => {
  return (
    <Wrapper>
      <Content>
        <TopBlock>
          <Title>Создание аккаунта</Title>
          <Text>
            Заполните все пункты данной формы и нажмите кнопку «Сохранить».
          </Text>
        </TopBlock>

        <NavSteps />
      </Content>
    </Wrapper>
  );
};
