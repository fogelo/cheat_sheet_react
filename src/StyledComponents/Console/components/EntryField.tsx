import React, {FC} from 'react';
import styled from 'styled-components';

const StyledEntryField = styled.textarea<EntryFieldPT>`
  width: 100%;
  height: 70vh;
  background-color: black;
  font-size: 24px;
  border: none;
  color: ${props => props.color || 'white'};
  resize: none;
  &:focus {
    outline: none;
  }
`

type EntryFieldPT = {
    color?: string
}

const EntryField:FC<EntryFieldPT> = (props) => {

    return <StyledEntryField {...props}/>
};

export default EntryField;