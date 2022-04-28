import styled from 'styled-components';
import {Input} from './components/Input';
// import {Title} from './components/Title';

const StyleComponentWrapper = styled.div`
  background-color: aliceblue;
  height: 50vh;
`


export const StyledComponent = ({children}: any) => {
    return <StyleComponentWrapper>
            {/*<Title color={'red'}>*/}
            {/*    hello*/}
            {/*</Title>*/}
            <Input placeholder={'hello'}/>
    </StyleComponentWrapper>
}
