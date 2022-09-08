import React from "react";
import styled from "styled-components";
import {theme} from "../colors";


const Button = () => {
    return (
        <StyledButton>
            <button>hello</button>
        </StyledButton>
    );
};


const StyledButton = styled.div`
    background-color: ${theme.secondaryColor};
  background-color: var(--color-primary);
  background-color: red;
  background-color: var(--);
`

export default Button;