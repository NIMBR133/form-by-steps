import styled from "styled-components";

const LabelStyled = styled.label`
  display: block;
  font-weight: ${(props) => props.theme.fonts.weight.medium};
  font-size: ${(props) => props.theme.fonts.size.small};
  color: ${(props) => props.theme.colors.gray_700};
  line-height: 17px;
  opacity: 0.6;
`;

export const Styles = {
  LabelStyled,
};
