import React from 'react'

const Variable = () => {
    const saludos = 'Saludos desde mi constante'
    const image = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/god-of-war-4-5-ragnarok-ps5-esquire-3-1604398437.jpg?resize=480:*'
    return (
        <div>
            <h2>Nuevo componente { saludos }</h2>
            <img src={image} alt=""/>
        </div>
    )
}

export default Variable
