import React, {FC} from 'react';
import styled from 'styled-components';

type FlexType = {
    direction?: string
    align?: string
    justify?: string
    margin?: string
    children?: React.ReactNode
}

const StyledFlex = styled.div<FlexType>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
`

const Flex: FC<FlexType> = (props) => {
    return <StyledFlex {...props}/>
};

export default Flex;