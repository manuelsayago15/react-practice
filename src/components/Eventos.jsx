import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [text, setText] = useState('Texto desde estado!');

    const eventoClick = () => {
        console.log('click')
        setText('Nuevo texto desde set');
    }
    return (
        <Fragment>
            <hr/>
            <h2>{ text }</h2>
            <button onClick={ () => eventoClick() }>Click</button>
        </Fragment>
    )
}

export default Eventos
