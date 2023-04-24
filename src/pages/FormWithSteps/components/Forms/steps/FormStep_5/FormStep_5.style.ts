import styled from "styled-components";

import { mediaDevice } from "@/styles/media";

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
  overflow-y: auto;
  max-height: 470px;
`;

const Row = styled.div`
  display: flex;

  & .zIndex1 {
    position: relative;
    z-index: 1;
  }

  & .zIndex0 {
    position: relative;
    left: -10px;
    z-index: 0;
    width: 100%;
  }

  @media ${mediaDevice.md} {
    flex-direction: column;

    & .zIndex1 {
      width: 100%;
    }

    & .zIndex0 {
      left: 0;
      label {
        display: none;
      }
      & > div {
        margin-top: -1px;

        & > div:first-child {
          border-radius: 7px;
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  }
`;

const ButtonAdd = styled.button`
  line-height: 18px;
  font-size: 15px;

  display: flex;
  gap: 8px;
  align-items: center;
  background: transparent;
  width: fit-content;

  color: ${(props) => props.theme.colors.blue_700};
`;

export const Styles = {
  Fields,
  Row,
  ButtonAdd,
};
