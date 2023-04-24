import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

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

export const Styles = {
  Wrapper,
  WidthTwoCol,
};
