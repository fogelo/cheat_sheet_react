import React from "react";
import DoubleRangeInput from "./DoubleRangeInput";
import styled from "styled-components";
import Button from "./Button";

const My = () => {
    return (
        <MyStyled>
            <DoubleRangeInput/>
            <Button/>
        </MyStyled>
    );
};

const MyStyled = styled.div`
  height: 100vh;
  background-color: aliceblue;
`

export default My;