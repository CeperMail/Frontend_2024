import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  // PROPS VARIANT
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};

  // PROPS FULL
  ${({ full }) => full && css`
    display: block;
    width: 60%;
    margin: 0 auto;
  `}

  // PROPS SIZE
  ${({ size }) => size && css`
    font-size: ${props => props.theme.buttonSizes[size].fontSize};
    padding: ${props => props.theme.buttonSizes[size].padding};
  `}
`;

export default Button;
