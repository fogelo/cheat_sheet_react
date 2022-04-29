import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${props => props.color};
`

type TitlePT = {
    children: React.ReactNode
    color: string
}

const Title = (props: TitlePT) => {
    return (
        <StyledTitle color={props.color}>
            {props.children}
        </StyledTitle>
    );
};

export default Title;