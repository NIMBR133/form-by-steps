import styled from "styled-components";

import { mediaDevice } from "./../../styles/media";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 500px 1fr;
  max-width: 1448px;
  margin: 0 auto;
  height: 100%;

  @media ${mediaDevice.xl} {
    grid-template-columns: 35% 1fr;
    max-width: 100%;
  }

  @media ${mediaDevice.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 230px 1fr;
  }

  @media ${mediaDevice.md} {
    grid-template-rows: 1fr 1fr;
  }
`;

export const Styles = {
  Wrapper,
};
