import {FC} from 'react';
import {CardType} from '../store/content';
import {StyledCard} from './styles/Card.styled';

export const Card: FC<CardType> = (props) => {
    return (
        <StyledCard layout={props.id % 2 === 0 ? 'row-reverse' : 'row'}>
            <div>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
            <div>
                <img src={`assets/images/${props.image}`} alt={''}/>
            </div>
        </StyledCard>
    )
}