import {Container} from './components/styles/Container.styled';
import {Header} from './components/Header';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/styles/Global';
import 'styled-components';
import content from './store/content';
import {Card} from './components/Card';
import {Footer} from './components/Footer';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            header: string;
            body: string;
            footer: string
        }
        mobile: string
    }
}

const theme: DefaultTheme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333'
    },
    mobile: '768px'
}


export const Huddle = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Header/>
                <Container>
                    {content.map((item, index) => <Card {...item} key={item.id}/>)}
                </Container>
                <Footer/>
            </>
        </ThemeProvider>
    )
}