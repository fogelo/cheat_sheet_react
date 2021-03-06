import styled from 'styled-components';


type StyleCardPT = {
    layout?: string
}

export const StyledCard = styled.div<StyleCardPT>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({layout}) => layout || 'row'};


  & > div {
    flex: 1;
  }

  img {
    width: 80%;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`