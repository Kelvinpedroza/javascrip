import './style.css';

export type cardProps ={
    name: string
    time : string
}

export function Card(props: cardProps){
    return(
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}