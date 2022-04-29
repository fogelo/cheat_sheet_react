import React, {FC} from 'react';
import styled, {keyframes} from 'styled-components';


const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }

`

const StyledButton = styled.button<ButtonPT>`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  align-self: ${props => props.align || 'stretch'};
  
  &:hover {
    animation: ${rotateAnimation} 1s none linear;
  }
  
`

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`

type ButtonPT = {
    children?: React.ReactNode
    align?: string
    }

const Button: FC<ButtonPT> = (props) => {
    return <LargeButton {...props}/>
};

export default Button;