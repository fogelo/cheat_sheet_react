import React from "react";
import styled from "styled-components";

const theme = {
    primaryColor: "red"
}

const Button = () => {
    return (
        <StyledButton>
            <button>hello</button>
        </StyledButton>
    );
};



const StyledButton = styled.div`
//background-color: ${theme.primaryColor};
background-color: var(--color-primary);
`

export default Button;