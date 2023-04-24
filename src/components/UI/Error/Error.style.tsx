import styled from "styled-components";

const ErrorStyled = styled.div`
  font-weight: ${(props) => props.theme.fonts.weight.default};
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.red};
  opacity: 0.8;
  margin-top: 4px;
  margin-left: 4px;
`;

export const Styles = {
  ErrorStyled,
};
