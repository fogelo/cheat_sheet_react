import styled, {keyframes} from 'styled-components';
import Title from './components/Title';
import React from 'react';
import Flex from './components/Flex';
import EntryField from './components/EntryField';
import Button from './components/Button';



const ConsoleWrapper = styled.div`
  min-height: 50vh;
  padding: 2rem;
  background: black;
  font-family: Consolas;
`

export const Console = () => {
    return (
        <ConsoleWrapper>
            <Flex justify={'center'} margin={'0'}>
                <Title color={'red'}>console</Title>
            </Flex>
            <Flex direction={'column'}>
                <EntryField/>
                <Button align={'flex-end'}>Enter</Button>
            </Flex>
        </ConsoleWrapper>
    )
}
