import styled from "styled-components";

import { mediaDevice } from "./../../styles/media";

const Wrapper = styled.div`
  background: #f2f5fa;
`;

const WrapperContent = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  max-width: 1448px;
  margin: 0 auto;
  min-height: 100vh;

  @media ${mediaDevice.xl} {
    grid-template-columns: 35% 1fr;
    max-width: 100%;
  }

  @media ${mediaDevice.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 230px 1fr;
    height: auto;
  }

  @media ${mediaDevice.md} {
    grid-template-rows: auto;
  }
`;

export const Styles = {
  Wrapper,
  WrapperContent,
};
