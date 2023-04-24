import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;

  @media ${mediaDevice.xl} {
    column-gap: 20px;
  }

  @media ${mediaDevice.md} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const DateAndGender = styled.div`
  display: flex;
  gap: 30px;

  @media ${mediaDevice.xl} {
    gap: 10px;
  }
`;

const InputFullWidth = styled.div`
  grid-column: span 2;
`;

export const Styles = {
  Fields,
  DateAndGender,
  InputFullWidth,
};
