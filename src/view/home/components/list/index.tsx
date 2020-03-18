import React, { SFC, MouseEvent} from 'react';

interface IPros {
    onClick (event: MouseEvent<HTMLDivElement>): void
}

const List: SFC<IPros> = ({onClick, children}) => {
    return (<div onClick={onClick}>
        {children}
    </div>)
}

export default List