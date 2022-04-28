import styled from 'styled-components';

type InputPT = {
    inputColor?: string
    backgroundColor?: 'yellow' | 'aquamarine' | 'burlywood'
}


export const Input = styled.input<InputPT>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: ${props => props.backgroundColor || 'papayawhip'};
  border: none;
  border-radius: 3px;
`;


