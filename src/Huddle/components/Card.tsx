import {FC} from 'react';
import {CardType} from '../store/content';

export const Card: FC<CardType> = (props) => {
    return (
        <div>
            <div>
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
            <div>
                <img src={`assets/images/${props.image}`} alt={''}/>
            </div>
        </div>
    )
}