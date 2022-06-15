import React from "react";
import DoubleRangeInput from "./DoubleRangeInput";
import styled from "styled-components";

const My = () => {
    return (
        <MyStyled>
            <DoubleRangeInput/>
        </MyStyled>
    );
};

const MyStyled = styled.div`
  height: 100vh;
  background-color: aliceblue;
`

export default My;